<template>
  <div class="dialog-container">
    <div
      class="dialog-wrapper"
      v-for="(dialog, i) in props.room.header.dialogs"
      :key="i"
      :class="'dialog' + (i + 1)"
    >
      <transition-group name="text">
        <div class="dialog-text" v-if="dialogShown == i + 1">
          <p>{{ dialog }}</p>
        </div>
        <div class="triangle" v-if="dialogShown == i + 1"></div>
      </transition-group>
      <button
        class="dialog-button"
        @click="toggleDialog(i)"
        :class="{ 'active-button': dialogShown === i + 1 }"
      ></button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import gsap from "gsap";

const props = defineProps({
  room: {
    type: Object,
  },
});

const dialogShown = ref(0);

const toggleDialog = (i) => {
  if (dialogShown.value == i + 1) {
    dialogShown.value = 0;
  } else {
    dialogShown.value = i + 1;
  }
};
</script>

<style scoped lang="scss">
.dialog-container {
  position: relative;
  width: 100%;
  height: 100%;
  /* overflow: hidden; */
}
.dialog-wrapper {
  position: absolute;
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
  /* height: calc(2.5vw + 6px);
  width: calc(2.5vw + 6px); */
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 50%;
  background: url("/assets/close-wht.svg") no-repeat center #0e2d57;
  background-size: 30%;
  transition: all 0.5s ease-in-out;
  &:hover {
    background-color: #1d4c7b;
    transition: all 0.5s ease-in-out;
    cursor: pointer;
  }
}

.dialog-text {
  font-family: "Nunito", sans-serif;
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
  max-width: 325px;
  min-width: 200px;
  color: black;
}

.triangle {
  position: absolute;
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 20px solid transparent;
  border-top: 30px solid white;
  bottom: -20px;
  left: 50%;
  margin-bottom: 20px;
  /* transform: translateX(-50%); */
}

.active-button {
  transform: rotate(45deg) scale(1.1);
  background-color: #1d4c7b;
  transition: all 0.5s ease-in-out;
}

.text-enter-active,
.text-leave-active {
  transition: all 0.5s ease;
}

.text-enter-from,
.text-leave-to {
  opacity: 0;
  transform: translateY(20px) translateX(-5px);
}

.dialog1 {
  position: absolute;
  top: 25%;
  left: 24%;
}
.dialog2 {
  position: absolute;
  top: 20%;
  left: 31%;
}

.dialog3 {
  position: absolute;
  top: 30%;
  left: 60%;
  > .dialog-text {
    left: -100px;
  }
}
.dialog4 {
  position: absolute;
  top: 35%;
  left: 75%;
  > .dialog-text {
    left: -150px;
  }
}

.dialog5 {
  position: absolute;
  top: 50%;
  left: 82%;
  > .dialog-text {
    left: -180px;
  }
}

@media only screen and (max-width: 768px) {
  .dialog-button {
    height: 2rem;
    width: 2rem;
  }
  .dialog1 {
    position: absolute;
    top: 0%;
    left: 20%;
  }
  .dialog2 {
    position: absolute;
    top: -1%;
    left: 29%;
  }

  .dialog3 {
    position: absolute;
    top: 0%;
    left: 60%;
    /* > .dialog-text {
      left: -250px;
    } */
  }
  .dialog4 {
    position: absolute;
    top: 1%;
    left: 73%;
    /* > .dialog-text {
      left: -250px;
    } */
  }

  .dialog5 {
    position: absolute;
    top: 4%;
    left: 80%;
    /* > .dialog-text {
      left: -300px;
    } */
  }
}
</style>
