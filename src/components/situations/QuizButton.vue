<template>
  <button>
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
  button {
    font-family: "Nunito";
    border: 2px solid #1d4c7b;
    border-radius: 5px;
    background-color: white;
    color: black;
    padding: 10px;
    font-size: 18px;
    font-weight: 700;
    width: 80%;
    margin-top: 15px;
    &:hover {
      background-color: #1d4c7b;
      color: white;
      cursor: pointer;
    }
  }
</style>
