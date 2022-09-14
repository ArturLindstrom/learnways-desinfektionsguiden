<template>
  <div class="parent">
    <div
      :class="'div' + (i + 1)"
      class="thumbnails"
      v-for="(room, i) in rooms"
      :key="room"
      :style="{
        backgroundColor: room.thumbnail.backgroundColor,
        backgroundImage: 'url(' + room.thumbnail.image + ')',
      }"
      @click="modalOpen(room)"
    >
      <span class="overlay"> </span>
      <ButtonComponent class="button">
        Rum {{ room.thumbnail.roomNumber }}: {{ room.thumbnail.title }}
      </ButtonComponent>
      <img
        class="done"
        src="/assets/done.svg"
        alt="done"
        v-if="roomsVisited[i]"
      />
    </div>
    <ModalComponent>
      <RoomComponent />
    </ModalComponent>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import rooms from "@/assets/olikatyper/rooms.json";
import ButtonComponent from "@/components/ButtonComponent.vue";
import RoomComponent from "@/components/rooms/RoomComponent.vue";
import ModalComponent from "../modal/ModalComponent.vue";
import { useStore } from "vuex";
gsap.registerPlugin(ScrollTrigger);

const store = useStore();

const modalComponentOpen = computed(() => store.state.modalShown);

const roomsVisited = computed(() => store.state.roomsVisited);

const modalOpen = (room) => {
  store.commit("modalOpen", room);
};

onMounted(() => {
  gsap.from(".thumbnails", {
    scrollTrigger: {
      trigger: ".parent",
    },
    y: "100%",
    opacity: 0,
    stagger: 0.1,
    duration: 1,
  });
});
</script>

<style scoped lang="scss">
  .parent {
    display: grid;
    padding-top: 2rem;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(8, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    height: 70vh;
    width: 90vw;
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
    &:hover .done {
      display: none;
    }
  }
  .thumbnails {
    cursor: pointer;
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
    opacity: 0.5;
    transform-origin: top;
    transform: scaleY(100%);
    height: 100%;
    transition: all ease-out 0.5s;
  }

  .button {
    display: none;
  }

  .div1 {
    grid-area: 1 / 1 / 5 / 3;
  }
  .div2 {
    grid-area: 1 / 3 / 4 / 5;
  }
  .div3 {
    grid-area: 5 / 1 / 9 / 2;
  }
  .div4 {
    grid-area: 5 / 2 / 9 / 3;
  }
  .div5 {
    grid-area: 4 / 3 / 9 / 5;
  }

  @media (max-width: 768px) {
    .parent {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(5, 1fr);
      grid-row-gap: 10px;
      height: 175vh;
    }
    .parent div {
      background-size: 120%;
      background-position: center bottom;
    }

    .div1 {
      grid-area: 1 / 1 / 2 / 2;
    }
    .div2 {
      grid-area: 2 / 1 / 3 / 2;
    }
    .div3 {
      grid-area: 3 / 1 / 4 / 2;
    }
    .div4 {
      grid-area: 4 / 1 / 5 / 2;
    }
    .div5 {
      grid-area: 5 / 1 / 6 / 2;
    }
  }
</style>
