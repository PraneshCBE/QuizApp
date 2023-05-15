<template>
    <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/vuetify@3.2.4/dist/vuetify-labs.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css">    
      </head>
    <div class="courses">
    <h2 class="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">Courses</h2>
    </div>
    <div class="cards">
        <AvailCourses></AvailCourses>
    </div>
    <v-row>
        <v-container style="align-items:self-end">
            <p>Quiz 1</p>
        </v-container>
        <!-- <div class ="today" >Some info in remaining space, and in right side "Today Events or Quiz"</div>
        <div class="remaining">Some Info</div> -->
    </v-row>
    <!-- <div class="container1">
        <div class ="today" >Some info in remaining space, and in right side "Today Events or Quiz"</div>
        <div class="remaining">Some Info</div>
    </div> -->
    
</template>
<script>
import AvailCourses from './AvailCourses.vue';
export default({
    name:"StudMain",
    data(){
        return{

        }
    },
    components:{
        AvailCourses
    }
})
</script>
<style scoped>
.courses{
    display: flex;
    justify-content: flex-start;
}
.card{
    width: max-content;
}
.cotainer1{
 background-color: aquamarine;

}
.remaining{
   float: center;
}
.today{
    border: 2cap;
    background-color: aqua;
    border-color: blue;
    width: 30%;
    height: 50%;
    
    float:right;
    position: fixed;
}
</style>