<template>
  <HeaderComponent bgImg="4">
   <HeadingComponent fontSize="65" animate>
      Du är inte riktigt klar
    </HeadingComponent>
    <SubHeadingComponent animate>
      När du är klar med en del visas en bock i cirkeln nedan. Klicka på den del som saknas för att slutföra utbildningen.
    </SubHeadingComponent>
  </HeaderComponent>
  <MainComponent>
  </MainComponent>
</template>

<script setup>
import HeaderComponent from "../components/HeaderComponent.vue";
import HeadingComponent from "@/components/HeadingComponent.vue";
import SubHeadingComponent from "@/components/SubHeadingComponent.vue";
import MainComponent from "@/components/MainComponent.vue";

</script>

<style>

</style>