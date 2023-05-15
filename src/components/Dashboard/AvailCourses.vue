<template>
   <head>
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300i,400" rel="stylesheet">
</head>
<body>
<div class="container">
  <div v-for="co in courses" :key="co" class="card">
    <h3 class="title">{{ co.code }}</h3>
    <div class="bar"><div class="emptybar"></div><div class="filledbar"></div></div>
    <p class="titlen">{{ co.name }}</p>
    <div class="circle">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
      <circle class="stroke" cx="60" cy="60" r="15%"/>
      <image class ="enter" width="35" height="35" x="42" y="43" xlink:href="../../assets/enter.png" @click="course(co)"/>
    </svg></div>
  </div>
</div>
</body>
</template>
<script>
    export default({
        data(){
            return{
                courses:[
                  {"code":"19CSE311","name":"Computer Security"},
                  {"code":"19CSE311","name":"Computer Security"},
                  {"code":"19CSE311","name":"Computer Security"},
                  {"code":"19CSE311","name":"Computer Security"},
                  {"code":"19CSE311","name":"Computer Security"},
                  {"code":"19CSE311","name":"Computer Security"},
                  {"code":"19CSE311","name":"Computer Security"}
                ]
            }
        },
        methods:{
          course(co){
            this.$router.push({name:'CourseInfo',query:{course:JSON.stringify({co})}})
          }
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
  position:sticky;
  height: 300px;
  width: 100%;
  top: 5vh;
  left: 5vh;
  display: flex;
  background-color: #00000000;
  
}
.container::-webkit-scrollbar{
    display: none;
  }
.card {
  display: flex;
  height: 70%;
  width: 250px;
  margin-top: 6vh;
  margin-left: 6vh;
  background-color: #17141d;
  border-radius: 20px;
  box-shadow: -1rem 0 3rem #000;
/*   margin-left: -50px; */
  transition: 0.4s ease-out;
  position: relative;
}

.card:not(:first-child) {
    margin-left: -10%;
}

.card:hover {
  transform: translateY(-20px);
  transition: 0.4s ease-out;
}

.card:hover ~ .card {
  position: relative;
  left: 50px;
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
