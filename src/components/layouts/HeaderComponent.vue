<template>
  <header class="header" ref="header">
    <div class="background" :style="{ backgroundImage: backgroundImage }">
    </div>
    <div class="imgs">
      <img
        src="/assets/vardhygien.svg"
        class="logo-vardhygien"
        alt=""
      />
      <router-link to="/" :tabindex="modalOpen ? -1 : 4">
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
      <ScrollContainer class="scroll-container" />
  </header>
</template>

<script setup>
  import ProgressBarComponent from "@/components/ProgressBarComponent.vue";
  import ScrollContainer from "@/components/ScrollContainer.vue";
  import { computed, onMounted, ref, watch } from "vue";
  import gsap from "gsap";
  import { useRoute } from "vue-router";
  import { useStore } from "vuex";
  import bg2 from "/assets/bg-2.svg";


  const store = useStore();
  const route = useRoute();

  const done = computed(() => {
    return store.state.done;
  });

  const modalOpen = computed(() => {
    return store.state.modalShown;
  });

  const vh = computed(() => window.innerHeight * 0.01);
  const header = ref(null)

  const backgroundImage = ref(store.state.currentBackground)
  onMounted(() => {
    gsap.set(header.value, { height: vh.value * 95 });
    store.commit("addRoute", route.name);
    //animates background image when route changes. diplom view has a scaling effect that only looks good on the diplom background image. 
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
    opacity: 0;
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


  @media (max-width: 768px) {

    header{
      height: 95dvh;
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
