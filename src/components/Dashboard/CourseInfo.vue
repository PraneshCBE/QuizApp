<template>
    <HeaderAll></HeaderAll>
    Course Info of {{ co.co.course_name}}
</template>
<script>
import HeaderAll from '../HeaderAll.vue';
export default({
    name:'CourseInfo',
    data(){
        return{
            co:JSON.parse(this.$route.query.course)
        }
    },
    components:{
        HeaderAll
    },
    mounted(){
    }
})
</script>