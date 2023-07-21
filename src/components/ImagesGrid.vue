<template>
  <div class="images__container" id="listings">
    <div
      class="images__card"
      v-for="(image, id) in images.slice(0, 12)"
      :key="id"
    >
      <img :src="image.src" :alt="image.alt" />
      <div class="city__info">
        <h4>City, State</h4>
        <div class="rating">
          <span>5.0</span>
          <font-awesome-icon icon="star" class="search__icon" />
        </div>
      </div>
      <p>Hosted by Reality Group, LLC</p>
      <p>Jun 1 - 7</p>
      <p class="special__p"><b>$ 749 night</b></p>
    </div>
  </div>
</template>

<script>
import { images } from "../constants/images";
export default {
  name: "ImagesGrid",
  setup() {
    return {
      images,
    };
  },
};
</script>

<style lang="css" scoped>
.images__container {
  font-family: "Mukta", sans-serif;
  font-family: "Poppins", sans-serif;
  font-family: "Roboto", sans-serif;
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin-bottom: 20px;
}
.images__card {
  color: black;
  height: 280px;
  font-size: 14px;
  /* box-shadow: 1px 1px 10px 1px rgba(212, 212, 212, 1); */
}
.images__card img {
  width: 100%;
  height: 65%;
  object-fit: cover;
  border-radius: 20px;
}
.images__card p {
  margin-top: 5px;
  padding: 0 5px;
  color: gray;
}
.special__p {
  color: rgb(74, 74, 74) !important;
}
.city__info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 5px;
  padding: 0 5px;
}
.city__info h4 {
  font-weight: 800;
}
.rating {
  display: flex;
  gap: 5px;
}
</style>
