import Vue from 'vue'
import Router from 'vue-router'

import A from './views/a'
import B from './views/b'
import C from './views/c'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/a',
      name: A.name,
      component: A
    },
    {
      path: '/b',
      name: B.name,
      component: B
    },
    {
      path: '/c/:id',
      name: C.name,
      props: true,
      component: C
    },
    {
      path: '/*',
      redirect: { name: A.name }
    }
  ]
})
