import { defineStore } from "pinia";
import { useRoutePath } from "@/composables";

interface AuthState {
  activeTab: string;
}

export const useAppStore = defineStore("app-store", {
  state: (): AuthState => ({
    activeTab: useRoutePath(),
  }),
  getters: {
    getActiveTab: (state) => state.activeTab,
  },
  actions: {
    setActiveTab(tab: string) {
      this.activeTab = tab;
    },
    /** 重置app状态 */
    resetAuthStore() {
      this.$reset();
    },
  },
});
