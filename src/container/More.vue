<template>
  <div class="more">
    <div class="more-list">
      <div class="wrapper">
        <h3>{{ this.$route.params.title }}</h3>
        <VuePullRefresh :on-refresh="onRefresh">
          <router-link :to="{name: 'musicplay', params: {songID:item.song_id}}" tag='div' class="info url log" v-for="(item,index) in moreList" :key="index">
            <div class="poster">
              <img :src="item.pic_big" :alt="item.title">
            </div>
            <div class="text-wrap">
              <div class="title">{{ item.title }}</div>
              <div class="author">{{ item.artist_name }}</div>
            </div>
          </router-link>
        </VuePullRefresh>
      </div>
    </div>
    <div class="padding">
    </div>
  </div>
</template>
<script>
import VuePullRefresh from 'vue-pull-refresh'

export default {
  name: "more",
  components: {
    VuePullRefresh
  },
  data: () => ({
    moreList: [],
    offset: 0
  }),
  created(){
  const moreListUrl = this.HOST + "/v1/restserver/ting?method=baidu.ting.billboard.billList&type="+ this.$route.params.type +"&size=8&offset=0"
  this.$axios.get(moreListUrl).then(res => {
      this.moreList = res.data.song_list
      this.offset += 8
    }).catch(error => {
      console.log(error);
    })
  },
  methods:{
    // 下拉的时候触发函数
    onRefresh: function() {
        var that = this;
        const moreListUrl = this.HOST + "/v1/restserver/ting?method=baidu.ting.billboard.billList&type="+ this.$route.params.type +"&size=8&offset="+this.offset;
        return new Promise(function (resolve, reject) {
          setTimeout(() => {
            that.$axios.get(moreListUrl).then(res => {
                that.offset >= res.data.billboard.billboard_songnum - 8 ? console.log("没数据了") : that.offset += 8,
                that.moreList = that.moreList.concat(res.data.song_list)
                that.moreList = res.data.song_list
                resolve();
              }).catch(error => {
                console.log(error);
              })
          })
        })
    }
  }
}
</script>
<style scoped>
.more {
  width: 100%;
  position: relative;
  top: 50px;
}

.wrapper {
  padding-top: 13px;
  text-align: center;
  margin-bottom: 10px;
  clear: both;
  overflow: hidden;
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
