<template>
    <div class="card-wrapper">
        <SituationCard 
          v-for="category in situations"
          :key="category" :category="category"
          @openSituation="(payload) => modalToggle(payload)" />
        <SituationModal
          v-if="modalOpen"
          :situation="currentSituation"
          :category="currentCategory"
          @closeModal="modalToggle" 
        />
    </div>
</template>

<script setup>
  import SituationCard from './SituationCard.vue'
  import SituationModal from './SituationModal.vue'
  import situations from '@/assets/situationer/situations.json'
    
    
  import { ref } from 'vue';

  const currentSituation = ref({})
  const currentCategory = ref({})

  const modalOpen = ref(false)

  const modalToggle = (payload) => {
    modalOpen.value = !modalOpen.value
    if(modalOpen.value) {
      document.body.style.overflow = 'hidden'
      currentSituation.value = payload.situation
      currentCategory.value = payload.category
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