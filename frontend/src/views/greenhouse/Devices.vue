<template>
    <v-container class="pa-0" fluid>

        <v-row>
            <v-col>
                <UserNav />
            </v-col>
        </v-row>
        
        <v-row class="px-10">
            <v-col>
                <GreenhouseNavCard class="bg-transparent border" />
            </v-col>
        </v-row>
        
        <v-row class="px-10">
            <v-col>
                <h2>Devices</h2>
            </v-col>
            <v-col class="text-end">
                <AddMcuDialog />
            </v-col>
        </v-row>

        <v-row class="px-10">
            <v-col>
                <v-expansion-panels>
                    <McuPanel class="bg-transparent border" :mcu="{ name: 'Arduino Nano' }"/>
                </v-expansion-panels>
            </v-col>
        </v-row>
        
    </v-container>
</template>

<script setup>
import UserNav from '@/components/UserNav.vue';
import { defineAsyncComponent } from 'vue';


const GreenhouseNavCard = defineAsyncComponent(() => import('@/components/greenhouses/greenhouse/GreenhouseNavCard.vue'))
const AddMcuDialog = defineAsyncComponent(() => import('@/components/greenhouses/greenhouse/devices/AddMcuDialog.vue'))
const McuPanel = defineAsyncComponent(() => import('@/components/greenhouses/greenhouse/devices/McuPanel.vue'))


// fetch from API
const greenhouse = {
    
}

</script>

<style scoped>

</style>