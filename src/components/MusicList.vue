<template lang="html">
  <div class="board panels">
    <div class="panel hotsongs on">
      <ul class="list">
        <router-link :to="{name: 'musicplay', params: {songID:item.song_id}}" tag='li' class="song url" v-for="(item,index) in musicList" :key="index">
          <div class="poster">
            <img :src="item.pic_big" :alt="item.title">
          </div>
          <div class="info">
            <div class="name">
                {{ item.title }}
            </div>
            <div class="author">{{ item.artist_name }}</div>
          </div>
        </router-link>
      </ul>
      <router-link :to="{ name: 'top', params: { title: '榜单'}}" tag="div" class="more-songs url">
          查看该榜单&gt;
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      musicList:[]
    }
  },
  props:{
    url:{
      type:String,
      default:""
    }
  },
  created(){
    var url = this.HOST+this.url;
    this.$axios.get(url).then(res => {
        this.musicList = res.data.song_list
      }).catch(error => {
        console.log(error);
      })
  }
}
</script>

<style scoped>

.board{
  margin-bottom: 1px;
}

.panel {
  border-top: 1px solid #eee;
  position: relative;
  top: -1px;
  display: block;
}

.list{
  padding: 20px;
  padding-top: 0;
  height: 320px;
}

.panel .list li {
  height: 60px;
  border-bottom: 1px solid #eee;
  padding-left: 0;
  display: flex;
  padding-top: 10px;
}

.panel .list li .poster {
  position: relative;
  width: 45px;
  margin-right: 8px;
}

.panel .list li .poster img {
  border: 1px solid #eee;
}
.info{
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.info .name {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 16px;
}

.info .author {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 12px;
  color: #999;
  margin-top: 2px;
}

.more-songs {
  color: #999;
  font-size: 12px;
  text-align: center;
  height: 32px;
  line-height: 32px;
}
.padding {
  height: 60px;
}
</style>
