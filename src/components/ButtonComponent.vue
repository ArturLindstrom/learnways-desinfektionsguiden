<template>
  <button @click="action" :class="{ tick: situationComplete }">
    <slot />
  </button>
</template>

<script setup>
  import { useRoute, useRouter } from "vue-router";
  import { useStore } from "vuex";
  import { computed } from "vue";

  const store = useStore();

  const props = defineProps({
    action: {
      type: String,
    },
    situationId: {
      type: Number,
    },
  });

  const route = useRoute();
  const router = useRouter();
  const routes = router.options.routes;

  const situationComplete = computed(() => {
    return store.state.situationsCompleted.includes(props.situationId);
  });

  const action = () => {
    if (props.action === "forward") {
      forward();
    }
  };

  const forward = () => {
    const index = routes.map((route) => route.path).indexOf(route.path);
    router.push(routes[index + 1].path);
  };

</script>

<style scoped lang="scss">
  button {
    font-size: 18px;
    cursor: pointer;
    background-color: #1d4c7b;
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

  button:hover {
    text-decoration: underline;
  }

  .tick {
    background-image: url("../assets/tick-small.svg");
    background-repeat: no-repeat;
    background-position: right 10px center;
  }
</style>
