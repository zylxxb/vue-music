<template>
  <div class="mine">
    <div class="sub">
      <div class="bar">
        <div class="bar-cut">
          <div class="one">
            <img src="@/assets/bar/sy.png">
          </div>
        </div>
        <div class="bar-cut">
          <div class="one">
            <img src="@/assets/bar/radio.png">
          </div>
        </div>
        <div class="bar-cut">
          <div class="one">
            <img src="@/assets/bar/book.png">
          </div>
        </div>
        <div class="bar-cut">
          <div class="one">
            <img src="@/assets/bar/yn.png">
          </div>
        </div>
      </div>
      <div class="title">
        <div class="bar-cut">
          黑胶时代
        </div>
        <div class="bar-cut">
          FM收音机
        </div>
        <div class="bar-cut">
          夜读物语
        </div>
        <div class="bar-cut">
          治愈声线
        </div>
      </div>
    </div>
    <div class="middle">
      <div class="line">
        <div class="box-left">
          <img src="@/assets/bar/yy.png">
        </div>
        <div class="box-center">
          本地音乐
        </div>
        <div class="box-right">
          <img src="@/assets/bar/xy.png">
        </div>
      </div>
      <div class="line">
        <div class="box-left">
          <img src="@/assets/bar/bf.png">
        </div>
        <div class="box-center">
          最近播放
        </div>
        <div class="box-right">
          <img src="@/assets/bar/xy.png">
        </div>
      </div>
      <div class="line">
        <div class="box-left">
          <img src="@/assets/bar/sc.png">
        </div>
        <div class="box-center">
          我的收藏
        </div>
        <div class="box-right">
          <img src="@/assets/bar/xy.png">
        </div>
      </div>
      <div class="line">
        <div class="box-left">
          <img src="@/assets/bar/dt.png">
        </div>
        <div class="box-center">
          我的电台
        </div>
        <div class="box-right">
          <img src="@/assets/bar/xy.png">
        </div>
      </div>
    </div>
    <div class="sup">
      <div class="tab">
        <div class="left">
          我创建的歌单
        </div>
        <div class="right">
          <span>+</span>
        </div>
      </div>
      <div class="panel">
        <ul class="list">
          <li>
            <div class="poster">
              <img src="@/assets/bar/love.png">
            </div>
            <div class="name">
              我喜欢的音乐
            </div>
          </li>
        </ul>
      </div>
      <panel />
    </div>
    <div class="padding">
    </div>
  </div>
</template>
<script>

export default {
  name: "mine",
  data: () => ({

  })
}
</script>
<style scoped>
.mine {
  width: 100%;
  position: relative;
  top: 50px;
  color: #999
}

.padding {
  height: 60px;
}

.sub {
  padding-top: 25px;
}

.middle {
  padding-top: 30px;
  padding-bottom: 20px;
  height: 201px;
  width: 90%;
  margin: 0 auto;
  border-bottom: 1px solid #ccc;
}

.bar {
  margin: 0 auto;
  padding-bottom: 10px;
  width: 80%;
  height: 60px;
  display: flex
}

.title {
  width: 80%;
  height: 20px;
  display: flex;
  margin: 0 auto;
  text-align: center;
  line-height: 20px;
}

.bar-cut {
  flex:1;
}

.one {
  width: 50px;
  height: 50px;
  -webkit-border-radius: 40px;
  border-radius: 100px;
  overflow: hidden;
  margin: 0 auto;
  background-color: red;
  border: 10px solid red
}

.sub img {
  height: 30px;
  display: block;
}

.middle .line {
  display: flex;
  height: 40px;
  line-height: 40px;
}

.middle .line .box-left {
  flex:1;
  text-align: center;
}

.middle .line .box-right {
  flex:1;
  font-size: 18px;
  text-align: right;
}

.middle .line .box-left img {
  width: 24px;
  height: 24px
}

.middle .line .box-right img {
  width: 24px;
  height: 24px
}

.middle .line .box-center {
  flex:3;
  font-size: 18px;
}

.sup {
  width: 90%;
  margin: 0 auto;
}

.sup .tab {
  display: flex;
  height: 50px;
  line-height: 50px;
}

.sup .tab .left{
  flex:1;
  font-size: 18px;
  font-weight: bold;
}

.sup .tab .right{
  flex:1;
  text-align: right;
  font-size: 30px;
}


.panel .list li {
  height: 60px;
  padding-left: 0;
  display: flex;
  padding-bottom: 10px;
}

.panel .list li .poster {
  flex: 1;
  position: relative;
  height: 50px;
  text-align: center;
}

.panel .list li .poster img {
  height: 50px;
  background-color: red;
  width: 50px;
  border: 10px solid red;
  border-radius: 5px;
}

 .name {
  flex: 4;
  font-size: 16px;
  line-height: 50px;
}

</style>
