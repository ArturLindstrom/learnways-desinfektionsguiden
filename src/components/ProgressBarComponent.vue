<template>
  <div class="container">
        <Router-link class="link" to="/">
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
            <div class="line"></div>
    </div>
</template>

<script setup>
import gsap from "gsap";
import { onMounted } from "vue";

onMounted(() => {
  gsap.from(
    ".link",
    
    {
      duration: 0.5,
      opacity: 0,
      scale: 0,
      stagger: 0.1,
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

<style scoped>
.container{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 50%;
    margin-top:80px;
}

.line {
    width: 35%;
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

a:hover .ball{
    border: 3px #62C0D8 solid;
    transition: ease all 0.25s;

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
    background: #62C0D8
}
a:hover {
    text-decoration: underline;
}

</style>