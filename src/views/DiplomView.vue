<template>
<div class="wrapper">
  <HeaderComponent bgImg="4">
    <ConfettiExplosion v-if="done" 
    :particleCount="100"
    :stageHeight="1000"
    :stageWidth="800"
    :duration="3000"
    />
   <HeadingComponent fontSize="big" animate v-if="done">
      Bra jobbat!
    </HeadingComponent>
   <HeadingComponent fontSize="big" animate v-else>
      Du är inte riktigt klar
    </HeadingComponent>
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
import HeaderComponent from "../components/HeaderComponent.vue";
import HeadingComponent from '@/components/headings/HeadingComponent.vue';
import SubHeadingComponent from '@/components/headings/SubHeadingComponent.vue';
import MainComponent from "@/components/MainComponent.vue";
import { ref, computed, onMounted } from "vue";
import cards from "../assets/diplom/diplom.json"
import CardWrapper from "../components/cards/CardWrapper.vue"
import { useStore } from "vuex";
import ConfettiExplosion from "vue-confetti-explosion";
import CardComponent from "../components/cards/CardComponent.vue";

const store = useStore()
const done = computed(() => store.state.done)

const toggleDone = () => {
  store.commit("toggleDone")
}

</script>

<style>
 .wrapper{
    width: 100%;
 }
</style>