<template>
    <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/vuetify@3.2.4/dist/vuetify-labs.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css">    
      </head>
      <div>
        <v-container>
          <v-row>
            <v-col>
              <v-btn align-self="start" variant="outlined"  style="margin-top: 10px;">Prev</v-btn>
            </v-col>
            <v-col align-self="center">
              <v-pagination
            v-model="page"
            :length="questions.length"
            prev-icon="mdi-menu-left"
            next-icon="mdi-menu-right"
            :total-visible="4"
            :disabled="disable"
          ></v-pagination>
            </v-col>
            <v-col>
              <v-btn align-self="end" variant="outlined" style="margin-top: 10px;" @click="inc">Next</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </div> 






      <!-- <div style="width:400px;">   -->
        <!-- <div class="text-center"> -->
          <!-- <v-pagination
            v-model="page"
            :length="questions.length"
            prev-icon="mdi-menu-left"
            next-icon="mdi-menu-right"
            :total-visible="4"
          ></v-pagination>
    </div> -->
    <!-- <div class="ui small padded segment">
      <div class="item">
        <h1>{{ countDown }}</h1>
      </div>
    </div> -->
  <!-- </div> -->
    <div class=" ui padded segment" style="margin:5vh;">
      <div class="ui two column grid">
        <div class="column">
          <p>{{ questions[page-1] }}</p>
          <!-- <p>{{ questions }}</p><p>{{ questions }}</p><p>{{ questions }}</p><p>{{ questions }}</p> -->
        </div>
        <div class="column">
          <p>{{ answer }}</p>
          
                    <v-radio-group v-model="answer[page-1]" mandatory >
                      <v-radio v-for="i in opt1[page-1]" :key="i" :label="i" :value="i" :defaults-target="0" class="dec"></v-radio>
          </v-radio-group>
          
          <!-- <input type="radio" id="two" value="Two" v-model="answer" />
          <label for="two">Two</label> -->
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
        questions:['Q1: Who is smartest?','Q2: Who is cringest?','Q3: Who is funniest?'],
        opt:['Lalith','Megha','Sharath','Pranesh','Suraj'],
        opt1:{
          "0":['Lalith','Sharath','Megha'],
          "1":['Pranesh','Suraj','Renga'],
          "2":['Lalith','Sharath','Megha'],
          "3":['Pranesh','Suraj','Renga']
        },
        answer:['','',''],
        page:1,
        disable:false,
        countDown: 10
        }
    },
    methods: {
            inc(){
              if(this.page<this.questions.length)
              this.page=this.page+1
            },
            countDownTimer () {
                if (this.countDown > 0) {
                    setTimeout(() => {
                        this.countDown -= 1
                        this.countDownTimer()
                    }, 1000)
                }
            }
        },
        created () {
            this.countDownTimer()
        }
}
</script>

<style scoped>
.dec{
  border: 2px solid;
  border-radius: 15px;
  border-color: black;
  margin: 40px;
}

</style>

<!-- style="width: 80%; padding-left: 20%;" -->