import './styles.css'

import Swiper from 'swiper/js/swiper.min'
import 'swiper/css/swiper.min.css'

new Swiper('.swiper-container', {
  loop: true,
  speed: 800,
  // required
  watchSlidesProgress: true,
  on: {
    // 被背景设置 transition
    setTransition (speed) {
      for (var i = 0; i < this.slides.length; i++) {
        this.slides[ i ].querySelector('.pic').style.transition =
          speed + 'ms'
      }
    },
    // 根据 slideProgress 实现视差效果
    progress () {
      for (let i = 0; i < this.slides.length; i++) {
        let slideProgress = this.slides[ i ].progress
        let innerOffset = this.width * 0.5
        let innerTranslate = slideProgress * innerOffset
        this.slides[ i ]
          .querySelector('.pic')
          .style
          .transform = 'translate3d(' + innerTranslate + 'px, 0, 0)'
      }
    }
  }
})
