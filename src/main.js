import { createApp, ref } from "vue";
import App from "./App.vue";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
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
  faXmark
);

const app = createApp(App);

// theme type dark/light using provide/inject
app.config.globalProperties.$themeType = ref(localStorage.getItem("user-theme") ? localStorage.getItem("user-theme") : 'light')

app.use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
