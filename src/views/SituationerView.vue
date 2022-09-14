<template>
  <div class="wrapper">
    <HeaderComponent>
      <HeadingComponent fontSize="big" animate>
        Öva på olika situationer
      </HeadingComponent>
      <SubHeadingComponent animate>
        Nu är det dags att testa dina nya kunskaper i olika situationer.
      </SubHeadingComponent>
    </HeaderComponent>
    <MainComponent flex="column">
      <HeadingComponent fontSize="small">
        Desinfektionsövningar
      </HeadingComponent>
      <SubHeadingComponent >
        Du har gått igenom {{completedSituations}} av 9 situationer
      </SubHeadingComponent>
      <SituationsComponent />
    </MainComponent>
  </div>
</template>

<script setup>
  import HeaderComponent from "@/components/layouts/HeaderComponent.vue";
  import HeadingComponent from '@/components/headings/HeadingComponent.vue';
  import SubHeadingComponent from '@/components/headings/SubHeadingComponent.vue';
  import MainComponent from '@/components/layouts/MainComponent.vue';
  import SituationsComponent from "../components/situations/SituationsComponent.vue";
  import { useStore } from "vuex";
  import { computed } from "vue";

  const store = useStore();

  const completedSituations = computed(() => store.state.situationsCompleted.length)

</script>

<style scoped>
  .wrapper{
    width: 100%;
  }
</style>