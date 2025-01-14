<template>
    <v-container class="pa-0" fluid>

        <v-row>
            <v-col>
                <UserNav />
            </v-col>
        </v-row>
        
        <v-row class="px-10">
            <v-col>
                <GreenhouseNavCard 
                    :id="greenhouse._id"
                    :name="greenhouse.name"
                    class="bg-transparent border" 
                />
            </v-col>
        </v-row>
        
        <v-row class="px-10">
            <v-col>
                <LogSummaryCard class="bg-transparent border" :logs="logs" />
            </v-col>
        </v-row>
        
        <v-row class="px-10">
            <v-col>
                <LogListCard class="bg-transparent border" :logs="logs" />
            </v-col>
        </v-row>
        
    </v-container>
</template>

<script setup>
import UserNav from '@/components/UserNav.vue';
import router from '@/router';
import api from '@/utils/api';
import snackbar from '@/utils/snackbar';
import { defineAsyncComponent, onBeforeMount, provide, ref } from 'vue';
import { useRoute } from 'vue-router';


const GreenhouseNavCard = defineAsyncComponent(() => import('@/components/greenhouses/greenhouse/GreenhouseNavCard.vue'))
const LogSummaryCard = defineAsyncComponent(() => import('@/components/greenhouses/greenhouse/logs/LogSummaryCard.vue'))
const LogListCard = defineAsyncComponent(() => import('@/components/greenhouses/greenhouse/logs/LogListCard.vue'))



// get and pass greenhouseId
const route = useRoute()
const greenhouseId = route.params.greenhouseId
provide('greenhouseId', greenhouseId)

// data
const greenhouse = ref({})
const logs = ref([])


// nav back without id
onBeforeMount(async () => {
    if (!greenhouseId) router.push('/greenhouses')

    // load greenhouse
    // load greenhouse
    await api.get(`/user/greenhouse/${greenhouseId}`)
        .then(res => greenhouse.value = res.data.object)
        .catch(err => snackbar.pop(err.toString()))

    // load logs
    await api.get(`/user/greenhouse/${greenhouseId}/log`)
        .then(res => logs.value = res.data.object)
        .catch(err => snackbar.pop(err.toString()))
})

</script>

<style scoped>

</style>