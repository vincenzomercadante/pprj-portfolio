<script>
export default {
  props: {
    skill: Object,
  },
};
</script>

<template>
  <div
    class="position-relative d-flex flex-column align-items-center justify-content-center gap-4 p-3"
  >
    <!-- skill image -->
    <img
      :src="'../../../src/assets/img/skill-images/' + skill.image"
      :alt="skill.name + 'logo'"
    />
    <!-- skill name -->
    <h3 class="mb-0">{{ skill.name }}</h3>

    <!-- layover rendered if skill status is locked -->
    <div v-if="skill.status === 'locked'" class="layover">
      <font-awesome-icon icon="fa-solid fa-lock" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/styles/partials/variables" as *;

img {
  width: 100px;
}

.layover {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 3rem;

  background-color: rgba($general-bg, 0.7);
}
</style>
