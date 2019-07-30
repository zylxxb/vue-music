<template>
  <div class="home">
    <TodayRecommend title="今日推荐" type = '21' size='6' offset="0" />
    <NewMusic title="新歌速递" type = '1' size='3' offset="0" />
    <SwiperBanner />
    <ListNav />
    <keep-alive>
      <router-view />
    </keep-alive>
    <TodayRecommend title="热门榜单" type = '2' size='6' offset="0" />
    <div class="padding">
    </div>
  </div>
</template>
<script>
import TodayRecommend from '@/components/TodayRecommend.vue'
import NewMusic from '@/components/NewMusic.vue'
import SwiperBanner from '@/components/SwiperBanner.vue'
import ListNav from './musicList/ListNav.vue'
export default {
  name: "home",
  components:{
    TodayRecommend,
    NewMusic,
    SwiperBanner,
    ListNav
  },
  data: () => ({

  })
}
</script>
<style scoped>

.home {
  width: 100%;
  position: relative;
  top: 50px;
}
.padding {
  height: 60px;
}

</style>
