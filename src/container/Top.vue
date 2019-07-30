<template>
  <div class="topbanner">
    <div class="more-list">
      <div class="wrapper">
        <router-link :to="{ name: 'more', params: { type: 1, title:'新歌榜'}}" tag="div" class="container">
          <div class="pic">
            <img src="../assets/png/new.png" alt="">
          </div>
          <div class="list">
            <ul tag="div">
              <li>Hot 1 木偶人</li>
              <li>Hot 2 慢半拍</li>
              <li>Hot 3 兄弟不怀疑</li>
            </ul>
          </div>
        </router-link>
        <router-link :to="{ name: 'more', params: { type: 2, title: '热歌榜'}}" tag="div" class="container">
          <div class="pic">
            <img src="../assets/png/hot.png" alt="">
          </div>
          <div class="list">
            <ul tag="div">
              <li>Hot 1 卡路里</li>
              <li>Hot 2 往后余生</li>
              <li>Hot 3 心如止水</li>
            </ul>
          </div>
        </router-link>
        <router-link :to="{ name: 'more', params: { type: 24, title: 'King版'}}" tag="div" class="container">
          <div class="pic">
            <img src="../assets/png/king.png" alt="">
          </div>
          <div class="list">
            <ul tag="div">
              <li>Hot 1 大王叫我来巡山</li>
              <li>Hot 2 不潮不用花钱</li>
              <li>Hot 3 无敌</li>
            </ul>
          </div>
        </router-link>
      </div>
    </div>
    <div class="padding">
    </div>
  </div>
</template>
<script>

export default {
  name: "top",
  data: () => ({

  })
}
</script>
<style scoped>

.topbanner {
  width: 100%;
  position: relative;
  top: 50px;
}

.wrapper {
  clear: both;
  overflow: hidden;
  height: 557px;
  font-size: 15px;
}

.container {
  display: flex;
  padding: 50px 20px 0px 40px;
}
.pic {
  flex:2;
}
.list {
  flex:3;
  padding:30px 0 0 30px;
}

h3{
  font-size: 22px;
  text-align: left;
  margin-left: 17px;
  margin-bottom: 5px;
}

.wrapper .info {
  width: 40%;
  float: left;
  padding-left: 17px;
  display: block;
  text-align: center;
  margin: 10px 0 10px 10px;
  position: relative;
}
.text-wrap {
  padding: 5px;
  text-align: center;
  line-height: 25px;
  height: 15px;
  overflow: hidden
}
.padding {
  height: 60px;
}

</style>
