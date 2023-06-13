<template>
  <head>
    <link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk&family=Nunito:wght@500&family=Poppins&display=swap" rel="stylesheet">
  </head>
    <v-container>
      <h1>Results</h1>
      <v-row>
        <v-col cols="6" v-for="course in courses" :key="course.id">
          <v-card class="course-card">
            <v-card-title>{{ course.name }}</v-card-title>
            <v-card-text>
              <div class="quiz" v-for="quiz in course.quizzes" :key="quiz.id">
                <span>{{ quiz.name }}</span>
                <span class="marks">{{ quiz.marks }}</span>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>

  export default {
    data() {
      return {
        courses: [
          {
            id: 1,
            name: '19CSE311',
            quizzes: [
              { id: 1, name: 'Quiz 1', marks: 14 },
              // { id: 2, name: 'Quiz 2', marks: 20 },
            ],
          },
          {
            id: 2,
            name: '19CSE312',
            quizzes: [
              { id: 1, name: 'Quiz 1', marks: 10 },
              // { id: 2, name: 'Quiz 2', marks: 7 },
            ],
          },
          {
            id: 3,
            name: '19CSE313',
            quizzes: [
              { id: 1, name: 'Quiz 1', marks: 9 },
              { id: 2, name: 'Quiz 2', marks: 12 },
            ],
          },
          {
            id: 4,
            name: '19CSE314',
            quizzes: [
              { id: 1, name: 'Quiz 1', marks: 11 },
              { id: 2, name: 'Quiz 2', marks: 6 },
            ],
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  /* *{
  font-family: 'Hanken Grotesk', sans-serif;
  font-family: 'Nunito', sans-serif;
  font-family: 'Poppins', sans-serif;
} */
  .course-card {
    margin: 10px;
    padding: 10px;
  }
  .quiz {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
  }
  .marks {
    font-weight: bold;
  }
  </style>
  