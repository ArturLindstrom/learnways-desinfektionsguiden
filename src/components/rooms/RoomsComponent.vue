<template>
<div class="parent">
  <div 
    :class="'div' + (i+1)" 
    class="thumbnails"
    v-for="(room, i) in rooms"
    :key="room"
    :style="{
      backgroundColor: room.thumbnail.backgroundColor,
      backgroundImage: 'url(' + room.thumbnail.image + ')'
    }">
    <span class="overlay">
      </span>
      <ButtonComponent  class="button" @click="modalToggle(room)">
        Rum {{room.thumbnail.roomNumber}}: {{room.thumbnail.title}}
      </ButtonComponent>
  </div>
    <RoomComponent :room="currentRoom" v-if="modalOpen" @closeModal="modalToggle"/>
</div>
</template>

<script setup>
import { ref, computed, onMounted, resolveDirective } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import rooms from '@/assets/olikatyper/rooms.json'
import ButtonComponent from '@/components/ButtonComponent.vue'
import RoomComponent from '@/components/rooms/RoomComponent.vue'
gsap.registerPlugin(ScrollTrigger);

const modalOpen = ref(false)
const currentRoom = ref({})

const modalToggle = (room) => {
  currentRoom.value = room
  modalOpen.value = !modalOpen.value
  if(modalOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }
}



onMounted(() => {
  gsap.from('.thumbnails', {
    scrollTrigger: {
      trigger: '.thumbnails'
    },
    y: '100%',
    opacity: 0,
    stagger: 0.1,
  })
})



</script>

<style scoped lang='scss'>
.parent {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(8, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  height: 70vh;
  width: 100%;
}
.parent div {
  background-repeat: no-repeat;
  background-size: cover;
  display: grid;
  place-items: center;
  &:hover .button {
    display: block;
    z-index: 2;
  }
}

.overlay {
  position: absolute;
  background: white;
  opacity: 0.4;
  transform: scaleY(0);
  transform-origin: top;
  width: 100%;
  transition: all ease 0.5s;
  z-index: 0;
  height: 0%;
  top: 0;
}

.parent div:hover .overlay {
  opacity: 0.4;
  transform-origin: top;
  transform: scaleY(100%);
  height: 100%;
  transition: all ease 0.5s;
}

.button {
  display: none;
}

.div1  { grid-area: 1 / 1 / 5 / 3; }
.div2 { grid-area: 1 / 3 / 4 / 5; }
.div3 { grid-area: 5 / 1 / 9 / 2; }
.div4 { grid-area: 5 / 2 / 9 / 3; }
.div5 { grid-area: 4 / 3 / 9 / 5; }
</style>