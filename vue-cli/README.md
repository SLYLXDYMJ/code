## 抽象插件层统一管理
> 主要作用：增加可维护性 <br/>
> 关键代码：src/plugins/index.js
> 注意：像 lodash、qs、moment 等插件无需管理，在哪需要在哪引入即可，尽量不要影响 Vue 原型

1. 新建 src/plugins 目录
2. 复制关键代码到 src/plugins/index.js
3. 创建插件配置 js 文件于 plugins 目录下，建议已具体功能分组
4. 在 main.js 中引入 plugins/index.js

------------------------------------------

## 自动化全局注册自定义的所有组件
> 主要作用：减少重复引用的代码量 <br/>
> 关键代码：src/plugins/register-custom-components.js

1. 复制关键代码到 src/plugins 目录中
2. 组件已文件夹的形式存放于 src/components 中
3. 设置组件 name 属性，作为标签名
4. npm i --save lodash
5. 在页面模板中直接调用组件即可

------------------------------------------

## 多页面项目自动化配置
> 目前目录结构已经是多页面脚手架（可对比参考）<br/>
> 主要作用：优化开发体验，省去配置 vue.config.js 的时间 <br/>
> 关键代码：vue.config.js，pages 属性部分

1. 复制 vue.config.js pages 属性部分
2. 页面级组件按照文件夹的形式存放于 src/pages 目录下
3. 注意目录名为打包后的页面名称
4. 删除 cli 生成的 src/App.vue
5. 书写全局统一配置 src/main.js 文件，可在该文件引用 “抽象插件层统一管理” 或 引入全局样式等

注意：entry 目录为自动生成，无需特殊注意，每次编译都会生成 <br/>
注意：pages 下若无文件会报错 <br/>
注意：默认集成了 vuex 若项目中没有使用，参考下面的 vuex 改下 vue.config.js 中的配置

------------------------------------------

## vuex
> 核心作用：使用方便，省去引用时间 <br/>
> 关键代码：src/plugins/mixin-store-to-components.js <br/>
> 非关键代码：src/store/index.js

1. Vue.mixin 的方式引入所有的 state，getters，actions，mutations
2. 在组件中使用 this.xxx 的方式取值，或调用

#### 单页面项目注意
> 当前项目是配置的多页面标准 <br/>
> 单页面项目无需参考，使用 "抽象插件层统一管理" 或 直接引用 "关键代码" 即可

#### 多页面项目注意
> 默认模拟开发时使用了 vuex，若没有使用 <br/>
> 则在 vue.config.js 的 pages 属性中删除 store 相应配置即可 <br/>
> 如下

```javascript
import Vue from 'vue';
import App from '${ appTpl }';
// import store from '../src/store'

// 这里若修改了配置变量，则需要注意路径正确
import '.${ MAIN_PATH }'

Vue.config.productionTip = false;

new Vue({ /* store, */ render: h => h(App) }).$mount('#app');
```