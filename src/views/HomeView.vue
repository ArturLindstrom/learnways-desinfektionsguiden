<template>
  <div class="home-view">
        <HeaderComponent bgImg="1">
          <HeadingComponent fontSize="85">
          Desinfektionsguiden
          </HeadingComponent>
         <SubHeadingComponent>
          En praktisk guide från Vårdhygien Stockholm om desinfektion av händer, hud, ytor och föremål – för att minska risken för smittspridning.
         </SubHeadingComponent>
        </HeaderComponent>
        <MainComponent />
  </div>
</template>

<script setup>
import HeaderComponent from "../components/HeaderComponent.vue";
import HeadingComponent from "@/components/HeadingComponent.vue";
import SubHeadingComponent from "@/components/SubHeadingComponent.vue";
import MainComponent from "@/components/MainComponent.vue";

</script>

<style lang="scss">


</style>