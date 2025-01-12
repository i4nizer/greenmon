<template>
    <v-dialog v-model="dialog" max-width="500">
        <template v-slot:activator="{ props: activatorProps }">
            <v-btn
                v-bind="activatorProps"
                color="white"
                text="Add Greenhouse"
                variant="flat"
                prepend-icon="mdi-plus"
                class="text-none"
            ></v-btn>
        </template>

        <template v-slot:default>
            <v-form class="rounded bg-grey-darken-4 pa-5" v-model="valid" @submit.prevent="postGreenhouse">
                <h2>Add a greenhouse project</h2>
                <span class="text-grey">Enter the details for your new greenhouse project.</span>

                <label class="mt-6" for="name">Name</label>
                <v-text-field
                    id="name"
                    variant="outlined"
                    density="compact"
                    v-model="name"
                    :rules="[rules.required, rules.min3]"
                ></v-text-field>
                
                <label for="location">Location</label>
                <v-text-field
                    id="location"
                    variant="outlined"
                    density="compact"
                    v-model="location"
                ></v-text-field>

                <v-btn 
                    :loading="loading"
                    class="text-none" 
                    color="white" 
                    type="submit" 
                    variant="elevated"
                    text="Add Greenhouse"
                ></v-btn>
            </v-form>
        </template>
    </v-dialog>
</template>

<script setup>
import api from '@/utils/api';
import rules from '@/utils/rules';
import snackbar from '@/utils/snackbar';
import { ref } from 'vue';


// state
const valid = ref(false)
const loading = ref(false)
const dialog = ref(false)

// data
const name = ref('')
const location = ref('')

// events
const emit = defineEmits(['add'])


// post greenhouse
const postGreenhouse = async () => {
    loading.value = true

    const data = { name: name.value, location: location.value }
    await api.post('/user/greenhouse', data)
        .then(res => {
            emit('add', res.data.object)
            snackbar.message.value = 'Greenhouse created successfully.'
            dialog.value = false
        })
        .catch(err => {
            if (!err.response) snackbar.message.value = 'Unable to create greenhouse, backend server offline.'
            else snackbar.message.value = err.toString()
        })
        .finally(() => snackbar.show.value = true)

    loading.value = false
}


</script>

<style scoped></style>
