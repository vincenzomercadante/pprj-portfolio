<script>
import { store } from "../../assets/store/store";
import SkillCard from "../ui/SkillCard.vue";

export default {
  data() {
    return {
      store,
    };
  },

  components: { SkillCard },
};
</script>

<template>
  <section
    id="skill"
    class="page-section d-flex justify-content-center align-content-center flex-column"
  >
    <!-- section title -->
    <h2 class="section-title fw-semibold">skill</h2>
    <!-- section paragraph -->
    <p class="text-center fw-semibold fs-4 fst-italic mt-4">
      In this section, you can find all of my programming skills. <br />
      As you can see, some of them are locked because I haven't reached that
      skill yet, but I am learning them.
    </p>
    <!-- skill cards container -->
    <div class="container my-5">
      <div class="row row-cols-5 g-4 justify-content-center">
        <!-- generate a skill card for every skill in the array -->
        <div
          class="col d-flex flex-column justify-content-center align-items-center"
          v-for="skill in store.skillCards"
        >
          <div
            class="inner"
            :class="skill.status === 'unlocked' ? 'unlocked' : ''"
          >
            <SkillCard :skill="skill" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../../assets/styles/partials/variables" as *;

#skill {
  height: 100vh;
  color: white;

  .inner {
    cursor: pointer;
    width: 100%;
    box-shadow: 0px 0px 5px 4px $main-color;
    border: 4px solid white;
    transition: background-color 0.3s linear;

    &.unlocked:hover {
      background-color: $main-color;
    }
  }
}
</style>
