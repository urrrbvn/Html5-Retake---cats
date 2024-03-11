<template>
    <div class="headerContainer">
        <img src="../assets/catpng.parspng.com_.png" alt="" height="150" width="150">
        <div class="buttons">
            <button @click="catStore.addNewCat">Добавить кота</button>
        </div>
    </div>
</template>

<script setup>
import { useCatStore } from '@/stores/catsStore';
import { ref } from 'vue';

const catStore = useCatStore()

const cats = ref(catStore.cats)


</script>

<style scoped>
    .headerContainer{
        width: 100%;
        height: 200px;
        background-color: greenyellow;
        color: gray;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    button{
        width: 150px;
        height: 50px;
        border-radius: 25px;
        background-color: grey;
        color: white;
        border: none;
        margin-right: 50px;
    }
</style>