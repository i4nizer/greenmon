<template>
    <v-dialog max-width="500" v-model="dialog">
        <template v-slot:activator="{ props: activatorProps }">
            <v-btn
                v-bind="activatorProps"
                text="Add Microcontroller"
                variant="outlined"
                prepend-icon="mdi-plus"
                class="text-none"
            ></v-btn>
        </template>

        <template v-slot:default>
            <v-form
                class="rounded bg-grey-darken-4 pa-5"
                v-model="valid"
                @submit.prevent="postMcu"
            >
                <h2>Add MCU to greenhouse project</h2>
                <span class="text-grey">Enter the details for your MCU.</span>

                <v-text-field
                    label="Name"
                    variant="outlined"
                    density="compact"
                    class="mt-6"
                    v-model="name"
                    :rules="[rules.required, rules.min3]"
                ></v-text-field>

                <v-btn
                    :loading="loading"
                    class="text-none"
                    color="white"
                    type="submit"
                    variant="elevated"
                    text="Add MCU"
                ></v-btn>
            </v-form>
        </template>
    </v-dialog>
</template>

<script setup>
import api from "@/utils/api";
import rules from "@/utils/rules";
import snackbar from "@/utils/snackbar";
import { ref } from "vue";

// props
const props = defineProps(["greenhouseId"]);

// emits
const emit = defineEmits(["add"]);

// state
const dialog = ref(false);
const valid = ref(false);
const loading = ref(false);

// data
const name = ref("");

// post new MCU
const postMcu = async () => {
    loading.value = true;

    const data = { name: name.value, greenhouseId: props.greenhouseId };
    await api
        .post(`/user/greenhouse/${props.greenhouseId}/mcu`, data)
        .then((res) => {
            emit("add", res.data.object);
            snackbar.pop("Microcontroller added successfully.");
        })
        .catch((err) => snackbar.pop(err.toString()));

    loading.value = false;
    dialog.value = false;
};
</script>

<style scoped></style>
