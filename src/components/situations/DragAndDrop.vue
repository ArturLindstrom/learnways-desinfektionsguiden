<template>
<div class="question">
    <SubHeadingComponent>
        {{content.question}}
    </SubHeadingComponent>
    <div class="img-wrapper">
        <draggable 
          :list="diskList"
          group="people"
          itemKey="name"
          class="diskdesinfektor"
          :move="checkAnswer"
          ghostClass="ghost"
          @change="change"
          :animation="200"
          
        >
        <template #item="{element}">
            <div class="answered">
              <img src="@/assets/situationer/check.svg" class="tick">
              <img :src="element.image" alt=""> 
            </div>
          </template>
        </draggable>
        <draggable
          :list="spolList"
          group="people"
          itemKey="name"
          class="spoldesinfektor"
          :move="checkAnswer"
          @change="change"
          ghostClass="ghost"
          :animation="200"
         
        >
            <template #item="{element}">
              <div class="answered">
                <img src="@/assets/situationer/check.svg" class="tick">
                <img :src="element.image">
              </div>
            </template>
        </draggable>
    </div>
      <draggable 
        :list="content.dragElements" 
        class="item-wrapper" 
        itemKey="name" 
        group="people"
        :move="checkAnswer"
        :animation="200"
        :reverseTransition="true"
      >
        <template #item="{element}">
          <div class="drag-items" >
            <!-- <img :src="element.image"> -->
            <div :style="{backgroundImage: 'url(' + element.image + ')'}" class="drag-item" >

            </div>
            <span>
              {{element.title}}
            </span>
          </div>
        </template>
      </draggable>
        <!-- <div class="drag-items" v-for="item in content.dragElements" :key="item">
                <img :src="item.image" alt="">
                <span>
                    {{item.title}}
                </span>
        </div> -->
</div>
</template>

<script setup>
import { ref } from 'vue'
import SubHeadingComponent from '@/components/headings/SubHeadingComponent.vue';
import draggable from 'vuedraggable'

const props = defineProps({
    content : {
        type: Object,
        required: true
    }
})

const checkAnswer = (e) => {
  // const answer = e.draggedContext.element.title
  // const target = e.to.classList[0]
  // if(target === 'diskdesinfektor'){
  //   if(diskListFacit.value.includes(answer)){
  //     return true
  //   } else {
  //     return false
  //   }
  // }
  // if(target === 'spoldesinfektor'){
  //   if(spolListFacit.value.includes(answer)){
  //     return true
  //   } else {
  //     return false
  //   }
  // }
  // return false
  return true
}

const change = (e) =>{
    console.log('CHANGE')
}


const disk = (e) => {
  if(diskListFacit.value.includes(e.item.innerText)){
    return true
  }
  else {
    return false
  }
}

const content = props.content

const diskList = ref([])
const spolList = ref([])

const diskListFacit = ref(['Hink', 'Sugflaska', 'Bäcken', 'Urinflaska'])
const spolListFacit = ref(['Rondskål', 'Anesti­utrustning', 'Inhalationsutrustning', 'Peang'])


</script>

<style scoped lang='scss'>
    

    .question {
        width: 100%;
    }

    .img-wrapper{
        display: flex;
        justify-content: space-around;
        align-items: flex-end;
        width: 100%;
        margin: 50px 0;
       
    }
    .item-wrapper{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        place-items: center;
        padding: 0 50px;
        gap: 20px;

    }

    .drag-items{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100px;
        
    }

    .drag-item {
      width: 100px;
      height: 100px;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      margin-bottom: 10px;
    }

    .spoldesinfektor, .diskdesinfektor {
      height: 45vh;
      width: 50%;
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      justify-content: center;
    }
    .spoldesinfektor {
      background: url("../../assets/situationer/drag-elements/spoldesinfektor.svg") no-repeat bottom center;

    }
    .diskdesinfektor {
      background: url("../../assets/situationer/drag-elements/diskdesinfektor.svg") no-repeat bottom center;
    }

    .answered {
      position:relative;
    }

    .tick {
        position: absolute;
        top: 0;
        right: 0;
    }

    .ghost {
      display: none;
    }

</style>