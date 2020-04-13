## 抽象插件层统一管理
> 主要作用：增加可维护性 <br/>
> 关键代码：src/plugins/index.js

1. 新建 src/plugins 目录
2. 复制关键代码到 src/plugins/index.js
3. 创建插件配置 js 文件于 plugins 目录下，建议已具体功能分组
4. 在 main.js 中引入 plugins/index.js

注意：
1. 尽量不要影响 Vue 原型链，后期维护麻烦
2. 像 lodash、qs、moment 等库，在哪需要在哪引入即可，不要强制挂到 Vue 原型链上

------------------------------------------

## 自动化全局注册自定义的所有组件
> 主要作用：减少重复引用的代码量 <br/>
> 关键代码：src/plugins/register-custom-components.js

1. 复制关键代码到 src/plugins 目录中
2. 组件已文件夹的形式存放于 src/components 中
3. 设置组件 name 属性，作为标签名
4. npm i --save lodash
5. 组件都是全局注册，在页面级组件中直接调用组件即可

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

注意：
1. entry 目录为自动生成，无需特殊注意，每次编译都会生成
2. pages 下若无文件会报错
3. 每次创建或删除 pages 下的页面目录，都最好重新启动下项目

### 多页面项目 vuex 配置
> 单页面自行配置即可，很简单
> 多页面修改 vue.config.js pages 中 entryData
> 如下，加入 vuex 即可

```javascript
import Vue from 'vue';
import App from '${ appTpl }';
import store from '../src/store'

// 这里若修改了配置变量，则需要注意路径正确
import '.${ MAIN_PATH }'

Vue.config.productionTip = false;

new Vue({ store, render: h => h(App) }).$mount('#app');
```