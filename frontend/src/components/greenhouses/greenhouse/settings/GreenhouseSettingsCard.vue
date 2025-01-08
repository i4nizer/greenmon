<template>
    <v-card class="pa-3">
        <v-card-title>Greenhouse Settings</v-card-title>
        <v-card-subtitle>Manage your greenhouse settings and preferences</v-card-subtitle>
        <v-card-text>
            <v-form>
                
                <label for="name">Greenhouse Name</label>
                <v-text-field
                    id="name"
                    variant="outlined"
                    density="compact"
                    v-model="greenhouse.name"
                ></v-text-field>
                
                <label for="location">Location</label>
                <v-text-field
                    id="location"
                    variant="outlined"
                    density="compact"
                    v-model="greenhouse.location"
                ></v-text-field>

                <div class="d-flex justify-space-between align-center">
                    <div>
                        <span>Notifications</span>
                        <br>
                        <span class="text-grey">Receive alerts for important events</span>
                    </div>
                    <v-switch></v-switch>
                </div>

                <v-btn
                    text="Save Changes"
                    color="white"
                    class="text-none"
                ></v-btn>

            </v-form>
        </v-card-text>
    </v-card>
</template>

<script setup>
//


const greenhouse = {
    name: 'Tomato Greenhouse',
    location: 'Field A'
}
</script>

<style scoped>

</style>