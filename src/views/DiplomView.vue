<template>
  <HeaderComponent bgImg="4">
   <HeadingComponent fontSize="65" animate v-if="done">
      Bra jobbat!
    </HeadingComponent>
   <HeadingComponent fontSize="65" animate v-else>
      Du är inte riktigt klar
    </HeadingComponent>
    <SubHeadingComponent animate v-if="done">
Bra jobbat! Du har genomfört hela utbildningen. Nu har du chans att hämta ditt diplom och repetera vid behov.    </SubHeadingComponent>
    <SubHeadingComponent animate v-else>
      När du är klar med en del visas en bock i cirkeln nedan. Klicka på den del som saknas för att slutföra utbildningen.
    </SubHeadingComponent>
    <button @click="done=!done"> {{done}}</button>
  </HeaderComponent>
  <MainComponent flex="row">
    <CardComponent v-for="card in cards" :key="card" :cardContent="card" v-if="done">

    </CardComponent>
  </MainComponent>
</template>

<script setup>
import HeaderComponent from "../components/HeaderComponent.vue";
import HeadingComponent from "@/components/HeadingComponent.vue";
import SubHeadingComponent from "@/components/SubHeadingComponent.vue";
import MainComponent from "@/components/MainComponent.vue";
import { ref } from "vue";
import CardComponent from "../components/CardComponent.vue";
import cards from "../assets/diplom/diplom.json"

const done = ref(false)


</script>

<style>

</style>