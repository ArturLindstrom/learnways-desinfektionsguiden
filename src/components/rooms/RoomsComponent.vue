<template>
<div class="parent">
  <div 
    :class="'div' + (i+1)"
    v-for="(item, i) in rooms"
    :key="item"
    :style="{
      backgroundColor: rooms[i].thumbnail.backgroundColor,
      backgroundImage: 'url(' + rooms[i].thumbnail.image + ')'
    }">
    <ButtonComponent action="forward" class="button">
      Rum {{rooms[i].thumbnail.roomNumber}}: {{rooms[i].thumbnail.title}}
    </ButtonComponent>
  </div>
</div>
</template>

<script setup>
import rooms from '@/assets/olikatyper/rooms.json'
import ButtonComponent from '@/components/ButtonComponent.vue'

</script>

<style scoped lang='scss'>
.parent {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(8, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  height: 70vh;
  width: 100%;
}
.parent div {
  background-repeat: no-repeat;
  background-size: cover;
  display: grid;
  place-items: center;
  &:hover .button {
    display: block;
  }
}

.button {
  display: none;
}

.div1  { grid-area: 1 / 1 / 5 / 3; }
.div2 { grid-area: 1 / 3 / 4 / 5; }
.div3 { grid-area: 5 / 1 / 9 / 2; }
.div4 { grid-area: 5 / 2 / 9 / 3; }
.div5 { grid-area: 4 / 3 / 9 / 5; }
</style>