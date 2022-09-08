<template>
  <div class="drag-and-drop-container">
    <SubHeadingComponent>
      {{ props.content.question }}
    </SubHeadingComponent>
      <div class="machines-container">
        <div class="diskdesinfektor" ref="diskdesinfektor">
          <div
            v-for="image in placedItemsInDisk"
            :key="image"
            class="placed-item"
          >
          <img :src="image" alt="" class="placed-image" />
            <img src="@/assets/situationer/check.svg" class="tick" />
          </div>
        </div>
        <div class="spoldesinfektor" ref="spoldesinfektor">
          <div
            v-for="image in placedItemsInSpol"
            :key="image"
            class="placed-item"
          >
            <img :src="image" alt="" class="placed-image"/>
            <img src="@/assets/situationer/check.svg" class="tick" />
          </div>
        </div>
      </div>
      <div class="element-container">
        <div
          v-for="dragElement in dragElements"
          :key="dragElement"
          class="drag-element draggable"
          :style="{ backgroundImage: 'url(' + dragElement.image + ')' }"
        >
          {{dragElement.title}}
      </div>
    </div>
  </div>
</template>

<script setup>
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { useStore } from "vuex";
import { ref, onMounted, computed } from "vue";
import { useMq } from "vue3-mq";
import SubHeadingComponent from "@/components/headings/SubHeadingComponent.vue";
gsap.registerPlugin(Draggable);

const diskdesinfektor = ref(null);
const spoldesinfektor = ref(null);

const placedItemsInDisk = ref([]);
const placedItemsInSpol = ref([]);

const draggedItem = ref(null);

const store = useStore()

const props = defineProps({
  content: {
    type: Object,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
});
const dragElements = ref(props.content.dragElements);

const mq = useMq()

const emit = defineEmits(["done"]);

onMounted(() => {
  Draggable.create(".draggable", {
    type: "x,y",
    bounds: ".drag-and-drop-container",
    onDragStart: (e) => {
      draggedItem.value = e.target;
      store.commit('setDragging', true)
    },
    onDragEnd: (e) => {
      checkAnswer(e);
      setTimeout(() => {
        store.commit('setDragging', false)
      }, 501);
    },
   });
});

const checkAnswer = (e) => {
  const diskZone = diskdesinfektor.value.getBoundingClientRect();
  const spolZone = spoldesinfektor.value.getBoundingClientRect();
  const drop = e.target.getBoundingClientRect();
    if (drop.y < diskZone.y + diskZone.height) {
      if (drop.x < diskZone.x + diskZone.width * 0.75) {
        if (diskListFacit.value.includes(e.target.innerText)) {
          placedItemsInDisk.value.push(
            e.target.style.backgroundImage.slice(5, -2)
          );
          e.target.classList.add("correct");
          // return;
        }
      }
      if (drop.x > diskZone.x + diskZone.width * 0.75) {
        if (spolListFacit.value.includes(e.target.innerText)) {
          placedItemsInSpol.value.push(e.target.style.backgroundImage.slice(5, -2));
          e.target.classList.add("correct");
          // return;
        }
      }
  } 
  revertPosition(e);
  if(placedItemsInDisk.value.length == 4 && placedItemsInSpol.value.length == 4) {
    emit('done')
    store.commit('addCompleted' , props.id)
  }
};

const revertPosition = (e) => {
    gsap.to(draggedItem.value, { scale: 0.9, repeat: 3, duration: 0.2 });
    gsap.to(draggedItem.value, { duration: 0.5, scale: 1, x: 0, y: 0, delay: 0.6 });
};

const diskListFacit = ref(["Hink", "Sugflaska", "Bäcken", "Urinflaska"]);
const spolListFacit = ref(["Rondskål", "Anesti­utrustning", "Inhalationsutrustning", "Peang"]);

</script>

<style scoped lang="scss">
/* * {
  outline: red 1px solid;
} */
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
  gap: 100px;
}

.diskdesinfektor,
.spoldesinfektor {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 100%;
  /* width: 100%; */
    & .placed-item {
      position: relative;
      max-height: 100px;
      & .placed-image {
        width: 50px;
        height: 50px;
      }
      & .tick {
        position: absolute;
        height: 20px;
        width: 20px;
        top: -5px;
        right: 0px;
      }
    }
  
  }

.diskdesinfektor {
  background: url("../../assets/situationer/drag-elements/diskdesinfektor.svg")
    no-repeat bottom center;
  flex: 1;
}
.spoldesinfektor {
  background: url("../../assets/situationer/drag-elements/spoldesinfektor.svg")
    no-repeat bottom center;
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
.correct {
  display: none;
}

@media screen and (max-width: 768px) {
.element-container {
  grid-template-columns: repeat(3, 1fr);
}

.machines-container{
  gap: 20px
}

.diskdesinfektor, .spoldesinfektor {
  flex-wrap: wrap;
  gap: 0;
  outline: red 1px solid;
  justify-content: center;
}

.placed-item {
  margin-right: -1.5rem;
}
.placed-image {
  width: 100px;
  height: 700px;
}

.drag-element{
  width: 90px;
  height: 100px;
  background-size: 80px 80px;
  & > .drag-element-text {
    margin-top: 10px;
  }
}
}
    
    
    

</style>
