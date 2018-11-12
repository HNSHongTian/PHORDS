<template>
<div>
  <div>
    <i-menu mode="horizontal" theme="dark" active-name="1" style="opacity: 0.7">
      <div class="layout-logo"></div>
      <div class="layout-nav">
         <router-link to="/">
          <menu-item name="1">
            <h1>
              <font color=white>
                PHORDS
              </font>
            </h1>
          </menu-item>
         </router-link>
        <menu-item name="2">
          <h2>
            <font color=white>
              DESINED BY GINAJAMESTEFAN
            </font>
          </h2>
        </menu-item>


        <Submenu name="用户">
          <template slot="title">
          <Icon type="ios-contact" />
          用户
          </template>
          <MenuGroup title="用户">
          <MenuItem name="3-1">历史浏览</MenuItem>
          <MenuItem name="3-2">注销账号</MenuItem>
          </MenuGroup>
          </Submenu>



        <menu-item name="4">
          <Icon type="ios-construct" />
          综合设置
          </menu-item>

        <menu-item name="5">
          <Icon type="md-photos" />
          图片缓存
        </menu-item>

      </div>
    </i-menu>
  </div>
  <Row style="background:  #eee;padding:50px; height: 700px">
    <Col span="11">
      <Card :bordered="true" style="height: 500px">
        <p slot="title">
          <font color="black">
          请输入您的文字
          </font>
        </p>
        <Input v-model="value5"  style="height: 400px" rows="18" type="textarea" placeholder="Enter something..." />
        <div align="right">
        <i-button type = "default" @click="sendmessage">
          确定
        </i-button>
        </div>
      </Card>
    </Col>
    <Col span="12" offset="1">
      <Card bordered="true" style="height: 500px">
        <p slot="title">
          <font color="black">
          图片如下所示
        </font>
        </p>
        <!--<img src="../assets/logo.png" id="img1"/>-->

        <Scroll :on-reach-bottom="handleReachBottom">
          <Card dis-hover v-for="(item, index) in list1" :key="index" style="margin: 32px 0; width: 600px; height: 300px">
            Content {{ item }}
          </Card>
        </Scroll>

      </Card>
    </Col>
  </Row>

</div>
</template>

<script>
    export default {
        name: "function",
      data () {
        return {
          value5: '',
          value6: '',
          list1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        }
      },
      methods: {
        handleReachBottom () {
          return new Promise(resolve => {
            setTimeout(() => {
              const last = this.list1[this.list1.length - 1];
              for (let i = 1; i < 11; i++) {
                this.list1.push(last + i);
              }
              resolve();
            }, 2000);
          });
        }
      }
    }
</script>

<style scoped>

</style>
