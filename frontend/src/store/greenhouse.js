import { defineStore } from "pinia";





export const useGreenhouseStore = defineStore('greenhouse', () => {


    // ---state
    const id = ref('')
    const name = ref('')
    const location = ref('')
    


    // ---getters



    // ---actions
    
    

    // ---expose
    return {
        id,
        name,
        location,
    }

}, { persist: true })