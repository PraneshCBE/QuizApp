<template>
    <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/vuetify@3.2.4/dist/vuetify-labs.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css">    
      </head>
   
      <div class="courses">
        <h2 class="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">Courses</h2>
      </div>
        <div>
          <AvailCourses></AvailCourses>
        </div>
        <v-row style="display: flex; justify-content: space-evenly;">
          <v-col class="brd quick">
            <!-- <div class="quiz-box"> -->
            <h3 class="mb-4 text-3xl font-extrabold leading-none tracking-tight text-white-200 md:text-4xl dark:text-white">Quick Access</h3>
          <select v-model="selectedDate" @change="getScheduledQuizzes" class="brd" style="max-width:80%;">
            <option v-for="date in dates" :key="date" :value="date">{{ date }}</option>
          </select>
          <div class="container">
          <div v-if="scheduledQuizzes.length > 0">
            <h3>{{ selectedDate === currentDate ? "Today's Quiz" : selectedDate }} </h3>
            <ul>
              <li v-for="quiz in scheduledQuizzes" :key="quiz.id" @click="takeQuiz(quiz.id)" class="lis">{{ quiz.name }}</li>
            </ul>
          </div>
          <div v-else>
            <p>No quizzes scheduled for the selected date.</p>
          </div>
        </div>
      <!-- </div> -->
          </v-col>
          <v-col class="quick">
            <!-- <div class="info" > -->
            <!-- <div class="dummy">
              
              </div> -->
              <!-- <VDatePicker v-model="date" mode="date" :is-dark="true" expanded/> -->
              <VCalendar v-model="date" mode="date" :is-dark="true" :attributes='attrs' expanded/>
              <!-- <VCalendar expanded :is-dark="true"/> -->
        <!-- </div> -->
          </v-col>
        </v-row>
    <!-- <div class="content" >
        <div class="quiz-box">
            <h3 class="mb-4 text-3xl font-extrabold leading-none tracking-tight text-white-200 md:text-4xl dark:text-white">Quick Access</h3>
          <select v-model="selectedDate" @change="getScheduledQuizzes" style="max-width:80%;">
            <option v-for="date in dates" :key="date" :value="date">{{ date }}</option>
          </select>
          <div class="container">
          <div v-if="scheduledQuizzes.length > 0">
            <h3>{{ selectedDate === currentDate ? "Today's Quiz" : selectedDate }} </h3>
            <ul>
              <li v-for="quiz in scheduledQuizzes" :key="quiz.id" @click="takeQuiz(quiz.id)">{{ quiz.name }}</li>
            </ul>
          </div>
          <div v-else>
            <p>No quizzes scheduled for the selected date.</p>
          </div>
        </div>
      </div> -->
        <!-- <div class="info" >
            <div class="dummy">
              <p id="caltxt">Calender</p>
              <VDatePicker v-model="date" mode="date" :is-dark="true" />
          
        </div> -->
        <!-- </div> -->
    <!-- </div> -->
  </template>
  <script setup>
  import { ref,computed } from 'vue';
  const quiz = ref([]);
  quiz.value = [
      {
        description: 'Quiz 1',
        isComplete: false,
        dates: [new Date(2023, 6, 12)],
        color: 'green'
      },
      // Add more items as needed
    ];

  const attrs = computed(() => [
  // Attributes for todos
  ...quiz.value.map(quiz => ({
    dates: quiz.dates,
    dot: {
      color: quiz.color,
      class: quiz.isComplete ? 'opacity-75' : '',
    },
    popover: {
      label: quiz.description,
      visibility: 'hover',
    }
  })),
]);
  </script>
  <script>
  import AvailCourses from './AvailCourses.vue';
// import { onMounted } from 'vue';
  export default {
    data() {
      return {
        selectedDate: '',
      scheduledQuizzes: [],
      dates: [],
      currentDate: '',
      date: Date.now(),
      };
    },
    components:{
        AvailCourses
    },
    mounted() {
        this.getDates();
    this.currentDate = this.formatDate(new Date()); // Set current date
    this.selectedDate = this.currentDate; // Set default value to current date
    this.getScheduledQuizzes();
    },
    methods: {
    takeQuiz(quizId) {
      // this.$router.push({ name: 'quiz', params: { id: quizId } });
      console.log(quizId);
      this.$router.push({ name: 'QuizModule' });
    },
        getDates() {
      const today = new Date();
      for (let i = 0; i < 7; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() + i);
        const formattedDate = this.formatDate(date);
        this.dates.push(formattedDate);
      }
    },
    formatDate(date) {
      const options = { weekday: 'long', month: 'long', day: 'numeric' };
      return date.toLocaleDateString('en-US', options);
    },
    getScheduledQuizzes() {
      // You can implement an API call or fetch the scheduled quizzes for the selected date
      // and update the scheduledQuizzes array accordingly.
      // For demonstration purposes, let's assume we have hardcoded the data here.
      const selectedDate = this.selectedDate;
      if (selectedDate === this.dates[0]) {
        this.scheduledQuizzes = [
          { id: 1, name: 'Quiz 1' },
          { id: 2, name: 'Quiz 2' },
          { id: 3, name: 'Quiz 3' },
          { id: 4, name: 'Quiz 4  ' },
        ];
      } else if (selectedDate === this.dates[1]) {
        this.scheduledQuizzes = [
          { id: 4, name: 'Quiz 4' },
          { id: 5, name: 'Quiz 5' },
        ];
      } else {
        this.scheduledQuizzes = [];
      }
    },
    },
  };
  </script>
  
  <style scoped>
.courses {
  width: 100%;
  text-align: left;
}

.content {
    display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  
}

.quick{
  margin: 5vh;
  max-height: 300px;
  max-width: 50%;
  -webkit-overflow-scrolling: scroll;
  overflow-x: hidden ;
}

.lis{
  padding: 10px;
  margin-bottom: 10px;
  /* border: 1px solid #ddd;
  border-radius: 5px; */
  font-size: 16px;
  color: #000;
  cursor: pointer;
}

.brd{
  border: 1px solid;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
/* this quiz-box should not go outside it's parent , instead should make a scroll it's own contents inside it */
.quiz-box {
  width: 40%;
  height: 300px;
  padding: 1%;
  background-color: #ffffff00;
  border: 1px solid;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow-x: hidden;
  justify-content: center;
  align-items: center;
  
}
.container {
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: #ffffff00;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-right: 20px;
  overflow-y:hidden;
  overflow-x: hidden;
}
.quiz-box select {
 
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  color: #000;
  width: 100%;
  background-color: #ffffff00;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.quiz-box h3 {
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 600;
  color: #000;
}

.quiz-box ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

.quiz-box li {
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  color: #000;
  cursor: pointer;
}
@media (max-width: 768px) {
  .content {
    flex-direction: column;
  }
  .quiz-box {
    width: 100%;
    height: 100%;
  }
  
}
.info{
  width: 50%;
  height: 300px;
  padding: 1%;
  background-color: #ffffff00;
  border: 1px solid;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow-y:auto;
  overflow-x: hidden;
}

#caltxt{
  
  font-weight: bold;
}
</style>  