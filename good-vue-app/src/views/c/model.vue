<template>
  <div class="root">
    <h4>请输入内容</h4>
    <input v-model="val" type="text">
  </div>
</template>

<script>
  export default {
    name: 'page-c-model',
    data () {
      return {
        val: ''
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>