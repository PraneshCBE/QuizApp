<template>
  <head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/vuetify@3.2.4/dist/vuetify-labs.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css">
  </head>
  <!-- <div> -->

  <v-container class="bg-blue-darken-4 " width="100%" fluid style="min-height: 80px;display: flex;
  align-items: center;">
    <v-row style="justify-content:space-around;margin-right: 10px;">
      <div style="margin-left: 10px;">
        <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button">
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
            <li>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Section
                1</a>
            </li>
            <li>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Section
                2</a>
            </li>
            <li>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Section
                3</a>
            </li>
            <li>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Section
                4</a>
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
      <!-- <button class="btn glass" >Submit</button> -->
      <button type="button"
        class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br dark:font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Submit</button>
    </v-row>
  </v-container>

  <v-container>
    <v-row>
      <v-col>
        <v-btn align-self="start" variant="outlined" style="margin-top: 10px;">Prev</v-btn>
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
  <!-- </div>  -->


  <div class=" ui padded segment" style="margin:5vh;">
    <div class="ui two column grid">
      <div class="column">
        <p>{{ questions[page - 1] }}</p>
      </div>
      <div class="column">

        <v-row>
          <v-col>
            <p>{{ answer }}</p>
          </v-col>
          <v-col><v-btn @click="answer[page - 1] = ''" rounded="sm" variant="plain" :ripple="false"
              style="font-size: 10px;">Clear Response</v-btn></v-col>
        </v-row>
        <v-radio-group v-model="answer[page - 1]" mandatory>
          <v-radio v-for="i in opt1[page - 1]" :key="i" :label="i" :value="i" :defaults-target="0" class="dec"></v-radio>
        </v-radio-group>

        <!-- <input type="radio" id="two" value="Two" v-model="answer" />
          <label for="two">Two</label> -->
        <!-- <p>{{ questions }}</p><p>{{ questions }}</p><p>{{ questions }}</p><p>{{ questions }}</p><p>{{ questions }}</p> -->
      </div>
    </div>
    <div class=" ui vertical  divider"></div>
  </div>
  <footer id="footer">
    <div style="display: flex;align-items: flex-start; margin:10px;">
      <img v-if="internetStrength == '2g'" src="../assets/Wifi_weak.svg">
      <img v-if="internetStrength == '3g'" src="../assets/Wifi_moderate.svg">
      <img v-if="internetStrength == '4g'" src="../assets/Wifi_Strong.svg">
    </div>
  </footer>
</template>

<script>
export default {
  name: "QuizModule",
  data() {
    return {
      subject: "Quiz-1",
      questions: ['Q1: Who is smartest?', 'Q2: Who is cringest?', 'Q3: Who is funniest?'],
      opt: ['Lalith', 'Megha', 'Sharath', 'Pranesh', 'Suraj'],
      opt1: {
        "0": ['Lalith', 'Sharath', 'Megha'],
        "1": ['Pranesh', 'Suraj', 'Renga'],
        "2": ['Lalith', 'Sharath', 'Megha'],
        "3": ['Pranesh', 'Suraj', 'Renga']
      },
      answer: ['', '', ''],
      page: 1,
      disable: false,
      hours: 0,
      minutes: 2,
      seconds: 59,
      days: 1,
      internetStrength: null

    }
  },
  methods: {
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

  },
  mounted() {
    // Start the countdown
    this.startCountdown();
    this.checkInternetStrength()
    // Listen for network connection changes
    if ('connection' in navigator) {
      navigator.connection.addEventListener('change', () => {
        console.log("Change in Connection")
        this.checkInternetStrength();
        
      });
    }
  },

}
</script>
<style scoped>
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
}</style>
