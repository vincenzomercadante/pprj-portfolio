<script></script>

<template>
  <div class="main-wrapper d-grid">
    <section></section>
    <section class="d-flex align-items-center justify-content-center">
      <div class="container-rounded position-relative">
        <figure class="m-0 position-absolute">
          <img src="../../assets/img/personal-image.png" alt="" />
        </figure>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/styles/partials/variables" as *;
.main-wrapper {
  grid-template-columns: 60% 40%;
  height: $main-height;
  color: white;

  .container-rounded {
    height: 500px;

    &::after {
      content: "";
      height: 500px;
      aspect-ratio: 1;
      border: 10px dashed $main-color;
      border-radius: 50%;
      animation-name: spin;
      animation-duration: 8000ms;
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
