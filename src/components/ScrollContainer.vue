<template>
  <div class="scroll-container">
    <p class="scroll">Skrolla ner</p>
      <img
        tabindex="0"
        class="scroll-icon"
        src="/assets/home/main/scroll.svg"
        @keyup.enter="toBottom"
        @click="toBottom"
      />
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import gsap from 'gsap';

const route = useRoute();

const toBottom = () => {
  window.scrollTo({
    top: 700,
    left: 100,
    behavior: "smooth",
  });
};

onMounted(() => {
  gsap.to(".scroll-container", {
    scale: 1.1,
    delay: 1.5,
    duration: 1,
    onComplete: () => {
      scrollAnimation();
    },
    ease: "power2.out",
    })
});

const scrollAnimation = () => {
  gsap.to(".scroll-container", {
    scale: 1,
    duration: 1,
    ease: "power2.out",
  });
}

</script>

<style scoped lang="scss">

.scroll {
  font-weight: 700;
}
.scroll-icon {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-top: 10px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
    transition: all 0.3s ease-in-out;
  }
}

@media screen and (max-width: 480px) {
  .scroll {
    font-size: 0.7rem;
  }
  .scroll-icon {
    width: 50px;
    height: 50px;
  }
  /* .img-wrapper{
    background-color: white;
    width: 100%;
  } */
}
  

</style>
