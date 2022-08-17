<template>
    <HeaderComponent bgImg="situationer">
        <HeadingComponent fontSize="65">
            Öva på olika situationer
        </HeadingComponent>
        <SubHeadingComponent>
            Nu är det dags att testa dina nya kunskaper i olika situationer.
        </SubHeadingComponent>
    </HeaderComponent>
    <MainComponent />
</template>

<script setup>
import HeaderComponent from "../components/HeaderComponent.vue";
import HeadingComponent from '../components/HeadingComponent.vue';
import SubHeadingComponent from '../components/SubHeadingComponent.vue';
import MainComponent from "@/components/MainComponent.vue";

</script>

<style>

</style>