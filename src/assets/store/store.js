// import reactivity
import { reactive } from "vue";

// store object with all the global variables
export const store = reactive({
  headerLinks: [
    {
      href: "#",
      text: "home",
    },
    {
      href: "#about",
      text: "about",
    },
    {
      href: "#skill",
      text: "skill",
    },
    {
      href: "#projects",
      text: "projects",
    },
    {
      href: "#experience",
      text: "experience",
    },
    {
      href: "#hire",
      text: "hire",
    },
  ],

  socialLinks: [
    {
      text: "Linkedin",
      href: "https://www.linkedin.com/in/vincenzo-mercadante-262357211/",
      icon: "fa-linkedin",
    },
    {
      text: "Github",
      href: "https://github.com/vincenzomercadante",
      icon: "fa-github",
    },
    {
      text: "Instgram",
      href: "https://www.instagram.com/mercacenzo/",
      icon: "fa-instagram",
    },
  ],
});
