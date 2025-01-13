<template>
    <v-card class="pa-3">
        <v-card-title>Greenhouse Settings</v-card-title>
        <v-card-subtitle>Manage your greenhouse settings and preferences</v-card-subtitle>
        <v-card-text>
            <v-form v-model="valid" @submit.prevent="patchGreenhouse">
                
                <label for="name">Greenhouse Name</label>
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
                    text="Save Changes"
                    color="white"
                    class="text-none"
                    type="submit"
                ></v-btn>

            </v-form>
        </v-card-text>
    </v-card>
</template>

<script setup>
import api from '@/utils/api';
import rules from '@/utils/rules';
import snackbar from '@/utils/snackbar';
import { ref } from 'vue';

// props
const props = defineProps(['id', 'name', 'location'])

// emits
const emit = defineEmits(['patch'])

// state
const valid = ref(false)
const loading = ref(false)

// data
const name = ref(props.name || '')
const location = ref(props.location || '')


// patch
const patchGreenhouse = async () => {
    loading.value = true

    const data = {
        id: props.id,
        name: name.value,
        location: location.value
    }

    await api.patch('/user/greenhouse', data)
        .then(res => {
            emit('patch', name, location)
            snackbar.message.value = 'Greenhouse details updated successfully.'
        })
        .catch(err => snackbar.message.value = err.toString())
        .finally(() => snackbar.show.value = true)

    loading.value = false
}



</script>

<style scoped>

</style>