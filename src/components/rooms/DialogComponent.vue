<template>
<div class="dialog-wrapper" v-for="(dialog, i) in props.room.header.dialogs" :key="i" :class="'dialog' + (i+1)">
  <Transition name="text">
    <div class="dialog-text" v-if="dialogShown == i+1">
    <p>{{dialog}}</p>
   </div>
  </Transition>
    <button class="dialog-button" @click="toggleDialog(i)" :class="{ 'active-button': dialogShown === i+1 }"></button>
</div>
</template>

<script setup>

import { ref } from 'vue'
import gsap from 'gsap';

const props = defineProps({
  room: {
    type: Object,
  },
})



const dialogShown = ref(0)

const toggleDialog = (i) => {
    if (dialogShown.value == i+1) {
        dialogShown.value = 0
    } else {
        dialogShown.value = i+1
    }

}
 


</script>

<style scoped lang='scss'>


.dialog-wrapper {
  /* display: grid;
  grid-template-rows: 1fr 1fr; */
  border: 1px solid red;
}
.dialog-button {
  position: relative;
  top: 50%;
  border: none;
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 50%;
  background: url('src/assets/close-wht.svg') no-repeat center #0E2D57;
  transition: all 0.5s ease-in-out;
  &:hover {
    background-color: #1D4C7B;
    cursor: pointer;
  } 
}

.dialog-text {
  position: relative;
  top: 0;
  background: white;
  text-align: left;
  padding: .5rem;
  height: 100%;
  max-width: 40rem;
}



.active-button{
    transform: rotate(45deg);
    background-color: #1D4C7B;
    transition: all 0.5s ease-in-out;  
}

.text-enter-active,
.text-leave-active {
  transition: all 0.5s ease

}

.text-enter-from,
.text-leave-to {
  opacity: 0;
  transform: translateY(20px);
}




.dialog1{
    position: absolute;
    top: 30%;
    left: 25%
}
.dialog2{
    position: absolute;
    top: 28%;
    left: 31%
}

.dialog3{
    position: absolute;
    top: 30%;
    left: 61%
}
.dialog4 {
    position: absolute;
    top: 30%;
    left: 72.5%
}

.dialog5{
    position: absolute;
    top: 35%;
    left: 80%
}

</style>