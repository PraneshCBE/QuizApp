<template>
    <HeaderAll></HeaderAll>
    <div style="align-content:center;">
    <h1 class="page-title"> {{  co.co.course_id+" "+co.co.course_name }}</h1>
    <!-- <div class="container"> -->
        <div v-if="!loading" class="left-container"  >
            <p class="quiz">Quizzes Available Now</p>
                <p v-if="availableQuizzes.length==0">
                    <v-card-subtitle>Nothing to Take now</v-card-subtitle>
                </p>
                <div v-else>
                    <v-card-actions class="justify-center">
                        <v-card class="quizCard card-hover" v-for="quiz in availableQuizzes" :key="quiz.id" 
                        :title="quiz.quiz_name" 
                        :subtitle="getSubtitle(quiz)"
                        :text="quiz.quiz_description"
                        @click="attendQuiz(quiz.quiz_id,quiz.quiz_isPasswordProtected,quiz.quiz_start_time,quiz.quiz_end_time)"
                        color="#7986CB" theme="dark"
                        width = 500px height= 250px
                        >
                        </v-card>           
                    </v-card-actions> 
                 </div>

            <p class="quiz">Scheduled Quizzes</p>
                <p v-if="scheduledQuizzes.length==0">
                        <v-card-subtitle>Ufff! Nothing till now</v-card-subtitle>
                </p>
                    <div v-else>
                        <v-card-actions class="justify-center">
                            <v-card class="quizCard card-hover" v-for="quiz in scheduledQuizzes" :key="quiz.id" 
                            :title="quiz.quiz_name" 
                            :subtitle="getSubtitle(quiz)"
                            :text="quiz.quiz_description"
                            color="#0097A7" theme="dark"
                            width = 500px height= 250px
                            >
                            </v-card>  
                        </v-card-actions>          
                    </div>
            <p class="quiz">Past Quizzes</p>
                <p v-if="pastQuizzes.length==0">
                    <v-card-subtitle>Wow! There is no past</v-card-subtitle>
                </p>
                        <div v-else>
                            <v-card-actions class="justify-center">
                                <v-card class="quizCard card-hover" v-for="quiz in pastQuizzes" :key="quiz.id" 
                                :title="quiz.quiz_name" 
                                :subtitle="getSubtitle(quiz)"
                                :text="quiz.quiz_description"
                                color="#AB47BC" theme="dark"
                                width = 500px height= 250px
                                >
                                </v-card>         
                            </v-card-actions>   
                        </div>
        </div>
    <div v-else id ="lottie-container" class="lottie-container">
    </div>
        <!-- <div class="right-container">
            <p class="title">{{ co.co.course_name }}</p>
            <p class="code">{{ co.co.course_id }}</p>
        </div> -->
    </div>
<!-- </div> -->
</template>
<script>
import lottie from 'lottie-web';
import AES from 'crypto-js/aes';
import animationData from '../../assets/loading.json';
import axios from 'axios';
import moment from 'moment';
import HeaderAll from '../HeaderAll.vue';
import Utf8 from 'crypto-js/enc-utf8';
export default ({
    name: 'CourseInfo',
    data() {
        return {
            co: JSON.parse(AES.decrypt(this.$route.query.course, this.$secretKey).toString(Utf8)),
            quizzes: [],
            loading: true,
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
        async getQuizzes() {
            console.log("In getQuizzes")
            // var usrData=this.$globalmethods.decryptData(JSON.parse(localStorage.getItem('user-info')))
            // var token=usrData.st
            // var uri=this.$url+'/authStudent/getQuizzes/'+this.co.co.course_id+'/'+id
            // var id=(usrData.rollno).toUpperCase()
            var uri = this.$url + '/test/' + this.co.co.course_id
            this.loading = true
            console.log(this.loading)
            await axios.get(
                uri,
                // {
                //     headers:
                //     {
                //         'Authorization':`Bearer ${token}`
                //     }
                // }
            )
                .then((res) => {
                    this.loading = false
                    console.log(this.loading)
                    console.log(res)
                    this.quizzes = res.data
                    console.log((moment(this.quizzes[0].quiz_start_time)).format('DD-MM-YYYY'))
                    console.log((moment(this.quizzes[0].quiz_start_time)).utcOffset('+05:30').format('hh:mm A'));
                })
                .catch((err) => {
                    this.loading = false
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
        console.log("check decryption")
        console.log(AES.decrypt(this.$route.query.course, this.$secretKey).toString(Utf8))
        this.getQuizzes()
        
        const container = document.getElementById('lottie-container');

        lottie.loadAnimation({
      container: container,
      renderer: 'svg',
      animationData: animationData,
      loop: true,
      autoplay: true,
    });


    }
})
</script>
<style scoped>
/* @media only screen and (max-width: 767px) {
    .container {
        flex-direction: column;
        justify-content: space-between;

    }
} */

.card-hover:hover {
  box-shadow: 0 4px 8px 0 rgba(4, 4, 4, 4);
  transition: box-shadow 0.3s ease-in-out;
}

.container {
    /* display: flex;
    flex-direction: row; */
    justify-content: space-around;
    margin: 20px;


}
.lottie-container{
    width: 500px;
  height: 50%;
  margin: 0 auto;
  align-content: center;
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

    justify-content: space-around;
    padding: 20px;
    border: 1px solid black;
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    overflow: hidden;
    margin:2vh;
    

}

.title {
    font-size: 2rem;
    font-weight: bold;
    margin: 0;
}

.custom-title {
  font-size: 20px;
}

.code {
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0;
}

.quiz {
    font-size: 26px;
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