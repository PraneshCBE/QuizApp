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
            <p class="quiz">Scheduled Quizzes</p>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
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
    methods:{
        getQuizzes(){
            console.log("In getQuizzes")
            var usrData=this.$globalmethods.decryptData(JSON.parse(localStorage.getItem('user-info')))
            console.log(usrData)
            var token=usrData.st
            console.log(token)
            var id=(usrData.rollno).toUpperCase()
            axios.get(
                this.$url+'/authStudent/getQuizzes/'+this.co.co.course_id+'/'+id,
                {
                    headers:
                    {
                        'Authorization':`Bearer ${token}`
                    }
                }
                )
            .then((res)=>{
                console.log(res)
                console.log(res.data)
            })
            .catch((err)=>{
                console.log(err)
            })
        }
    },
    mounted(){
        this.getQuizzes()

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
    overflow: hidden;

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
    overflow: hidden;


}
.title{
    font-size: 2rem;
    font-weight: bold;
    margin: 0;
}

.code{
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0;
}

.quiz{
    font-size: 1rem;
    font-weight: bold;
    margin: 0;
}
.page-title{
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 10;
}
</style>