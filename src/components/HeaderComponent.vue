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
    <ProgressBarComponent/>
    <p class="scroll">Skrolla ner</p>
  </header>
</template>

<script setup>
import ProgressBarComponent from "./ProgressBarComponent.vue";
import { computed, onMounted, ref } from "vue";
import gsap from "gsap";

onMounted(() => {
  gsap.from(
    ".header",
    
    {
      backgroundPositionY: 100,
    }
  );
})

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
  padding: 51px;
  background: no-repeat center center #f4edc9;
  background-size: cover;
  min-height: 85vh;
  margin-bottom:40px ;
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

.home{
  background-image: url(../assets/bg-1.svg);
}
.situationer{
  background-image: url(../assets/bg-3.svg);
}

.typer{
  background-image: url(../assets/bg-2.svg);
}

.diplom{
  background-image: url(../assets/bg-4.svg);
}

.scroll{
  position: absolute;
  bottom: 6rem;
}


</style>