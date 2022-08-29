<template>
    <HeaderComponent bgImg="3">
        <HeadingComponent fontSize="65" animate>
            Öva på olika situationer
        </HeadingComponent>
        <SubHeadingComponent animate>
            Nu är det dags att testa dina nya kunskaper i olika situationer.
        </SubHeadingComponent>
    </HeaderComponent>
    <MainComponent flex="column">
        <HeadingComponent fontSize="32">
            Desinfektionsövningar
        </HeadingComponent>
        <SubHeadingComponent >
            Du har gått igenom {{completedSituations}} av 9 situationer
        </SubHeadingComponent>
        <SituationsComponent />
    </MainComponent>
</template>

<script setup>
import HeaderComponent from "../components/HeaderComponent.vue";
import HeadingComponent from '../components/HeadingComponent.vue';
import SubHeadingComponent from '../components/SubHeadingComponent.vue';
import MainComponent from "@/components/MainComponent.vue";
import SituationCard from "../components/situations/SituationCard.vue";
import SituationsComponent from "../components/situations/SituationsComponent.vue";
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();

const completedSituations = computed(() => {
    return store.state.situationsCompleted.length
})

</script>

<style scoped>
   
</style>