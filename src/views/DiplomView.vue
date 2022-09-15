<template>
<div class="wrapper">
  <HeaderComponent>
    <ConfettiExplosion v-if="done" 
    :particleCount="100"
    :stageHeight="1000"
    :stageWidth="800"
    :duration="3000"
    :particleSize="7"
    />
   <HeadingComponent animate v-if="done">
      Bra jobbat!
    </HeadingComponent>
  
   <HeadingComponent animate v-else>
      Du är inte riktigt klar
    </HeadingComponent>
    <button class="button" @click="toggleDone">HEMLIGA KNAPPEN</button>
    <SubHeadingComponent animate v-if="done">
      Bra jobbat! Du har genomfört hela utbildningen. Nu har du chans att hämta ditt diplom och repetera vid behov.
    </SubHeadingComponent>
    <SubHeadingComponent animate v-else>
      När du är klar med en del visas en bock i cirkeln nedan. Klicka på den del som saknas för att slutföra utbildningen.
    </SubHeadingComponent>
  </HeaderComponent>
  <MainComponent  v-if="done">
    <SubHeadingComponent>
      Du är klar!
    </SubHeadingComponent>
    <CardWrapper :cards="cards"/>
  </MainComponent>
</div>
</template>

<script setup>
import HeaderComponent from "@/components/layouts/HeaderComponent.vue";
import HeadingComponent from '@/components/headings/HeadingComponent.vue';
import SubHeadingComponent from '@/components/headings/SubHeadingComponent.vue';
import ConfettiExplosion from "vue-confetti-explosion";
import MainComponent from '@/components/layouts/MainComponent.vue';
import CardWrapper from "../components/cards/CardWrapper.vue"
import cards from "@/assets/diplom/diplom.json"
import {computed, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore()
const done = computed(() => store.state.done)

const toggleDone = () => {
  store.commit("toggleDone")
}

</script>

<style scoped lang="scss">
 .wrapper{
    width: 100%;
 }

 .button {
  z-index: 1;
 }
</style>