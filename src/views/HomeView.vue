<template>
        <HeaderComponent bgImg="1">
          <HeadingComponent fontSize="HEJSAN" animate>
            Desinfektionsguiden
          </HeadingComponent>
         <SubHeadingComponent animate>
            En praktisk guide från Vårdhygien Stockholm om desinfektion av händer, hud, ytor och föremål – för att minska risken för smittspridning.
         </SubHeadingComponent>
        </HeaderComponent>
        <MainComponent>
          <HeadingComponent fontSize="3">
            Vad kommer du att få lära dig?
          </HeadingComponent>
          <SliderComponent :slides="HomeSlides"/>
          <ButtonComponent action="forward">
            Gå till nästa del
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

</script>

<style lang="scss" scoped>

</style>