<template>
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk&family=Nunito:wght@500&family=Poppins&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css">
      <!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/semantic-ui@2.5.0/dist/semantic.min.css"> -->
    </head>
    
        <nav class="nav-show">
      <ul>
        <li><a href="#" style="color: whitesmoke;">Home</a></li>
        <li><a href="#about-us" style="color: whitesmoke;">About</a></li>
        <li><a href="#contact-us" style="color: whitesmoke;">Contact</a></li>
        <li ><router-link to="/Login" style="color: whitesmoke;">Login</router-link></li>
      </ul>
      </nav>
      <div class="full-screen-image first-image">
      <div>
      
      <div class=" image-title ui horizontal list">
                  <div class="item animate__animated animate__bounceIn">
              <img class="mini ui image" src="../assets/ll.png">
              <div class="tit middle aligned content">
                Amrita
                Quibix
              </div>
            </div>
        </div>
      </div>
    </div>
      
      <div id="about-us" class="full-screen-image" style="background-color:#03001C; display: flex; align-items: center;" >
        <!-- <Spline :scene="scene"  id="contact-us"/> -->
        <v-row>
          <v-col style="margin-left: 2%;">
            <v-card class="mx-auto" max-width="800" variant="outlined" height="600" >
          <Spline :scene="scene"  id="contact-us"/>  
        </v-card>
        <p style="color: rgb(227, 220, 220);">Don't touch the things</p>
          </v-col>
          <v-col>
           <p style="font-size:500%; color: whitesmoke;">Quibix</p>
           <p style="color: rgb(227, 220, 220);" id="txt">No more Connectivity issue while attending Test</p>
           <div id="lottie-container"></div>

          </v-col>
        </v-row>
          
        
         <!-- <Spline :scene="scene"  id="contact-us"/>   -->
      </div>
      <div id="about-us" class="full-screen-image" style="background-color:#03001C; " >
        <p style="font-size:500%; color: whitesmoke;">Tools and Frameworks</p>

        <div class="ui inverted very relaxed horizontal list" style="margin-bottom: 10vh;">
        <div class="item">
          <h2 class="ui grey header">
            <img class="ui image" src="../assets/tandf/vue.svg">
            <div class="content">
              Vue JS
            </div>
            </h2>
        </div>
        <div class="item">
          <h2 class="ui grey header">
            <img class="ui image" src="../assets/tandf/spring.svg">
            <div class="content">
             Spring Boot
            </div>
          </h2>
        </div>
        <div class="item">
          <h2 class="ui grey header">
            <img class="ui image" src="../assets/tandf/mongodb-original.svg">
            <div class="content">
             Mongo DB
            </div>
          </h2>
        </div>
        <div class="item">
          <h2 class="ui grey header">
            <img class="ui image" src="../assets/tandf/node-js.svg">
            <div class="content">
             Node JS
            </div>
          </h2>
        </div>
        <div class="item">
          <h2 class="ui grey header">
            <img class="ui image" src="../assets/tandf/semantic-ui.svg">
            <div class="content">
             Semantic UI
            </div>
          </h2>
        </div>
        <div class="item">
          <h2 class="ui grey header">
            <img class="ui image" src="../assets/tandf/vuetify.svg">
            <div class="content">
             Vuetify
            </div>
          </h2>
        </div>
      </div>
      
      <div class="ui inverted very relaxed horizontal list" style="margin-bottom: 10vh;">
        <div class="item">
          <h2 class="ui grey header">
            <img class="ui inverted image" src="../assets/tandf/github.svg" >
            <div class="content">
              Github
            </div>
            </h2>
        </div>
        <div class="item">
          <h2 class="ui grey header">
            <img class="ui image" src="../assets/tandf/file-type-jenkins.svg">
            <div class="content">
             Jenkins
            </div>
          </h2>
        </div>
        <div class="item">
          <h2 class="ui grey header">
            <img class="ui image" src="../assets/tandf/jira.svg">
            <div class="content">
             Jira
            </div>
          </h2>
        </div>
        <div class="item">
          <h2 class="ui grey header">
            <img class="ui image" src="../assets/tandf/google-cloud.svg">
            <div class="content">
             Google Cloud
            </div>
          </h2>
        </div>
        <div class="item">
          <h2 class="ui grey header">
            <img class="ui image" src="../assets/tandf/postman.svg">
            <div class="content">
             Postman
            </div>
          </h2>
        </div>
        <div class="item">
          <h2 class="ui grey header">
            <img class="ui image" src="../assets/tandf/slack-icon.svg">
            <div class="content">
             Slack
            </div>
          </h2>
        </div>
      </div>

      <div class="ui inverted very relaxed horizontal list" style="margin-bottom: 10vh;">
        <div class="item">
          <h2 class="ui grey header">
            <img class="ui image" src="../assets/tandf/nginx.svg">
            <div class="content">
             Nginx
            </div>
          </h2>
        </div>
        <div class="item">
          <h2 class="ui grey header">
            <img class="ui image" src="../assets/tandf/git.svg">
            <div class="content">
             Git
            </div>
          </h2>
        </div><div class="item">
          <h2 class="ui grey header">
            <img class="ui image" src="../assets/tandf/vscode.svg">
            <div class="content">
             VSCode
            </div>
          </h2>
        </div>
        <div class="item">
          <h2 class="ui grey header">
            <img class="ui image" src="../assets/tandf/intellij-idea.svg">
            <div class="content">
              IntelliJ
            </div>
            </h2>
        </div>
        <div class="item">
          <h2 class="ui grey header">
            <img class="ui inverted image" src="../assets/tandf/selenium.svg" >
            <div class="content">
              Selenium
            </div>
            </h2>
        </div>
        
        <div class="item">
          <h2 class="ui grey header">
            <img class="ui image" src="../assets/tandf/practi.svg">
            <div class="content">
             PractiTest
            </div>
          </h2>
        </div>
        
        <!-- <div class="item">
          <h2 class="ui grey header">
            <img class="ui image" src="../assets/tandf/slack-icon.svg">
            <div class="content">
             Slack
            </div>
          </h2>
        </div> -->
      
      </div>
      
      </div>
    <footer>
      
      <div class="ui vertical list">
        <div class="item">
          <div class = "ui huge divided relaxed horizontal list">
              <div class="item">
                  <i class="black instagram icon" v-on:click="redir"></i>
              </div>
              <div class="item">
                  <i class="black github icon"></i>
              </div>
              <div class="item">
                  <i class="black google icon"></i>
              </div>
          </div>
        </div>
        <div class="item">
          <div class="ui relxed horizontal list">
              <div class="header item" href="#">© Amrita Quibix</div>
              <a class="item" href="#">Home</a>
              <a class="item" href="#about-us">About</a>
              <a class="item" href="#contact-us">Contact</a>
              <router-link class="item" to="/Login">Login</router-link>
      </div>
        </div>
      </div>
      
    </footer>
  </template>

<script>

import Spline from "spline-vue/v3";
import 'animate.css';
import lottie from 'lottie-web';
  import animationData from '../assets/connect.json';
export default {
    name: "HomePage",
    components:{
      Spline
    },
    data() {
    return {
      navShow: false,
      scene:"https://prod.spline.design/YrfgjgP7BbHKie0O/scene.splinecode"
      //"https://prod.spline.design/B3D9fC8xvOWhG3Wx/scene.splinecode"
      
      // "https://prod.spline.design/hnTF7CNSViaLMkdn/scene.splinecode"
    };
},
    mounted() {
    window.addEventListener('scroll', this.handleScroll)
    const container = document.getElementById('lottie-container');
    lottie.loadAnimation({
        container: container,
        renderer: 'svg',
        animationData: animationData,
        loop: true,
        autoplay: true,
      });
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
        this.navShow = window.pageYOffset > 0;
      const firstImage = document.querySelector('.first-image')
      const secondImage = document.querySelector('.second-image')
      const windowHeight = window.innerHeight

      if (firstImage && secondImage) {
        // const firstImageHeight = firstImage.offsetHeight
        const firstImageBottom = firstImage.getBoundingClientRect().bottom

        if (firstImageBottom <= windowHeight) {
          secondImage.classList.add('visible')
        } else {
          secondImage.classList.remove('visible')
        }
      }
    },
    redir(){
      window.location="https://www.instagram.com/praneshh77/";
    }
  },
};

</script>
<style scoped>
*{
  font-family: 'Hanken Grotesk', sans-serif;
  font-family: 'Nunito', sans-serif;
  font-family: 'Poppins', sans-serif;
}
img{
  height: 50px;
  width: 50px;
}
nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-out, opacity 0.3s ease-out;
  transform: translateY(-100%);
  opacity: 0;
  z-index: 1000;
}

nav.nav-show {
  transform: translateY(0);
  opacity: 1;
  background-color: transparent;
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

nav ul li {
  margin: 1.5rem;
}

nav ul li a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
}

#txt{
  font-size: x-large;
}

  .full-screen-image {
    position: relative;
    height: 100vh;
    width: 100%;
    background-size: cover;
    background-position: center;
    transition: opacity 1s;
    opacity: 1;
  }

  .first-image {
    background-color: #03001C;
    background-image: url('../assets/cbe\ campus.svg');
    background-size: contain;
    background-repeat: no-repeat;
    
  }
/* @keyframes fadeInAnimation {
	0% {
		opacity: 0.9;
	}
	100% {
		opacity: 1;
	}
} */

.second-image {
  background-image: url('https://images.hdqwalls.com/download/barbara-palvin-numero-russia-qx-1920x1080.jpg');
}
.third-image{
    background-image: url('https://images.hdqwalls.com/download/sydney-sweeney-greg-swales-photoshoot-d3-1536x864.jpg');
    
}
.image-title {
  position:absolute;
  top: 85%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 3rem;
  font-weight:bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.visible {
  opacity: 1;
}

.tit{
  font-size: xx-large;
 
}
#lottie-container {
    width: 50%;
    height: 50%;
    margin: 0 auto;
  }



</style>
  