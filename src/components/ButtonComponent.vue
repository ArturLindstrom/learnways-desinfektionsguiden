<template>
  <button>
    <slot/>
  </button>
</template>

<script setup>

</script>

<style scoped lang="scss">
button{
font-size: 18px;
cursor: pointer;
background-color: #1D4C7B;
color: white;
padding: 10px 2em;
min-height: 45px;
border-radius: 5px;
margin: 0;
overflow: visible;
border: none
}
</style>