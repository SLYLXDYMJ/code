## vue 相关开发经验

### 自动化全局注册所有组件
> 主要作用：减少重复引用的代码量 <br/>
> 关键代码：src/components/index.js

1. 复制关键代码到 src/components/index.js
2. 组件已文件夹的形式存放于 src/components 中
3. 设置组件 name 属性，作为标签名
4. npm i --save lodash
5. 在 main.js 中引入 components/index.js
6. 无需引入注册，在页面中直接调用组件即可

### 优雅的插件配置
> 主要作用：增加可维护性 <br/>
> 关键代码：src/plugins/index.js

1. 新建 src/plugins 目录
2. 复制关键代码到 src/plugins/index.js
3. 创建插件配置文件于 plugins 目录下，建议已具体功能分组
4. 在 main.js 中引入 plugins/index.js

### 多页面项目自动化配置
> 作用：优化开发体验，省去配置 vue.config.js 的时间 <br/>
> 代码：vue.config.js，pages 属性部分

1. 复制 vue.config.js pages 属性部分
2. 页面级组件按照文件夹的形式存放于 src/pages 目录下
3. 注意页面级组件的目录名为打包后的页面名称
4. 删除 cli 生成的 src/App.vue
5. 注意：增加了全局配置 main.js 文件，可在该文件使用 “自动化全局注册所有组件”，“多页面项目自动化配置” 或 引入全局样式等
6. 注意：entry 目录为自动生成，无需特殊注意，每次编译都会生成
7. 注意 pages 下若无文件会报错