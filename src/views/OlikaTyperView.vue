<template>
  <div class="wrapper">
    <HeaderComponent>
      <HeadingComponent animate>
        {{data.s02_h1}}
      </HeadingComponent>
      <SubHeadingComponent animate>
        {{data.s02_ingress}}
      </SubHeadingComponent>
    </HeaderComponent>
    <MainComponent flex="column">
      <HeadingComponent fontSize="small">
        {{data.s02_h2_1}}
      </HeadingComponent>
      <SubHeadingComponent>
        Du har gått igenom {{completedRooms}} av 5 rum
      </SubHeadingComponent>
      <RoomsComponent />
    </MainComponent>
  </div>
</template>

<script setup>
import HeaderComponent from "@/components/layouts/HeaderComponent.vue";
import HeadingComponent from '@/components/headings/HeadingComponent.vue';
import SubHeadingComponent from '@/components/headings/SubHeadingComponent.vue';
import MainComponent from '@/components/layouts/MainComponent.vue';
import RoomsComponent from "@/components/rooms/RoomsComponent.vue";
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore()

const data = store.state.data

const completedRooms = computed(() => Object.values(store.state.roomsVisited).reduce((a, item) => a + item, 0))
</script>

<style scoped>
  .wrapper{
    width: 100%;
  }
</style>