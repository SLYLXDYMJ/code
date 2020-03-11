### 自动化全局注册所有组件
> 主要作用：减少重复引用的代码量 <br/>
> 关键代码：src/components/index.js

1. 复制关键代码到 src/components/index.js
2. 组件已文件夹的形式存放于 src/components 中
3. 设置组件 name 属性，作为标签名
4. npm i --save lodash
5. 在 main.js 中引入 components/index.js
6. 无需引入注册，在页面中直接调用组件即可

### 抽象插件层统一管理
> 主要作用：增加可维护性 <br/>
> 关键代码：src/plugins/index.js
> 注意：仅和 vue 相关的插件，像 lodash、qs、moment 等插件无需管理，需要时引入即可

1. 新建 src/plugins 目录
2. 复制关键代码到 src/plugins/index.js
3. 创建插件配置 js 文件于 plugins 目录下，建议已具体功能分组
4. 在 main.js 中引入 plugins/index.js

### 多页面项目自动化配置
> 主要作用：优化开发体验，省去配置 vue.config.js 的时间 <br/>
> 关键代码：vue.config.js，pages 属性部分

1. 复制 vue.config.js pages 属性部分
2. 页面级组件按照文件夹的形式存放于 src/pages 目录下
3. 注意目录名为打包后的页面名称
4. 删除 cli 生成的 src/App.vue
5. 注意：增加了全局配置 main.js 文件，可在该文件使用 “自动化全局注册所有组件”，“多页面项目自动化配置” 或 引入全局样式等
6. 注意：entry 目录为自动生成，无需特殊注意，每次编译都会生成
7. 注意 pages 下若无文件会报错

### vuex
> 核心作用：使用方便，省去引用时间
> 关键代码：store/index.js，plugins/vuex.js

1. Vue.mixins 的方式引入所有的 state，getters，actions，mutations
2. 在组件中使用 this.xxx 的方式取值，或调用

#### 注意
> 多页面的话需要修改 vue.config.js entry 模板部分 <br/>
> 加上 store 的引入，并在 new Vue 时引入

```javascript
import Vue from 'vue';
import App from '${ appTpl }';
import store from '../src/store'

// 这里若修改了配置变量，则需要注意路径正确
import '.${ MAIN_PATH }'

Vue.config.productionTip = false;

new Vue({ store, render: h => h(App) }).$mount('#app');
```