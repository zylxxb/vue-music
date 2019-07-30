<template lang="html">
  <div class="art-title">
    <div class="artist-header">
      <div class="header-bg" :style="{background:'url(http://qukufile2.qianqian.com/data2/pic/ce52b58848ff456cd4d48765f2f3dd1e/267770218/267770218.jpg@s_0,w_240)'}"></div>
      <div class="header-mask"></div>
      <router-link :to="{ name: 'intro', params: { avatar: avatar,ting_uid: ting_uid }}">
        <div class="artist-header-content">
          <div class="pic">
            <img :src="avatar" />
          </div>
          <h2>{{ name }}</h2>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name:"arttitle",
  data(){
    return{
      avatar: '',
      name:'',
    }
  },
  props:{
    ting_uid:{
      type:String,
      default:""
    }
  },
  created(){
    const artistsURL = this.HOST + "/v1/restserver/ting?method=baidu.ting.artist.getInfo&tinguid="+ this.$route.params.ting_uid
    this.$axios.get(artistsURL)
    .then(res => {
        this.avatar = res.data.avatar_s500
        this.name = res.data.name
    })
    .catch(error => {
      console.log(error);
    })
  }
}
</script>

<style scoped>

.artist-header {
  width: 100%;
  height: 160px;
  position: fixed;
  overflow: hidden;
  box-sizing: border-box;
}

.header-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -webkit-filter: blur(6px);
  filter: blur(6px);
  -webkit-transform: scale(2);
  transform: scale(2);
  background-repeat: no-repeat;
  overflow: hidden;
}
.header-mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}


.artist-header-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 25px 0;
}

.pic {
  width: 80px;
  height: 80px;
  -webkit-border-radius: 40px;
  border-radius: 40px;
  overflow: hidden;
  margin: 0 auto;
}

.artist-header-content h2 {
  white-space: nowrap;
  text-align: center;
  font-size: 18px;
  line-height: 30px;
  margin-top: 12px;
  color: #333;
  font-weight: 400;
}

</style>
