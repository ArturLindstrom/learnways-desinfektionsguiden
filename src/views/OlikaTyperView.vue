<template>
  <div>
    <HeaderComponent bgImg="2">
      <HeadingComponent fontSize="big" animate>
        {{data.s02_h1}}
      </HeadingComponent>
      <SubHeadingComponent animate>
        {{data.s02_ingress}}
      </SubHeadingComponent>
    </HeaderComponent>
    <MainComponent flex="column">
      <HeadingComponent fontSize="small">
        {{s02_h2_1}}
      </HeadingComponent>
      <SubHeadingComponent>
        Du har gått igenom {{completedRooms}} av 5 rum
      </SubHeadingComponent>
      <RoomsComponent />
    </MainComponent>
  </div>
</template>

<script setup>
import HeaderComponent from "../components/HeaderComponent.vue";
import HeadingComponent from '@/components/headings/HeadingComponent.vue';
import SubHeadingComponent from '@/components/headings/SubHeadingComponent.vue';
import MainComponent from "@/components/MainComponent.vue";
import RoomsComponent from "@/components/rooms/RoomsComponent.vue";
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore()

const data = store.state.data

const completedRooms = computed(() => store.state.roomsVisited.filter(Boolean).length)
</script>

<style scoped>
</style>