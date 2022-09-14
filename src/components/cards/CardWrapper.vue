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

  @media screen and (max-width: 768px) {
    .card-wrapper {
      flex-direction: column;
    }
  }
</style>
