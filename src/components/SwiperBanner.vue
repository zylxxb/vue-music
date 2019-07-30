<template>
  <div class="swiperBanner">
    <swiper :options="swiperOption">
      <swiper-slide>
        <router-link :to="{name: 'musicplay', params: {songID:'541489479'}}">
          <img src="@/assets/swiper/zq.png" alt="">
        </router-link>
      </swiper-slide>
      <swiper-slide>
        <router-link :to="{name: 'musicplay', params: {songID:'610588480'}}">
          <img src="@/assets/swiper/vc.png" alt="">
        </router-link>
      </swiper-slide>
      <swiper-slide>
        <router-link :to="{name: 'musicplay', params: {songID:'524453787'}}">
          <img src="@/assets/swiper/wlh.png" alt="">
        </router-link>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: "swiperBanner",
  components: {
    swiper,
    swiperSlide
  },
  data: () => ({
    swiperOption: {
      pagination: {
          el: '.swiper-pagination',
        },
        autoplay:true
    }
  })
}
</script>
<style scoped>
.swiperBanner{
  padding: 15px;
}
</style>
