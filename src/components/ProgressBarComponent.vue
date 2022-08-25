<template>
  <div class="container">
        <!-- <Router-link class="link" to="/">
            <div class="ball"></div>
            Start
        </Router-link>
        <Router-link class="link" to="/olika-typer">
            <div class="ball"></div>
            Olika typer
        </Router-link>
        <Router-link class="link" to="/situationer">
            <div class="ball"></div>
            Situationer
        </Router-link>
        <Router-link class="link" to="/diplom">
            <div class="ball"></div>
            Diplom
        </Router-link>
        
             -->
            <RouterLink  v-for="view in routes" 
            :key="view" 
            class="link"
            :to="view.path">
                <div class="ball" :class="{completed : viewsCompleted[view.name] === true}"></div>
                {{view.fullName}}
            </RouterLink>
            <div class="line"></div>
    </div>
</template>

<script setup>
import gsap from "gsap";
import { computed, onMounted } from "vue";
import {useRoute, useRouter, onBeforeRouteLeave } from "vue-router";
import { useStore } from "vuex";

const router = useRouter();
const route = useRoute();
const store = useStore();

const viewsCompleted = computed(() => {
    return store.state.viewsCompleted
})

const logRoutes = () => {
    console.log(routes);
}


const routes = computed(() => {
  return router.options.routes;
})

onBeforeRouteLeave((to, from) => {
      if (from.name == "home"){
        store.commit("completedRoute", from.name)
      }
       if (store.state.roomsVisited.filter(Boolean).length === 5){
        store.commit("completedRoute", from.name)
      }
       if (store.state.situationsCompleted.length === 2){
        store.commit("completedRoute", from.name)
      }
    })



onMounted(() => {
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

  gsap.from(".line", {
    duration: 0.5,
    opacity: 1,
    scaleX: 0,
    transformOrigin: '0% 100%'
  });
})



</script>

<style scoped lang="scss">
.container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 40%;
    margin-top:80px;
}

.line {
    /* width: 35%; */
    width: 99%;
    height: 3px;
    background-color: #ffffff;
    position: absolute;
    z-index: 1;
    transform: translateY(-12px)
}

.ball{
    height: 3em;
    width: 3em;
    border-radius: 50%;
    background-color: #FFFFFF;
    box-sizing: border-box;
    transition: ease all 0.25s;
    border: 0px solid #62C0D8;
}

.completed{
        background-image: url('src/assets/home/main/tick-wht.svg');
}

a:hover .ball{
    border: 4px #62C0D8 solid;
    transition: ease all 0.25s;
}
a.router-link-active:hover .ball{
    border: none;
}
a {
    z-index: 2;
    text-align: center;
    display: flex;
    /* width: 100px; */
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: bold;

}

a.router-link-active .ball{
    background: #62C0D8;
    /* background-image: url('src/assets/home/main/tick-wht.svg'); */
    background-repeat: no-repeat;
    background-position: center;
}
a:hover {
    text-decoration: underline;
}

</style>