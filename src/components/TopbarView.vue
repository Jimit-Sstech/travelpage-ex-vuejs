<template>
  <div class="topbar">
    <div class="topbar__info">
      <h3>
        <router-link to="/">{{ $t("title") }}</router-link>
      </h3>
      <div class="theme__icon" @click="toggleTheme">
        <font-awesome-icon
          icon="moon"
          class="search__icon"
          v-if="userTheme === 'light'"
        />
        <font-awesome-icon icon="lightbulb" class="search__icon" v-else />
      </div>
      <div>
        <select v-model="$i18n.locale">
          <option
            v-for="(locale, idx) in locales"
            :key="`locale-${idx}`"
            :value="locale"
          >
            {{ locale }}
          </option>
        </select>
      </div>
    </div>
    <hr class="custom__hr" />
  </div>
</template>

<script>
import { onMounted, reactive, ref, toRefs } from "vue";
import { useStore } from "vuex";

export default {
  name: "TopbarView",
  // setup(props, { emit }) {
  setup() {
    const store = useStore();
    const state = reactive({
      locales: ["fr", "en"],
    });
    const userTheme = ref(store.state.theme);

    const setTheme = (theme) => {
      store.commit("setTheme", theme);
      userTheme.value = theme;
      // Pass updated theme value to parent component App.vue for assign in provided
      // emit('update:themeType', userTheme.value)
    };

    const toggleTheme = () => {
      const activeTheme = userTheme.value;
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
      ...toRefs(state),
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
  gap: 20px;
}

.custom__hr {
  margin-top: 10px;
  border-top: 1px solid lightgray;
}

.topbar__info h3 {
  font-weight: 900;
  width: -webkit-fill-available;
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
  margin-right: 30px;
}

select {
  width: 10rem;
  padding: 5px 20px;
  font-size: 16px;
  cursor: pointer;
}

@media screen and (max-width: 1023px) {
  .topbar__info .theme__icon {
    margin-left: 0;
  }
}

@media screen and (max-width: 600px) {
  select {
    width: fit-content;
    padding: 5px 10px;
    font-size: 14px;
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
