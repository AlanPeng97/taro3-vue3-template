export default defineAppConfig({
  pages: ["pages/index/index", "pages/tab-one/index"],
  window: {
    backgroundColor: "#fff",
    backgroundTextStyle: "light",
    backgroundColorTop: "#fff",
    backgroundColorBottom: "#fff",
    navigationBarBackgroundColor: "#fff",
    navigationBarTextStyle: "black",
    navigationBarTitleText: "taro3",
    navigationStyle: "custom",
  },
  tabBar: {
    custom: true,
    color: "#000000",
    selectedColor: "#FF0000",
    borderStyle: "white",
    backgroundColor: "#fff",
    list: [
      {
        pagePath: "pages/index/index",
        text: "首页",
      },
      {
        pagePath: "pages/tab-one/index",
        text: "tab-one",
      },
    ],
  },
});
