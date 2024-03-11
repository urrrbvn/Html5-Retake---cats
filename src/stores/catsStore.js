import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'




export const useCatStore = defineStore('cats', () => {

  const cats = ref([])


  async function getCats(){
    let url = 'https://cats.petiteweb.dev/api/single/CatsPage/show'
    const res = await axios(url)

    cats.value = res.data

    console.log('успешно', cats.value)

  } 

  async function addNewCat(){
    let url = 'https://cats.petiteweb.dev/api/single/CatsPage/add'

    let newCat = {
      id: cats.value.length + 1,
      name: prompt("введите имя кота"),
      image: prompt("вставьте ссылку на фото кота"),
      age: +prompt("введите возраст кота"),
      rate: +prompt("как вы оцените своего кота?"),
      favorite: false,
      description: prompt("Напишите описание кота")
    }

    let res = await axios.post(url, newCat)
    console.log(res)
    getCats()
    console.log(cats.value)
  }

  async function deleteCat (id){
    let url = `https://cats.petiteweb.dev/api/single/CatsPage/delete/${id}`

    let res = await axios.delete(url)
    getCats()
  }
  async function editCat(id){

    const editedCat = {
      name: prompt("введите новое имя кота"),
      image: prompt("вставьте ссылку на новое фото кота"),
      age: +prompt("введите новый возраст кота"),
      rate: +prompt("как вы оцените своего кота?"),
      favorite: false,
      description: prompt("Напишите новое описание кота")
    }

    let url = `https://cats.petiteweb.dev/api/single/CatsPage/update/${id}`

    let res = await axios.put(url, editedCat)

  }

  return {
    cats,
    getCats,
    addNewCat,
    deleteCat,
    editCat
  }
})
