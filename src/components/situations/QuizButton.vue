<template>
<button >
        <slot></slot>
        
</button>
</template>

<script setup>



</script>

<style scoped lang='scss'>
button{
    font-family: 'Nunito';
    border: 2px solid #1D4C7B;
    border-radius: 5px;
    background-color: transparent;
    color: black;
    padding: 10px;
    font-size: 18px;
    font-weight: 700;
    /* max-width: 450px;
    min-width: 300px; */
    width: 100%;
    margin-top: 15px;
    &:hover{
        background-color: #1D4C7B;
        color: white;
        cursor: pointer;
    }
 
    
}




</style>