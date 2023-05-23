<template>
    <HeaderAll></HeaderAll>
    <h1 class="page-title">Course Info of {{ co.co.course_name }}</h1>
    <div class="container">
        <div class="left-container">
            <p class="quiz">Quizzes Available Now</p>
                <p v-if="availableQuizzes.length==0">Nothing to Take now</p>
                <div v-else>
                    <v-card class="quizCard" v-for="quiz in availableQuizzes" :key="quiz.id" 
                        :title="quiz.quiz_name" 
                        :subtitle="getSubtitle(quiz)"
                        :text="quiz.quiz_description"
                        @click="attendQuiz(quiz.quiz_id,quiz.quiz_isPasswordProtected,quiz.quiz_start_time,quiz.quiz_end_time)">
                    </v-card>            
                 </div>

            <p class="quiz">Scheduled Quizzes</p>
                <p v-if="scheduledQuizzes.length==0">Ufff! Nothing till now</p>
                    <div v-else>
                        <v-card class="quizCard" v-for="quiz in scheduledQuizzes" :key="quiz.id" 
                            :title="quiz.quiz_name" 
                            :subtitle="getSubtitle(quiz)"
                            :text="quiz.quiz_description">
                        </v-card>            
                    </div>
            <p class="quiz">Past Quizzes</p>
                <p v-if="pastQuizzes.length==0">Wow! There is no past</p>
                        <div v-else>
                            <v-card class="quizCard" v-for="quiz in pastQuizzes" :key="quiz.id" 
                                :title="quiz.quiz_name" 
                                :subtitle="getSubtitle(quiz)"
                                :text="quiz.quiz_description">
                            </v-card>            
                        </div>
        </div>
        <div class="right-container">
            <p class="title">{{ co.co.course_name }}</p>
            <p class="code">{{ co.co.course_id }}</p>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import moment from 'moment';
import HeaderAll from '../HeaderAll.vue';
export default ({
    name: 'CourseInfo',
    data() {
        return {
            co: JSON.parse(this.$route.query.course),
            quizzes: []
        }
    },
    components: {
        HeaderAll
    },
    methods: {
        getSubtitle(quiz) {
      return `${(moment(quiz.quiz_start_time)).format('DD-MM-YY')}
      Live: ${(moment(quiz.quiz_start_time)).utcOffset('+05:30').format('hh:mm A')} 
       to ${(moment(quiz.quiz_end_time)).utcOffset('+05:30').format('hh:mm A')}`;
    },
        getQuizzes() {
            console.log("In getQuizzes")
            // var usrData=this.$globalmethods.decryptData(JSON.parse(localStorage.getItem('user-info')))
            // var token=usrData.st
            // var uri=this.$url+'/authStudent/getQuizzes/'+this.co.co.course_id+'/'+id
            // var id=(usrData.rollno).toUpperCase()
            var uri = this.$url + '/test/' + this.co.co.course_id
            axios.get(
                uri,
                // {
                //     headers:
                //     {
                //         'Authorization':`Bearer ${token}`
                //     }
                // }
            )
                .then((res) => {
                    console.log(res)
                    this.quizzes = res.data
                    console.log((moment(this.quizzes[0].quiz_start_time)).format('DD-MM-YYYY'))
                    console.log((moment(this.quizzes[0].quiz_start_time)).utcOffset('+05:30').format('hh:mm A'));
                })
                .catch((err) => {
                    console.log(err)
                })
        },
        attendQuiz(id,pass,start,end)
        {
            const currentTime = new Date();
            const startTime = new Date(start);
            const endTime = new Date(end);
            if(currentTime>=startTime && currentTime<=endTime)
            {
                console.log(pass)
                this.$router.push({name:'QuizConformation',query:{id:id,pass:pass}})
            }
            else{
                console.log("Not in time")
            }
        }
    },
    computed: {
        availableQuizzes() {
            const currentTime = new Date();
            return this.quizzes.filter(quiz => {
                const startTime = new Date(quiz.quiz_start_time);
                const endTime = new Date(quiz.quiz_end_time);
                return startTime <= currentTime && currentTime <= endTime;
            });
        },
        pastQuizzes() {
            const currentTime = new Date();
            return this.quizzes.filter(quiz => {
                // const startTime = new Date(quiz.quiz_start_time);
                const endTime = new Date(quiz.quiz_end_time);
                return currentTime >= endTime;
            });
        },
        scheduledQuizzes() {
            const currentTime = new Date();
            return this.quizzes.filter(quiz => {
                const startTime = new Date(quiz.quiz_start_time);
                // const endTime = new Date(quiz.quiz_end_time);
                return currentTime < startTime;
            });
        },
        
    },
    mounted() {
        this.getQuizzes()

    }
})
</script>
<style scoped>
.container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 20px;


}

.right-container {
    /* display: flex;
    flex-direction: column; */
    /* justify-content: space-between; */
    padding: 20px;
    border: 1px solid black;
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    overflow: hidden;
    margin: 2%;

}

.left-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    border: 1px solid black;
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    overflow: hidden;
    margin-right: 1%;
    

}

.title {
    font-size: 2rem;
    font-weight: bold;
    margin: 0;
}

.code {
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0;
}

.quiz {
    font-size: 1rem;
    font-weight: bold;
    margin: 0;
}

.page-title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 10;
}
.quizCard{
    margin: 1%;
}
</style>