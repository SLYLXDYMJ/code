## react 的项目模板
> create-react-app version: 3.4.0

## 组件目录
> pages 为页面级组件
> components 为普通组件
> components 和 page 目录中 A 文件夹为响应的模板

## react-redux
> 核心代码在 store/index.js 中
> 想增加 state，在 defaultState 中添加
> 想增加 action，在 mapActionToProps 中添加
> App 和 组件模板中，默认使用 connect 的方式挂载了所有 state 和 action
> 可以通过 props 直接访问到

## react-router
> 在所有基础组件中都使用了 withRouter 挂载了 history api