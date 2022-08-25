<template>
      <div class="modal" @click.self="closeModal" v-if="modalComponentOpen">
            <div class="modal-content">
              <div class="close-container" @click="closeModal">
                <p>Stäng</p>
                <img class="close-icon" src="src/assets/close.svg">
              </div>
            <slot>
            </slot>
            </div>
      </div>
</template>

<script setup>
import MainComponent from '../MainComponent.vue'
import { useStore } from 'vuex'
import { onMounted, computed } from 'vue';
import gsap from 'gsap';

 const modalComponentOpen = computed(() => {
    return store.state.modalShown
})

const store = useStore()

const closeModal = () => {
  gsap.to('.modal-content', {
    duration: 0.5,
    y: '100%',
    onComplete: () => store.commit('modalClose')
  })
  gsap.to('.modal', {
    opacity: 0,
    duration: 0.5,
}
)}

// const closeModal = () => {
//   store.commit('modalClose')
// }


onMounted(() => {
  gsap.from('.modal-content', {
    duration: 1,
    y: '100%',
    opacity: 1
  });

  gsap.from('.modal', {
    duration: 0.5,
    opacity: 0
  })
})
</script>

<style scoped lang='scss'>
  .modal {
    position: fixed; /* Stay in place */
    z-index: 1; 
    padding: 3rem 3rem 0 3rem;
    left: 0;
    top: 0;
    width: 100%; 
    height: 100%; 
    overflow: auto;
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.5); /* Black w/ opacity */
  }

/* Modal Content */
.modal-content {
  background-color: #fefefe;
  border-radius: 10px;
  margin: auto;
  border: 1px solid #888;
  min-height: 50vh;
  width: 80%;
}

/* The Close Button */
.close-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  position: fixed;
  top: 2rem;
  right: 2.5%;
  font-weight: bold;
}

.close-icon {
  transition: all 0.25s ease-in-out;
}

.close-icon:hover{
  transform: rotate(90deg);
  transition: all 0.25s ease-in-out;
  cursor: pointer;
}

/* .modal-enter-active,
.modal-leave-active {
  transition: all 0.5s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-content-enter-active,
.modal-content-leave-active {
  transition: all 1s ease;
}

.modal-content-enter-from,
.modal-content-leave-to {
   transform: translateY(100%);
} */

</style>