import { createApp } from "vue";
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
import store from "./store/store";

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

app
  .use(router)
  .use(store)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
