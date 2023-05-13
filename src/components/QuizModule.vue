<template>
    <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/vuetify@3.2.4/dist/vuetify-labs.css">
    </head>
    <div class="ui segment">
  <div class="ui two column very relaxed grid">
    <div class="column">
      <p></p>
      <p></p>
      <p></p>
      <p></p>
    </div>
    <div class="column">
      <p></p>
      <p></p>
      <p></p>
      <p></p>
    </div>
  </div>
  <div class="ui vertical fitted divider">
  </div>
</div>
</template>


<script>
export default {
    name:"QuizModule",
    data(){
        return{
        subject:"Quiz-1",
        questions:['Q1','Q2','Q3'],
        nextIcon:"mdi-chevron-right",
        window:0
        }
    }
}
</script>

<style>
.container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
}
</style>

<!-- style="width: 80%; padding-left: 20%;" -->