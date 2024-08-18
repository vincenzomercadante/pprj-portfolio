<script>
export default {};
</script>

<template>
  <section
    id="hire"
    class="page-section d-flex align-items-center flex-column pb-3"
  >
    <!-- section's title -->
    <h2 class="section-title fw-semibold">hire me</h2>
    <div class="container">
      <div class="row g-4">
        <!-- contact detail section -->
        <div class="col-7 contact-detail d-flex flex-column">
          <!-- section's title -->
          <h3 class="mt-4 mb-3">Contact Details:</h3>
          <!-- mail detail -->
          <div class="mt-4 d-flex align-items-center gap-2">
            <font-awesome-icon icon="fa-solid fa-envelope" />
            <h4 class="m-0">Mail:</h4>
          </div>

          <!-- mail -->
          <a href="mailto:vincenzo.mercadante0@outlook.it" class="fs-5"
            >vincenzo.mercadante0@outlook.it</a
          >

          <!-- cellular number detail -->
          <div class="mt-4 d-flex align-items-center gap-2">
            <font-awesome-icon icon="fa-solid fa-phone" />
            <h4 class="m-0">Cellular Number:</h4>
          </div>

          <!-- cellular -->
          <p class="m-0 fs-5 phone-number">+39 3458430577</p>

          <!-- linkedin detail -->
          <div class="mt-4 d-flex align-items-center gap-2">
            <font-awesome-icon icon="fa-brands fa-linkedin" />
            <h4 class="m-0">Linkedin:</h4>
          </div>

          <!-- linkedin link -->
          <a
            href="https://www.linkedin.com/in/vincenzo-mercadante-262357211/"
            class="fs-5"
            >https://www.linkedin.com/in/vincenzo-mercadante-262357211/</a
          >

          <!-- github detail -->
          <div class="mt-4 d-flex align-items-center gap-2">
            <font-awesome-icon icon="fa-brands fa-github" />
            <h4 class="m-0">Github:</h4>
          </div>

          <!-- github link -->
          <a href="https://github.com/vincenzomercadante" class="fs-5"
            >https://github.com/vincenzomercadante</a
          >

          <!-- download cv button -->
          <a
            href="../../../src/assets/file-to-download/Vincenzo Mercadante_CV.pdf"
            download="Vincenzo-Mercadante_CV.pdf"
            class="btn-link align-self-center mt-5"
          >
            <font-awesome-icon icon="fa-solid fa-download" />
            Download CV!
          </a>
        </div>

        <!-- cv download -->
        <div class="col-5 cv-download">
          <!-- cv screenshot with file download as href -->
          <a
            href="../../../src/assets/file-to-download/Vincenzo Mercadante_CV.pdf"
            download="Vincenzo-Mercadante_CV.pdf"
            class="position-relative d-flex cv-download"
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
@use "../../assets/styles/partials/variables" as *;

#hire {
  height: 100vh;
  color: white;
}

.contact-detail h3 {
  color: $main-color;
}

.phone-number {
  color: $info-txt-color;
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

  img {
    width: 100%;
    height: 650px;
    object-fit: cover;
    object-position: top;
  }

  &:hover .layover {
    opacity: 1;
  }
}
</style>
