<template>
  <div>
    <h1 :class="[{ animate: props.animate }, props.fontSize]">
      <slot></slot>
    </h1>
  </div>
</template>

<script setup>
  import gsap from "gsap";
  import { onMounted } from "vue";

  const props = defineProps({
    fontSize: {
      type: String,
    },
    animate: {
      type: Boolean,
      default: false,
    },
  });

  onMounted(() => {
    if (props.animate == true) {
      gsap.fromTo(
        ".animate",

        {
          duration: 1,
          opacity: 0,
          y: -100,
        },
        {
          opacity: 1,
          y: 0,
        }
      );
    }
  });
  
</script>

<style scoped lang="scss">
  h1 {
    font-size: 5vw;
    font-weight: 600;
    color: #003340;
    line-height: 1.1;
  }
  .big {
    font-size: 6.5vw;
  }

  .small {
    font-size: 2.5vw;
  }
  @media screen and (max-width: 768px) {
    h1 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }

    .big {
      font-size: 2rem;
    }

    .small {
      font-size: 1.5rem;
    }
  }
</style>
