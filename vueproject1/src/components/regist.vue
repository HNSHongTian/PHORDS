<template>
  <div>
  <div style="background-color: #eee">
    <router-link to="/user">
      <h1 style="font-size: 40px; padding: 20px; text-align:left; color: black; width: 500px">
        PHORDS-regist
      </h1>
    </router-link>
    <hr>
  </div>
  <!--<div>-->
    <!--<br>-->
    <!--<br>-->
    <!--<h1>-->
      <!--用户注册-->
    <!--</h1>-->
    <!--<br>-->
    <!--<Input prefix="ios-contact" placeholder="输入昵称" style="width: auto" />-->
  <!--</div>-->
    <div style="background:#eee;padding: 250px">
      <Card :bordered="false" style="padding: 50px; top: -150px;">
        <h1>
        用户注册
        </h1>
        <br>
        <Input prefix="ios-contact" placeholder="输入昵称(大小写英文字母、数字或下划线组成" style="width: 400px" />
        <br>
        <br>
        <Input prefix="ios-planet" placeholder="输入邮箱" style="width: 400px" />
        <br>
        <br>
        <i-input  type = "password" placeholder="您的密码(数字及大小写字母及其任意组合）" style="width: 400px"/>
        <br>
        <br>
        <i-input  type = "password" placeholder="确认您的密码" style="width: 400px"/>
        <br>
        <br>
        <i-button type = "default">
          确认
        </i-button>
      </Card>
    </div>
  </div>
</template>

<script>
    export default {
        name: "regist"
    }
</script>

<style scoped>

</style>
