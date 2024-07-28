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
      <div class="row g-4">
        <!-- contact detail section -->
        <div class="col-6 contact-detail d-flex flex-column align-items-center">
          <!-- section's title -->
          <h3 class="mt-5 mb-3 text-center">Contact Details:</h3>
          <!-- mail detail -->
          <div
            class="mt-5 d-flex align-items-center justify-content-center gap-2"
          >
            <font-awesome-icon icon="fa-solid fa-envelope" />
            <h4 class="m-0 text-center">Mail:</h4>
          </div>

          <!-- mail -->
          <a
            href="mailto:vincenzo.mercadante0@outlook.it"
            class="text-center fs-5"
            >vincenzo.mercadante0@outlook.it</a
          >

          <!-- cellular number detail -->
          <div
            class="mt-5 d-flex align-items-center justify-content-center gap-2"
          >
            <font-awesome-icon icon="fa-solid fa-phone" />
            <h4 class="m-0 text-center">Cellular Number:</h4>
          </div>

          <!-- cellular -->
          <p class="m-0 fs-5">+39 3458430577</p>

          <!-- linkedin detail -->
          <div
            class="mt-5 d-flex align-items-center justify-content-center gap-2"
          >
            <font-awesome-icon icon="fa-brands fa-linkedin" />
            <h4 class="m-0 text-center">Linkedin:</h4>
          </div>

          <!-- linkedin link -->
          <a
            href="https://www.linkedin.com/in/vincenzo-mercadante-262357211/"
            class="text-center fs-5"
            >https://www.linkedin.com/in/vincenzo-mercadante-262357211/</a
          >

          <!-- github detail -->
          <div
            class="mt-5 d-flex align-items-center justify-content-center gap-2"
          >
            <font-awesome-icon icon="fa-brands fa-github" />
            <h4 class="m-0 text-center">Github:</h4>
          </div>

          <!-- github link -->
          <a
            href="https://github.com/vincenzomercadante"
            class="text-center fs-5"
            >https://github.com/vincenzomercadante</a
          >

          <!-- download cv button -->
          <a
            href="../../../src/assets/file-to-download/Vincenzo Mercadante_CV.pdf"
            download="Vincenzo-Mercadante_CV.pdf"
            class="btn-link"
          >
            <font-awesome-icon icon="fa-solid fa-download" />
            Download CV!
          </a>
        </div>

        <!-- cv download -->
        <div class="col-6 cv-download">
          <!-- cv screenshot with file download as href -->
          <a
            href="../../../src/assets/file-to-download/Vincenzo Mercadante_CV.pdf"
            download="Vincenzo-Mercadante_CV.pdf"
            class="position-relative d-flex w-100 h-100 justify-content-center cv-download"
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

.btn-link {
  margin-top: 100px;
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
    height: 800px;
  }

  &:hover .layover {
    opacity: 1;
  }
}
</style>
