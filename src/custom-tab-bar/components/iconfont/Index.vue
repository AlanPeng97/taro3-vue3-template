<template>
  <component :is="name" :size="size" :color="color" :style="style"></component>
</template>
<script>
/* eslint-disable */
import Duihua from "./Duihua.vue";
import Fabu from "./Fabu.vue";
import Yonghu from "./Yonghu.vue";
import Redu from "./Redu.vue";
import Xingqiu from "./Xingqiu.vue";

export default {
  name: "iconfont",
  props: {
    name: {
      type: String,
      default: "",
    },
    size: {
      type: String,
      default: 18,
    },
    color: {
      type: [String, Array],
      default: "",
    },
    style: {
      type: String,
      default: "display: block;",
    },
  },
  components: {
    Duihua,
    Fabu,
    Yonghu,
    Redu,
    Xingqiu,
  },
};
</script>
