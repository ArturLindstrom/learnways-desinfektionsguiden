<template>
  <div>
    <p class="scroll">Skrolla ner</p>
    <img class="scroll-icon" src="src/assets/home/main/scroll.svg" @click="toBottom">
  </div>
</template>

<script setup>
  const toBottom = () => {
    window.scrollTo({
  top: 1000,
  left: 100,
  behavior: 'smooth'
});
    
  }
</script>

<style scoped lang='scss'>

.scroll {
  font-weight: 700;
}
.scroll-icon {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-top: 1.25rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
    transition: all 0.3s ease-in-out;
  }
}




</style>