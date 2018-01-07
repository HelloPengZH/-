/**
 * Created by Administrator on 2017/9/12.
 */

//轮播图
var bigPicPzh = document.getElementById("bigPicPzh")
//var ul = document.createElement("ul")
var bigPicUl = bigPicPzh.getElementsByTagName("ul")[0]
bigPicUl.className = 'clearfix'
//创建图片
var carouselContent = [
    //{"src": "images/bigPicPzh/1.jpg", "discription": "对本图片的描述性说明"},
    {"src": "images/bigPicPzh/2.jpg", "discription": "对本图片的描述性说明"},
    {"src": "images/bigPicPzh/3.jpg", "discription": "对本图片的描述性说明"},
    {"src": "images/bigPicPzh/4.jpg", "discription": "对本图片的描述性说明"},
    {"src": "images/bigPicPzh/5.jpg", "discription": "对本图片的描述性说明"},
]
//创建图片主体结构
function crearPicLis() {
    for (var i = 0; i < carouselContent.length; i++) {
        var li = document.createElement("li")
        //图片地址
        li.innerHTML = '<img src="'+carouselContent[i].src+'" alt="' + i + '"><div>' + carouselContent[i].discription + '</div>'

        li.index = i

        bigPicUl.appendChild(li)
    }
}
crearPicLis()
//小圆点
var bigPicOl = bigPicPzh.getElementsByTagName("ol")[0]
function creatButtonLis() {
    for (var i = 0; i < carouselContent.length; i++) {
        var li = document.createElement("li")
        li.innerHTML = i + 1
        li.index = i
        bigPicOl.appendChild(li)
    }
}
creatButtonLis()
//get按键
var bigPicArr = document.getElementById("bigPicArr")
bigPicPzh.onmouseover = function () {
    bigPicArr.style.display = "block"
    clearInterval(bigPicTimeId)
}
bigPicPzh.onmouseout = function () {
    bigPicArr.style.display = "none"
    bigPicTimeId = setInterval(arrRight.onclick, 4000)
}
var arrLeft = document.getElementById("arrLeft")
var arrRight = document.getElementById("arrRight")
//轮播图最后一个地址的克隆
var carouselFirstPic = bigPicUl.children[0].cloneNode(true)//创建最后一个轮播图
bigPicUl.appendChild(carouselFirstPic)
//创建轮播图切换
var ulLis = bigPicUl.children
//console.log(ulLis);
var olLis = bigPicOl.children
//console.log(olLis);
for (var i = 0; i < olLis.length; i++) {
    //对每一个图片创建对应的位置值记录
    for (var j = 0; j < ulLis.length; j++) {
        ulLis[j].indexPlace = -ulLis[j].offsetLeft;
    }
    olLis[i].onmouseover = function () {
        arrNum = this.index
        //缓动
        animate(bigPicUl, {"left": ulLis[this.index].indexPlace}, 1000 / 60);
        //添加属性变色
        $(olLis).removeClass("current")
        this.className = "current"
    }
}
//点击滚动
var arrNum = 0
arrRight.onclick = function () {
    //olLis.length最后一张的索引
    if (arrNum == olLis.length) {
        arrNum = 0;
        bigPicUl.style.left = ulLis[0].indexPlace + 'px'
    }
    arrNum++;
    animate(bigPicUl, {"left": ulLis[arrNum].indexPlace}, 1000 / 60);
    $(olLis).removeClass("current")
    if (arrNum == olLis.length) {
        olLis[0].className = "current"
    } else {
        olLis[arrNum].className = "current"
    }
    //console.log(arrNum);
}
arrLeft.onclick = function () {
    if (arrNum == 0) {
        arrNum = olLis.length;
        bigPicUl.style.left = ulLis[arrNum].indexPlace + 'px'
    }
    arrNum--;
    animate(bigPicUl, {"left": ulLis[arrNum].indexPlace}, 1000 / 60);
    $(olLis).removeClass("current")
    if (arrNum == olLis.length) {
        olLis[0].className = "current"
    } else {
        olLis[arrNum].className = "current"
    }

    console.log(arrNum);
}
//自动轮播
var bigPicTimeId = setInterval(arrRight.onclick, 4000)
