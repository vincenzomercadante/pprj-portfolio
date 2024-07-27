<script>
import AppHeader from "./components/ui/AppHeader.vue";
import AppHome from "./components/sections/AppHome.vue";
import AppAbout from "./components/sections/AppAbout.vue";
import AppExperience from "./components/sections/AppExperience.vue";
import AppHire from "./components/sections/AppHire.vue";
import AppProjects from "./components/sections/AppProjects.vue";

export default {
  components: {
    AppHeader,
    AppHome,
    AppAbout,
    AppExperience,
    AppHire,
    AppProjects,
  },
};
</script>

<template>
  <AppHeader />
  <main>
    <div class="container">
      <AppHome />
      <AppAbout />
      <AppExperience />
      <AppProjects />
      <AppHire />
    </div>
  </main>
  <div class="go-up-arrow"></div>
</template>

<style lang="scss">
@use "./assets/styles/general.scss" as *;
</style>
