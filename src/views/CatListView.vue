<template>
    <div class="listContainer">
        <div class="CatList" v-if="cats.cats.length > 0">
        <!-- <div class="cat"> -->
            <div v-for="cat in cats.cats" class="cat">
                <RouterLink :to="`/cat/${cat.id}`" tag="div">
                    <div class="card">
                    <h2>{{ cat.name }}</h2>
                    <img :src="cat.image" alt="" width="150" height="150">
                    <p> {{ cat.age }} лет</p>
                    <p> рейтинг: {{ cat.rate }}</p>
                    <p> {{ cat.description }} </p>
                    </div>
                </RouterLink>
                <RouterLink to="/">
                    <button @click="cats.deleteCat(cat.id)" >Удалить кота</button>
                </RouterLink>
            <!-- </div> -->
        </div>
        </div>
        <div v-else>
            <h1>Тут пока нет котов :( </h1>
        </div>
    </div>
</template>

<script setup>
import {ref, onMounted} from 'vue';
import { useCatStore } from '@/stores/catsStore';

const cats = useCatStore()

onMounted(()=>{
    cats.getCats()
})



</script>

<style>
.card{
    width: 300px;
    height: 400px;

    display: flex;
    flex-direction: column;

    align-items: center;
    
    border: 1px solid black;

    border-radius: 15px;

    gap: 8px;

    margin-top: 50px;
}
.listContainer{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.cat{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
button{
        width: 150px;
        height: 50px;
        border-radius: 25px;
        background-color: grey;
        color: white;
        border: none;
        
    }
</style>