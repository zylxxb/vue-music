<template lang="html">
  <div class="details">
    <Title :ting_uid="this.$route.params.ting_uid"/>
    <List :ting_uid="this.$route.params.ting_uid"/>
  </div>
</template>

<script>
import Title from "../../components/details/title"
import List from "../../components/details/list"

export default {
  name:"artistsDetails",
  data(){
    return{
    }
  },
  components:{
    Title,
    List
  }
}
</script>

<style scoped>

.details {
  width: 100%;
  position: relative;
  top: 50px;
}

</style>
