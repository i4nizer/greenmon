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
                <GreenhouseSettingsCard class="bg-transparent border" />
            </v-col>
        </v-row>
        
    </v-container>
</template>

<script setup>
import UserNav from '@/components/UserNav.vue';
import router from '@/router';
import { defineAsyncComponent, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';


const GreenhouseNavCard = defineAsyncComponent(() => import('@/components/greenhouses/greenhouse/GreenhouseNavCard.vue'))
const GreenhouseSettingsCard = defineAsyncComponent(() => import('@/components/greenhouses/greenhouse/settings/GreenhouseSettingsCard.vue'))


// get greenhouse id
const route = useRoute()
const id = route.params.id

// 








// nav back without id
onBeforeMount(() => { if (!id) router.push('/greenhouses') })

</script>

<style scoped>

</style>