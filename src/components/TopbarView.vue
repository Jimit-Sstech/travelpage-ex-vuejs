<template>
  <div class="topbar">
    <div class="topbar__info">
      <h3>
        <router-link to="/"> Introducing the new AirTravel </router-link>
      </h3>
      <div class="theme__icon" @click="toggleTheme">
        <font-awesome-icon
          icon="moon"
          class="search__icon"
          v-if="userTheme === 'light'"
        />
        <font-awesome-icon icon="lightbulb" class="search__icon" v-else />
      </div>
      <p>Learn more</p>
    </div>
    <hr class="custom__hr" />
  </div>
</template>

<script>
import { onMounted, ref } from "vue";

export default {
  name: "TopbarView",
  setup(props, { emit }) {
    const getTheme = () => {
      return localStorage.getItem("user-theme");
    };
    const userTheme = ref(getTheme());

    const setTheme = (theme) => {
      localStorage.setItem("user-theme", theme);
      userTheme.value = theme;
      // Pass updated theme value to parent component App.vue for assign in provided 
      emit('update:themeType', userTheme.value)
      document.documentElement.className = theme;
    };

    const toggleTheme = () => {
      const activeTheme = localStorage.getItem("user-theme");
      if (activeTheme === "light") {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    };

    onMounted(() => setTheme(userTheme.value));

    return {
      userTheme,
      toggleTheme,
    };
  },
};
</script>

<style scoped>
.topbar__info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 20px 0px 20px;
}

.custom__hr {
  margin-top: 10px;
  border-top: 1px solid lightgray;
}

.topbar__info h3 {
  font-weight: 900;
  transform: translateX(100%);
}

.topbar__info h3 a {
  text-decoration: none;
  color: inherit;
}

.topbar__info p {
  font-size: 14px;
  font-weight: 500;
}

.topbar__info .theme__icon {
  cursor: pointer;
  margin-left: 30rem;
}

@media screen and (max-width: 1023px) {
  .topbar__info h3 {
    transform: translateX(0);
  }
  .topbar__info .theme__icon {
    margin-left: 0;
  }
}

@media screen and (max-width: 500px) {
  .topbar__info h3 {
    font-size: 14px;
  }
  .topbar__info p {
    font-size: 12px;
  }
  .topbar__info .theme__icon .search__icon {
    font-size: 12px;
  }
}
</style>
