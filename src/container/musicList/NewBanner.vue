<template>
  <div class="">
    <MusicList :url="url" />
  </div>
</template>
<script>
import MusicList from "../../components/MusicList"

export default {
  name: "newbanner",
  components: {
    MusicList
  },
  data: () => ({
    url:"/v1/restserver/ting?method=baidu.ting.billboard.billList&type=1&size=5&offset=0"
  })
}
</script>
<style scoped>
</style>
