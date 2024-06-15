// import reactivity
import { reactive } from "vue";

// store object with all the global variables
export const store = reactive({
  headerLinks: {
    titlePage: "vincenzo mercadante",
    pageLinks: [
      {
        href: null,
        text: "home",
      },
      {
        href: null,
        text: "about",
      },
      {
        href: null,
        text: "experience",
      },
      {
        href: null,
        text: "projects",
      },
      {
        href: null,
        text: "hire",
      },
    ],
  },
});
