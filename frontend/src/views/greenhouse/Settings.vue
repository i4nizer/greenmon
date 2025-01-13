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
                <GreenhouseSettingsCard 
                    :id="greenhouse._id" 
                    :name="greenhouse.name" 
                    :location="greenhouse.location" 
                    @patch="onPatchGreenhouse"
                    class="bg-transparent border" 
                />
            </v-col>
        </v-row>
        
    </v-container>
</template>

<script setup>
import UserNav from '@/components/UserNav.vue';
import router from '@/router';
import api from '@/utils/api';
import snackbar from '@/utils/snackbar';
import { defineAsyncComponent, onBeforeMount, ref } from 'vue';
import { useRoute } from 'vue-router';


const GreenhouseNavCard = defineAsyncComponent(() => import('@/components/greenhouses/greenhouse/GreenhouseNavCard.vue'))
const GreenhouseSettingsCard = defineAsyncComponent(() => import('@/components/greenhouses/greenhouse/settings/GreenhouseSettingsCard.vue'))


// get greenhouse id
const route = useRoute()
const id = route.params.id

// data
const greenhouse = ref({})



// on patch
const onPatchGreenhouse = (name, location) => {
    greenhouse.value.name = name
    greenhouse.value.location = location
}




// nav back without id
onBeforeMount(async () => {
    if (!id) router.push('/greenhouses')

    // load greenhouse
    await api.get(`/user/greenhouse/${id}`)
        .then(res => {
            // no greenhouse found with that id
            if (res.data.object.length == 0) {
                snackbar.message.value = 'Invalid greenhouse id.'
                snackbar.show.value = true
                return router.push('/greenhouses')
            }

            greenhouse.value = res.data.object[0]
        })
        .catch(err => {
            snackbar.message.value = err.toString()
            snackbar.show.value = true
        })
})

</script>

<style scoped>

</style>