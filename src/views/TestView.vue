<template>
  <div>
    <h1>Test View</h1>
    <h3 v-for="item in filtered">
      {{item.value}}
    </h3>
    <h1>{{filteredArray}}</h1>
  </div>
</template>

<script setup>
// import data from 'assets/json/sv.json'
import { computed, ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore()

// data is an object of key/value pairs
const data = store.state.data

// convert data into one large array of objects with key/value pairs
const array = computed(() => {
  return Object.entries(data).map(([key, value]) => {
    return { key, value }
  })
})

const array2 = Object.entries(data).map(([key, value]) => {
  return { key, value }
})

const filteredArray = computed(() => {
  return array.value.filter(item => {
    return item.key.includes('s01_about_h')
  })
})

const filteredArray2 = array2.filter(item => {
  return item.key.includes('s01_about_h')
})



</script>