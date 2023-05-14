<template>
    <HeaderAll></HeaderAll>
    Course Info of {{ co.co.name}}
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
        const myObj = JSON.parse(this.$route.query.course);
        console.log("json",myObj.co.name);
        console.log("json1",this.$route.query.course);
    }
})
</script>