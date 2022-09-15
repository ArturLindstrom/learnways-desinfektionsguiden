<template>
  <div class="card-wrapper">
    <CardComponent v-for="card in cards" :key="card" :cardContent="card" />
  </div>
</template>

<script setup>
  import CardComponent from "./CardComponent.vue";
  import { computed } from "vue";

  const props = defineProps({
    cards: {
      type: Array,
    },
  });

  const cards = computed(() => props.cards)
</script>

<style scoped lang="scss">
  .card-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    gap: 20px;
  }
  
  @media (max-width: 1154px) {
    .card-wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }

  @media screen and (max-width: 768px) {
    .card-wrapper {
      grid-template-columns: 1fr;
    }
  }
</style>
