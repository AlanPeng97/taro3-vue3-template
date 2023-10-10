import { createApp } from "vue";
import { setupStore } from "./stores";
import { setupAssets } from "./plugins";
import Taro from "@tarojs/taro";
// import './app.scss'

const App = createApp({
  onShow(options) {
    console.log(options);
    Taro.login({
      success: function (res) {
        console.warn(res);
        if (res.code) {
          //发起网络请求
          // Taro.request({
          //   url: 'https://test.com/onLogin',
          //   data: {
          //     code: res.code
          //   }
          // })
        } else {
          console.log("登录失败！" + res.errMsg);
        }
      },
    });
  },
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
});

function setupApp() {
  setupAssets();
  setupStore(App);
}

setupApp();
export default App;
