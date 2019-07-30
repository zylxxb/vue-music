<template>
  <div class="intro">
    <div  class="header">
      <div @click="goBack" class="avatar">
        <img :src="this.$route.params.avatar">
      </div>
    </div>
    <div class="text">
      <h2>歌手简介</h2>
      <p>{{ text }}</p>
    </div>
    <div class="padding">
    </div>
  </div>
</template>
<script>
export default {
  name: "intro",
  data: () => ({
    text: ''

  }),
  created(){
    const introUrl = this.HOST + "/v1/restserver/ting?method=baidu.ting.artist.getInfo&tinguid="+ this.$route.params.ting_uid
    this.$axios.get(introUrl)
      .then(res => {
        this.text = res.data.intro
      })
      .catch(error => {
        console.log(error);
      })
  },
  methods:{
    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>
<style scoped>
.intro {
  width: 100%;
  position: relative;
  top: 50px;
}

.padding {
  height: 60px;
}

.header {
  padding: 40px 40px 20px 40px;
}

.avatar {
  width: 150px;
  height: 150px;
  -webkit-border-radius: 40px;
  border-radius: 100px;
  overflow: hidden;
  margin: 0 auto;
}

.text {
  padding: 0px 40px 10px 40px;
  font-size: 14px;
  text-align: justify;
  line-height: 25px
}

p {
  text-indent: 10%;
}
h2 {
  font-size: 18px;
  line-height: 38px;
  padding: 10px 0;
}
</style>
