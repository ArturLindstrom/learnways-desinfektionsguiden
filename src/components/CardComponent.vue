<template>
<div class="card">
    <img :src="cardContent.image">
        <SubHeadingComponent>
            {{cardContent.title}}
        </SubHeadingComponent>
        <p v-if="cardContent.body">
            {{cardContent.body}}
        </p>
        <ul v-if="cardContent.list">
            <li v-for="(item, i) in cardContent.listItems" :key="i">
                {{item}}
            </li>
        </ul>
    <div class="button-container" v-if="cardContent.buttons">
        <ButtonComponent v-for="button in cardContent.buttons" :key="button" >
            {{button}}
        </ButtonComponent>
        </div>
    <div class="button-container" v-if="cardContent.situations">
        <ButtonComponent v-for="(situation,i) in cardContent.situations" :key="i" @click="modalOpen(situation)" :situationId="situation.id">
            Situation {{i+1}}
        </ButtonComponent>
    </div>
</div>
</template>

<script setup>
import { ref } from 'vue';
import SubHeadingComponent from './SubHeadingComponent.vue';
import ButtonComponent from './ButtonComponent.vue';
import gsap from 'gsap';
import {onMounted} from 'vue'
import { useStore } from 'vuex';

const props = defineProps({
    cardContent:{
        type: Object,
    }
});

const store = useStore()

const modalOpen = (situation) => {
  store.commit('modalOpen', situation)
}


const cardContent = props.cardContent


</script>

<style scoped lang='scss'>
.card {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 500px;
    border-radius: 5px;
    background: #F5F2ED;
    justify-content: space-around;
    padding: 30px;
    margin: 0 10px;
    flex: 1;
    width: 260px;
    /* min-width: 250px; */
    max-width: 240px;
  
}

p, ul, li {
    text-align: left;
}

.button-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 10px;

}

</style>