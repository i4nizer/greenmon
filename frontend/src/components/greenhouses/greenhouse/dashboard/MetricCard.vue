<template>
    <v-card class="bg-transparent border pa-2">
        <v-card-text class="d-flex justify-space-between pb-0">
            <span>{{ text ?? "Temperature" }}</span>
            <v-icon color="grey">{{ icon ?? "mdi-speedometer" }}</v-icon>
        </v-card-text>

        <v-card-text>
            <span class="text-h5 font-weight-bold">{{ value ?? "0" }}</span>
            <span class="text-grey">{{ " " + (unit ?? "%") }}</span>
            <br />
            <sub class="text-grey">Last updated 0 seconds ago</sub>
        </v-card-text>
    </v-card>
</template>

<script setup>
//

const props = defineProps(["text", "icon", "value", "unit", "datetime"]);
</script>

<style scoped></style>
