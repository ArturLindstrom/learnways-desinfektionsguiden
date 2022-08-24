<template>
    <div class="card-wrapper">
        <SituationCard v-for="category in situations" :key="category" :category="category" @openSituation="(situation) => modalToggle(situation)" />
        <SituationModal v-if="modalOpen" :situation="currentSituation" @closeModal="modalToggle" />
    </div>
</template>

<script setup>
  import SituationCard from './SituationCard.vue'
  import SituationModal from './SituationModal.vue'
  import situations from '@/assets/situationer/situations.json'
    
    
  import { ref } from 'vue';

  const currentSituation = ref({})
  const modalOpen = ref(false)

  const modalToggle = (situation) => {
    currentSituation.value = situation
    modalOpen.value = !modalOpen.value
    if(modalOpen.value) {
    document.body.style.overflow = 'hidden'
    } else {
    document.body.style.overflow = 'auto'
    }
  }
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