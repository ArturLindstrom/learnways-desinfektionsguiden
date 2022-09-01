<template>
    <div class="card-wrapper">
      <CardComponent v-for="situation in situations" :key="situation" :cardContent="situation"/>
      <ModalComponent>
        <SituationContent2></SituationContent2>
      </ModalComponent>
    </div>
</template>

<script setup>
  import CardComponent from '../CardComponent.vue';
  import ModalComponent from '../modal/ModalComponent.vue';
  import { ref, computed } from 'vue';
  import { useStore } from 'vuex'
  import situations from '@/assets/situationer/situations.json';
  import SituationContent2 from './SituationContent2.vue';
  import CardWrapper from '../CardWrapper.vue';

  const store = useStore()

  const modalComponentOpen = computed(() => {
    return store.state.modalShown
})
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

  @media screen and (max-width: 768px) {
    .card-wrapper {
      flex-direction: column;
    }
  }
</style>