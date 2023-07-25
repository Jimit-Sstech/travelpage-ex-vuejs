<template>
  <div class="images__container" :id="$t('listings')">
    <div class="images__card" v-for="(image, id) in images" :key="id">
      <img :src="placeholderImageSrc" :data-src="image.src" :alt="image.alt" />
      <div class="city__info">
        <h4>{{ $t("cityState") }}</h4>
        <div class="rating">
          <span>5.0</span>
          <font-awesome-icon icon="star" class="search__icon" />
        </div>
      </div>
      <p>{{ $t("hostedBy") }}</p>
      <p>{{ $t("date") }}</p>
      <p class="special__p">
        <b>{{ $t("cost") }}</b>
      </p>
    </div>
  </div>
</template>

<script>
import { images } from "../constants/images";
import { onMounted, ref } from "vue";
export default {
  name: "ImagesGrid",
  setup() {
    const loadedImages = ref([]);
    const placeholderImageSrc =
      "https://via.placeholder.com/800x600?text=Loading";

    onMounted(() => {
      const options = {
        root: null, // Use the viewport as the root
        rootMargin: "0px",
        threshold: 0.1, // Percentage of the image that needs to be visible to trigger the callback
      };

      // Create a new Intersection Observer
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Load the image when it enters the viewport
            const img = entry.target;
            img.src = img.dataset.src;
            loadedImages.value.push(img);
            observer.unobserve(img);
          }
        });
      }, options);

      // Get all the images with the "data-src" attribute
      const lazyImages = document.querySelectorAll("img[data-src]");

      // Observe each lazy image
      lazyImages.forEach((img) => {
        observer.observe(img);
      });
    });

    return {
      images,
      loadedImages,
      placeholderImageSrc,
    };
  },
};
</script>

<style lang="css" scoped>
.images__container {
  font-family: "Mukta", sans-serif;
  font-family: "Poppins", sans-serif;
  font-family: "Roboto", sans-serif;
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin-bottom: 20px;
}
.images__card {
  color: inherit;
  height: 280px;
  font-size: 14px;
}
.images__card img {
  width: 100%;
  height: 65%;
  object-fit: cover;
  border-radius: 20px;
}
.images__card p {
  margin-top: 5px;
  padding: 0 5px;
  color: inherit;
  opacity: 0.7;
}
.light .special__p {
  color: rgb(74, 74, 74);
}
.dark .special__p {
  color: white;
}
.city__info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 5px;
  padding: 0 5px;
}
.city__info h4 {
  font-weight: 800;
}
.rating {
  display: flex;
  gap: 5px;
}

@media screen and (max-width: 461px) {
  .images__card {
    box-shadow: 1px 1px 10px 1px rgba(212, 212, 212, 1);
    height: 350px;
  }
  .images__card img {
    border-radius: 0px;
    height: 70%;
  }
}
</style>
