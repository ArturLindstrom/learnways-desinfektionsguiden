<template>
      <div class="modal" @click.self="closeModal" v-if="modalComponentOpen">
            <div class="modal-content">
              <div class="sticky-container" >
                <div class="close-container" @click="closeModal">
                  <p class="close-text">Stäng</p>
                  <img class="close-icon" src="src/assets/close.svg">
                </div>
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
import bodyParser from 'body-parser';

const modalComponentOpen = computed(() => {
    return store.state.modalShown
})

const store = useStore()

const closeModal = () => {
  document.body.style.overflow = "auto"
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



onMounted(() => {
  document.body.style.overflow = 'hidden'
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
  padding-top: 3rem;
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  /* overflow: auto; */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.5); /* Black w/ opacity */
  }

/* Modal Content */
.modal-content {
  background-color: #fefefe;
  border-radius: 10px;
  margin: auto;
  border: 1px solid #888;
  height: 100vh;
  max-width: 100vw;
  width: 1200px;
  /* width: 86%; */
  position: relative;
  overflow-y: auto;
  z-index: 2;
}

/* The Close Button */
/* .sticky-container {
  font-weight: bold; 
  position: sticky;
  top: 0;
  left: 0;
  height: calc(100% - 1px);
  width: calc(100% - 1px);
  float: left;
  margin-right: -100%;
  z-index: 1;
} */

.close-container {
  position: absolute;
  right: 2%;
  top: 4%;
  /* transform: translate3d(-50%, -50%, 0); */
  /* white-space: nowrap; */
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
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