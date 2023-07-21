<template>
  <div class="categories__container">
    <div class="category" v-for="(category, idx) in categories" :key="idx">
      <font-awesome-icon :icon="category.iconName" class="search__icon" />
      <p>{{ category.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoriesIcon",
  setup() {
    const categories = [
      { name: "Home", iconName: "house" },
      { name: "Artic", iconName: "virus" },
      { name: "Space", iconName: "rocket" },
      { name: "Trees", iconName: "tree" },
      { name: "City", iconName: "city" },
      { name: "Camping", iconName: "campground" },
      { name: "Beach", iconName: "umbrella-beach" },
      { name: "Games", iconName: "soccer-ball" },
    ];

    return {
      categories,
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
