<template>
  <head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/vuetify@3.2.4/dist/vuetify-labs.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css">
  </head>
  <!-- <div> -->
  <div v-if="!loading">
    <v-container class="bg-blue-darken-4 " width="100%" fluid style="min-height: 80px;display: flex;
  align-items: center;">
      <v-row style="justify-content:space-around;margin-right: 10px;">
        <div style="margin-left: 10px;">
          <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button" style="margin-top: 2vh;">
            Section
            <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          <!-- Dropdown menu -->
          <div id="dropdownHover"
            class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
              <li v-for="section in sections" :key="section">
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  @click="changeSection(section.section_name)">{{ section.section_name }}</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="timer">
          <span class="countdown font-mono text-2xl">
            <span style="display:flex;align-items: center;"><img src="../assets/tiktok.gif"
                style="height:60px;width: 60px;"></span>
            <span>{{ hours }}</span>h
            <span>{{ minutes }}</span>m
            <span>{{ seconds }}</span>s
          </span>
        </div>
        <button type="button"
          class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br dark:font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          @click="submit(false)" style="height: 40px;margin-top: 2vh;">Submit</button>
      </v-row>
    </v-container>

    <v-container>
      <v-row>
        <v-col>
          <v-btn align-self="start" variant="outlined" style="margin-top: 10px;" @click="dec"
            :disabled="disable">Prev</v-btn>
        </v-col>
        <v-col align-self="center">
          <v-pagination v-model="page" :length="questions.length" prev-icon="mdi-menu-left" next-icon="mdi-menu-right"
            :total-visible="4" :disabled="disable"></v-pagination>
        </v-col>
        <v-col>
          <v-btn align-self="end" variant="outlined" style="margin-top: 10px;" @click="inc">Next</v-btn>
        </v-col>
      </v-row>
    </v-container>


    <div class=" ui padded segment" style="margin:5vh;">
      <div class="ui two column grid">
        <div class="column">
          <p>Question {{ page }}</p>
          <p>{{ questions[page - 1].question }}</p>
        </div>
        <div class="column">

          <v-row>
            <v-col>
              <p>{{ answer }}</p>
            </v-col>
            <v-col><v-btn @click="answer[questions[page - 1].q_id] = ''" rounded="sm" variant="plain" :ripple="false"
                style="font-size: 10px;">Clear Response</v-btn></v-col>
          </v-row>
          <p>{{ (questions[page - 1].type) }}</p>
          <div v-if="(questions[page - 1].type) === 'sch' || (questions[page - 1].type) === 'mcq'">
            <v-radio-group v-model="answer[questions[page - 1].q_id]" mandatory>
              <v-radio v-for="i in opt1[questions[page - 1].q_id]" :key="i" :label="i.key" :value="i.key"
                :defaults-target="0" class="dec"></v-radio>
            </v-radio-group>
          </div>
          <div v-if="(questions[page - 1].type) === 'mch'">
            <label v-for="(option, index) in opt1[questions[page - 1].q_id]" :key="index" class="mch">
              <input type="checkbox" :value="option.key" v-model="mchSel"> {{ option.key }}
            </label>
            <br>
            <button @click="selectedOptions" class="mch-butt">Confirm Selection</button>
          </div>
          <div v-if="(questions[page - 1].type) === 'num'">
            <input type="text" v-model="answer[questions[page - 1].q_id]" class="inp">
          </div>
          <div v-if="(questions[page - 1].type) === 'file'">
            <input type="file" accept=".jpg, .pdf, .png, .doc" @change="handleFileUpload" class="inp">
          </div>
        </div>
      </div>
      <div class=" ui vertical  divider"></div>
    </div>
  </div>
  <div v-else id="lottie-container"></div>
  <footer id="footer">
    <div style="display: flex;align-items: flex-start; margin:10px;">
      <p style="padding-right: 2vh; margin-left: 2vh;">Network Status</p>
      <img v-if="internetStrength == '3g'" src="../assets/Wifi_moderate.svg" height="20" width="20">
      <img v-else-if="internetStrength == '4g'" src="../assets/Wifi_Strong.svg" height="20" width="20">
      <img v-else src="../assets/Wifi_weak.svg" height="20" width="20">
    </div>
  </footer>
</template>

<script>
import axios from 'axios'
import lottie from 'lottie-web';
import animationData from '../assets/loading.json';
import Swal from 'sweetalert2'
export default {

  name: "QuizModule",
  data() {
    return {
      subject: "Quiz-1",
      sections: "",
      selSection: "",
      questions: ['Who is smartest?', 'Who is cringest?', 'Who is funniest?'],
      opt: ['Lalith', 'Megha', 'Sharath', 'Pranesh', 'Suraj'],
      opt1: {},
      answer: {},
      mchSel: [],
      page: 1,
      disable: false,
      duration: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      days: 1,
      internetStrength: null,
      loading: true,
      end: "",
      isLoaded:true,
      exitstat:false

    }
  },
  methods: {
      enterFullScreen() {
        const docElement = document.documentElement;
if (docElement.requestFullscreen) {
  docElement.requestFullscreen().then(() => {
    this.enterFullScreen();
  }).catch((error) => {
    console.error('Failed to enter fullscreen:', error);
  });
} else if (docElement.mozRequestFullScreen) {
  docElement.mozRequestFullScreen().then(() => {
    this.enterFullScreen();
  }).catch((error) => {
    console.error('Failed to enter fullscreen:', error);
  });
} else if (docElement.webkitRequestFullscreen) {
  docElement.webkitRequestFullscreen().then(() => {
    this.enterFullScreen();
  }).catch((error) => {
    console.error('Failed to enter fullscreen:', error);
  });
} else if (docElement.msRequestFullscreen) {
  docElement.msRequestFullscreen().then(() => {
    this.enterFullScreen();
  }).catch((error) => {
    console.error('Failed to enter fullscreen:', error);
  });
} else {
  console.error('Fullscreen API is not supported');
}

  },
    exitFullscreenHandler() {
    if (!document.fullscreenElement) {
      // The page is not in fullscreen mode
      // Redirect to another page
      if(this.exitstat==false){
      Swal.fire({
          title: 'Please enter FullScreen to continue',
          icon: 'warning',
          // showCancelButton: true,
          allowEscapeKey:false,
          allowOutsideClick:false,

          confirmButtonText: 'FullScreen',
          // cancelButtonText: 'Cancel',
        }).then((result) => {
          if (result.isConfirmed) {
            this.enterFullScreen()}
          // } else {
          //   this.exitstat=true
          //   this.$router.replace({ name: 'AnotherPage' });
          // }
        });
      }
      // this.$router.replace({ name: 'AnotherPage' });
    }
    },

    async checkInternetStrength() {
      if ('connection' in navigator) {
        const connection = navigator.connection;
        if (connection) {
          this.internetStrength = connection.effectiveType || 'Unknown';
          console.log(connection.effectiveType)
        }
      } else {
        this.internetStrength = 'N/A';
      }
    },
    inc() {
      if (this.page < this.questions.length)
        this.page = this.page + 1
    },
    dec() {
      if (this.page > 1)
        this.page = this.page - 1
    },
    startCountdown() {
      const countdownInterval = setInterval(() => {
        if (this.seconds > 0) {
          this.seconds--;
        } else {
          if (this.minutes > 0) {
            this.minutes--;
            this.seconds = 59;
          } else {
            if (this.hours > 0) {
              this.hours--;
              this.minutes = 59;
              this.seconds = 59;
            } else {
              // Countdown completed
              clearInterval(countdownInterval);
              // Perform any action here
              return;
            }
          }
        }
      }, 1000);
    },
    async getQns() {
      const uri = this.$url + '/test'
      try {
        this.loading = true
        const res = await axios.get(uri, { params: { quizId: this.$route.query.id } })
        console.log(res)
        this.sections = res.data.sections
        const seconds = res.data.duration
        this.duration = seconds
        this.hours = Math.floor(seconds / 3600);
        this.minutes = Math.floor(seconds % 3600 / 60);
        this.seconds = Math.floor(seconds % 3600 % 60);
        sessionStorage.setItem('sections', JSON.stringify(this.sections))
        this.subject = res.data.name
        sessionStorage.setItem('subject', this.subject)
        sessionStorage.setItem('cnt',0)
        this.selSection = this.sections[0].section_name
        this.questions = res.data.sections[0].questions
        this.opt1 = {}
        this.answer = {}
        for (let i = 0; i < this.questions.length; i++) {
          this.opt1[this.questions[i].q_id] = this.questions[i].options
        }
        console.log(this.opt1[0])
        for (let i = 0; i < this.questions.length; i++) {
          this.answer[this.questions[i].q_id] = ""
        }
        console.log(this.answer)
        this.loading = false
        const startTime = new Date();
        this.saveQuizProgress(startTime, this.answer);
      } catch (err) {
        console.log(err)
      }
    },
    changeSection(sec) {
      this.sel = sec
      this.questions = this.sections.find(x => x.section_name == sec).questions
      this.page = 1
      for (let i = 0; i < this.questions.length; i++) {
        this.opt1[this.questions[i].q_id] = this.questions[i].options
      }
      console.log(this.opt1[0])
      for (let i = 0; i < this.questions.length; i++) {
        this.answer[this.questions[i].q_id] = ""
      }
      console.log(this.answer)
    },
    selectedOptions() {
      // const questionId = this.questions[this.page - 1].q_id;

      // const selectedOptionObjects = this.opt1[questionId].filter(option => option.selected);

      // // Get the keys of the selected option objects
      // const selectedOptionKeys = selectedOptionObjects.map(option => option.key);

      // Update the answer array with the selected option keys


      // Join the selected options with a comma separator

      this.answer[this.questions[this.page - 1].q_id] = this.mchSel.join(', ');
    },
    handleFileUpload(event) {
      this.answer[this.questions[this.page - 1].q_id] = event.target.files[0]; // Store the selected file
    },
    saveQuizProgress(startTime, answers) {
      var duration=0
      if(this.duration==0)
        {duration=(JSON.parse(sessionStorage.getItem('progress')).duration)}
        else
        {duration=this.duration}
        
      sessionStorage.setItem('progress', JSON.stringify({ 'start': startTime, 'answers': answers, 'duration': duration }));
    },
    checkFirst() {
      if (sessionStorage.getItem('progress') == null)
        return true;
      else
        return false;
    },
    submit(isAuto){
      this.exitstat=true
      this.exitFullscreenHandler()
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
      //api call for sending the saved answers map
      const final_answers=JSON.parse(sessionStorage.getItem('progress')).answers
      console.log(final_answers)
      sessionStorage.clear()
      if(isAuto)
      {
        this.$router.replace({name:'AutoSubmit'})
      }
      else{
        this.$router.replace({name:'SuccessSubmit'})
      }
    }
  },
  mounted() {
    const container = document.getElementById('lottie-container');
    document.addEventListener('fullscreenchange', this.exitFullscreenHandler);
    lottie.loadAnimation({
      container: container,
      renderer: 'svg',
      animationData: animationData,
      loop: true,
      autoplay: true,
    });
    this.checkInternetStrength()
    // Listen for network connection changes
    if ('connection' in navigator) {
      navigator.connection.addEventListener('change', () => {
        console.log("Change in Connection")
        this.checkInternetStrength();
      });
    }

    // Check if this is the first time the user is taking the quiz
    if (this.checkFirst()) {
      this.enterFullScreen();
      this.getQns()
    }
    else {
      if (sessionStorage.getItem('cnt')>3)
      {
        Swal.fire({
          title: 'You have went out of this test 3 times and came back which is not necessary',
          text: 'Please contact your teacher for further details',
          icon: 'error',
          confirmButtonText: 'OK'
        }).then(() => {
          this.submit(true)
        })
       
      }
      sessionStorage.setItem('cnt',parseInt(sessionStorage.getItem('cnt'))+1)
      var currentTime = new Date()
      console.log(currentTime)
      var startTime = new Date(JSON.parse(sessionStorage.getItem('progress')).start)
      console.log(startTime)
      var duration = JSON.parse(sessionStorage.getItem('progress')).duration
      console.log(duration)
      var elapsedTime = currentTime - startTime;
      var seconds = duration - Math.floor(elapsedTime / 1000);
      console.log(seconds)
      console.log("Elapsed: ",elapsedTime)
      //if duratuin_in_seconds - (currentTime - startTime) >5 allow to attend test
      if (seconds>5)
      {
        
        this.enterFullScreen()
        this.hours = Math.floor(seconds / 3600);
        this.minutes = Math.floor(seconds % 3600 / 60);
        this.seconds = Math.floor(seconds % 3600 % 60);
        this.answer=JSON.parse(sessionStorage.getItem('progress')).answers
        this.sections=JSON.parse(sessionStorage.getItem('sections'))
        this.questions = this.sections[0].questions
        this.subject=sessionStorage.getItem('subject')
        this.loading=false
        this.opt1 = {}
        for (let i = 0; i < this.questions.length; i++) {
          this.opt1[this.questions[i].q_id] = this.questions[i].options
        }

      }
      else{
        console.log("Get Out")
        this.loading=false
        this.submit(true)
      }

    }

    // Start the countdown
    this.startCountdown();


    console.log(this.$route.query.id)

  },
  watch: {
    answer: {
      handler: function(newAnswer, oldAnswer) {
       
        console.log("old:",oldAnswer)
        console.log("new : ",newAnswer)
        var startTime=JSON.parse( sessionStorage.getItem('progress')).start
        if (this.isLoaded==false)
        {
          console.log("value changed in storage")
          this.saveQuizProgress(startTime,newAnswer)
          this.isLoaded=false
        }
        else
        {
          this.isLoaded=false
        }
      },
      deep: true,
    },
    hours(newValue) {
      if (newValue === 0 && this.minutes === 0 && this.seconds === 0) {
        // All timer values are zero, automatically submit the quiz
        this.submit(true)
      }
    },
    minutes(newValue) {
      if (this.hours === 0 && newValue === 0 && this.seconds === 0) {
        // All timer values are zero, automatically submit the quiz
        this.submit(true);
      }
    },
    seconds(newValue) {
      if (this.hours === 0 && this.minutes === 0 && newValue === 0) {
        // All timer values are zero, automatically submit the quiz
        this.submit(true);
      }
    },
  },

}
</script>
<style scoped>
* {
  font-family: 'Hanken Grotesk', sans-serif;
  font-family: 'Nunito', sans-serif;
  font-family: 'Poppins', sans-serif;
}

.mch {
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 10px;
  padding: 3%;
  margin: 1%;
}

.inp {
  width: 30vh;
  height: 5vh;
  display: block;
  margin-top: 3vh;
  margin-right: auto;
  margin-left: auto;
  font-size: 1.5vh;
  border: 1px solid #1835b9;
  border-radius: 1vh;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.5);
}

#footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem;
  /* Footer height */
}

.dec {
  border: 1.5px solid;
  padding: 3px;
  padding-left: 10px;
  border-radius: 5px;
  border-color: rgb(62, 62, 63);
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 20px;
  margin-right: 20px;
}

:root .countdown {
  line-height: 1em;
}

.timer {
  margin-right: 4%;
  margin-top: 0.5%;
}

.timer img {
  width: 30%;
  height: 30%;
}

.countdown {

  display: flex;
  justify-content: center;
  align-items: center;
}

.countdown span {
  padding: 0 5px;
}

.countdown span:before {
  content: attr(data-value);
}

.countdown span:nth-child(2):before {
  content: attr(data-value, '00');
}
</style>
