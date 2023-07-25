import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowCircleUp,
  faBars,
  faCampground,
  faCity,
  faHouse,
  faLightbulb,
  faMagnifyingGlass,
  faMoon,
  faRocket,
  faSoccerBall,
  faStar,
  faTree,
  faUmbrellaBeach,
  faVirus,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import store from "./store/store";
import i18n from "./i18n";

library.add(
  faMagnifyingGlass,
  faHouse,
  faTree,
  faCity,
  faCampground,
  faUmbrellaBeach,
  faSoccerBall,
  faRocket,
  faVirus,
  faStar,
  faBars,
  faMoon,
  faLightbulb,
  faXmark,
  faArrowCircleUp
);

const app = createApp(App).use(i18n);
// app.config.globalProperties.$themeType = ref(localStorage.getItem("user-theme") ? localStorage.getItem("user-theme") : 'light')

app
  .use(router)
  .use(store)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
