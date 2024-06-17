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
  <div class="main-wrapper d-grid">
    <!-- left section with text links and button -->
    <section
      class="d-flex justify-content-center align-items-start flex-column"
    >
      <!-- greeting text -->
      <div class="d-flex align-items-center">
        <p>Hi visitor</p>
        <!-- greeting gif -->
        <img
          src="../../assets/img/cute-wave-emoji-hand-59s88kk0zj3xho40.gif"
          alt="hi gif"
          class="greeting-gif ms-1"
        />
      </div>
      <p>I'm <span>Vincenzo</span></p>
      <!-- text with auto typed generation -->
      <p><span id="auto-typed"></span> Web Developer</p>

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
    </section>

    <!-- profile image section -->
    <section class="d-flex align-items-center justify-content-center">
      <div class="container-rounded position-relative img-profile">
        <figure class="m-0 position-absolute">
          <img src="../../assets/img/personal-image.png" alt="profile image" />
        </figure>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/styles/partials/variables" as *;
@use "../../assets/styles/partials/mixins" as *;
.main-wrapper {
  grid-template-columns: 60% 40%;
  height: $main-height;
  color: white;

  .img-profile {
    height: 500px;

    &::after {
      content: "";
      height: 500px;
      aspect-ratio: 1;
      border: 10px dashed $main-color;
      border-radius: 50%;
      animation-name: spin;
      animation-duration: 30000ms;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }

    figure {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -57%);
      border-radius: 150px;
      overflow: hidden;

      img {
        width: 345px;
        height: 495px;
      }
    }
  }

  .greeting-gif {
    height: 60px;
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

@keyframes spin {
  from {
    rotate: (0deg);
  }
  to {
    rotate: (360deg);
  }
}
</style>
