<template lang="html">
  <div class="artists">
      <ul class="list">
        <router-link tag="li" :to="{name:'artistsDetails',params:{avatar:item.avatar_s500,name:item.name,ting_uid:item.ting_uid}}" :key="index" class="artist" v-for="(item,index) in artistsData">
          <div class="pic">
            <img :alt="item.name" :src="item.avatar_s500">
          </div>
          <div class="info">
            <div>{{ item.name }}</div>
          </div>
        </router-link>
      </ul>
      <div class="padding">
      </div>
    </div>
</template>

<script>
export default {
  name:"artists",
  data(){
    return{
       artistsArr:["2517","7994","1091","45561","2507","245815","1077","1204","1117","82366"],
       artistsData:[]
    }
  },
  created(){
    for(var i =0;i<this.artistsArr.length;i++){
      const artistsURL = this.HOST + "/v1/restserver/ting?method=baidu.ting.artist.getInfo&tinguid="+ this.artistsArr[i];
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
    }
  }
}
</script>

<style scoped>

.artists{
  width: 100%;
  position: relative;
  top: 50px;
}
.list {
  padding: 10px 0
}

.list li {
    padding-left: 40px;
    min-height: 70px;
    display: flex;
    align-items: center;
}


.info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    font-size: 15px;
}

.pic{
  width: 54px;
  height: 54px;
  margin-right: 15px;
}
.pic img{
  border-radius: 27px;
  overflow: hidden;
}

.padding {
  height: 60px;
}

</style>
