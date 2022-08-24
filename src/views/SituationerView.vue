<template>
    <HeaderComponent bgImg="3">
        <HeadingComponent fontSize="65" animate>
            Öva på olika situationer
        </HeadingComponent>
        <SubHeadingComponent animate>
            Nu är det dags att testa dina nya kunskaper i olika situationer.
        </SubHeadingComponent>
    </HeaderComponent>
    <MainComponent flex="row">
        <HeadingComponent fontSize="32">
            Desinfektionsövningar
        </HeadingComponent>
        <SubHeadingComponent >
            Du har gått igenom 0 av 9 situationer
        </SubHeadingComponent>
        <SituationsComponent/>
    </MainComponent>
</template>

<script setup>
import HeaderComponent from "../components/HeaderComponent.vue";
import HeadingComponent from '../components/HeadingComponent.vue';
import SubHeadingComponent from '../components/SubHeadingComponent.vue';
import MainComponent from "@/components/MainComponent.vue";
import SituationCard from "../components/situations/SituationCard.vue";
import SituationsComponent from "../components/situations/SituationsComponent.vue";


</script>

<style scoped>
   
</style>