<template>
  <div class="topbar">
    <div class="topbar__info">
      <h3>
        <router-link to="/"> Introducing the new AirTravel </router-link>
      </h3>
      <p>Learn more</p>
    </div>
    <hr class="custom__hr" />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.topbar__info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 20px 0px 20px;
}

.custom__hr {
  margin-top: 10px;
  border-top: 1px solid lightgray;
}

.topbar__info h3 {
  font-weight: 900;
  transform: translateX(100%);
}

.topbar__info h3 a {
  text-decoration: none;
  color: inherit;
}

.topbar__info p {
  font-size: 14px;
  font-weight: 500;
}

@media screen and (max-width: 767px) {
  .topbar__info h3 {
    transform: translateX(0);
  }
}

@media screen and (max-width: 500px) {
  .topbar__info h3 {
    font-size: 14px;
  }
  .topbar__info p {
    font-size: 12px;
  }
}
</style>
