function getStyle(element) {
    if (element.currentStyle) {
        return element.currentStyle;
    } else {
        //获取的是一个计算过的直接表示的对象
        return getComputedStyle(element, null)
    }
}
//兼容处理过的获取直接样式大小的函数
var box = document.getElementById('box')