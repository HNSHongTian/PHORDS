<template>
  <div>
    <div style="background-color: #eee">
      <router-link to="/">
        <h1 style="font-size: 40px; padding: 20px; text-align:left; color: black; width: 500px">
          PHORDS-vistors
        </h1>
      </router-link>
      <hr>
    </div>
    <Row style="background: #eee;padding:50px; height: 680px">
      <Col span="11">
        <Card :bordered="true" style="height: 520px">
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
        <Card bordered="true" style="height: 520px">
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
<hr color="#eee">
          <br/>
          <br/>
          <p style="color: darkgray; text-align: left">
            说明:
          </p>
          <p style="color: darkgray">
            游客可以在输入文本框输入一段文字，然后生成相关图片
          </p>
          <p style="color: darkgray">
            将与此相关的一系列图片呈现在右面，游客可以自行浏览
          </p>
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

