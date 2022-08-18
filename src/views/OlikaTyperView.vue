<template>
  <HeaderComponent bgImg="2">
    <HeadingComponent fontSize="65" animate>
          Olika typer av desinfektion
    </HeadingComponent>
    <SubHeadingComponent>
      I vårt arbete stöter vi på situationer med olika behov av desinfektion.
    </SubHeadingComponent>
  </HeaderComponent>

  <MainComponent>
    <HeadingComponent fontSize="32">
      Utforska de fem rummen
    </HeadingComponent>
    <SubHeadingComponent>
      Du har gått igenom 0 av 5 rum
    </SubHeadingComponent>
    <RoomsComponent>
      
    </RoomsComponent>
  </MainComponent>
</template>

<script setup>
import HeaderComponent from "../components/HeaderComponent.vue";
import HeadingComponent from "@/components/HeadingComponent.vue";
import SubHeadingComponent from "@/components/SubHeadingComponent.vue";
import MainComponent from "@/components/MainComponent.vue";
import RoomsComponent from "@/components/rooms/RoomsComponent.vue";

</script>

<style>

</style>