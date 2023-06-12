<template>
    <v-container>
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
            name: 'CSE311',
            quizzes: [
              { id: 1, name: 'Quiz 1', marks: 50 },
              { id: 2, name: 'Quiz 2', marks: 50 },
            ],
          },
          {
            id: 2,
            name: 'CSE312',
            quizzes: [
              { id: 1, name: 'Quiz 1', marks: 50 },
              { id: 2, name: 'Quiz 2', marks: 50 },
            ],
          },
          {
            id: 3,
            name: 'CSE313',
            quizzes: [
              { id: 1, name: 'Quiz 1', marks: 50 },
              { id: 2, name: 'Quiz 2', marks: 50 },
            ],
          },
          {
            id: 4,
            name: 'CSE314',
            quizzes: [
              { id: 1, name: 'Quiz 1', marks: 50 },
              { id: 2, name: 'Quiz 2', marks: 50 },
            ],
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
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
  