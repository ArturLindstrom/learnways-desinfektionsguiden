<template>
  <div>
    <h1>Test View</h1>
    <h3>{{questionQuestion}}</h3>
    <button v-for="alternative in alternatives" :key="alternative.key" @click="selectAlternative(alternative)" >
      {{ alternative.value }}
    </button>
    <p>{{feedbackOfSelectedAlternative}}</p>
    <!-- <QuestionComponent></QuestionComponent> -->
  </div>
</template>

<script setup>
import data from '@/assets/json/sv.json'
import { computed, ref } from 'vue';
import QuestionComponent from '@/components/test/QuestionComponent.vue';

const selectAlternative = (alternative) => {
  selectedAlternative.value = alternative;
  feedbackOfSelectedAlternative.value = feedbacks.filter(feedback => feedback.key.includes(selectedAlternative.value.key))[0].value
  feedbackOfSelectedAlternative.value = feedbackOfSelectedAlternative.value.slice(3, feedbackOfSelectedAlternative.value.length-4)
}

const selectedAlternative = ref(null)
const feedbackOfSelectedAlternative = ref(null)


//make an array of keys and values in the json file
const keys = Object.keys(data)
const values = Object.values(data)
//create an array that combines keys and values matching objects
// const combined = keys.map((key, index) => {
//     return {
//       key,
//       value: values[index]
//     }
//   }
// )

const combined = Object.entries(data).map(([key, value]) => {
  return {
    key,
    value
  }
}
)

//create a new array with only the objects from s03
const situations = combined.filter((item) => {

  return item.key.includes('s03')
})

const situation1 = situations.filter((item) => {
  return item.key.includes('s03_s1')
})

// create an array with all the questions from situation1
const questions = situation1.filter((item) => {
  return item.key.includes('q')
})

// array with items from question 1
const question1 = questions.filter((item) => {
  return item.key.includes('q1')
})
//create a computed property that returns the value of the object that has a key that ends with q1
const questionQuestion = computed(() => {
  return question1[0].value
})
//create a list with the value pairs of objects that contain alt in question1, not the question or the keys that end with fb
const alternatives = question1.filter((item) => {
  return item.key.includes('alt') && !item.key.includes('fb')
})

const feedbacks = question1.filter((item) => {
  return item.key.endsWith('fb')
})

</script>

<style scoped lang='scss'>

.selected {
  background-color: green;
}

</style>