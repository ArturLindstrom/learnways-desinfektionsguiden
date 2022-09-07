<template>
  <div class="container" v-if="!store.state.modalShown">
    <RouterLink v-for="view in routes" :key="view" class="link" :to="view.path">
      <div
        class="ball"
        :class="{ completed: viewsCompleted[view.name] === true }"
      ></div>
      {{ view.fullName }}
    </RouterLink>
    <div class="line"></div>
  </div>
</template>

<script setup>
import gsap from "gsap";
import { computed, onMounted } from "vue";
import { useRoute, useRouter, onBeforeRouteLeave } from "vue-router";
import { useStore } from "vuex";

const router = useRouter();
const route = useRoute();
const store = useStore();

const viewsCompleted = computed(() => {
  return store.state.viewsCompleted;
});

const logRoutes = () => {
  console.log(routes);
};

const routes = computed(() => {
  return router.options.routes;
});

onBeforeRouteLeave((to, from) => {
  if (from.name == "home") {
    store.commit("completedRoute", from.name);
  }
});

onMounted(() => {
  if (route.name == "home") {
    gsap.from(
      ".link",

      {
        duration: 0.5,
        opacity: 0,
        scale: 0,
        stagger: 0.2,
        delay: 0.5,
      }
    );
  }
  gsap.from(".line", {
    duration: 0.5,
    opacity: 1,
    scaleX: 0,
    transformOrigin: "0% 100%",
  });
});
</script>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40%;
  /* margin-top:200px; */
}

.line {
  width: 98%;
  /* width: 550px; */
  height: 4px;
  background-color: #ffffff;
  position: absolute;
  z-index: 0;
  transform: translateY(-12px);
}

.ball {
  height: 3em;
  width: 3em;
  border-radius: 50%;
  background-color: #ffffff;
  background-repeat: no-repeat;
  background-position: center;
  box-sizing: border-box;
  transition: ease all 0.25s;
  border: 0px solid #62c0d8;
}

.ball.completed {
  background-image: url("src/assets/tick-blue.svg");
}

a:hover .ball {
  border: 4px #62c0d8 solid;
  transition: ease all 0.25s;
}
a.router-link-active:hover .ball {
  border: none;
}

a {
  z-index: 1;
  text-align: center;
  display: flex;
  /* width: 100px; */
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
}

.a.router-link-active {
  transition: ease all 0.25s;
}

a.router-link-active .ball {
  background-color: #62c0d8;
  transition: ease all 0.25s;
}
a:hover {
  text-decoration: underline;
}

.router-link-active .ball.completed {
  background-image: url("src/assets/home/main/tick-wht.svg");
  background-repeat: no-repeat;
  background-position: center;
}

@media (max-width: 768px) {
  .container {
    width: 80vw;
  }
  .line {
    width: 90%;
  }

  a {
    font-size: 16px;
  }
}

@media screen and (max-width: 480px) {
  .container {
    width: 90vw;
  }
  .line {
    width: 90%;
  }

  a {
    font-size: 16px;
  }
}
  

</style>
