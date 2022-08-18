<template>
  <h1 :style="{fontSize: props.fontSize + 'px'}" class="heading"> 
    <slot></slot>
  </h1>
</template>

<script setup>
import gsap from "gsap";
import { defineProps, onMounted } from 'vue';
const props = defineProps({
  fontSize:
    {
      type: String,
      default: "24",
    },
});

onMounted(() => {
  gsap.from(
    ".heading",
    
    {
      duration: 0.5,
      opacity: 0,
      y: 100,
    }
  );
})

 
</script>

<style scoped lang="scss">
h1 {
  font-weight: 700;
  color: #002D5A;
}

</style>