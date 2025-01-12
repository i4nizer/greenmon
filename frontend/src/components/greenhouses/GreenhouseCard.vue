<template>
    <v-card class="pa-3">
        <v-card-title>
            <v-icon>mdi-leaf</v-icon>
            <span class="ml-2">{{ name ?? 'Greenhouse' }}</span>
        </v-card-title>
        
        <v-card-subtitle>{{ location ?? 'Field A' }}</v-card-subtitle>
        
        <v-card-actions class="mt-5 px-5 d-flex flex-wrap">
            <v-btn class="border text-none" variant="outlined" :to="`/greenhouses/${id}/settings`">
                <v-icon>mdi-cog</v-icon>
                <span class="ml-1">Settings</span>
            </v-btn>
            <v-btn class="border text-none" variant="outlined" @click="deleteGreenhouse">
                <v-icon>mdi-delete</v-icon>
                <span class="ml-1">Delete</span>
            </v-btn>
            <v-btn class="text-none bg-white" :to="`/greenhouses/${id}/dashboard`">
                <span class="mr-1">View Dashboard</span>
                <v-icon>mdi-arrow-right</v-icon>
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script setup>
import api from '@/utils/api';
import snackbar from '@/utils/snackbar';



// props
const props = defineProps(['id', 'name', 'location'])

// events
const emit = defineEmits(['delete'])

// delete
const deleteGreenhouse = async () => {

    await api.delete('/user/greenhouse', { data: { id: props.id } })
        .then(res => {
            emit('delete', props.id)
            snackbar.message.value = 'Greenhouse removed successfully.'
        })
        .catch(err => {
            if (!err.response) snackbar.message.value = 'Unable to remove greenhouse, backend server offline.'
            else snackbar.message.value = err.toString()
        })
        .finally(() => snackbar.show.value = true)
}




</script>

<style scoped>

</style>