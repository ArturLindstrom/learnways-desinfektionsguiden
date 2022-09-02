<template>
  <HeaderComponent bgImg="1">
    <HeadingComponent fontSize="big" animate>
      {{data.page_title}}
    </HeadingComponent>
    <SubHeadingComponent animate>
    {{data.s01_ingress}}
    </SubHeadingComponent>
  </HeaderComponent>
  <MainComponent>
    <HeadingComponent fontSize="small">
      {{data.s01_h2_1}}
    </HeadingComponent>
    <SliderComponent :slides="slideData"/>
    <ButtonComponent action="forward">
      {{data.btn_nextsection}}
    </ButtonComponent>
  </MainComponent>
</template>

<script setup>
import HeaderComponent from "../components/HeaderComponent.vue";
import HeadingComponent from "@/components/HeadingComponent.vue";
import SubHeadingComponent from "@/components/SubHeadingComponent.vue";
import MainComponent from "@/components/MainComponent.vue";
import SliderComponent from '@/components/slider/SliderComponent.vue';
import ButtonComponent from "@/components/ButtonComponent.vue";
import HomeSlides from '@/assets/home/main/slide/slide.json'
import { useStore } from 'vuex';
import { computed, ref, onMounted } from 'vue';

const store = useStore()

const data = store.state.data

const slideData = ref([])

const slideHeadings = store.getters.makeArray('s01_about_h')
const slideBodies = store.getters.makeArray('s01_about_p')

onMounted(() => {
  for (let i = 0; i < slideHeadings.length; i++) {
  slideData.value.push({
    heading: slideHeadings[i].value,
    body: slideBodies[i].value,
    image: `src/assets/home/main/slide/images/start-${i+1}.svg`
  })
  }
})

 </script>

<style lang="scss" scoped>

</style>