<template>
  <div>
    我是首页
    <comp-test/>
  </div>
</template>

<script>
  export default {
    name: 'page-index',
    created () {
      console.log(this.$test)
    }
  }
</script>

<style scoped>

</style>