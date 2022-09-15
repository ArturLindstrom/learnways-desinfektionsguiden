<template>
  <div class="wrapper">
    <HeaderComponent>
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
      <SliderComponent :slides="HomeSlides" />
      <ButtonComponent action="forward" tabindex="2">
        {{data.btn_nextsection}}
      </ButtonComponent>
    </MainComponent>
  </div>
</template>

<script setup>
import HeaderComponent from "@/components/layouts/HeaderComponent.vue";
import HeadingComponent from '@/components/headings/HeadingComponent.vue';
import SubHeadingComponent from '@/components/headings/SubHeadingComponent.vue';
import MainComponent from '@/components/layouts/MainComponent.vue';
import SliderComponent from '@/components/slider/SliderComponent.vue';
import ButtonComponent from "@/components/ButtonComponent.vue";
import HomeSlides from '@/assets/home/main/slide/slide.json'
import { useStore } from 'vuex';
import { computed, ref, onMounted } from 'vue';

const store = useStore()
const data = store.state.data

</script>

<style lang="scss" scoped>
  .wrapper{
    width: 100%;
  }
</style>