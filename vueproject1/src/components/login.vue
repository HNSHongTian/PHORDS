<template>
  <div>
    <div style="background-color: #eee">
      <router-link to="/user">
        <h1 style="font-size: 40px; padding: 20px; text-align:left; color: black; width: 500px">
          PHORDS-login
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
          用户登录
        </h1>
        <br>

        <Input prefix="ios-planet" placeholder="输入邮箱" style="width: 400px" />
        <br>
        <br>
        <i-input  type = "password" placeholder="您的密码" style="width: 400px"/>
        <br>
        <br>
        <router-link to="/function">
        <i-button type = "default">
          确认
        </i-button>
        </router-link>
      </Card>
    </div>
  </div>
</template>

<script>
    export default {
        name: "login"
    }
</script>

<style scoped>

</style>
