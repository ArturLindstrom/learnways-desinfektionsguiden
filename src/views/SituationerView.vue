<template>
    <HeaderComponent bgImg="3">
        <HeadingComponent fontSize="65" animate>
            Öva på olika situationer
        </HeadingComponent>
        <SubHeadingComponent animate>
            Nu är det dags att testa dina nya kunskaper i olika situationer.
        </SubHeadingComponent>
    </HeaderComponent>
    <MainComponent>
        <HeadingComponent fontSize="32">
            Desinfektionsövningar
        </HeadingComponent>
        <SubHeadingComponent>
            Du har gått igenom X av X övningar
        </SubHeadingComponent>
    </MainComponent>
</template>

<script setup>
import HeaderComponent from "../components/HeaderComponent.vue";
import HeadingComponent from '../components/HeadingComponent.vue';
import SubHeadingComponent from '../components/SubHeadingComponent.vue';
import MainComponent from "@/components/MainComponent.vue";

</script>

<style>

</style>