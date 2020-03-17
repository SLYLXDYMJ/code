import Vue from 'vue'
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
import _ from 'lodash'

import store from '../store'

/**
 *  将 store 中的 state getter action mutations
 *  通过 mixin 全部注入 Vue 实例中
 *  就不用了在单独组件中单独引入了
 *  ! 注意：
 *  !   该方法会在组件中使属性和方法来源不明确
 *  !   但使用起来是真的方便（有利有弊，需要取舍）
 **/
Vue.mixin({
  computed: {
    ...mapState(_.keys(store.state)),
    ...mapGetters(_.keys(store.getters))
  },
  methods: {
    ...mapMutations(_.keys(store._mutations)),
    ...mapActions(_.keys(store._actions))
  }
})
