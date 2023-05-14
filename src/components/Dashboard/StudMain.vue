<template>
    <div>
        <AvailCourses></AvailCourses>
    </div>
    <div>
        Some info in remaining space, and in right side "Today Events or Quiz"
    </div>
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