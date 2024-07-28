<script>
export default {
  props: {
    hobby: Object,
  },

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
  },
};
</script>

<template>
  <div class="position-relative hobby-card">
    <!-- hobby image -->
    <img :src="getUrl(hobby.image)" :alt="hobby.title + ' image'" />

    <!-- layover  -->
    <div class="layover">
      <h3 class="mb-0">{{ hobby.title }}</h3>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/styles/partials/variables" as *;

img {
  height: 130px;
  width: 100%;
  object-fit: cover;
}

.layover {
  opacity: 0;
  font-size: 1.2rem;
  text-align: center;
  transition: opacity 0.3s linear;
}

.hobby-card:hover .layover {
  opacity: 1;
}
</style>
