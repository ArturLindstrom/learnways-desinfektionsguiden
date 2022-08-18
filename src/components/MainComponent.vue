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
  padding: 4rem;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 60vh;
}

</style>