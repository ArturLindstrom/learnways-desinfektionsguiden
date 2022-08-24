<template>
<div class="card">
    <img :src="category.image" class="img-placeholder">
        <SubHeadingComponent>
            {{category.title}}
        </SubHeadingComponent>

    <div class="button-container">
        <ButtonComponent v-for="(situation, i) in category.situations" :key="i" @click="$emit('openSituation', situation)">
            Situation {{i+1}}
        </ButtonComponent>
        
    </div>
</div>
</template>

<script setup>
import { ref } from 'vue';
import SubHeadingComponent from '../SubHeadingComponent.vue';
import ButtonComponent from '../ButtonComponent.vue';
import gsap from 'gsap';
import  ScrollTrigger  from 'gsap/ScrollTrigger';
import {onMounted} from 'vue'
gsap.registerPlugin(ScrollTrigger);

const props = defineProps({
    category:{
        type: Object,
    }
});

const emit = defineEmits([
    'openSituation'
]);


const category = props.category
</script>

<style scoped lang='scss'>
.card {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 500px;
    min-width: 20px;
    border-radius: 5px;
    background: #F5F2ED;
    justify-content: space-around;
    padding: 20px;
}

.button-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 10px;

}
.img-placeholder {
    width: 200px;
    height: 200px;
    border-radius: 50%;
}
</style>