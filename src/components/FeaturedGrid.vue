<template>
  <div class="images__container" :id="type">
    <a href="#">{{ type }}</a>
    <div
      class="images__grid__container"
      :class="type === 'Popular' ? 'popular' : 'featured'"
    >
      <div
        class="images__grid"
        v-for="(image, id) in slicedImages"
        :key="id"
        :class="[`img-${id}`]"
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
.images__container .featured {
  grid-template-areas:
    "img0 img0 img1 img2"
    "img0 img0 img3 img4";
  grid-template-rows: repeat(2, 1fr);
}
.images__container .popular {
  grid-template-areas:
    "img0 img1 img4 img4"
    "img2 img3 img4 img4";
  grid-template-rows: repeat(2, 1fr);
}
.images__grid__container .images__grid img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
}
.img-0 {
  grid-area: img0;
}
.img-1 {
  grid-area: img1;
}
.img-2 {
  grid-area: img2;
}
.img-3 {
  grid-area: img3;
}
.img-4 {
  grid-area: img4;
}

@media screen and (max-width: 920px) {
  .images__container .featured {
    grid-template-areas:
      "img0 img0 img1"
      "img0 img0 img3"
      "img2 img4 img4";
    grid-template-rows: 150px 150px 200px;
  }

  .images__container .popular {
    grid-template-areas:
      "img0 img4 img4"
      "img1 img4 img4"
      "img2 img3 img3";
    grid-template-rows: repeat(2, 150px) 200px;
  }
}

@media screen and (max-width: 680px) {
  .images__container .featured {
    grid-template-areas:
      "img0 img1"
      "img2 img1"
      "img3 img4";
    grid-template-rows: repeat(3, 200px);
  }

  .images__container .popular {
    grid-template-areas:
      "img0 img1"
      "img2 img2"
      "img3 img4";
    grid-template-rows: repeat(3, 200px);
  }
}

@media screen and (max-width: 500px) {
  .images__container .featured {
    grid-template-areas:
      "img0"
      "img1"
      "img2"
      "img3"
      "img4";
    grid-template-rows: repeat(5, 1fr);
  }

  .images__container .popular {
    grid-template-areas:
      "img0"
      "img1"
      "img2"
      "img3"
      "img4";
    grid-template-rows: repeat(5, 300px);
  }
}
</style>
