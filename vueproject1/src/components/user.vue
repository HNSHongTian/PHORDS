<template>
  <div style="background-color: #eee; height: 800px">
    <router-link to="/">
    <h1 style="font-size: 40px; padding: 50px; text-align:left; color: black">
      PHORDS:A convenient words-to-photos application
    </h1>
    </router-link>
    <hr>
    <Row style="background:#eee;padding:200px">
      <Col span="7">
        <router-link to="/regist" style="color: #eee">
        <Card :bordered="false">
          <p slot="title">新用户注册</p>
          <p style="color: black">1.申请账号</p>
          <p style="color: black">2.手机号/邮箱验证</p>
          <p style="color: black">3.注册账号体验全部功能</p>
        </Card>
        </router-link>
      </Col>
      <Col span="7" offset="1">
        <router-link to="/login" style="color: #eee">
        <Card :bordered="false">
          <p slot="title">用户登录</p>
          <p style="color: black">1.用户享有全部功能服务</p>
          <p style="color: black">2.可以输入文字生成图片</p>
          <p style="color: black">3.可以搜索最近浏览记录</p>
        </Card>
        </router-link>
      </Col>
      <Col span="7" offset="1">
        <router-link to="/visitor" style="color: #eee">
        <Card :bordered="false">
          <p slot="title">游客访问</p>
          <p style="color: black">1.可以享用部分功能</p>
          <p style="color: black">2.输入文字生成图片并查看</p>
          <p style="color: black">3.若想体验全功能请申请账号</p>
        </Card>
        </router-link>
      </Col>
    </Row>
  </div>
</template>

<script>
    export default {
        name: "user"
    }
</script>

<style scoped>
  .fade-in-words{ width: 200px; margin: 0 auto; text-align: center;}/*自定义一个透明度从0到1的动画,它的名称是fade-in*/
  @keyframes fade-in{ 0%{ opacity: 0;} 100%{opacity:1;}}
  @-webkit-keyframes fade-in{ 0%{ opacity: 0;} 100%{opacity:1;}}
  @-ms-keyframes fade-in{ 0%{ opacity: 0;} 100%{opacity:1;}}
  @-o-keyframes fade-in{ 0%{ opacity: 0;} 100%{opacity:1;}}
  @-moz-keyframes fade-in{ 0%{ opacity: 0;} 100%{opacity:1;}}
  .first-words{
    opacity: 0; /*实先规定文字的状态是不显示的*/
    animation: fade-in 4s ease 0s 1;
    /*调用名称为fade-in的动画,全程动画显示时间4S,进入方式为ease,延时0S进入,播放次数1次*/
    -webkit-animation: fade-in 4s ease 0s 1;
    -moz-animation: fade-in 4s ease 0s 1;
    -o-animation: fade-in 4s ease 0s 1;
    -ms-animation: fade-in 4s ease 0s 1; /*规定动画的最后状态为结束状态*/
    animation-fill-mode:forwards;
    -webkit-animation-fill-mode: forwards;
    -o-animation-fill-mode: forwards;
    -ms-animation-fill-mode: forwards;
    -moz-animation-fill-mode: forwards;
  }
  .second-words{
    opacity: 0;
    animation: fade-in 2s ease 2s 1;
    -webkit-animation: fade-in 2s ease 2s 1;
    -moz-animation: fade-in 2s ease 2s 1;
    -o-animation: fade-in 2s ease 2s 1;
    -ms-animation: fade-in 2s ease 2s 1;
    /*规定动画的最后状态为结束状态*/
    animation-fill-mode:forwards;
    -webkit-animation-fill-mode: forwards;
    -o-animation-fill-mode: forwards;
    -ms-animation-fill-mode: forwards;
    -moz-animation-fill-mode: forwards;
  }
  @keyframes fade-in2{ 0%{ opacity: 0.3;} 100%{opacity:1;}}
  @-webkit-keyframes fade-in2{ 0%{ opacity: 0.3;} 100%{opacity:1;}}
  @-ms-keyframes fade-in2{ 0%{ opacity: 0.3;} 100%{opacity:1;}}
  @-o-keyframes fade-in2{ 0%{ opacity: 0.3;} 100%{opacity:1;}}
  @-moz-keyframes fade-in2{ 0%{ opacity: 0.3;} 100%{opacity:1;}}
</style>
