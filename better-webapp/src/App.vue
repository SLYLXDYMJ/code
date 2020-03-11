<template>
  <div class="app">
    <transition :name="transition">
      <navigation>
        <router-view/>
      </navigation>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        transition: ''
      }
    },
    created () {
      // 前进后退钩子，这里可实现页面过渡动画
      this.$navigation.on('forward', (to, from) => {
        this.transition = 'enter'
      })
      this.$navigation.on('back', (to, from) => {
        this.transition = 'leave'
      })

      // 判断启动页
      // 是首页
      if (this.$route.path === '/') {
        console.log('是首页')
      }
      // 非首页
      else {
        console.log('非首页')
      }
    }
  }
</script>

<style lang="scss">
  @import "assets/styles/global";

  // 页面切换时左右滑动效果
  .app {
    // 使页面滑动时 absolute 的是 .app 元素
    position: relative;
    // 不加 overflow 切换时会左右滑动
    overflow: hidden;
  }
  .enter,
  .leave {
    &-enter-active,
    &-leave-active {
      transition: transform 0.6s;
    }
  }
  .enter {
    &-enter {
      transform: translate3d(100%, 0, 0);
    }
    &-enter-to {
      transform: translate3d(0, 0, 0);
    }
    &-leave {
      transform: translate3d(0, 0, 0);
    }
    &-leave-to {
      transform: translate3d(-35%, 0, 0);
    }
    &-enter-active {
      position: absolute !important;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: 1;
    }
  }
  .leave {
    &-enter {
      transform: translate3d(-35%, 0, 0);
    }
    &-enter-to {
      transform: translate3d(0, 0, 0);
    }
    &-leave {
      transform: translate3d(0, 0, 0);
    }
    &-leave-to {
      transform: translate3d(100%, 0, 0);
    }
    &-leave-active {
      position: absolute !important;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: 1;
    }
  }
</style>