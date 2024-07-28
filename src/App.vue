<script>
import AppHeader from "./components/ui/AppHeader.vue";
import AppHome from "./components/sections/AppHome.vue";
import AppAbout from "./components/sections/AppAbout.vue";
import AppExperience from "./components/sections/AppExperience.vue";
import AppHire from "./components/sections/AppHire.vue";
import AppProjects from "./components/sections/AppProjects.vue";
import AppSkill from "./components/sections/AppSkill.vue";

export default {
  data() {
    return {
      isVisible: false,
    };
  },

  components: {
    AppHeader,
    AppHome,
    AppAbout,
    AppExperience,
    AppHire,
    AppProjects,
    AppSkill,
  },

  methods: {
    handleScroll() {
      this.isVisible = window.scrollY > 500 ? true : false;
    },
  },

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
};
</script>

<template>
  <AppHeader />
  <main>
    <AppHome />
    <AppAbout />
    <AppSkill />
    <AppExperience />
    <AppProjects />
    <AppHire />
  </main>
  <!-- scroll top button -->
  <a v-if="isVisible" href="#" class="go-up-arrow" id="returnTop">
    <font-awesome-icon icon="fa-solid fa-chevron-up" />
  </a>
</template>

<style lang="scss">
@use "./assets/styles/general.scss" as *;
</style>
