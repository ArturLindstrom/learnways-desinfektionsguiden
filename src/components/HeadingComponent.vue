<template>

  <div>
    <h1 :style="{fontSize: props.fontSize + 'px'}" :class="{ animate: props.animate }">
      <slot></slot>
    </h1>
  </div>
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
  animate: {
      type: Boolean,
      default: false,
    },
});

onMounted(() => {
  if(props.animate == true){
    console.log(props.animate)
    gsap.from(
      ".animate",
      
      {
        duration: 0.5,
        opacity: 0,
        y: 100,
      }
    );
  }
})

 
</script>

<style scoped lang="scss">
h1 {
  font-weight: 700;
  color: #002D5A;
}

</style>