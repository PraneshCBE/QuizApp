<template>
    <HeaderAll></HeaderAll>
   <h1 class="page-title">Course Info of {{ co.co.course_name}}</h1> 
    <div class="container">
        <div class="right-container">
            <p class="title">{{ co.co.course_name  }}</p>
            <p class="code">{{ co.co.course_id }}</p>
        </div>
        <div class="left-container">
            <p class="title">Quizzes Available</p>
            <p class="quiz">Quizzes Available</p>
        </div>
    </div>
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
<style scoped>
.container{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 20px;
    

}
.right-container{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    border: 1px solid black;
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
    width: 40%;
    height: 200px;

}
.left-container{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    border: 1px solid black;
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
    width: 40%;
    height: 200px;


}
.title{
    font-size: 30px;
    font-weight: bold;
    margin: 0;
}

.code{
    font-size: 20px;
    font-weight: bold;
    margin: 0;
}

.quiz{
    font-size: 20px;
    font-weight: bold;
    margin: 0;
}
.page-title{
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 10;
}
</style>