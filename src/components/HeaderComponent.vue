<template>
  <header :style="{backgroundImage:bg}" class="header">
    <div class="imgs">
        <img src="@/assets/Vårdhygien-Stockholm.svg" alt="">
        <router-link to="/">
        <img src="../assets/Group-119.svg" alt="">
        </router-link>
    </div>
    <div class="heading-container">
        <slot></slot>
    </div>
    <ProgressBarComponent class="progress-bar" />
    <ScrollContainer class="scroll-container"/>
  </header>
</template>

<script setup>
import ProgressBarComponent from "@/components/ProgressBarComponent.vue";

import ScrollContainer from "@/components/ScrollContainer.vue";
import { computed, onMounted, ref } from "vue";
import gsap from "gsap";



const props = defineProps({
  bgImg: {
    type: String,
    default: "home",
  },
});
const bg = computed(() => {
  return `url(../src/assets/bg-${props.bgImg}.svg)`;
});
</script>

<style scoped lang="scss">

header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  padding-bottom: 0;
  background: no-repeat center center #f4edc9;
  background-size: cover;
  height: calc(100vh - 40px);
  width: 100%;
}

.imgs {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  width: 95%;
}
.heading-container{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
  width: 100%;
}

.progress-bar {
  position: absolute;
  top: 35%;
}

.scroll-container {
  position: absolute;
  bottom: -10px;
}

</style>