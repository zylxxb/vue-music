<template>
  <div class="mod-albums">
    <div class="hd log url">
        <h2>{{title}}</h2>
        <router-link :to="{ name: 'more', params: { type: this.type, size: this.size, offset: this.offset, title: title}}" tag="div">更多</router-link>
    </div>
    <div class="container">
        <div class="gallery">
            <div class="scroller">
                <router-link :to="{name: 'musicplay', params: {songID:item.song_id}}" tag='div' class="card url" v-for="(item,index) in newLists" :key="index">
                    <div class="album">
                        <img :src="item.pic_big" :alt="item.title">
                        <div class="name">{{ item.title }}</div>
                        <div class="author">{{ item.artist_name }}</div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "NewMusic",
  data: () => ({
    newLists: []
  }),
  props: {
    title:{
      type: String,
      default: '版单'
    },
    type:{
      type: String,
      default: '2'
    },
    size:{
      type: String,
      default: '6'
    },
    offset:{
      type: String,
      default: '0'
    }
  },
  created() {
    var url = this.HOST + "/v1/restserver/ting?method=baidu.ting.billboard.billList&type="+this.type+"&size="+this.size+"&offset="+this.offset
    this.$axios.get(url).then( res=> {
      this.newLists = res.data.song_list
    }).catch( error=> {
      console.log(error);
    })
  }
}
</script>
<style scoped>

.mod-albums {
    padding: 10px 17px;
    margin-top: 1px;
    height: 220px;
}

.hd {
    display: flex;
    margin: 14px 0 18px 0;
}

.hd h2 {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    margin: 0;
    padding: 0;
    font-size: 20px;
}

.hd div {
    width: 64px;
    font-size: 12px;
    text-align: right;
}

.mod-albums .gallery {
    overflow: hidden;
    margin: 0 -5px;
}

 .mod-albums .gallery .card {
    width: 33.3%;
    float: left;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0 5px 10px;
}

.mod-albums .gallery .card .album {
  position: relative;
  text-align: center;
}

.mod-albums .gallery .card img {
    width: 100%;
    height: auto;
    border: 1px solid #eee;
}

.mod-albums .gallery .card .name {
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: 4px;
    line-height: 14px;
    max-height: 28px;
    margin-bottom: 2px;
}
.mod-albums .gallery .card .author {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #999;
    font-size: 12px;
    line-height: 12px;
}
</style>
