<template>
<div class="question">
    <SubHeadingComponent>
        {{content.question}}
    </SubHeadingComponent>
    <div class="img-wrapper">
        <img src="../../assets/situationer/drag-elements/spoldesinfektor.svg" alt="">
        <img src="../../assets/situationer/drag-elements/diskdesinfektor.svg" alt="">
    </div>
    <div class="item-wrapper">
        <div class="drag-items" v-for="item in content.dragElements" :key="item">
                <img :src="item.image" alt="">
                <span>
                    {{item.title}}
                </span>
        </div>
    </div>
</div>
</template>

<script setup>
import SubHeadingComponent from '../SubHeadingComponent.vue';

const props = defineProps({
    content : {
        type: Object,
        required: true
    }
})

const content = props.content
</script>

<style scoped lang='scss'>
.question {
    width: 100%;
}

    .img-wrapper{
        display: flex;
        justify-content: space-around;
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

</style>