<template>
  <div class="search">
    <div class="search-title">
      <input type="text" v-focus="true" placeholder="搜索歌手或歌曲" v-model="searchContent">
      <i class="iconfont icon-sousuo right"  @click="searchHandler" name="button"></i>
    </div>
    <div v-show="noSong" style="padding: 0 auto; font-size: 15px">
      <p style="text-align: center">歌曲不存在</p>
    </div>
    <div v-show="show" class="">
      <ul  class="list searchlist">
        <router-link :key="index" tag="li" :to="{name: 'musicplay', params: {songID:item.songid}}" class="song" v-for="(item,index) in songlist">
          <div class="left">
            <div class="info  single-line ">
              <div>
                <span>{{ item.songname }}</span>
              </div>
              <span class="txt">{{ item.artistname }}</span>
            </div>
          </div>
        </router-link>
      </ul>
    </div>
</div>
</template>
<script>
export default {
  name: "search",
  directives: {
    focus: {
      inserted: function (el, {value}) {
        console.log(el,{value})	           
        if (value) {	               
          el.focus();	         
        }	     
      }	   
    }
  },
  data: () => ({
    searchContent:"",
    songlist:[],
    noSong: false,
    show: true
  }),
  methods:{
    searchHandler(){
      const searchURL = this.HOST + "/v1/restserver/ting?method=baidu.ting.search.catalogSug&query="+this.searchContent;
        this.$axios.get(searchURL)
        .then(res => {
          if(res.data.error_code == 22001){
            this.noSong = true
            this.show = false
            return ;
          }
          this.noSong = false
          this.songlist = res.data.song
        })
        .catch(error => {
          console.log(error);
        })
    }
  }
}
</script>
<style scoped>

.search {
  width: 100%;
  position: relative;
  top: 50px;
}


.search-title{
  width: 70%;
  padding: 30px 0 20px;
  margin: 0 auto;
  overflow: hidden;
  clear: both;
  display: flex;
}

input{
  flex: 4;
  border-radius: 20px;
  padding: 0 20px;
  height: 40px;
  background: #fff;
  border: 1px solid #f1f2f3;
  float: left;
  display: inline-block;
  font-size: 15px;
}

i{
  flex:1;
  margin-left: 20px;
  font-size: 30px;
  height: 40px;
  text-align: center;
}

.list {
  word-wrap: break-word;
  -webkit-hyphens: auto;
  hyphens: auto;
  word-break: break-all;
  margin: 0  40px 30px;
  font-size: 15px;
}

.list li.song {
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  min-height: 55px;
  text-align: left;
}

li{
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  justify-content: flex-start;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  min-height: 50px;
  border-bottom: 1px solid #F2F2F2;
  padding-left: 10px;
}

.list .item.song .left, .list li.song .left {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  justify-content: flex-start;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.list .item .info, .list li .info {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.list li .info>span {
  margin-top: 5px;
  font-weight: 400;
  display: block;
  font-size: 12px;
  color: #999;
}

</style>
