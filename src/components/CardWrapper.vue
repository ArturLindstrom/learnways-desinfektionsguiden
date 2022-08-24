<template>
  <div class="card-wrapper">
    <CardComponent v-for="card in cards" :key="card" :cardContent="card" >

    </CardComponent>
  </div>
</template>

<script setup>
    import CardComponent from "@/components/CardComponent.vue";

    // Ska propas in eller komma från vuex sen
    import cards from "@/assets/diplom/diplom.json"
    // Ska propas in eller komma från vuex sen
</script>

<style scoped lang='scss'>
.card-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  gap: 20px;
  }
</style>