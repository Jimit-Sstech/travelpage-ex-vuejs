import { createStore } from "vuex";

export default createStore({
  state: {
    theme: localStorage.getItem("user-theme") || "light",
  },
  mutations: {
    setTheme(state, theme) {
      state.theme = theme;
      localStorage.setItem("user-theme", theme);
      document.documentElement.className = theme;
    },
  },
});
