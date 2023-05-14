<template>
    <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/vuetify@3.2.4/dist/vuetify-labs.css">
    </head>
    <div class="text-center">
    <v-pagination
      v-model="page"
      :length="questions.length"
      prev-icon="mdi-menu-left"
      next-icon="mdi-menu-right"
    ></v-pagination>
  </div>
    <div class=" ui padded segment" style="margin:5vh;">
      <div class="ui two column grid">
        <div class="column">
          <p>{{ questions[page-1] }}</p>
          <!-- <p>{{ questions }}</p><p>{{ questions }}</p><p>{{ questions }}</p><p>{{ questions }}</p> -->
        </div>
        <div class="column">
          <p>{{ questions[page-1] }}</p>
          <!-- <p>{{ questions }}</p><p>{{ questions }}</p><p>{{ questions }}</p><p>{{ questions }}</p><p>{{ questions }}</p> -->
        </div>
    </div>
    <div class =" ui vertical  divider"></div>
    </div>
</template>


<script>
export default {
    name:"QuizModule",
    data(){
        return{
        subject:"Quiz-1",
        questions:['Q1','Q2','Q3'],
        page:1
        }
    },
}
</script>

<style>

.mar{
  padding-left: 5vh;
}
</style>

<!-- style="width: 80%; padding-left: 20%;" -->