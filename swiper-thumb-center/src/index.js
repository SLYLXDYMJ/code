import './style.css'

import Swiper from 'swiper/js/swiper.min'
import 'swiper/css/swiper.min.css'

/**
 *  效果：
 *    永远在中心的缩略图
 *  备注：
 *    基于 swiper 缩略图配置实现，兼容性很好
 *  缺点：
 *    开头和结尾的缩略图也是居中的，会有左右空白现象
 **/
!(function () {
  // .group-1
  !(function () {
    let thumbSwiper = new Swiper('.group-1 .swiper-thumb', {
      spaceBetween: 10,
      slidesPerView: 4,
      centeredSlides: true,
      slideToClickedSlide: true,
      resistanceRatio: 0
      // grabCursor: true
    })
    let bodySwiper = new Swiper('.group-1 .swiper-body', {
      // grabCursor: true,
      // resistanceRatio: 0,
      thumbs: {
        swiper: thumbSwiper
      },
      on: {
        transitionStart () {
          thumbSwiper.slideTo(this.realIndex)
        }
      }
    })
  })()
  // .group-2
  !(function () {
    let thumbSwiper = new Swiper('.group-2 .swiper-thumb', {
      direction: 'vertical',
      spaceBetween: 10,
      slidesPerView: 4,
      centeredSlides: true,
      slideToClickedSlide: true,
      resistanceRatio: 0
      // grabCursor: true,
    })
    let bodySwiper = new Swiper('.group-2 .swiper-body', {
      direction: 'vertical',
      // grabCursor: true,
      // resistanceRatio: 0,
      thumbs: {
        swiper: thumbSwiper
      },
      on: {
        transitionStart () {
          thumbSwiper.slideTo(this.realIndex)
        }
      }
    })
  })()
})()

/**
 *  效果：
 *    双向控制，实时同步 progress
 *  备注：
 *    基于 swiper 双向控制实现，兼容性很好
 *  缺点：
 *    开头和结尾的缩略图也是居中的，会有左右空白现象
 **/
!(function () {
  // .group-3
  !(function () {
    let thumbSwiper = new Swiper('.group-3 .swiper-thumb', {
      spaceBetween: 10,
      slidesPerView: 4,
      centeredSlides: true,
      slideToClickedSlide: true,
      resistanceRatio: 0
      // grabCursor: true
    })
    let bodySwiper = new Swiper('.group-3 .swiper-body', {
      // grabCursor: true,
      // resistanceRatio: 0
    })
    
    thumbSwiper.controller.control = bodySwiper
    bodySwiper.controller.control = thumbSwiper
  })()
  // .group-4
  !(function () {
    let thumbSwiper = new Swiper('.group-4 .swiper-thumb', {
      direction: 'vertical',
      spaceBetween: 10,
      slidesPerView: 4,
      centeredSlides: true,
      slideToClickedSlide: true,
      resistanceRatio: 0
      // grabCursor: true,
    })
    let bodySwiper = new Swiper('.group-4 .swiper-body', {
      direction: 'vertical'
      // grabCursor: true,
      // resistanceRatio: 0
    })
    
    thumbSwiper.controller.control = bodySwiper
    bodySwiper.controller.control = thumbSwiper
  })()
})()

/**
 *  效果：
 *    左右两侧没有留白
 *  备注：
 *    基于自定义逻辑实现
 *  缺点：
 *    增加维护成本
 **/
!(function () {
  // .group-5
  !(function () {
    let thumbSwiper = new Swiper('.group-5 .swiper-thumb', {
      spaceBetween: 10,
      slidesPerView: 4,
      slideToClickedSlide: true
      // resistanceRatio: 0
      // grabCursor: true
    })
    let bodySwiper = new Swiper('.group-5 .swiper-body', {
      // grabCursor: true,
      // resistanceRatio: 0,
      thumbs: {
        swiper: thumbSwiper
      },
      on: {
        transitionStart () {
          let { realIndex: i } = this
          let { $el, slides } = thumbSwiper
          let targetEl = slides[ i ]
          let targetElLeft = targetEl.offsetLeft
          let targetElWidth = targetEl.offsetWidth
          let wrapperElWidth = $el[ 0 ].clientWidth
          let translate = (function () {
            let min = 0
            let max = (function () {
              let result = 0
              for (let i = 0; i < slides.length; i++) {
                let slideEl = slides[ i ]
                let style = getComputedStyle(slideEl)
                
                result += slideEl.offsetWidth
                
                // spaceBetween 属性只设置 右边距/下编剧
                // 并且会设置最后一个，这里把最后一个的 margin 不算在内
                if (i < slides.length - 1) {
                  result += parseFloat(style.marginRight)
                }
              }
              return result - wrapperElWidth
            })()
            let result = targetElLeft - wrapperElWidth / 2 + targetElWidth / 2
            
            // 两侧对其逻辑
            if (result < min) {
              result = min
            }
            else if (result > max) {
              result = max
            }
            
            // 注意 translate 是负数
            return result * -1
          })()
          
          thumbSwiper.setTranslate(translate)
        }
      }
    })
  })()
  // .group-6
  !(function () {
    let thumbSwiper = new Swiper('.group-6 .swiper-thumb', {
      direction: 'vertical',
      spaceBetween: 10,
      slidesPerView: 4,
      slideToClickedSlide: true
      // resistanceRatio: 0
      // grabCursor: true
    })
    let bodySwiper = new Swiper('.group-6 .swiper-body', {
      direction: 'vertical',
      // grabCursor: true,
      // resistanceRatio: 0,
      thumbs: {
        swiper: thumbSwiper
      },
      on: {
        transitionStart () {
          let { realIndex: i } = this
          let { $el, slides } = thumbSwiper
          let targetEl = slides[ i ]
          let targetElTop = targetEl.offsetTop
          let targetElHeight = targetEl.offsetHeight
          let wrapperElHeight = $el[ 0 ].clientHeight
          let translate = (function () {
            let min = 0
            let max = (function () {
              let result = 0
              for (let i = 0; i < slides.length; i++) {
                let slideEl = slides[ i ]
                let style = getComputedStyle(slideEl)
                
                result += slideEl.offsetHeight
                
                // spaceBetween 属性只设置 右边距/下编剧
                // 并且会设置最后一个，这里把最后一个的 margin 不算在内
                if (i < slides.length - 1) {
                  result += parseFloat(style.marginBottom)
                }
              }
              return result - wrapperElHeight
            })()
            let result = targetElTop - wrapperElHeight / 2 + targetElHeight / 2
            
            // 两侧对其逻辑
            if (result < min) {
              result = min
            }
            else if (result > max) {
              result = max
            }
            
            // 注意 translate 是负数
            return result * -1
          })()
          
          thumbSwiper.setTranslate(translate)
        }
      }
    })
  })()
})()