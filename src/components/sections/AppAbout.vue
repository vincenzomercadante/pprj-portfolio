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
    <div class="container mt-5 overflow-y-hidden">
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
            <h3 class="text-center text-uppercase">bio</h3>
            <p class="text-center px-3 fs-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              ab eos iusto sapiente voluptates fugiat vel dolores rerum
              praesentium excepturi, minus veniam id esse dolorem libero
              repudiandae. Aliquid, eligendi dolore.
            </p>
          </section>

          <!-- goals section -->
          <section class="my-3 px-3">
            <h3 class="text-center text-uppercase">goals</h3>
            <p class="text-center">
              I believe this journey will be long, but I already have some goals
              to reach:
            </p>
            <ul>
              <li>
                Become proficient in web development as quickly as possible
              </li>
              <li>
                Become a person whose decisions are important for the projects
              </li>
              <li>Reach a managerial position</li>
            </ul>
          </section>

          <!-- hobby section -->
          <section class="my-3">
            <h3 class="text-center text-uppercase">hobby</h3>
            <div class="row g-3 overflow-y-scroll mt-2 hobby-container">
              <div v-for="hobby in store.hobbyCards" class="col-4">
                <HobbyCard :hobby="hobby" />
              </div>
            </div>
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

  .about-header li {
    cursor: pointer;

    &.active {
      color: $main-color;
      text-decoration: underline;
    }
  }

  h3 {
    color: $main-color;
  }

  ul {
    list-style: disc;
  }

  .hobby-container {
    height: 300px;
  }
}
</style>
