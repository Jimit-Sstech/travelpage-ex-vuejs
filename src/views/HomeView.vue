<template>
  <div class="home">
    <CategoriesIcon />
    <ImagesGrid />
    <FeaturedGrid type="Featured" :slicedImages="images.slice(12, 17)" />
    <FeaturedGrid type="Popular" :slicedImages="images.slice(2, 7)" />
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
