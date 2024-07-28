<script>
export default {};
</script>

<template>
  <section
    id="hire"
    class="page-section d-flex justify-content-center align-items-center flex-column"
  >
    <!-- section's title -->
    <h2 class="section-title fw-semibold">hire me</h2>
    <div class="container">
      <div class="row">
        <!-- contact detail section -->
        <div class="col-6 contact-detail"></div>
        <!-- cv download -->
        <div class="col-6 cv-download">
          <!-- cv screenshot with file download as href -->
          <a
            href="../../../src/assets/file-to-download/Vincenzo Mercadante_CV.pdf"
            download="Vincenzo-Mercadante_CV.pdf"
            class="position-relative d-block w-100 h-100 cv-download"
            ><img
              src="../../../src/assets/file-to-download/cv.png"
              alt="cv image"
              class="cv-img"
            />
            <!-- cv layover -->
            <div class="layover">
              <h3 class="text-uppercase">download cv</h3>
              <font-awesome-icon icon="fa-solid fa-download" />
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#hire {
  height: 100vh;
  color: white;
}

.cv-download {
  .layover {
    flex-direction: column;
    gap: 1rem;
    font-size: 2rem;
    opacity: 0;
    transition: opacity 0.3s linear;
    color: white;
    font-weight: bold;
  }

  &:hover .layover {
    opacity: 1;
  }
}
</style>
