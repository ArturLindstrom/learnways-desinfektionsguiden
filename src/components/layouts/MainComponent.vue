<template>
  <div class="main">
    <slot></slot>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 60vh;
  min-width: 85%;
  margin: 4.5rem;
  transition: all 0.5s ease;
}

@media screen and (max-width: 768px) {
  .main {
    margin: 4.5rem 1rem;
  }
}
</style>
