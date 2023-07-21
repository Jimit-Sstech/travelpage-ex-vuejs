<template>
  <div class="images__container" :id="type">
    <a href="#">{{ type }}</a>
    <div class="images__grid__container">
      <div
        class="images__grid"
        :class="type === 'Popular' ? 'popular' : 'featured'"
        v-for="(image, id) in slicedImages"
        :key="id"
      >
        <img :src="image.src" :alt="image.alt" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FeaturedGrid",
  props: ["type", "slicedImages"],
};
</script>

<style lang="css" scoped>
.images__container {
  padding-top: 30px;
  margin-bottom: 20px;
}
.images__container a {
  text-decoration: none;
  color: black;
  font-size: 20px;
  font-weight: 900;
  border-bottom: 3px solid rgb(240, 70, 40);
}
.images__grid__container {
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 10px;
}
.images__grid__container .images__grid {
  height: 200px;
}
.images__grid__container .images__grid img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
}
.images__grid__container .featured:first-child {
  grid-column: 1 / 3;
  grid-row: 1 / 3;
  width: 100%;
  height: 100%;
}
.images__grid__container .popular:last-child {
  grid-column: 3 / 5;
  grid-row: 1 / 3;
  width: 100%;
  height: 100%;
}
</style>
