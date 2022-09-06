<template>
<router-view class="wrapper"/>
<footer-component/>
</template>

<script setup>
import FooterComponent from "@/components/FooterComponent.vue";
import { useStore } from 'vuex';
import { onMounted } from 'vue'

const store = useStore()

onMounted(() => {
  console.log('mounted')
  store.commit('removeMarkup')
})


</script>
<style lang="scss">

@import "./main.scss";

* {
  margin: 0;
  padding: 0;
  /* overflow-x: hidden; */
}

html{
  max-width: 100%;
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
  width:100%
}



</style>
