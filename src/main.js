import { createApp } from "vue";
import App from "./App.vue";

// import the router from my router js file
import { router } from "./router";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

/* add icons to the library */
library.add(faLinkedin, faGithub, faInstagram);

// create app
const app = createApp(App);

// allow app to use the router created
app.use(router);

// allow app to use font awesome components
app.component("font-awesome-icon", FontAwesomeIcon);

// mount the app
app.mount("#app");
