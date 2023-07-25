<template>
  <div class="categories__container">
    <div class="category" v-for="(category, idx) in categories" :key="idx">
      <font-awesome-icon :icon="category.iconName" class="search__icon" />
      <p>{{ $t(category.name) }}</p>
    </div>
  </div>
</template>

<script>
import { useI18n } from "vue-i18n";
export default {
  name: "CategoriesIcon",
  setup() {
    const { t } = useI18n({
      inheritLocale: true,
      useScope: "local",
    });
    const categories = [
      { name: "homeIcon", iconName: "house" },
      { name: "articIcon", iconName: "virus" },
      { name: "spaceIcon", iconName: "rocket" },
      { name: "treesIcon", iconName: "tree" },
      { name: "cityIcon", iconName: "city" },
      { name: "campingIcon", iconName: "campground" },
      { name: "beachIcon", iconName: "umbrella-beach" },
      { name: "gamesIcon", iconName: "soccer-ball" },
    ];

    return {
      categories,
      t,
    };
  },
};
</script>

<style lang="css" scoped>
.categories__container {
  padding-top: 15px;
  display: flex;
  justify-content: space-between;
}
.category {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.category p {
  margin-top: 5px;
  font-size: 13px;
}

@media screen and (max-width: 600px) {
  .categories__container {
    display: none;
  }
}
</style>
