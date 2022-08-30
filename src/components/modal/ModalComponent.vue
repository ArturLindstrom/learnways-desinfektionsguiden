<template>
  <Transition name="modal-animation" @enter="showContent" >
    <div class="modal" @click.self="closeModal" v-if="modalComponentOpen">
      <Transition name="modal-animation-inner" @enter="showCloseContainer">
        <div class="modal-content" v-if="showModalContent">
          <div class="close-container" @click="closeModal">
            <p class="close-text">Stäng</p>
            <img class="close-icon" src="src/assets/close.svg">
          </div>
          <slot>
          </slot>
        </div>
      </Transition>
    </div>
  </Transition>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed, ref, onMounted } from 'vue';
import gsap from 'gsap';

const showCloseContainer = () => {
  gsap.from('.close-container', {duration: 0.5, opacity: 0, y: 20, ease: 'power2.out', delay: 0.5})
  }
const hideCloseContainer = () => {
  gsap.set('.close-container', {duration: 0.1, opacity: 0, y: 20, ease: 'power2.out', delay: 0})
  }



const modalComponentOpen = computed(() => {
    return store.state.modalShown
})

const showModalContent = computed(() => {
    return store.state.modalContentShown
})

const store = useStore()

const showContent = () => {
  store.commit('modalContentOpen')
}

const closeModal = () => {
  hideCloseContainer()
  store.commit('modalContentClose')
  setTimeout(() => {
      store.commit('modalClose')
  }, 500)
}

</script>

<style scoped lang='scss'>

.modal {
  position: fixed;
  z-index: 1; 
  padding-top: 3rem;
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  background-color: rgba(0,0,0,0.5);
  }

.modal-content {
  background-color: #fefefe;
  border-radius: 10px;
  margin: auto;
  border: 1px solid #888;
  height: 100vh;
  max-width: 100vw;
  width: 1200px;
  position: relative;
  overflow-y: auto;
  z-index: 3;
  /* display: flex; */
}

.close-container {
  position: fixed;
  display: grid;
  right: 12%;
  top: 10%;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  z-index: 9999
}

.close-icon {
  height: 38px;
  width: 38px;
}

.close-container:hover {
  cursor: pointer;
}

.close-icon {
  transition: all 0.25s ease-in-out;
}
.close-container:hover .close-icon{
  transform: rotate(90deg);
  transition: all 0.25s ease-in-out;
}

.modal-animation-enter-active,
.modal-animation-leave-active {
  transition: opacity 0.5s ease-in-out
}

.modal-animation-enter-from,
.modal-animation-leave-to {
  opacity: 0;
}

.modal-animation-inner-enter-active {
  transition: all 0.5s ease-in-out
}

.modal-animation-inner-leave-active {
  transition: all 0.5s ease-in-out
}

.modal-animation-inner-enter-from {
  /* opacity: 0; */
  transform: translateY(100%);
}

.modal-animation-inner-leave-to {
  transform: translateY(100%);
  
}





@media screen and (max-width: 768px) {
  .modal {
    padding: 0;
  }
  .modal-content {
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
  .close-container {
    top: 3%;
    right: -4%;
  }
  .close-text {
    display: none;
  }
}



@media screen and (max-width: 1200px){
  .modal {
    padding: 0;
  }
}



</style>