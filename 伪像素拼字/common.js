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
                var target = josn[k]
                var step = ( target - leader) / 10
                step = step > 0 ? Math.ceil(step) : Math.floor(step)
                leader = leader + step
                obj.style[k] = leader + 'px'
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