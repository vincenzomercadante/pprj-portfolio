<script>
import { store } from "../../assets/store/store";
import HobbyCard from "../ui/HobbyCard.vue";

export default {
  data() {
    return {
      store,
    };
  },

  components: { HobbyCard },

  methods: {
    /**
     *
     * @param {String} path image path to get absolute path
     * @returns absolute URL from path
     *
     */
    getUrl(path) {
      return new URL(path, import.meta.url).href;
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
  <section
    id="about"
    class="page-section d-flex flex-column align-items-center justify-content-center"
  >
    <!-- section's title -->
    <h2 class="section-title fw-semibold">about me</h2>
    <div class="container overflow-y-hidden">
      <div class="row">
        <!-- profile-image's col -->
        <div class="col-6 d-flex align-items-center justify-content-center">
          <img
            :src="getUrl(store.profileImage)"
            alt="profile-img"
            class="profile-img"
          />
        </div>

        <!-- informations' col -->
        <div class="col-6 d-flex flex-column align-content-center">
          <!-- bio section -->
          <section class="mb-3">
            <header class="mb-5">
              <nav class="about-nav">
                <ul
                  class="d-flex align-items-center justify-content-center gap-4"
                >
                  <li
                    class="text-uppercase fst-italic fw-semibold fs-3"
                    :class="store.activeAbout == 'bio' ? 'active' : ''"
                    @click="changeActiveAboutNav('bio')"
                  >
                    Bio & goals
                  </li>
                  <li
                    class="text-uppercase fst-italic fw-semibold fs-3"
                    :class="store.activeAbout == 'hobby' ? 'active' : ''"
                    @click="changeActiveAboutNav('hobby')"
                  >
                    Hobby
                  </li>
                </ul>
              </nav>
            </header>
            <main>
              <section v-if="store.activeAbout == 'bio'">
                <!-- bio title -->
                <h3 class="text-center text-uppercase">bio</h3>
                <!-- bio description -->
                <p class="text-center px-3 fs-5">
                  I am a 23-year-old who has always been passionate about coding
                  and technology. After a year and a half as a Network Engineer,
                  I decided to bet on my passion for development and enroll in a
                  Full Stack Web Developer course where I learned the basics. My
                  journey begins now, and I hope it will worth it.
                </p>
                <!-- goals section -->
                <section class="my-5 px-3 fs-5">
                  <!-- goals title -->
                  <h3 class="text-center text-uppercase">goals</h3>
                  <!-- goals introduction -->
                  <p class="text-center">
                    I believe this journey will be long, but I already have some
                    goals to reach:
                  </p>
                  <!-- goals list -->
                  <ul class="goals-list">
                    <!-- goal -->
                    <li>
                      Become proficient in web development as quickly as
                      possible
                    </li>
                    <!-- goal -->
                    <li>
                      Become a person whose decisions are important for the
                      projects
                    </li>
                    <!-- goal -->
                    <li>Reach a managerial position</li>
                  </ul>
                </section>
              </section>

              <!-- hobby section -->
              <section v-if="store.activeAbout == 'hobby'">
                <div class="row g-3 mt-2 justify-content-center">
                  <!-- generation of hobby cards -->
                  <div v-for="hobby in store.hobbyCards" class="col-4">
                    <HobbyCard :hobby="hobby" />
                  </div>
                </div>
              </section>
            </main>
          </section>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../../assets/styles/partials/variables" as *;

#about {
  color: white;

  .profile-img {
    width: 80%;
    height: 700px;
    object-fit: cover;
  }

  .about-nav li {
    cursor: pointer;
    transition: color 0.3s linear;

    &:hover {
      color: $main-color;
    }

    &.active {
      color: $main-color;
      text-decoration: underline;
    }
  }

  h3 {
    color: $main-color;
  }

  .goals-list {
    list-style-type: disc;
  }
}
</style>
