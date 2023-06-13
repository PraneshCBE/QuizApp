<template>
  <div>
      <div class="courses">
      <h2 class="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">Create a Quiz</h2>
    </div>
  <v-card class = "formcard">
    <form @submit="submitForm" class="formQ">

      <label for="name" class = "labeltext ">Name:</label> 
      <!-- <v-card class = "custom-label hover-effect"> -->
        <input type="text" id="name" v-model="formData.name" required class = "inputclass">
      <!-- </v-card> -->
    
    <label for="is_password_protected" class = "labeltext">Is Password Protected:</label>
    <input type="checkbox" id="is_password_protected" v-model="formData.is_password_protected">
    
    <label for="password" class = "labeltext" v-if="formData.is_password_protected">Password:</label>
    <!-- <v-card class = "custom-label hover-effect" v-if="formData.is_password_protected"> -->
        <input type="password" id="password" v-model="formData.password" required class = "inputclass" v-if="formData.is_password_protected">
    <!-- </v-card> -->

    <label for="description" class = "labeltext">Description:</label>
    <v-card class = "custom-label hover-effect">
        <textarea id="description" v-model="formData.description" required class = "inputclass"></textarea>
    </v-card>
    
    <label for="course_id" class = "labeltext">Course ID:</label>
    <!-- <v-card class = "custom-label hover-effect"> -->
        <input type="text" id="course_id" v-model="formData.course_id" required class = "inputclass">
    <!-- </v-card> -->

    <label for="publish_date" class = "labeltext">Publish Date:</label>
    <!-- <v-card class = "custom-label hover-effect"> -->
        <input type="date" id="publish_date" v-model="formData.publish_date" required class = "inputclass">
    <!-- </v-card> -->

    <label for="closing_date" class = "labeltext">Closing Date:</label>
    <!-- <v-card class = "custom-label hover-effect"> -->
        <input type="date" id="closing_date" v-model="formData.closing_date" required class = "inputclass">
    <!-- </v-card> -->

    <label for="duration" class = "labeltext">Duration (in seconds):</label>
    <!-- <v-card class = "custom-label hover-effect"> -->
        <input type="number" id="duration" v-model="formData.duration" required class = "inputclass">
    <!-- </v-card> -->

    <label for="islinear" class = "labeltext">Is Linear:</label>
    <input type="checkbox" id="islinear" v-model="formData.islinear">

    <label for="question" class = "labeltext">Question:</label>
    <!-- <v-card class = "custom-label hover-effect"> -->
        <textarea id="Question" v-model="question" required class = "inputclass"></textarea>
    <!-- </v-card> -->

    <div class = "container">
      <label class = "labeltext">Question Type:</label>
      <v-select v-model="questionType" :items="locations" label="QuestionType" class = "vselectclass"></v-select>
    </div>

    <div>
  <label for="numQuestions" class = "labeltext">Number of Questions:</label>
  <v-card class = "custom-label centered-text hover-effect">
      <input type="number" id="numQuestions" v-model="numQuestions" class = "inputclass">
      <button @click="generateQuestions">Generate Questions</button>
  </v-card>

  <div v-for="(question, index) in questions" :key="index">
    <h3>Question {{ index + 1 }}</h3>
    <input type="text" v-model="question.text" placeholder="Enter question">
    <div v-for="(option, optionIndex) in question.options" :key="optionIndex">
      <label>Option {{ optionIndex + 1 }}:</label>
      <input type="text" v-model="option[optionIndex]" placeholder="Enter option">
    </div>
    <hr>
  </div>
</div>

    <button type="submit">Submit</button>

    <div>
  </div>

    </form>
  </v-card>
  </div>
</template>

<script>
export default{
data(){
return {

locations : ["sch","mch", "num"],
formData: {
      name: "",
      password: "",
      is_password_protected: false,
      description: "",
      course_id: "",
      publish_date:'' ,
      closing_date:'' ,
      duration: 0,
      sections: [],
      islinear: false,
      question: '',
      questionType: '',
      numQuestions: 0,
      questions: []

    },

methods: {
  addQuestion() {
    const newQuestion = {
      question: this.question,
      questionType: this.questionType,
      answerOptions: this.answerOptions,
      correctOptions: this.correctOptions
    };

    this.addedQuestions.push(newQuestion);
    this.resetForm();
  },
  generateQuestions() {
    this.questions = [];
    for (let i = 0; i < this.numQuestions; i++) {
      this.questions.push({
        text: "",
        options: ["", "", "", ""]
      });
    }
  },

  resetForm() {
    this.question = '';
    this.questionType = '';
    this.answerOptions = [];
    this.selectedOption = '';
    this.correctOption = '';
    this.correctOptions = [];
  }
}
};    
  },
};
</script> 
<style scoped>


.vselectclass{
  width : 100px;
  height : 130px;
}
.formcard {
  width:auto;
}
.hover-effect {
  transition: background-color 0.3s ease;
}

.hover-effect:hover {
  background-color: #E0F7FA;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px; /* Adjust the height as needed */
}

.centered-text {
  text-align: center;
}
.labeltext {
  font-size: 20px;
  padding:10px;
}
.custom-label {
  display: inline-block;
  padding: 5px 10px;
  border-radius: 10px;
  width: 400px; 
  height:6-px;
}

.inputclass {
  border-radius: 10px;

  width:387px;
  height:43px;
}

.labelclass{
  margin-right: auto;
}

.formQ{
  display: flex;
align-items: center;
margin-bottom: 1rem;
flex-direction: column;
}
label{
  margin-top: 10px;
}
input{
  border: 1px solid #1835b9;
  border-radius: 1vh;
}
button{
  width: 12vh;
  height: 5vh;
  margin-top: 3vh;
  background: #1835b9;
  color: white;
  font-size: large;
  font-size: 2vh;
  border-radius: 2vh;
}
</style>
