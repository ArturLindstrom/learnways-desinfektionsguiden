<template>
  <div class="drag-and-drop-container">
    <SubHeadingComponent>
        {{props.content.question}}
    </SubHeadingComponent>
    <div class="machines-container">
      <div class="diskdesinfektor" ref="diskdesinfektor">
        <div v-for="image in placedItemsInDisk" :key="item" class="placed-item">
          <img src="@/assets/situationer/check.svg" class="tick">
          <img :src="image" alt="">
        </div>
      </div>
      <div class="spoldesinfektor" ref="spoldesinfektor">
        <div v-for="image in placedItemsInSpol" :key="item" class="placed-item">
          <img src="@/assets/situationer/check.svg" class="tick">
          <img :src="image" alt="">
        </div>
      </div>
    </div>
    <div class="element-container">
      <div v-for="dragElement in dragElements" :key="dragElement" class="drag-element draggable" :style="{backgroundImage: 'url(' + dragElement.image + ')'}">
        <!-- <img :src="dragElement.image" class="drag-image"> -->
        <span class="drag-element-text">
          {{dragElement.title}}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { gsap } from 'gsap';
  import { Draggable } from 'gsap/Draggable';
  import { ref, onMounted } from 'vue';
  import SubHeadingComponent from '@/components/headings/SubHeadingComponent.vue';
  gsap.registerPlugin(Draggable);

  const diskdesinfektor = ref(null);
  const spoldesinfektor = ref(null);

  const placedItemsInDisk = ref([]);
  const placedItemsInSpol = ref([]);

  const props = defineProps({
    content: {
        type: Object,
        required: true
    }
  })

  const dragElements = ref(props.content.dragElements);

  onMounted(() => {
    Draggable.create('.draggable', {
      type: 'x,y',
      bounds: '.drag-and-drop-container',
      onRelease: (e) => {
        checkAnswer(e)
      },
    })
  })

  const checkAnswer = (e) => {
    const diskZone = diskdesinfektor.value.getBoundingClientRect();
    const spolZone = spoldesinfektor.value.getBoundingClientRect();
    const drop = e.target.getBoundingClientRect()
    if(drop.y < (diskZone.y + diskZone.height)){
      if(drop.x < (diskZone.x + (diskZone.width*0.75))){
        if(diskListFacit.value.includes(e.target.innerText)){
          placedItemsInDisk.value.push(e.target.style.backgroundImage.slice(5, -2))
          e.target.classList.add('correct')
          return
        }
      }
    } if(drop.x > (diskZone.x + (diskZone.width*0.75))){
        if(spolListFacit.value.includes(e.target.innerText)){
          placedItemsInSpol.value.push(e.target.style.backgroundImage.slice(5, -2))
          e.target.classList.add('correct')
        return
        }
      }
    revertPosition(e)
  }

  const revertPosition = (e) => {
    gsap.to(e.target, {scale: 0.90, repeat: 3, duration: 0.2})
    gsap.to(e.target, {duration: 0.5, scale: 1, x: 0, y: 0, delay: 0.6})
  }

  const diskListFacit = ref(['Hink', 'Sugflaska', 'Bäcken', 'Urinflaska'])
  const spolListFacit = ref(['Rondskål', 'Anesti­utrustning', 'Inhalationsutrustning', 'Peang'])

</script>

<style scoped lang='scss'>

  .drag-and-drop-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .machines-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 25vh;
    width: 100%;
    margin-top: 5rem;
    margin-bottom: 5rem;
  }

  .diskdesinfektor, .spoldesinfektor {
    display: flex;
    grid-template-columns: repeat(4, 1fr);
    justify-content: center;
    flex-direction: space-around;
    height: 100%;
    width: 100%;
  }

  .diskdesinfektor {
    background: url("../../assets/situationer/drag-elements/diskdesinfektor.svg") no-repeat bottom center;
    flex: 1;
  }
  .spoldesinfektor {
    background: url("../../assets/situationer/drag-elements/spoldesinfektor.svg") no-repeat bottom center;
    flex: 1;
  }


  .element-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    place-items: center;
    grid-gap: 1rem;
    margin-top: 1rem;
    width: 100%;
    margin-bottom: 10rem;
  }

  .drag-element {
    display: flex;
    flex-direction: column-reverse;
    place-items: center;
    width: 120px;
    height: 130px;
    background-repeat: no-repeat;
    background-size: 100px 100px;
    background-position: center top;
    & > .drag-element-text {
      margin-top: 20px;
    }
  }

  .placed-item {
    position: relative;
  }

  .tick {
    position: absolute;
    top: -5px;
    right: 0px;
  }
  .correct {
   display: none;
  }

</style>