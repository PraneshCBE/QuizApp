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
    <div class="content">
        <div class="quiz-box">
            <h3 class="mb-4 text-3xl font-extrabold leading-none tracking-tight text-white-200 md:text-4xl dark:text-white">Quick Access</h3>
          <select v-model="selectedDate" @change="getScheduledQuizzes">
            <option v-for="date in dates" :key="date" :value="date">{{ date }}</option>
          </select>
          <div v-if="scheduledQuizzes.length > 0">
            <h3>{{ selectedDate === currentDate ? "Today's Quiz" : selectedDate }} </h3>
            <ul>
              <li v-for="quiz in scheduledQuizzes" :key="quiz.id">{{ quiz.name }}</li>
            </ul>
          </div>
          <div v-else>
            <p>No quizzes scheduled for the selected date.</p>
          </div>
        </div>
        <div class="info">
            <div class="dummy">
           <p> Some info</p>
           <p> Dei lalithuh Enaala mudeela daaaa</p> 
           <p> Oru alavuku box pirichuten</p> 
           <p> Alugu padutheeru daaaaaaaaaaaaaa</p> 
            <p>  Pleaseeeeeeeeeeeeeeeeeeeeeeeeeeee</p> 
        </div>
      <img  src="../../assets/ll.png">
    </div>
    </div>
  </template>
  
  <script>
  import AvailCourses from './AvailCourses.vue';
  export default {
    data() {
      return {
        selectedDate: '',
      scheduledQuizzes: [],
      dates: [],
      currentDate: '',
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
}


.quiz-box {
  width: 40%;
  height:max-content;
  background-color: #3b3939;
  padding: 20px;
  color:wheat;
  
}

.quiz-box select {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  color: aliceblue;
  background-color: darkgrey;
}

.quiz-box h3 {
  margin-bottom: 10px;
}

.quiz-box ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.quiz-box li {
  margin-bottom: 5px;
}
@media (max-width: 768px) {
  .content {
    flex-direction: column;
  }
  .quiz-box {
    width: 100%;
  }
  .info{
    flex-direction: column;
  }
}
.info{
    width: 100%;
    background-color: aquamarine;
    float: center;
    display:flex;
    flex-direction: row;
    justify-content: space-around;
}
.dummy{
display: flex;
flex-direction: column;
}

</style>  