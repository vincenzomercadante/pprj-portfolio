<script>
import Typed from "typed.js";
import { store } from "../../assets/store/store";

export default {
  data() {
    return {
      store,
    };
  },

  mounted() {
    const typed = new Typed("#auto-typed", {
      strings: ["Front End", "Back End", "Full Stack"],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
    });
  },
};
</script>

<template>
  <div class="main-wrapper d-grid" id="home">
    <!-- left section with text links and button -->
    <section
      class="d-flex justify-content-center align-items-start flex-column"
    >
      <!-- greeting text -->
      <div class="d-flex align-items-center">
        <p>
          Hi visitor
          <!-- greeting gif -->
          <img
            src="../../assets/img/cute-wave-emoji-hand-59s88kk0zj3xho40.gif"
            alt="hi gif"
            class="greeting-gif ms-1"
          />
          <br />
          I'm <span>Vincenzo</span><br />
          <!-- text with auto typed generation -->
          <span id="auto-typed"></span>
          Web Developer
        </p>
      </div>

      <!-- social links -->
      <div class="d-flex gap-4 my-3">
        <a
          v-for="social in store.socialLinks"
          :href="social.href"
          class="container-rounded social-link"
        >
          <!-- brand icon -->
          <font-awesome-icon :icon="'fa-brands ' + social.icon" />
        </a>
      </div>

      <!-- button -->
      <div class="d-flex align-items-center my-3">
        <!-- router link button to about and hire page -->
        <a href="#about" class="btn-link">More...</a>
        <a href="#hire" class="btn-link ms-3">Hire Me</a>
      </div>
    </section>

    <!-- profile image section -->
    <section class="d-flex align-items-center justify-content-center">
      <figure class="m-0 profile-image">
        <img src="../../assets/img/personal-image.png" alt="profile image" />
      </figure>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/styles/partials/variables" as *;
@use "../../assets/styles/partials/mixins" as *;
.main-wrapper {
  grid-template-columns: 60% 40%;
  height: $main-height;
  color: $secondary-txt-color;

  .greeting-gif {
    height: 60px;
  }

  .profile-image img {
    height: 800px;
    transform: translateY(-60px);
    filter: drop-shadow(0 0 0.75rem $main-color);
  }

  p {
    margin: 0;
    font-size: $greet-size;
    font-weight: bold;

    span {
      @include main-color;
    }
  }

  .social-link {
    height: 50px;
    font-size: 30px;
    background-color: #d9d9d9;
    cursor: pointer;
    color: $general-bg;
    transition: color 0.3s linear;

    &:hover {
      color: $main-color;
    }
  }
}
</style>
