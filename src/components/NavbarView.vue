<template>
  <nav class="navbar">
    <div>
      <h3>airtravel</h3>
    </div>
    <div class="navbar__input__div">
      <input
        type="text"
        class="navbar__input"
        placeholder="Search Properties..."
      />
      <font-awesome-icon icon="magnifying-glass" class="search__icon" />
    </div>
    <div class="navbar__list">
      <a href="#listings">Listings</a>
      <a href="#Featured">Featured</a>
      <a href="#Popular">Popular</a>
    </div>
  </nav>
  <hr class="custom__hr" />
</template>

<script>
export default {
  name: "NavbarView",
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  align-items: center;
}
.navbar__list {
  display: flex;
  gap: 15px;
  font-size: 14px;
}
.navbar__list a {
  text-decoration: none;
  color: black;
  cursor: pointer;
}
.navbar__input__div {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 17rem;
  padding: 0 10px;
  border-radius: 50px;
  box-shadow: 1px 1px 10px 1px rgba(212, 212, 212, 1);
}
.navbar__input {
  border: none;
  padding: 8px 20px;
  border-radius: 50px;
  width: 100%;
  font-size: 17px;
}
.navbar__input::placeholder {
  font-size: 16px;
}
.navbar__input:focus {
  outline: none;
}
h3 {
  font-weight: 800;
  color: rgba(243, 56, 23, 0.986);
}
.search__icon {
  position: absolute;
  color: rgba(243, 56, 23, 0.986);
  margin-right: 5px;
}
.custom__hr {
  margin-top: 5px;
  border-top: 1px solid hsl(0deg 8.27% 93.13%);
}
</style>
