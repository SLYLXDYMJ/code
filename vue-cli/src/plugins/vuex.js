import Vue from 'vue'
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
import _ from 'lodash'

import store from '../store'

/**
 *  将 store 中的 state getter action mutations
 *  全部注入 Vue 实例中，就不用了在组件中单独引入了
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
