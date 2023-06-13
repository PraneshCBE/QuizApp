<template>
  <div>
      <div class="courses">
      <h2 class="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">Create a Quiz</h2>
    </div>
    <form @submit="submitForm" class="formQ">
    <label for="name">Name:</label>
    <input type="text" id="name" v-model="formData.name" required>
    
    <label for="password">Password:</label>
    <input type="password" id="password" v-model="formData.password" required>
    
    <label for="is_password_protected">Is Password Protected:</label>
    <input type="checkbox" id="is_password_protected" v-model="formData.is_password_protected">
    
    <label for="description">Description:</label>
    <textarea id="description" v-model="formData.description" required></textarea>
    
    <label for="course_id">Course ID:</label>
    <input type="text" id="course_id" v-model="formData.course_id" required>
    
    <label for="publish_date">Publish Date:</label>
    <input type="date" id="publish_date" v-model="formData.publish_date" required>
    
    <label for="closing_date">Closing Date:</label>
    <input type="date" id="closing_date" v-model="formData.closing_date" required>
    
    <label for="duration">Duration (in seconds):</label>
    <input type="number" id="duration" v-model="formData.duration" required>

    <label for="islinear">Is Linear:</label>
    <input type="checkbox" id="islinear" v-model="formData.islinear">

    <label for="question">Question:</label>
    <input type="text" id="question" v-model="question" required>

    <div>
      <label>Question Type:</label>
      <select v-model="questionType" required @change="updateAnswerOptions">
        <option value="">Select Question Type</option>
        <option value="sch">Single Choice</option>
        <option value="mch">Multiple Choice</option>
        <option value="num">Integer Type</option>
      </select>
    </div>

    <div>
  <label for="numQuestions">Number of Questions:</label>
  <input type="number" id="numQuestions" v-model="numQuestions">
  <button @click="generateQuestions">Generate Questions</button>

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
  </div>
</template>

<script>
export default{
data(){
      
return {
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
