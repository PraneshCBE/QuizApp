<template>
    <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/vuetify@3.2.4/dist/vuetify-labs.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css">    
      </head>
   
      <div class="courses">
        <h2 class="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">Courses</h2>
      </div>
        <div>
          <HandlCourses></HandlCourses>
        </div>
  </template>
  <script>
  import HandlCourses from './HandlCourses.vue';
// import { onMounted } from 'vue';
  export default {
    data() {
      return {
      };
    },
    components:{
       HandlCourses
    },
}
   
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