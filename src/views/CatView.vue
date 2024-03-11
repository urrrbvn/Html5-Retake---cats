<script setup>
import axios from 'axios';
import { defineProps, onMounted, reactive, ref, watch } from 'vue';
import { RouterLink } from 'vue-router';
import { useCatStore } from '@/stores/catsStore';

const props = defineProps({
    id: Number
})

const catStore = useCatStore()
const catInfo = ref(0)
console.log(catInfo.value)

onMounted(async()=>{
    let url =`https://cats.petiteweb.dev/api/single/CatsPage/show/${props.id}`
    let res = await axios.get(url)

    catInfo.value = res.data
    if(catInfo.value.name){
        console.log(catInfo.value.name)
    }
})
watch(catStore.cats, async()=>{
    let url =`https://cats.petiteweb.dev/api/single/CatsPage/show/${props.id}`
    let res = await axios.get(url)

    catInfo.value = res.data
    if(catInfo.value.name){
        console.log(catInfo.value.name)
    }
})


</script>

<template>
    <div class="catWrapper">
        <div v-if="catInfo" class="catCard">
            <h1>{{ catInfo.name }}</h1>
            <img :src="catInfo.image" alt="" width="300px" height="300px">
            <div class="catInfo" >
                <p>рейтинг: {{ catInfo.rate }}</p>
                <p>{{ catInfo.age }} лет </p>
            </div>
            <p>{{ catInfo.description }}</p>
        </div>
        <div v-else>
            <h1>123</h1>
            <button @click="console.log(catInfo.name)" >TEST</button>
        </div>
        <div class="buttons">
            <RouterLink to="/"><button>Назад</button></RouterLink>
            <RouterLink to="/" ><button @click="catStore.editCat(props.id)" >Изменить кота</button></RouterLink>
            
        </div>
    </div>
</template>


<style>
    .catCard{
        margin-top: 60px;

        display: flex;
        flex-direction: column;

        align-items: center;

        width: 450px;
        height: 500px;

        border: 1px solid black;

        border-radius: 20px;

        margin-bottom: 20px;

        
    }
    .catWrapper{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    .catInfo{
        display: flex;
        gap: 10px;
        font-size: 20px;
        
    }
    p{
        margin-top: 10px;
        font-size: 18px;
        font-weight: 700;
    }
    .buttons{
        display: flex;
        gap: 15px;
    }
</style>