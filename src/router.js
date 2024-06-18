// import vue router methods
import { createMemoryHistory, createRouter } from "vue-router";

// import all the component pages
import AppHome from "./components/pages/AppHome.vue";
import AppAbout from "./components/pages/AppAbout.vue";
import AppExperience from "./components/pages/AppExperience.vue";
import AppProjects from "./components/pages/AppProjects.vue";
import AppHire from "./components/pages/AppHire.vue";

// create the routes object array with all the route component pairs
const routes = [
  { path: "/", component: AppHome },
  { path: "/about", component: AppAbout },
  { path: "/experience", component: AppExperience },
  { path: "/projects", component: AppProjects },
  { path: "/hire-me", component: AppHire },
];

// create the router
export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
