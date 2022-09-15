<template>
  <h3 :class="[{ animated: props.animate, 'card-size': props.cardSize }]">
    <slot></slot>
  </h3>
</template>

<script setup>
  import { onMounted } from "vue";
  import gsap from "gsap";

  const props = defineProps({
    animate: {
      type: Boolean,
      default: false,
    },
    cardSize: {
      type: Boolean,
      default: false,
    },
  });
  onMounted(() => {
    if (props.animate == true) {
      gsap.from(
        ".animated",
        {
          delay: 0.5,
          duration: 0.5,
          opacity: 0,
          y: 100,
          stagger: 0.2,
        }
      );
    }
  });
</script>

<style scoped>
  h3 {
    font-weight: 700;
    max-width: 35rem;
    font-size: 20px;
  }

  .card-size {
    font-size: 1.5625em;
    font-family: 'Nunito', sans-serif;
    font-weight: 600;
    font-style: normal;
    line-height: 1.1;
    color: #003340;
  }

  @media screen and (max-width: 768px) {
    h3 {
      max-width: 90%;
      font-size: 16px;
      line-height: 1.5;
    }
  }
</style>
