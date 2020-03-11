import Vue from 'vue'
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'

Vue.mixin({
  computed: {
    ...mapState([]),
    ...mapGetters([])
  },
  methods: {
    ...mapActions([]),
    ...mapMutations([])
  }
})