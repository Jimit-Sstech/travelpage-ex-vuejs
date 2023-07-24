<template>
  <div class="home">
    <CategoriesIcon />
    <ImagesGrid />
    <FeaturedGrid type="Featured" :slicedImages="images.slice(12, 17)" />
    <FeaturedGrid type="Popular" :slicedImages="images.slice(2, 7)" />
    <a href="#" class="scroll__top__link">Scroll To Top</a>
    <div class="margin__bottom"></div>
  </div>
</template>

<script>
import CategoriesIcon from "@/components/CategoriesIcon.vue";
import ImagesGrid from "@/components/ImagesGrid.vue";
import FeaturedGrid from "@/components/FeaturedGrid.vue";
import { images } from "@/constants/images";

export default {
  name: "HomeView",
  components: { CategoriesIcon, ImagesGrid, FeaturedGrid },
  setup() {
    return {
      images,
    };
  },
};
</script>

<style scoped lang="css">
.scroll__top__link {
  color: inherit;
  text-decoration: none;
  display: flex;
  width: fit-content;
  padding: 5px 10px;
  transition: all 0.8s ease;
}
.light .scroll__top__link:hover {
  background-color: black;
  color: white;
}
.dark .scroll__top__link:hover {
  background-color: white;
  color: black;
}
.margin__bottom {
  margin-bottom: 20px;
}
</style>
