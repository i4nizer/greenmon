<template>
    <v-dialog max-width="500">
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

        <template v-slot:default="{ isActive }">
            <v-form class="rounded bg-grey-darken-4 pa-5" @submit.prevent="">
                <h2>Add a greenhouse project</h2>
                <span class="text-grey">Enter the details for your new greenhouse project.</span>

                <label class="mt-6" for="name">Name</label>
                <v-text-field
                    id="name"
                    variant="outlined"
                    density="compact"
                ></v-text-field>

                <v-btn 
                    class="text-none" 
                    color="white" 
                    type="submit" 
                    variant="elevated"
                    text="Add Greenhouse"
                    @click="isActive.value = false"
                ></v-btn>
            </v-form>
        </template>
    </v-dialog>
</template>

<script setup></script>

<style scoped></style>
