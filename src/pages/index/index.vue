<template>
  <basic-layout show-tab-bar>
    <custom-navbar title="首页" />
    <nut-button type="primary" @click="getSetting()">click</nut-button>
  </basic-layout>
</template>

<script setup lang="ts">
import Taro from "@tarojs/taro";

// import { reactive, toRefs } from 'vue';
// const check = () => {
//   console.log(API_URL)
// }

// const getUserProfile = () => {
// }

const getSetting = () => {
  Taro.getSetting({
    success: function (res) {
      console.log(res.authSetting["scope.userInfo"]);
      if (!res.authSetting["scope.userInfo"]) {
        Taro.authorize({
          scope: "scope.userInfo",
          success: function () {
            console.log("已经授权");
          },
          fail: function () {
            console.log("失败");
          },
          complete: function () {
            console.log("完成");
          },
        });
      } else {
        Taro.getUserProfile({
          desc: "用于完善会员资料", // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
          success: (res) => {
            // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
            console.log(res);
          },
        });
      }
    },
  });
};
</script>

<style lang="scss"></style>
