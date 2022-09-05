<template>
      <div class="slide-content">
        <img :src="slide.image" alt="" class="content-img">
        <div class="text-container">
          <h3 class="slide-heading">{{ slide.heading }}</h3>
            <p v-for="paragraph in slide.body" :key="paragraph">{{ paragraph }}</p>
            
        </div>
      </div>
</template>

<script setup>

const props = defineProps({
  slide: {
    type: Object,
    default: () => ({}),
  },
  index: {
    type: Number,
    default: 0,
  },
})

</script>

<style lang="scss" scoped>


/* .vueperslide {
  display: flex;
  align-items: center;
  & * {
    user-select: text;
    }
} */


.slide-heading {
  font-size: 17px;
  font-family: 'Nunito', sans-serif;
  font-weight: 700;
  font-style: normal;
  margin: 0 0 0.5em 0;
  line-height: 1.1;
  color: #003340;
  width: 100%;
}

.slide-content{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  margin: 0;
  z-index: 1;
}

.text-container{
  text-align: left;
  width: 40%;
}

p {
  font-family: 'Nunito', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 17px;
  line-height: 1.3;
  margin: 0.5em 0;
  color: #000000;
}
.content-img{
  max-width: 400px;
  max-height: 300px;
  width: 40%;
}

@media (max-width: 768px) {
  .slide-content{
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 0;
    gap: 3rem;
    z-index: 1;
  }
  .text-container{
    width: 100%;
  }
  .content-img{
    width: 100%;
  }
}



</style>