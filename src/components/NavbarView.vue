<template>
  <nav class="navbar">
    <div>
      <h3>{{ $t("homePageTitle") }}</h3>
    </div>
    <div class="navbar__input__div">
      <input
        type="text"
        class="navbar__input"
        :placeholder="$t('searchProperties')"
      />
      <font-awesome-icon icon="magnifying-glass" class="search__icon" />
    </div>
    <div class="navbar__list">
      <a href="#listings">{{ $t("listings") }}</a>
      <a href="#Featured">{{ $t("featured") }}</a>
      <a href="#Popular">{{ $t("popular") }}</a>
    </div>
    <div class="mobile__nav" @click="setIsMobile">
      <font-awesome-icon icon="bars" />
    </div>
  </nav>
  <div :class="isMobile ? 'mobile__list' : 'hidden'">
    <div class="xmark__div" @click="isMobile = false">
      <font-awesome-icon icon="xmark" class="xmark__icon" />
    </div>
    <div class="mobile__menu__list">
      <a href="#listings" @click="isMobile = false">{{ $t("listings") }}</a>
      <a href="#Featured" @click="isMobile = false">{{ $t("featured") }}</a>
      <a href="#Popular" @click="isMobile = false">{{ $t("popular") }}</a>
    </div>
  </div>
  <div class="mobile__input__div">
    <input
      type="text"
      class="navbar__input"
      :placeholder="$t('searchProperties')"
    />
    <font-awesome-icon icon="magnifying-glass" class="search__icon" />
  </div>
  <hr class="custom__hr" />
</template>

<script>
import { ref } from "vue";

export default {
  name: "NavbarView",
  setup() {
    const isMobile = ref(false);

    const setIsMobile = () => {
      isMobile.value = !isMobile.value;
    };

    return {
      isMobile,
      setIsMobile,
    };
  },
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  align-items: center;
  position: relative;
}
.navbar__list {
  display: flex;
  gap: 15px;
  font-size: 14px;
}
.navbar__list a {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}
.navbar__input__div {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 17rem;
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
  margin-right: 10px;
}
.custom__hr {
  margin-top: 5px;
  border-top: 1px solid hsl(0deg 8.27% 93.13%);
}

.mobile__nav {
  display: none;
}

.mobile__input__div {
  display: none;
}

.hidden {
  height: 0;
  opacity: 0;
}

.mobile__list .mobile__menu__list a {
  text-decoration: none;
  color: inherit;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}

@media screen and (max-width: 767px) {
  .mobile__nav {
    display: block;
    cursor: pointer;
  }
  .navbar__list {
    display: none;
  }
  .navbar__input__div {
    display: none;
  }
  .mobile__input__div {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border-radius: 50px;
    box-shadow: 1px 1px 10px 1px rgba(212, 212, 212, 1);
    margin-bottom: 20px;
  }
  .mobile__list {
    opacity: 100;
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 0px;
    left: 0;
    right: 0;
    z-index: 20;
    transition: all 0.5s ease;
    height: 100%;
    margin: 0 auto;
    overflow: hidden;
  }
  .dark .mobile__list {
    background-color: #575656;
    color: white;
  }
  .light .mobile__list {
    color: black;
    background-color: white;
  }
  .mobile__list .mobile__menu__list {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 10px 30px;
    margin-top: 20px;
  }
  .dark .mobile__list .mobile__menu__list a:hover {
    background-color: white;
    color: black;
    padding: 5px;
    transition: all 0.3s ease-in;
  }
  .light .mobile__list .mobile__menu__list a:hover {
    background-color: black;
    color: white;
    padding: 5px;
    transition: all 0.3s ease-in;
  }
  .xmark__div {
    display: flex;
    justify-content: end;
    padding: 10px 10px 0 10px;
    cursor: pointer;
  }
  .mobile__list .xmark__icon {
    color: white;
    border-radius: 100%;
    font-size: 20px;
    background-color: black;
    padding: 5px;
  }
  .dark .mobile__list .xmark__icon {
    background-color: white;
    color: black;
  }
  .mobile__list .xmark__icon:hover {
    scale: 1.1;
    transition: all 0.3s ease;
  }
}
</style>
