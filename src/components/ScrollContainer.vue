<template >
    <div class="scroll-container">
      <p class="scroll">Skrolla ner</p>
        <img
          class="scroll-icon"
          src="/assets/home/main/scroll.svg"
          @keyup.enter="toBottom"
          @click="toBottom"
          tabindex="0"
        />
    </div>
</template>

<script setup>
import { onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import gsap from 'gsap';

const store = useStore();
const router = useRouter();

const done = computed(() => store.state.done);
const modalOpen = computed(() => store.state.modalShown);

const toBottom = () => {
  window.scrollTo({
    top: 700,
    left: 100,
    behavior: "smooth",
  });
};

onMounted(() => {
  if(router.currentRoute.value.name == 'diplom' && !done.value ) {
    gsap.to(".scroll-container", {
      opacity: 0
    })
  } 
})
 

</script>

<style scoped lang="scss">

.scroll {
  font-weight: 700;
}
.scroll-icon {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-top: 10px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
    transition: all 0.3s ease-in-out;
  }
}


@media screen and (max-width: 480px) {
  .scroll {
    font-size: 0.7rem;
  }
  .scroll-icon {
    width: 50px;
    height: 50px;
  }
  /* .img-wrapper{
    background-color: white;
    width: 100%;
  } */
}
  

</style>
