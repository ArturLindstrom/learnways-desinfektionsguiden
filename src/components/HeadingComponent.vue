<template>
  <h1 :style="{fontSize: props.fontSize + 'px'}">
    <slot></slot>
  </h1>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  fontSize:
    {
      type: String,
      default: "24",
    },
});
</script>

<style scoped>
h1 {
  font-weight: 700;
  color: #002D5A;
}

</style>