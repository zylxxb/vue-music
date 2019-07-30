<template>
  <div class="index">
    <div class="top">
      <div class="icon">
        <router-link to="/">
          <i class="iconfont icon-shouye"></i>
        </router-link>
      </div>
      <div class="title">
        <p>{{ this.$route.params.title }}</p>
      </div>
      <div class="search">
        <router-link :to="{ name: 'search', params: { title: '搜索'}}">
          <i class="iconfont icon-sousuo"></i>
        </router-link>
      </div>
    </div>
    <div class="bottom">
      <router-link :to="{ name: 'artists', params: { title: '歌手'}}">
        <i class="iconfont icon-leiyinleqicaix"></i>
        <div>歌手</div>
      </router-link>
      <router-link :to="{ name: 'top', params: { title: '榜单'}}">
        <i class="iconfont icon-vynil"></i>
        <div>榜单</div>
      </router-link>
      <router-link :to="{ name: 'mine', params: { title: '我的歌单'}}">
        <i class="iconfont icon-yinlemusic217"></i>
        <div>我的音乐</div>
      </router-link>
      <router-link :to="{ name: 'setting', params: { title: '个人中心'}}">
        <i class="iconfont icon-shouye_gerenzhongxinhui"></i>
        <div>个人中心</div>
      </router-link>
    </div>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "index",
  data: () => ({

  })
}
</script>

<style scoped>

.index .bottom i{
  font-size: 26px;
}

.index .top {
  position: fixed;
  top: 0px;
  width: 100%;
  z-index: 100;
  display: flex;
  height: 50px;
  line-height: 50px;
  background: #f9f9f9;
  text-align: center;
}

.index .top .icon {
  flex: 1;
  font-size: 26px;
}

.index .top .title {
  font-size: 16px;
  flex: 4;
}

.index .top .search {
  flex: 1;
}

.index .bottom{
  position: fixed;
  width: 100%;
  z-index: 100;
  bottom: 0px;
  left: 0;
  right: 0;
  display: flex;
  height: 60px;
  line-height: 20px;
  background: #f9f9f9;
  padding: 10px 0 10px;
}

.index .bottom a {
  flex: 1;
  text-align: center;
  color: #999;
}

.index .top i {
  font-size: 30px;
}

.index .top a {
  color: #999;
}


</style>
