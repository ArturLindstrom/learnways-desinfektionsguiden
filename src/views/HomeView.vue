<template>
  <div class="home-view">
        <HeaderComponent bgImg="1">
          <HeadingComponent fontSize="85" animate>
            Desinfektionsguiden
          </HeadingComponent>
         <SubHeadingComponent animate>
            En praktisk guide från Vårdhygien Stockholm om desinfektion av händer, hud, ytor och föremål – för att minska risken för smittspridning.
         </SubHeadingComponent>
        </HeaderComponent>
        <MainComponent>
          <HeadingComponent fontSize="32">
            Vad kommer du att få lära dig?
          </HeadingComponent>
          <SliderComponent :slides="HomeSlides"/>
          <ButtonComponent action="forward">
            Gå till nästa del
          </ButtonComponent>
        </MainComponent>
  </div>
</template>

<script setup>
import HeaderComponent from "../components/HeaderComponent.vue";
import HeadingComponent from "@/components/HeadingComponent.vue";
import SubHeadingComponent from "@/components/SubHeadingComponent.vue";
import MainComponent from "@/components/MainComponent.vue";
import SliderComponent from '@/components/slider/SliderComponent.vue';
import ButtonComponent from "@/components/ButtonComponent.vue";
import { onMounted } from "@vue/runtime-core";
import HomeSlides from '@/assets/home/main/slide/slide.json'

</script>

<style lang="scss" scoped>

</style>