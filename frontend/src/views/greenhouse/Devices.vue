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
                <h2>Devices</h2>
            </v-col>
            <v-col class="text-end">
                <AddMcuDialog 
                    :greenhouseId="greenhouse._id" 
                    @add="onAddMcu"
                />
            </v-col>
        </v-row>

        <v-row class="px-10">
            <v-col>
                <v-expansion-panels>
                    <McuPanel 
                        v-for="mcu in mcus"
                        :key="mcu._id"
                        :id="mcu._id"
                        :name="mcu.name"
                        class="bg-transparent border"
                        @edit="onEditMcu"
                        @delete="onDeleteMcu"
                    />
                </v-expansion-panels>
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
const AddMcuDialog = defineAsyncComponent(() => import('@/components/greenhouses/greenhouse/devices/AddMcuDialog.vue'))
const McuPanel = defineAsyncComponent(() => import('@/components/greenhouses/greenhouse/devices/McuPanel.vue'))


// fetch from API
const greenhouse = ref({})
const mcus = ref([])


// get greenhouse id
const route = useRoute()
const id = route.params.id


// add mcu
const onAddMcu = (mcu) => mcus.value.push(mcu)

// edit mcu
const onEditMcu = (id, name) => mcus.value.find(m => m._id == id).name = name

// remove mcu
const onDeleteMcu = (id) => mcus.value = mcus.value.filter(m => m._id != id)


// nav back without id
onBeforeMount(async () => {
    if (!id) router.push('/greenhouses')

    // load greenhouse
    await api.get(`/user/greenhouse/${id}`)
        .then(res => greenhouse.value = res.data.object)
        .catch(err => snackbar.pop(err.toString()))

    // load MCUs
    await api.get(`/user/greenhouse/${id}/mcu`)
        .then(res => mcus.value = res.data.object)
        .catch(err => snackbar.pop(err.toString()))

})

</script>

<style scoped>

</style>