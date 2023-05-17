<template>
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk&family=Nunito:wght@500&family=Poppins&display=swap" rel="stylesheet">
      <!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/semantic-ui@2.5.0/dist/semantic.min.css"> -->
    </head>
    
    <div class="full-screen-image first-image">
      
        <nav class="nav-show">
      <ul>
        <li><a href="#">Home</a></li>
        <li><router-link to="">About Us</router-link></li>
        <li><router-link to="">Contact</router-link></li>
        <li ><router-link to="/Login">Login</router-link></li>
      </ul>
    </nav>
    <div>
      
      <div class=" image-title ui horizontal list">
                  <div class="item">
              <img class="mini ui image" src="../assets/ll.png">
              <div class="tit middle aligned content">
                Amrita
                Quibix
              </div>
            </div>
        </div>
      </div>
    </div>
        
      <!-- <div class="full-screen-image second-image"></div> -->
      <!-- <div class="full-screen-image third-image"></div> -->
      <!-- <script type="module" src="https://unpkg.com/@splinetool/viewer@0.9.334/build/spline-viewer.js"></script> -->
      <Spline :scene="scene" />
    <footer>
      <!-- <div class = "ui list">
        <div class="item">
          <p>© Amrita Quibix</p>
        </div>
        <div class="item">
          <font-awesome-icon :icon="['fab', 'instagram']" bounce style="color: #000000;" v-on:click="redir" />
        </div>
      </div> -->
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
              <a class="item" href="#">About</a>
              <a class="item" href="#">Contact</a>
              <a class="item" href="#">Login</a>
      </div>
        </div>
      </div>
      
    </footer>
  </template>

<script>

import Spline from "spline-vue/v3";
export default {
    name: "HomePage",
    components:{
      Spline
    },
    data() {
    return {
      navShow: false,
      scene:"https://prod.spline.design/m53OvYWC3Zp5XPXO/scene.splinecode"
    };
},
    mounted() {
    window.addEventListener('scroll', this.handleScroll)
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
  background-color: rgb(12, 20, 24);
  background-image: url('../assets/cbe\ campus.svg');
  background-size: contain;
  background-repeat: no-repeat;

}

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
  font-size: x-large;
}


</style>
  