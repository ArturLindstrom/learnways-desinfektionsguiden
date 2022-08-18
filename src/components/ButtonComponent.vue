<template>
  <button @click="action">
    <slot />
  </button>
</template>

<script setup>
import {useRoute, useRouter} from 'vue-router';
import { defineProps, computed } from 'vue';

const props = defineProps({
  action: {
    type: String,
    default: 'forward',
  },
})

const route = useRoute();
const router = useRouter();
const routes = ["home", "olika-typer", "situationer", "diplom" ]
const forward = () => {
  const index = routes.indexOf(route.name);
  if (index < routes.length - 1) {
    console.log(props.action)
    router.push(routes[index + 1]);
  }
}
const action = () => {
  if (props.action === 'forward') {
    forward();
  }
}
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