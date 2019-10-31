<template>
  <div class="comp-root" ref="root">
    <slot/>
  </div>
</template>

<script>
  export default {
    name: 'comp-root',
    data () {
      return {
        cacheScrollTop: 0
      }
    },
    activated () {
      this.$refs.root.scrollTop = this.cacheScrollTop
    },
    deactivated () {
      this.cacheScrollTop = this.$refs.root.scrollTop
    }
  }
</script>

<style lang="scss" scoped>
  .comp-root {
    box-sizing: border-box;
    height: 100vh;
    background-color: #fff;
    padding: 15px;
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }
</style>