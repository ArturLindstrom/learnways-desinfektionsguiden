<template>
  <header :style="{ backgroundImage: bg }">
    <div class="imgs">
        <img src="../assets/Vårdhygien-Stockholm.svg" alt="">
        <router-link to="/">
        <img src="../assets/Group-119.svg" alt="">
        </router-link>
    </div>
    <div class="heading-container">
        <slot></slot>
    </div>
    <ProgressBarComponent/>
  </header>
</template>

<script setup>
import ProgressBarComponent from "./ProgressBarComponent.vue";
import { computed, defineProps, onMounted, ref } from "vue";

const log = onMounted (() => {
  console.log("bg.value", bg);
} );

const props = defineProps({
  bgImg: {
    type: String,
    default: "1",
  },
});

const bg = computed(() => {
  return `url(${require(`../assets/bg-${props.bgImg}.svg`)})`;
});

// const bg =  ref(`url(${`../assets/bg-${props.bgImg}.svg`})`);



</script>

<style scoped lang="scss">

header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  padding: 51px;
  background: no-repeat center center #f4edc9;
  background-size: cover;
  min-height: calc(100vh - 40px);
}

.imgs {
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  width: 100%;
}

.heading-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
    width: 100%;
}



</style>