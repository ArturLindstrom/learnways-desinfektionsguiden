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
  padding: 4.5rem;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  width: 85%;

}

</style>