<script>
import { store } from "../../assets/store/store.js";

export default {
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <!-- header -->
  <header class="container d-flex align-items-center">
    <!-- navbar -->
    <nav class="d-flex align-items-center justify-content-between flex-grow-1">
      <!-- header main title -->
      <a href="#" class="text-capitalize fw-bold brand-link"
        >Vincenzo <span>Mercadante</span></a
      >

      <!-- header link -->
      <ul class="d-flex gap-3 m-0 p-0">
        <li v-for="link in store.headerLinks">
          <a :href="link.href" class="text-uppercase fw-bold header-link">{{
            link.text
          }}</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
@use "../../assets/styles/partials/variables" as *;
@use "../../assets/styles/partials/mixins" as *;

header {
  height: $header-height;

  nav {
    .brand-link,
    .header-link {
      color: $secondary-txt-color;
      font-size: $header-title-size;
    }

    .brand-link {
      span {
        @include main-color;
      }
    }

    .header-link {
      cursor: pointer;
      transition: color linear 0.3s;

      &:hover {
        color: $main-color;
      }
    }
  }
}
</style>
