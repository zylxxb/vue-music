<template lang="html">
  <div class="art-list">
    <ul class="list">
      <router-link tag="li" :to="{name:'musicplay',params:{songID:item.song_id}}" class="song" v-for="(item,index) in listArr" :key="index">
        <div class="left">
          {{ index + 1 }} . {{ item.title }}
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name:"artlist",
  data(){
    return{
      listArr:[]
    }
  },
  props:{
    ting_uid:{
      type:String,
      default:"0"
    }
  },
  created(){
    const ArtList = this.HOST + "/v1/restserver/ting?method=baidu.ting.artist.getSongList&tinguid="+ this.ting_uid +"&limits=12&use_cluster=1&order=2"
    this.$axios.get(ArtList)
      .then(res => {
        this.listArr = res.data.songlist
      })
      .catch(error => {
        console.log(error);
      })
  }
}
</script>

<style scoped>

.art-list{
  padding: 0 20px;
  z-index: -1;
  padding-top: 180px;
}

.song{
  height: 50px;
  line-height: 50px;
}

.left{
  font-size: 15px;
  padding-left: 20px;
}


</style>
