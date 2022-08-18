<template>
  <div class="home-view">
        <HeaderComponent bgImg="1">
          <HeadingComponent fontSize="85" class="heading">
          Desinfektionsguiden
          </HeadingComponent>
         <SubHeadingComponent>
          En praktisk guide från Vårdhygien Stockholm om desinfektion av händer, hud, ytor och föremål – för att minska risken för smittspridning.
         </SubHeadingComponent>
        </HeaderComponent>
        <MainComponent>

        </MainComponent>
  </div>
</template>

<script setup>
import gsap from "gsap";
import HeaderComponent from "../components/HeaderComponent.vue";
import HeadingComponent from "@/components/HeadingComponent.vue";
import SubHeadingComponent from "@/components/SubHeadingComponent.vue";
import MainComponent from "@/components/MainComponent.vue";
import { onMounted } from "@vue/runtime-core";




</script>

<style lang="scss">


</style>