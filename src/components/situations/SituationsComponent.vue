<template>
  <CardWrapper :cards="situations" />
  <ModalComponent>
    <SituationContent></SituationContent>
  </ModalComponent>
</template>

<script setup>

  import ModalComponent from "../modal/ModalComponent.vue";
  import SituationContent from "./SituationContent.vue";
  import CardWrapper from "../cards/CardWrapper.vue";

  import situations from "@/assets/situationer/situations.json";
  
</script>

