
        import Vue from 'vue';
        import App from '../src/pages/index/index.vue';
        import store from '../src/store'
        
        // 这里若修改了配置变量，则需要注意路径正确
        import '../src/main.js'
        
        Vue.config.productionTip = false;
        
        new Vue({ store, render: h => h(App) }).$mount('#app');
      