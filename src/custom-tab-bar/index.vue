<template>
  <nut-config-provider>
    <nut-tabbar :model-value="activeTab" bottom safe-area-inset-bottom @tab-switch="tabSwitch">
      <nut-tabbar-item v-for="item in tabBar.list" :key="item.pagePath" :name="item.pagePath" :tab-title="item.text">
        <template #icon>
          <!-- <div class="text-25px" :class="item.icon" /> -->
          <icon-font :name="item.icon" size="18" :color="item.pagePath == activeTab ? '#00cdc4' : ''"></icon-font>
        </template>
      </nut-tabbar-item>
    </nut-tabbar>
  </nut-config-provider>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { switchTab } from "@tarojs/taro";
import { useAppStore } from "@/stores";
import IconFont from "@/components/iconfont/index.vue";

const tabBar = {
  custom: true,
  color: "#000000",
  selectedColor: "#FF0000",
  list: [
    {
      pagePath: "/pages/index/index",
      text: "首页",
      icon: "xingqiu",
    },
    {
      pagePath: "/pages/tab-one/index",
      text: "tabOne",
      icon: "yonghu",
    },
  ],
};

const tabSwitch = (item: any, url: string) => {
  console.log(item, url);
  appStore.setActiveTab(url);
  switchTab({ url });
};

const appStore = useAppStore();
const activeTab = computed(() => appStore.getActiveTab);
</script>
<script lang="ts">
export default {
  options: {
    addGlobalClass: true,
  },
};
</script>

<style lang="scss"></style>
