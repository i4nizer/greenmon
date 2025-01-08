<template>
    <v-card class="pa-3">
        <v-card-title>Thresholds</v-card-title>
        <div
            v-for="t in thresholds"
            class="mx-3 pa-3 rounded bg-grey-darken-4 d-flex align-center"
        >
            <v-icon size="16" class="mr-2">mdi-lightning-bolt-outline</v-icon>
            <span>{{ t.sensor }} {{ t.condition == '<' ? 'below' : 'above' }} {{ t.value }}: {{ t.actuator }} Turns {{ t.action ? 'On':'Off' }}</span>
            <v-spacer></v-spacer>
            <v-btn 
                size="30"
                variant="flat"
                icon
            >
                <v-icon size="16">mdi-close</v-icon>
            </v-btn>
        </div>
    </v-card>
</template>

<script setup>
//


const props = defineProps(['thresholds'])
</script>

<style scoped>

</style>