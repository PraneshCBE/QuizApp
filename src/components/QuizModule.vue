<template>
    <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/vuetify@3.2.4/dist/vuetify-labs.css">
    </head>
    <v-window v-model="window" show-arrows="hover" align-center>
        <v-window-item v-for="(que,i) in questions" :key="i">
                <v-card elevation="5" height="600px" class=" d-flex align-center justify-center ma-2">
                    <span class="text-h3">{{ que }} </span>
                <!-- <v-card-actions class="justify-space-between">
                    <v-btn
                        variant="dark"
                        icon="mdi-chevron-left"
                        @click="prev"
                    ></v-btn>
                    <v-btn
                        variant="dark"
                        icon="mdi-chevron-right"
                        @click="next"
                    ></v-btn>
                </v-card-actions> -->
                </v-card>
            </v-window-item>
    </v-window>
</template>


<script>
export default {
    name:"QuizModule",
    data(){
        return{
        subject:"Quiz-1",
        questions:['Q1','Q2','Q3'],
        nextIcon:"mdi-chevron-right",
        window:0
        }
    }
}
</script>

<style>
.container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
}
</style>

<!-- style="width: 80%; padding-left: 20%;" -->