<script>
import AppHeader from "./components/ui/AppHeader.vue";
import AppHome from "./components/pages/AppHome.vue";

export default {
  components: { AppHeader, AppHome },
};
</script>

<template>
  <AppHeader />
  <main>
    <div class="container">
      <AppHome />
    </div>
  </main>
</template>

<style lang="scss">
@use "./assets/styles/general.scss" as *;
</style>
