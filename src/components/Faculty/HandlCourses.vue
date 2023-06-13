<template>
    <head>
   <link href="https://fonts.googleapis.com/css?family=Open+Sans:300i,400" rel="stylesheet">
 </head>
 <body>
 <div v-if="!loading" class="container">
   <div v-for="co in courses" :key="co" class="card">
     <h3 class="title">{{ co.course_id }}</h3>
     <div class="bar"><div class="emptybar"></div><div class="filledbar"></div></div>
     <p class="titlen">{{ co.course_name }}</p>
     <div class="circle">
       <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
       <circle class="stroke" cx="60" cy="60" r="15%"/>
       <image class ="enter" width="35" height="35" x="42" y="43" xlink:href="../../assets/enter.png" @click="course(co)"/>
     </svg></div>
   </div>
 </div>
 <div v-else id ="lottie-container" class="lottie-container"></div>
 
 </body>
 </template>
 <script>
 import AES from 'crypto-js/aes'
 import axios from 'axios'
 import lottie from 'lottie-web';
 import animationData from '../../assets/loading.json';
     export default({
         data(){
             return{
                 courses:[],
                 dataFetchError:false,
                 loading:true
             }
         },
         methods:{
           course(co){
             if(!this.dataFetchError){
             console.log(this.$globalmethods.AES_secret_key)
             this.$router.push({name:'CourseInfo',query:{course:AES.encrypt(JSON.stringify({co}),this.$secretKey)}})
             }
             else{this.getCourses()}
           },
           async getCourses() {
             try{
 
               var dData=this.$globalmethods.decryptData(JSON.parse(localStorage.getItem('user-info')))
               const uname=dData.user
               this.loading=true
             const result = await axios.get(this.$url+'/faculty/courses', { params: { username: uname } })
             this.courses=result.data.courses
             this.loading=false
             console.log(result.data)
             this.dataFetchError=false
             }catch(err){
               //Error Handling for the courses
               this.loading=false
               this.dataFetchError=true
               this.courses=[{"course_id":"Error 500","course_name":"Unable to Fetch Data"},{"course_id":"Error 500","course_name":"Try Refresing the Page ;( or Log-in again "}]
               console.log(err)
             }
 
           }
         },
         mounted(){
           this.getCourses()
           const container = document.getElementById('lottie-container');
 
 lottie.loadAnimation({
 container: container,
 renderer: 'svg',
 animationData: animationData,
 loop: true,
 autoplay: true,
 });
         }
     })
 </script>
 <style scoped>
  body {
   background-color: #100e1700;
   font-family: 'Open Sans', sans-serif;
 }
 
 .container {
   padding-left: 5%;
   padding-right: 5%;
   justify-content: center;
   overflow-y: auto;
   overflow-x: auto;
   position:static;
   height: 300px;
   width: 100%;
   /* left: 5vh; */
   display: flex;
   background-color: #00000000;
   
 }
 
 #lottie-container {
     width: 500px;
     height: 30%;
     margin: 0 auto;
   }
 .container::-webkit-scrollbar{
     display: none;
   }
 .card {
   display: flex;
   height: 70%;
   width: 250px;
   margin-top: 4.5vh;
   margin-left: 6vh;
   background-color: #17141d;
   border-radius: 20px;
   box-shadow: -1rem 0 1rem #000;
   /* margin-left: -50px; */
   transition: 0.4s ease-out;
   position: relative;
 }
 
 .card:not(:first-child) {
     margin-left: -10%;
 }
 
 .card:hover {
   transform: translateY(-30px);
   transition: 0.4s ease-out;
 }
 
 .card:hover ~ .card {
   position: relative;
   left: 150px;
   transition: 0.4s ease-out;
 }
 
 .title {
   color: white;
   font-weight: 300;
   position: absolute;
   left: 20px;
   top: 3vh;
 }
 .titlen {
   color: white;
   font-weight: 300;
   position:relative;
   top: 7vh;
   left: 10px;
   right: 2px;
   
 }
 
 .bar {
   position: absolute;
   top: 12px;
   left:2vh;
   height: 0.5vh;
   width: 60%;
 }
 
 .emptybar {
   background-color: #2e3033;
   width: 100%;
   height: 100%;
 }
 
 .filledbar {
   position: absolute;
   top: 0px;
   z-index: 3;
   width: 0px;
   height: 100%;
   background: rgb(0,154,217);
   background: linear-gradient(90deg, rgba(0,154,217,1) 0%, rgba(217,147,0,1) 65%, rgba(255,186,0,1) 100%);
   transition: 0.6s ease-out;
 }
 
 .card:hover .filledbar {
   width: 100%;
   transition: 0.4s ease-out;
 }
 
 .circle {
   position: absolute;
   top: 110px;
   left: calc(50% - 60px);
 }
 
 .stroke {
   stroke: white;
   stroke-dasharray: 360;
   stroke-dashoffset: 360;
   transition: 0.6s ease-out;
 }
 
 svg {
   fill: #17141d;
   stroke-width: 2px;
 }
 
 .card:hover .stroke {
   stroke-dashoffset: 100;
   transition: 0.6s ease-out;
 }
 
 .enter{
   visibility: hidden;
 }
 .card:hover .enter{
   visibility: visible;
 }
 
 </style>
 