import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCampground,
  faCity,
  faHouse,
  faMagnifyingGlass,
  faRocket,
  faSoccerBall,
  faStar,
  faTree,
  faUmbrellaBeach,
  faVirus,
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
  faStar
);

createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
