<template>
  <TopbarView />
  <navbar-view />
  <router-view />
</template>

<script>
import NavbarView from "./components/NavbarView.vue";
import TopbarView from "./components/TopbarView.vue";
export default {
  components: {
    NavbarView,
    TopbarView,
  },
};
</script>

<style>
#app {
  font-family: "Poppins", sans-serif;
  font-family: "Roboto", sans-serif;
  font-family: "Tektur", cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-width: 60rem;
  margin: 0 auto;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
