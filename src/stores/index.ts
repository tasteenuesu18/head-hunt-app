// Utilities
import { createPinia } from "pinia";
import { defineStore } from "pinia";

export default createPinia();

export const useModeStore = defineStore("mode", {
  state: () => ({
    mode: "light" as "light" | "mania",
  }),
  actions: {
    setMode(newMode: "light" | "mania") {
      this.mode = newMode;
    },
  },
});
