<template>
<div class="dialog-wrapper" v-for="(dialog, i) in props.room.header.dialogs" :key="i" :class="'dialog' + (i+1)">
  <transition-group name="text">
    <div class="dialog-text" v-if="dialogShown == i+1">
    <p>{{dialog}}</p>
   </div>
   <div class="triangle" v-if="dialogShown == i+1">
   </div>
  </transition-group>

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
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: auto;
  flex-wrap: wrap;
  /* border: 1px solid red; */
}
.dialog-button {
  position: absolute;
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
     font-family: 'Nunito', sans-serif;
    font-weight: 400;
    font-style: normal;
    pointer-events: none;
    display: block;
    position: absolute;
    background-color: white;
    padding: 15px;
    position: absolute;
    text-align: left;
    left: -50px;
    bottom: 100%;
    margin-bottom: 30px;
    /* z-index: 9999; */
    width: 325px;
    color: black;
}

.triangle {
    position: absolute;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-top: 30px solid white;
    bottom: -20px;
    left: 50%;
    margin-bottom: 20px;
    /* transform: translateX(-50%); */
}
/* .dialog-text {
  position: absolute;
  top: 0;
  background: white;
  text-align: left;
  padding: .5rem;
  height: 100%;
  max-width: 325px;
} */



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