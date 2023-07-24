<template>
  <div class="images__container" :id="type">
    <a href="#" :class="store.state.theme === 'light' ? 'lighter' : 'darker'">{{
      type
    }}</a>
    <div
      class="images__grid__container"
      :class="type === 'Popular' ? 'popular' : 'featured'"
    >
      <div
        class="images__grid"
        v-for="(image, id) in slicedImages"
        :key="id"
        :class="[`img-${id}`]"
      >
        <img
          :src="placeholderImageSrc"
          :data-src="image.src"
          :alt="image.alt"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { useStore } from "vuex";

export default {
  name: "FeaturedGrid",
  props: ["type", "slicedImages"],
  setup() {
    const loadedImages = ref([]);
    const store = useStore();

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
      loadedImages,
      placeholderImageSrc,
      store,
    };
  },
};
</script>

<style lang="css" scoped>
.images__container {
  padding-top: 30px;
  margin-bottom: 20px;
}
.images__container a {
  text-decoration: none;
  color: inherit;
  font-size: 20px;
  font-weight: 900;
  border-bottom: 3px solid rgb(240, 70, 40);
}
.images__grid__container {
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 10px;
}
.images__container .featured {
  grid-template-areas:
    "img0 img0 img1 img2"
    "img0 img0 img3 img4";
  grid-template-rows: repeat(2, 1fr);
}
.images__container .popular {
  grid-template-areas:
    "img0 img1 img4 img4"
    "img2 img3 img4 img4";
  grid-template-rows: repeat(2, 1fr);
}
.images__grid__container .images__grid img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
}
.img-0 {
  grid-area: img0;
}
.img-1 {
  grid-area: img1;
}
.img-2 {
  grid-area: img2;
}
.img-3 {
  grid-area: img3;
}
.img-4 {
  grid-area: img4;
}

@media screen and (max-width: 920px) {
  .images__container .featured {
    grid-template-areas:
      "img0 img0 img1"
      "img0 img0 img3"
      "img2 img4 img4";
    grid-template-rows: 150px 150px 200px;
  }

  .images__container .popular {
    grid-template-areas:
      "img0 img4 img4"
      "img1 img4 img4"
      "img2 img3 img3";
    grid-template-rows: repeat(2, 150px) 200px;
  }
}

@media screen and (max-width: 680px) {
  .images__container .featured {
    grid-template-areas:
      "img0 img1"
      "img2 img1"
      "img3 img4";
    grid-template-rows: repeat(3, 200px);
  }

  .images__container .popular {
    grid-template-areas:
      "img0 img1"
      "img2 img2"
      "img3 img4";
    grid-template-rows: repeat(3, 200px);
  }
}

@media screen and (max-width: 500px) {
  .images__container .featured {
    grid-template-areas:
      "img0"
      "img1"
      "img2"
      "img3"
      "img4";
    grid-template-rows: repeat(5, 1fr);
  }

  .images__container .popular {
    grid-template-areas:
      "img0"
      "img1"
      "img2"
      "img3"
      "img4";
    grid-template-rows: repeat(5, 300px);
  }
}
</style>
