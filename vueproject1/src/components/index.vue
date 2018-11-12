<template>

    <div class="fade-in-words">
      <div class="first-words">
        <p style="font-size: 100px; position:absolute; color: black; top: 200px; left: 50%; margin-left:-350px">
          PHORDS
        </p>
      </div>
      <div class="second-words">
        <p style="font-size: 30px; position: absolute; color: black; top: 350px; left: 50%; font-family: 'Al Nile'; font-style: italic" >A convenient words-to-photos application</p>
      </div>
      <div>
        <router-link to="/user">
        <p style="position: absolute; color: black; top: 500px; font-size: 20px">
          <u>start using this wonderful application</u>
        </p>
        </router-link>
      </div>
    </div>

</template>

<script>
    export default {
        name: "index",
      data () {
        return {
          theme1: 'light'
        }
      },
      methods:{
          findphotos(){
            this.$router.push({name:'function',params:{message:"start"}});
          }
      }
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
