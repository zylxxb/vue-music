<template lang="html">
  <div class="play">
    <div class="header">
     <div class="title">
       <router-link to="/" tag="div" class="home">
         <i class="iconfont icon-shouye left"></i>
       </router-link>
       <div class="music-info">
         <p>{{ currentUrl.songinfo.title }}</p>
         <router-link tag="p" :to="{name:'artistsDetails',params:{avatar:item.avatar_s500,name:item.name,ting_uid:item.ting_uid}}" :key="index" class="author" v-for="(item,index) in artistsData">
         {{ currentUrl.songinfo.author }}
         </router-link>
       </div>
       <router-link tag="div" to="/search" class="search"><i class="iconfont icon-sousuo right"></i></router-link>
     </div>
   </div>

   <div class="song-info">
			<div class="song-info-img">
        <img :src="currentUrl.songinfo.pic_big">
        <LRC :currentTime="currentTime" :durationTime="durationTime" :songID="this.$route.params.songID"/>
			</div>
			<div class="iconbox">
				<i class="iconfont icon-xiai left"></i>
				<i class="box"></i>
				<i class="iconfont icon-download right"></i>
			</div>
		</div>
    <div class="song">
      <audio ref="player" :src="currentUrl.bitrate.show_link" controls autoplay></audio>
		</div>
  </div>
</template>

<script>

import "../assets/font/iconfont.css"
import LRC from '../components/LRC.vue'

export default {
  name:"musicplay",
  components: {
    LRC
  },
  data(){
    return{
      currentUrl: {
        songinfo: {
          title: "",
          author: "",
        },
        bitrate: {
          show_link: ""
        }
      },
      durationTime: 0,
      currentTime: 0,
      idUrl: {
        artist: {
          artistid: ''
        }
      },
      artistsData: []
    }
  },
  created(){
    const playUrl = this.HOST + "/v1/restserver/ting?method=baidu.ting.song.play&songid=" + this.$route.params.songID;
    this.$axios.get(playUrl)
    .then(res => {
      this.currentUrl = res.data;
      this.addEventListeners()
      const idUrl = this.HOST + "/v1/restserver/ting?method=baidu.ting.search.catalogSug&query=" + this.currentUrl.songinfo.author
      this.$axios.get(idUrl)
      .then(res => {
        this.artists = res.data;
        const artistsURL = this.HOST + "/v1/restserver/ting?method=baidu.ting.artist.getInfo&tinguid="+ this.artists.artist[0].artistid;
        this.$axios.get(artistsURL)
          .then(res => {
            this.artistsData.push({
              avatar_s500:res.data.avatar_s500,
              name:res.data.name,
              ting_uid:res.data.ting_uid
            })
          })
          .catch(error => {
            console.log(error);
          })
      })
      .catch(error => {
        console.log(error);
      })
    })
    .catch(error => {
      console.log(error);
    })
  },
  beforeDestroy() {
    this.removeEventListeners()
  },
  methods:{
    addEventListeners(){
      this.$refs.player.addEventListener('timeupdate', this._currentTime),
      this.$refs.player.addEventListener('canplay', this._durationTime)
     },
     removeEventListeners: function () {
       this.$refs.player.removeEventListener('timeupdate', this._currentTime)
       this.$refs.player.removeEventListener('canplay', this._durationTime)
     },
    _currentTime(){
      this.currentTime = this.$refs.player.currentTime
    },
   _durationTime(){
    this.durationTime = this.$refs.player.duration
    }
  }
}
</script>

<style scoped>

.header{
  height: 50px;
}

.title{
  display: flex;
  text-align: center;
  line-height: 50px;
  text-align: center
}

.home {
  flex: 1
}
.search {
  flex: 1
}
.music-info{
	flex: 4;
	font-size: 16px;
  line-height: 40px;
  height: 40px;
}

.music-info>p {
  height: 40px;
  overflow: hidden;
  padding-top: 10px;
}


.left{
	font-size: 30px;
}

.right{
	font-size: 30px;
}

.song-info{
	padding: 30px 20px 10px;
  height: 530px
}

.song-info-img{
	text-align: center;
  height: 430px
}

.song-info-img img{
  height: 165px;
	width: 50%;
	border-radius: 5px;
	box-shadow: 0 0 10px 0 rgba(50,50,50,.31);
}

.song-lrc{
	margin-top: 10px;
  min-height: 72px;
}

.iconbox{
	display: flex;
	margin-top: 15px;
}

.iconbox .box{
	flex: 1;
}

.song{
	width: 100%;
	text-align: center;
}·

.song audio{
  background-color: green;
	width: 100%;
}


.author{
  font-size: 12px;
  color: #999;
  line-height: 12px;
}

</style>
