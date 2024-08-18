<script>
export default {};
</script>

<template>
  <section id="projects" class="page-section">
    <h2 class="section-title fw-semibold">my projects</h2>

    <div class="container my-5">
      <div class="row">
        <div class="col-4">
          <!-- projects -->
          <section class="projects-section">
            <!-- video section -->
            <div class="video-carousel">
              <div class="video-player-placeholder">
                <font-awesome-icon icon="fa-solid fa-play" />
              </div>
            </div>
            <!-- paragraph section -->
            <div class="paragraph-carousel p-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio voluptates ea sint, reprehenderit doloribus enim itaque
              perspiciatis porro consequatur numquam beatae, cupiditate placeat
              deleniti. Provident nam et nesciunt iure commodi?
            </div>
          </section>
        </div>
        <div class="col-4">
          <!-- projects -->
          <section class="projects-section">
            <!-- video section -->
            <div class="video-carousel">
              <div class="video-player-placeholder">
                <font-awesome-icon icon="fa-solid fa-play" />
              </div>
            </div>
            <!-- paragraph section -->
            <div class="paragraph-carousel p-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio voluptates ea sint, reprehenderit doloribus enim itaque
              perspiciatis porro consequatur numquam beatae, cupiditate placeat
              deleniti. Provident nam et nesciunt iure commodi?
            </div>
          </section>
        </div>
        <div class="col-4">
          <!-- projects -->
          <section class="projects-section">
            <!-- video section -->
            <div class="video-carousel">
              <div class="video-player-placeholder">
                <font-awesome-icon icon="fa-solid fa-play" />
              </div>
            </div>
            <!-- paragraph section -->
            <div class="paragraph-carousel p-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio voluptates ea sint, reprehenderit doloribus enim itaque
              perspiciatis porro consequatur numquam beatae, cupiditate placeat
              deleniti. Provident nam et nesciunt iure commodi?
            </div>
          </section>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../../assets/styles/partials/mixins" as *;

#projects {
  .projects-section {
    height: 500px;
    border: 2px solid white;

    .video-carousel {
      color: white;
      @include center-div;
      height: 60%;
      background-color: olivedrab;

      .video-player-placeholder {
        padding: 16px;
        @include container-rounded;
        @include center-div;
        border: 3px solid white;
        font-size: 1.5rem;
        cursor: pointer;
      }
    }

    .paragraph-carousel {
      height: 40%;
      background-color: white;
    }
  }
}
</style>
