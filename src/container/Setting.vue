<template>
  <div class="setting">
    <div class="more-list">
      <div class="wrapper">
        <div class="header">
          <div class="sub">
            <div class="pic">
              <div class="avatar">
                <img src="../assets/6.png">
              </div>
            </div>
            <div class="id">
              <p>彭裤子是裤子</p>
              <Badge text="Lv.10" type="normal"></Badge>
            </div>
            <div class="get">
              <Badge text="签到"></Badge>
            </div>
          </div>
          <div class="sup">
            <ul>
              <li>
                44
                <br>
                <p>粉丝</p>
                <span class="gap-line"> </span>
              </li>
              <li>
                33
                <br>
                <p>粉丝</p>
                <span class="gap-line"> </span>
              </li>
              <li>
                22
                <br>
                <p>粉丝</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="tab">
          <ul class="list">
            <li>口袋铃声</li>
            <li>定时关闭</li>
            <li>音乐闹钟</li>
            <li>夜间模式<i-switch v-model="switch1" @on-change="change" /></li>
            <li>加入口袋音乐</li>
            <li>关于</li>
            <li>设置</li>
          </ul>
        </div>
        <div class="loginOut">
          <p>退出登录</p>
        </div>
      </div>
    </div>
    <div class="padding">
    </div>
  </div>
</template>
<script>

export default {
  name: "top",
  data: () => ({
    switch1: false
  }),
  methods: {
    change (status) {
      if(this.switch1 === true) {
         document.body.style.backgroundColor = 'rgb(29, 31, 33)'
         document.querySelector('.top ').style.backgroundColor = '#000'
         document.querySelector('.bottom ').style.backgroundColor = '#000'
      } else {
         document.body.style.backgroundColor = '#fff'
         document.querySelector('.top ').style.backgroundColor = '#f9f9f9'
         document.querySelector('.bottom ').style.backgroundColor = '#f9f9f9'
      }
    }
  }
}
</script>
<style scoped>

.setting {
  width: 100%;
  position: relative;
  top: 50px;
}

.wrapper {
  clear: both;
  overflow: hidden;
  height: 557px;
}

.header {
  padding: 20px 20px 10px;
}

.tab {
}

.sub {
  display: flex;
  padding: 5px;
}

.sup {
  font-size: 18px;
  font-weight: bold;
}

.sup p {
  font-weight: normal;
  font-size: 12px;
}

.pic {
  flex: 1
}

.avatar {
  width: 80px;
  height: 80px;
  -webkit-border-radius: 40px;
  border-radius: 40px;
  overflow: hidden;
}

.id {
  flex:2;
  font-size: 18px;
  padding-top: 15px;
  padding-left: 30px;
}

.get {
  flex: 1;
  padding: 10px 0px 20px 40px;
}

.sup ul{
    display: flex;
}

.sup ul li{
  padding: 18px 0 12px 0;
  font-size: 16px;
  flex: 1;
  text-align: center;
  color: #999;
  position: relative;
}

.gap-line {
    position: absolute;
    right: 0;
    top: 20px;
    height: 18px;
    width: 1px;
    border-left: 1px solid #eee;
}

.list{
  font-size: 15px;
}

.list li {
  height: 45px;
  line-height: 40px;
  display: flex;
  color: #999;
  padding: 5px 40px;
}

.list li span {
  display: inline-block;
  position: fixed;
  right: 20px;
  margin: 10px
}

.loginOut p{
  padding-top: 15px;
  color: red;
  text-align: center;
  font-size: 16px;
  line-height: 18px
}

.ivu-switch-checked {
  background-color: red
}

</style>
