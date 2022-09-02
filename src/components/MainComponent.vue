<template>
  <div class="main">
      <slot></slot> 
  </div>
</template>

<script setup>



</script>

<style lang="scss" scoped>

.main {
  display: flex;
  flex-direction: column;
  padding: 4.5rem 2rem;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  min-width: 85%;
  max-width: 100vw;
}

</style>