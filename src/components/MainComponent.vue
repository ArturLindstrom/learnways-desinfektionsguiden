<template>
  <div class="main" :style="{flexDirection: props.flex}">
    <slot></slot>    
  </div>
</template>

<script setup>

const props = defineProps({
  flex: {
    type: String,
    default: 'column'
  }
})

</script>

<style lang="scss" scoped>

.main {
  display: flex;
  padding: 4rem;
  /* flex-direction: column ; */
  align-items: center;
  /* justify-content: flex-start; */
  justify-content: center;
  min-height: 60vh;
}

</style>