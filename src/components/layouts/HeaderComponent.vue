<template>
  <header class="header">
    <div class="background" :style="{ backgroundImage: backgroundImage }">
    </div>
    <div class="imgs">
      <img
        src="/assets/Vårdhygien-Stockholm.svg"
        class="logo-vardhygien"
        alt=""
      />
      <router-link to="/">
        <img
          src="/assets/Group-119.svg"
          class="logo-region-stockholm"
          alt=""
        />
      </router-link>
    </div>
    <div class="heading-container">
      <slot></slot>
      <ProgressBarComponent class="progress-bar" />
    </div>
    <Transition>
      <ScrollContainer
        class="scroll-container"
        v-if="route.name != 'diplom' || done"
      />
    </Transition>
  </header>
</template>

<script setup>
import ProgressBarComponent from "@/components/ProgressBarComponent.vue";
import ScrollContainer from "@/components/ScrollContainer.vue";
import { computed, onMounted, ref, watch } from "vue";
import gsap from "gsap";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const route = useRoute();

const done = computed(() => {
  return store.state.done;
});

onMounted(() => {
  store.commit("addRoute", route.name);
  if(route.name != 'diplom') {
    gsap.to(".background",
      {
        duration: 0.75,
        opacity: 0,
        ease: "power2.out",
        onComplete: () => 
          {
            backgroundImage.value = store.state.currentBackground;
            gsap.to(".background", 
              {
                duration: 1.5,
                opacity: 1,
                ease: "power2.out",
              }
            )
          }
      }
    )
  } else {
    gsap.to(".background",
      {
        duration: 0.25,
        opacity: 0,
        ease: "power2.out",
        onComplete: () => 
          {
            backgroundImage.value = store.state.currentBackground;
            gsap.set(".background", {scale: 0})
            gsap.to(".background", 
              {
                duration: 1,
                scale: 1,
                opacity: 1,
                ease: "power2.out",
              }
            )
          }
      }
    )
  }
});

const backgroundImage = ref(store.state.currentBackground)

</script>

<style scoped lang="scss">
header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: no-repeat center center #f4edc9;
  background-size: cover;
  height: 95vh;
  width: 100%;
  position: relative;
}
.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: no-repeat center center #f4edc9;
  background-size: cover;
  z-index: 0;
}
.imgs {
  position: absolute;
  top: 1rem;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  width: 95%;
}
.heading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* margin-top: 80px; */
  width: 100%;
}

.progress-bar {
  margin-top: 100px;
}

.scroll-container {
  position: absolute;
  transform: scale(1);
  bottom: -40px;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {

  header{
    height: 80vh;
  }
  .logo-vardhygien {
    width: 175px;
  }

  .logo-region-stockholm {
    width: 175px;
  }

  .imgs{ 
    top: 0;
   }

   .scroll-container {
    bottom: -30px;
  }
}
@media (max-width: 480px) {
  .logo-vardhygien {
    width: 120px;
  }

  .logo-region-stockholm {
    width: 120px;
  }

}
</style>
