<template>
  <div class="home">
    <CategoriesIcon />
    <ImagesGrid />
    <FeaturedGrid :type="$t('featured')" :slicedImages="images.slice(12, 17)" />
    <FeaturedGrid :type="$t('popular')" :slicedImages="images.slice(2, 7)" />
    <div class="flex__scrollbtn">
      <a href="#" class="scroll__top__link">
        <font-awesome-icon icon="arrow-circle-up" class="search__icon" />
      </a>
    </div>
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
.flex__scrollbtn {
  display: flex;
  justify-content: flex-end;
}
.flex__scrollbtn .scroll__top__link .search__icon {
  font-size: 20px;
}
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
