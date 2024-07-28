<script>
import { store } from "../../assets/store/store";

export default {
  data() {
    return {
      store,
    };
  },

  methods: {
    /**
     *
     * @param {String} path image path to get absolute path
     * @returns absolute URL from path
     *
     */
    getUrl() {
      return new URL(store.profileImage, import.meta.url).href;
    },

    /**
     * Change the active about list item
     * @param {string} activeMenu
     */
    changeActiveAboutNav(activeMenu) {
      store.activeAbout = activeMenu;
    },
  },
};
</script>

<template>
  <section id="about" class="page-section">
    <!-- section's title -->
    <h2 class="section-title fw-semibold">about me</h2>
    <div class="container mt-5">
      <div class="row">
        <!-- profile-image's col -->
        <div class="col-6 d-flex align-items-center justify-content-center">
          <img :src="getUrl()" alt="profile-img" class="profile-img" />
        </div>

        <!-- informations' col -->
        <div class="col-6 d-flex flex-column align-content-center">
          <header class="about-header">
            <nav>
              <ul class="p-0 m-0 d-flex justify-content-around">
                <li
                  class="text-uppercase fst-italic fw-semibold fs-5"
                  :class="store.activeAbout === 'Bio' ? 'active' : ''"
                  @click="changeActiveAboutNav('Bio')"
                >
                  Bio
                </li>
                <li
                  class="text-uppercase fst-italic fw-semibold fs-5"
                  :class="store.activeAbout === 'Hobby' ? 'active' : ''"
                  @click="changeActiveAboutNav('Hobby')"
                >
                  Hobby
                </li>
                <li
                  class="text-uppercase fst-italic fw-semibold fs-5"
                  :class="store.activeAbout === 'Goals' ? 'active' : ''"
                  @click="changeActiveAboutNav('Goals')"
                >
                  Goals
                </li>
              </ul>
            </nav>
          </header>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../../assets/styles/partials/variables" as *;

#about {
  height: 100vh;
  color: white;

  .profile-img {
    width: 80%;
    height: 700px;
    object-fit: cover;
  }

  .about-header li {
    cursor: pointer;

    &.active {
      color: $main-color;
      text-decoration: underline;
    }
  }
}
</style>
