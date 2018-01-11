/**
 * Created by Administrator on 2017/8/31.
 */
/**
 * 最终解释版
 *  包括透明 背景色 和层级的 功能完整版
 * @param obj
 * @param josn
 * @param fn
 */
function animate(obj, josn,time,fn) {
    clearInterval(obj.timeId)
    obj.timeId = setInterval(function () {
        var flag = 1
        for (k in josn) {
            if (k === "opacity") {
                var leader = getStyle(obj, k) * 100
                var target = josn[k] * 100
                var step = ( target - leader) / 10
                step = step > 0 ? Math.ceil(step) : Math.floor(step)
                leader = leader + step
                obj.style[k] = leader / 100
            } else if (k === "zIndex") {
                obj.style[k] = josn[k]
            } else {
                var leader = parseInt(getStyle(obj, k)) || 0
                var  target= josn[k]
                var  px= "px"
                var kk=1
                if (typeof josn[k].replace=="function") {
                    kk=100
                    //适应百分比布局
                    leader = (parseFloat(getStyle(obj, k)) / obj.parentNode.offsetWidth * 100*kk)
                    target=+josn[k].replace(/([a-zA-Z\ \%]+)/g,"")*kk
                    px=josn[k].replace(/([\d\-]+)/g,"")
                }

                var step = ( target - leader) / 10

                //step = step > 0 ? Math.ceil(step) : Math.floor(step)

                step = step > 0 ? Math.ceil(step) : Math.floor(step)

                leader=leader + step

                leader = Math.abs(leader)>=Math.abs(target)?target : leader

                obj.style[k] = leader/kk + px
                console.log(leader);
            }
            if (leader !== target) {
                flag = 0
            }
        }
        if (flag) {
            clearInterval(obj.timeId)
            if (fn) {
                fn()
            }
        }
    }, time)
}
function getStyle(obj, attr) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(obj, null)[attr]
    } else {
        return obj.currentStyle[attr]
    }
}

function scroll() {
    return {
        top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
        left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
    }
}
//清除class
//function clearAttr(elements, attr) {
//    for (var i = 0; i < elements.length; i++) {
//        elements[i].removeAttribute(attr)
//    }
//}


/**
 * 封装 兼容所有浏览器的添加事件的函数
 * element要绑定事件的元素对象 eventName是字符串而且不加on listener事件处理函数
 */

function addEvent(element, eventName, listener) {
    if (element.addEventListener) {
        element.addEventListener(eventName, listener, false);
    } else if (element.attachEvent) {
        element.attachEvent("on" + eventName, listener);
    } else {
        //element.onclick = listener;
        //element["onclick"] = listener;
        element["on" + eventName] = listener;
    }
}
/**
 * 立即设置跳到指定属性
 * @param element
 * @param objs
 */
 function styleJumpTo(element, objs) {
        for (k in objs) {
            if (k) {
                element.style[k] = objs[k]
            }
        }
    }
/**
 * 随机颜色
 * @param color
 * @returns {string}
 */
function randomColor(color) {
    var aa = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"]//0-15
    function radom() {
        var random = Math.floor(Math.random() * 16)//0-15
        return random
    }
    var str = "#"+color
    for (var i = 0; i < 6-color.length; i++) {
        str = str + aa[radom()]
    }
    return str
};
var pzh = {
    "each": function (arr, fn) {
        if (arr.length) {
            for (var i = 0; i < arr.length; i++) {
                fn(i, arr[i])
            }
        } else if (typeof arr === "number") {
            for (var i = 0; i < arr; i++) {
                fn(i)
            }
        }
    },
    "tt"    : document.getElementsByTagName,
    "t"    : document.body.getElementsByTagName,
    "id"    : document.getElementById,
    "c"    : document.createElement,
    'q'     : document.querySelector,
    'qAll'  : document.querySelectorAll,
    //变量
    "name": "Mr.Peng"
}
window.onload= function () {
    var pzh = {
        "each": function (arr, fn) {
            if (arr.length) {
                for (var i = 0; i < arr.length; i++) {
                    fn(i, arr[i])
                }
            } else if (typeof arr === "number") {
                for (var i = 0; i < arr; i++) {
                    fn(i)
                }
            }
        },
        "td"    : document.getElementsByTagName,
        "te"    : document.body.getElementsByTagName,
        "id"    : document.getElementById,
        "ce"    : document.createElement,
        'q'     : document.querySelector,
        'qAll'  : document.querySelectorAll,
        //变量
        "name": "PengZhengHao"
    }
}