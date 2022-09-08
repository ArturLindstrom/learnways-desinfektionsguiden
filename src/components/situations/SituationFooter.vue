<template>
  <footer class="footer">
    <img class="thumbs-up-icon" src="/assets/qicon-last.svg" alt="" />
    <SubHeadingComponent class="subheading">
      Du är klar med situationen. Stäng och gå vidare till nästa.
    </SubHeadingComponent>
    <ButtonComponent @click="closeModal" class="trigger">
      Stäng
    </ButtonComponent>
  </footer>
</template>

<script setup>
import SubHeadingComponent from '@/components/headings/SubHeadingComponent.vue'
import ButtonComponent from '@/components/ButtonComponent.vue'
import { useStore } from 'vuex'

const store = useStore()

const closeModal = () => {
  store.commit("modalContentClose");
  setTimeout(() => {
    store.commit("modalClose");
  }, 500);
}
</script>

<style scoped lang='scss'>


footer {
  height: 100vh;
  background-color: #f4edc9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .thumbs-up-icon {
    width: 160px;
    height: 160px;
    margin-bottom: 80px;
    /* transform: rotate(45deg) scale(0.8);
    opacity: 0;
    transition: all 1s ease-in-out; */
  }
  .subheading {
    margin-bottom: 80px;
  }
}

</style>