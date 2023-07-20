<template>
  <div class="topbar">
    <div class="topbar__info">
      <h3>Introducing the new AirTravel</h3>
      <p>Learn more</p>
    </div>
    <hr class="custom__hr" />
  </div>
</template>
<script>
export default {};
</script>
<style>
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
}

.topbar__info p {
  font-size: 14px;
  font-weight: 500;
}
</style>
