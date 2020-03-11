import Vue from 'vue'
import { MessageBox } from 'element-ui'
import router from '../router'

/**
 *  当前正在显示 messageBox 的标识
 **/
let showMessageBox = false

/**
 *  element-ui MessageBox组件 默认注入原型的方法
 **/
// Vue.prototype.$msgbox = MessageBox
// Vue.prototype.$alert = MessageBox.alert
// Vue.prototype.$confirm = MessageBox.confirm
// Vue.prototype.$prompt = MessageBox.prompt

/**
 *  重写方法，实现 app 逻辑
 **/
Vue.prototype.$msgbox = function (...args) {
  return commonFn(MessageBox, ...args)
}
Vue.prototype.$alert = function (...args) {
  return commonFn(MessageBox.alert, ...args)
}
Vue.prototype.$confirm = function (...args) {
  return commonFn(MessageBox.confirm, ...args)
}
Vue.prototype.$prompt = function (...args) {
  return commonFn(MessageBox.prompt, ...args)
}

/**
 *  路由切换前，若当前正在显示模态框
 *  则关闭模态框，阻止路由跳转
 *  注意：
 *    1. 此场景不会触发 element MessageBox 的事件(beforeClose, callback)
 *    2. vue-navigation 目前有 bug
 *       会导致此方法执行两次
 *       但是不影响本例 app 逻辑执行
 **/
router.beforeEach(function (to, from, next) {
  if (showMessageBox) {
    MessageBox.close()
    showMessageBox = false
    next(false)
  }
  else {
    next()
  }
})

/**
 *  抽取弹框公共代码
 *  @param { Function } fn - Message 方法
 *  @param { ...Any } any - 任何其他参数
 **/
function commonFn (fn, ...args) {
  showMessageBox = true
  
  /**
   *  适配 MessageBox 函数式调用的多种参数写法
   **/
  
  /**
   *  对象式参数
   **/
  if (typeof args[ 0 ] === 'object') {
    let options = args[ 0 ] || {}
    return fn({ ...options, beforeClose: beforeClose(options) })
  }
  
  /**
   *  字符串 + 对象参数
   **/
  else {
    let len = args.length
    /**
     *  参数最后一个值是选项对象
     *  这里将 args 刨除最后一个元素
     *  并将刨除的值记录为 options
     **/
    let options = args.splice(len - 1, 1)[ 0 ]
    return fn(...args, { beforeClose: beforeClose(options) })
  }
}

/**
 *  封装的 beforeClose 函数
 *  将会封装调用 MessageBox 时自定义的 beforeClose 函数
 *  在内部会改变 showMessageBox 的标识
 *  对开发时透明
 *
 *  @param { Object } customOptions - 调用 MessageBox 的选项对象
 **/
function beforeClose (customOptions) {
  return function (action, instance, done) {
    let { beforeClose: customBeforeClose } = customOptions
    
    if (customBeforeClose) {
      customBeforeClose(action, instance, function () {
        showMessageBox = false
        done()
      })
    }
    else {
      showMessageBox = false
      done()
    }
  }
}