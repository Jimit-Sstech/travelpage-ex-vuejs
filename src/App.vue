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
html {
  scroll-behavior: smooth;
  overflow: scroll;
}
#app {
  font-family: "Poppins", sans-serif;
  font-family: "Roboto", sans-serif;
  font-family: "Tektur", cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 60rem;
  margin: 0 auto;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.dark {
  background-color: rgb(46, 45, 45);
  color: white;
}
.light {
  background-color: white;
  color: #2c3e50;
}
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(179, 179, 179);
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

@media screen and (max-width: 980px) {
  #app {
    max-width: 90%;
  }
}
</style>
