//此函数经过兼容处理
function getStyle(element) {
    if (element.currentStyle) {
        return element.currentStyle;
    } else {
        //获取的是一个计算过的直接表示的对象
        return getComputedStyle(element, null)
    }
}
/**
 * 调用获取计算宽度
*/
let box = document.querySelector('#box')
var width = getStyle(box).width
console.log(width);

