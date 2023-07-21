<template>
  <div class="home">
    <CategoriesIcon />
    <ImagesGrid />
  </div>
</template>

<script>
import CategoriesIcon from "@/components/CategoriesIcon.vue";
import ImagesGrid from "@/components/ImagesGrid.vue";

export default {
  name: "HomeView",
  components: { CategoriesIcon, ImagesGrid },
};
</script>
