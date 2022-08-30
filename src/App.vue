<template>
  <router-view/>
  <footer-component/>
</template>

<script setup>
import FooterComponent from "@/components/FooterComponent.vue";
</script>
<style lang="scss">

@import "./main.scss";

* {
  margin: 0;
  padding: 0;
  /* overflow-x: hidden; */
}

a, a:visited, a:link {
  text-decoration: none;
  color: #002D5A;
}

#app {
  font-family: 'Nunito';
  text-align: center;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}


</style>
