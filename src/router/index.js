import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/container/index.vue'
import Home from '@/container/Home.vue'
import Artists from '@/container/Artists.vue'
import Setting from '@/container/Setting.vue'
import Top from '@/container/Top.vue'
import Mine from '@/container/Mine.vue'
import Intro from '@/container/Intro.vue'
import Search from '@/container/Search.vue'
import HotBanner from '@/container/musicList/HotBanner.vue'
import KingBanner from '@/container/musicList/KingBanner.vue'
import NewBanner from '@/container/musicList/NewBanner.vue'
import More from '@/container/More.vue'
import MusicPlay from '@/container/MusicPlay.vue'
import ArtistsDetails from '@/container/artistsDetails/ArtistsDetails.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/musicplay',
      name: 'musicplay',
      component: MusicPlay
    },
    {
      path: '/',
      redirect: '/home',
      component: Index,
      children: [
        {
          path: 'setting',
          name: 'setting',
          component: Setting,
        },
        {
          path: 'home',
          redirect: '/home/hotbanner',
          name: 'home',
          component: Home,
          children: [
            {
              path: 'hotbanner',
              name: 'hotbanner',
              component: HotBanner
            },
            {
              path: 'newbanner',
              name: 'newbanner',
              component: NewBanner
            },
            {
              path: 'kingbanner',
              name: 'kingbanner',
              component: KingBanner
            }
          ]
        },
        {
          path: 'artists',
          name: 'artists',
          component: Artists
        },
        {
          path: 'top',
          name: 'top',
          component: Top
        },
        {
          path: 'mine',
          name: 'mine',
          component: Mine
        },
        {
          path: 'intro',
          name: 'intro',
          component: Intro
        },
        {
          path: 'search',
          name: 'search',
          component: Search
        },
        {
          path: 'more',
          name: 'more',
          component: More
        },
        {
          path: 'artistsDetails',
          // redirect: 'artistsDetails/list',
          name: 'artistsDetails',
          component: ArtistsDetails
        },
      ]
    }
  ]
})
