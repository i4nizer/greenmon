<template>
    <v-container class="pa-0" fluid>

        <v-row>
            <v-col>
                <UserNav />
            </v-col>
        </v-row>
        
        <v-row class="px-10">
            <v-col>
                <h2>Greenhouses</h2>
            </v-col>
            <v-col class="text-center text-sm-end">
                <AddGreenhouseDialog @add="onAddGreenhouse" />
            </v-col>
        </v-row>

        <v-row class="px-10">
            <v-col
                v-for="gh in greenhouses"
                :key="gh._id"
                cols="12" sm="12" md="6" lg="4" xl="3"  
            >
                <GreenhouseCard 
                    class="bg-transparent border"
                    :id="gh._id"
                    :name="gh.name" 
                    :location="gh.location" 
                    @delete="onDeleteGreenhouse"
                />
            </v-col>
            <v-col v-if="greenhouses.length <= 0" class="w-100 mt-10 text-center">
                <span class="text-grey font-weight-black">No Greenhouse Yet</span>
            </v-col>
        </v-row>
        
    </v-container>
</template>

<script setup>
import UserNav from '@/components/UserNav.vue';
import api from '@/utils/api';
import snackbar from '@/utils/snackbar';
import { defineAsyncComponent, onMounted, ref } from 'vue';

const AddGreenhouseDialog = defineAsyncComponent(() => import('@/components/greenhouses/AddGreenhouseDialog.vue'))
const GreenhouseCard = defineAsyncComponent(() => import('@/components/greenhouses/GreenhouseCard.vue'))


// fetch from API
const greenhouses = ref([])

// sync create
const onAddGreenhouse = (greenhouse) => greenhouses.value.push(greenhouse)

// sync delete
const onDeleteGreenhouse = (id) => greenhouses.value = greenhouses.value.filter(g => g._id != id)


// fetch data
onMounted(async () => {

    // load greenhouses
    await api.get('/user/greenhouse')
        .then(res => greenhouses.value = res.data.object)
        .catch(err => {
            snackbar.message.value = err.toString()
            snackbar.show.value = true
        })
})

</script>

<style scoped>

</style>