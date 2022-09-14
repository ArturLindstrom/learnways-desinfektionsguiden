<template>
<router-view />
<footer-component/>
</template>

<script setup>
import FooterComponent from "@/components/layouts/FooterComponent.vue";
import { useStore } from 'vuex';
import { onMounted } from 'vue'

const store = useStore()

onMounted(() => {
  store.commit('removeMarkup')
})


</script>
<style lang="scss">
@import "./main.scss";
</style>
