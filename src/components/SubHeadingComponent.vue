<template>
  <h3 :class="{ animate : props.animate }">
    <slot></slot>
  </h3>
</template>

<script setup>
import { onMounted } from "vue";
import gsap from "gsap";

const props = defineProps({
  animate: {
    type: Boolean,
    default: false
  }
})
onMounted(() => {
  if(props.animate){
    gsap.from(
      ".animate",
      
      {
        delay: 0.5,
        duration: 0.5,
        opacity: 0,
        y: 100,
      }
    );
  }
})
</script>

<style>

h3 {
  font-weight: 600;
  width: 40%;
  font-size: 20px;
}

</style>