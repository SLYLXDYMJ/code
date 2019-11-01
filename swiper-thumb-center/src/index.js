import './style.css'

import Swiper from 'swiper/js/swiper.min'
import 'swiper/css/swiper.min.css'

let thumbSwiper = new Swiper('.swiper-thumb', {
  spaceBetween: 10,
  slidesPerView: 4,
  centeredSlides: true,
  on: {
    /**
     *  配置了 centeredSlides: true
     *  并在 bodySwiper 切换时 将 thumbSwiper slideTo 至当前激活的 slide 时
     *  会将当前 slide 居中
     *  但是大部分时候不希望开头和结尾偏移
     *  还是希望左对其，右对其的时候多一些
     *  这里的 transitionStart 解决这个问题
     **/
    transitionStart () {
      let { isBeginning, isEnd, translate, slides, params } = this
      let { speed } = params
      let maxOffset = this.previousTranslate
      
      // 开头
      if (translate > 0) {
        this.translateTo(0, speed, false)
      }
      if (translate > maxOffset) {
        this.translateTo(maxOffset, speed, false)
      }
    }
  }
})
let bodySwiper = new Swiper('.swiper-body', {
  thumbs: {
    swiper: thumbSwiper
  },
  on: {
    transitionStart () {
      thumbSwiper.slideTo(this.realIndex)
    }
  }
})