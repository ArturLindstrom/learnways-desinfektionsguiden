<template>
  <header :style="{backgroundImage:bg}" class="header">
    <div class="imgs">
        <img src="@/assets/Vårdhygien-Stockholm.svg" class="logo-vardhygien" alt="">
        <router-link to="/">
        <img src="../assets/Group-119.svg" class="logo-region-stockholm" alt="">
        </router-link>
    </div>
    <div class="heading-container">
        <slot></slot>
        <ProgressBarComponent class="progress-bar" />
      </div>
    <ScrollContainer class="scroll-container" v-if="route.name != 'diplom' || done"/>
  </header>
</template>

<script setup>
import ProgressBarComponent from "@/components/ProgressBarComponent.vue";
import ScrollContainer from "@/components/ScrollContainer.vue";
import { computed, onMounted, ref } from "vue";
import gsap from "gsap";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

const store = useStore()
const route = useRoute();

const done = computed(() => {
  return store.state.done
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
  justify-content: center;
  text-align: center;
  /* padding-bottom: 0; */
  background: no-repeat center center #f4edc9;
  background-size: cover;
  /* height: calc(100vh - 30px); */
  min-height: 95vh;
  width: 100%;
}

.imgs {
  position: absolute;
  top: 1rem;
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
margin-top: 100px;
}

.scroll-container {
  position: absolute;
  bottom: -10px;
}

@media (max-width: 768px) {
 .logo-vardhygien {
    width: 175px;
  }

  .logo-region-stockholm {
    width: 175px;
  }
  /* header{
    background-size: 300%;
  } */
}


</style>