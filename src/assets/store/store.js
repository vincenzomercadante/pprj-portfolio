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
      href: "#experience",
      text: "experience",
    },
    {
      href: "#projects",
      text: "projects",
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

  skillCards: [
    {
      name: "GIT",
      status: "unlocked",
      image: "git.png",
    },
    {
      name: "HTML",
      status: "unlocked",
      image: "html.png",
    },
    {
      name: "CSS",
      status: "unlocked",
      image: "css.png",
    },
    {
      name: "Bootstrap",
      status: "unlocked",
      image: "bootstrap.png",
    },
    {
      name: "SASS",
      status: "unlocked",
      image: "sass.png",
    },
    {
      name: "Javascript",
      status: "unlocked",
      image: "javascript.png",
    },
    {
      name: "Vue.js",
      status: "unlocked",
      image: "vue.png",
    },
    {
      name: "React",
      status: "locked",
      image: "react.png",
    },
    {
      name: "Typescript",
      status: "locked",
      image: "typescript.png",
    },
    {
      name: "PHP",
      status: "unlocked",
      image: "php.png",
    },
    {
      name: "Laravel",
      status: "unlocked",
      image: "laravel.png",
    },
    {
      name: "MySQL",
      status: "unlocked",
      image: "mysql.png",
    },
    {
      name: "Node.js",
      status: "locked",
      image: "node.png",
    },
    {
      name: "Express.js",
      status: "locked",
      image: "express.png",
    },
    {
      name: "MongoDB",
      status: "locked",
      image: "mongodb.png",
    },
  ],

  profileImage: "../../assets/img/profile-photos/profile1.JPG",

  activeAbout: "Bio",

  hobbyCards: [
    {
      image: "../../assets/img/hobby-photos/animemanga.jpg",
      title: "Anime/Manga",
    },
    {
      image: "../../assets/img/hobby-photos/travel.jpg",
      title: "Travel",
    },
    {
      image: "../../assets/img/hobby-photos/photography.jpg",
      title: "Photography",
    },
    {
      image: "../../assets/img/hobby-photos/d&d.jpg",
      title: "D&D",
    },
    {
      image: "../../assets/img/hobby-photos/tcg.jpg",
      title: "TCG",
    },
    {
      image: "../../assets/img/hobby-photos/videogames.jpg",
      title: "Videogames",
    },
    {
      image: "../../assets/img/hobby-photos/gym.jpg",
      title: "Gym",
    },
    {
      image: "../../assets/img/hobby-photos/calcio.jpg",
      title: "Football",
    },
  ],
});
