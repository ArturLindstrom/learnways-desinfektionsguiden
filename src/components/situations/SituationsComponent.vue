<template>
  <CardWrapper :cards="situations" />
  <ModalComponent>
    <SituationContent2></SituationContent2>
  </ModalComponent>
</template>

<script setup>
import ModalComponent from "../modal/ModalComponent.vue";
import situations from "@/assets/situationer/situations.json";
import SituationContent2 from "./SituationContent2.vue";
import CardWrapper from "../cards/CardWrapper.vue";
</script>

<style scoped lang="scss"></style>
