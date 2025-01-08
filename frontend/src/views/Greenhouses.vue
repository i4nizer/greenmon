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
            <v-col class="text-end">
                <AddGreenhouseDialog />
            </v-col>
        </v-row>

        <v-row class="px-10">
            <v-col
                v-for="gh in greenhouses"
                cols="12" sm="12" md="6" lg="4" xl="3"
            >
                <GreenhouseCard 
                    class="bg-transparent border"
                    :name="gh.name" 
                    :location="gh.location" 
                />
            </v-col>
        </v-row>
        
    </v-container>
</template>

<script setup>
import UserNav from '@/components/UserNav.vue';
import { defineAsyncComponent } from 'vue';


const AddGreenhouseDialog = defineAsyncComponent(() => import('@/components/greenhouses/AddGreenhouseDialog.vue'))
const GreenhouseCard = defineAsyncComponent(() => import('@/components/greenhouses/GreenhouseCard.vue'))



// fetch from API
const greenhouses = [
    {
        name: 'Tomato Greenhouse',
        location: 'Field A',
    },
    {
        name: 'Herb Garden',
        location: 'Field B',
    },
]

</script>

<style scoped>

</style>