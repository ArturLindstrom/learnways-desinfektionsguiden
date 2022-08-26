<template>
  <button @click="action" :class="{'tick' : situationComplete}">
    <slot />
  </button>
</template>

<script setup>
import {useRoute, useRouter} from 'vue-router';
import { useStore } from 'vuex';
import { defineProps, computed } from 'vue';
import store from '../store';

const props = defineProps({
  action: {
    type: String,
    
  },
  situationId: {
    type: Number,
  },
})

const route = useRoute();
const router = useRouter();
const routes = ["home", "olika-typer", "situationer", "diplom" ]
const situationComplete = computed(() => {
  return store.state.situationsCompleted.includes(props.situationId)
})

const forward = () => {
  const index = routes.indexOf(route.name);
  if (index < routes.length - 1) {
    console.log(props.action)
    router.push(routes[index + 1]);
        window.scrollTo({
  top: 0,
  left: 100,
  behavior: 'smooth'
});
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
padding: 10px 30px;
min-height: 45px;
border-radius: 5px;
overflow: visible;
border: none;
font-weight: 700;
display: flex;
justify-content: space-between;
align-items: center;
}

button:hover{
  text-decoration: underline;
}

.tick{
  background-image: url('../assets/tick-small.svg');
  background-repeat: no-repeat; 
  background-position: right 10px center;
}
</style>