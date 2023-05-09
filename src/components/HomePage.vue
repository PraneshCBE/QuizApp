<template>
    <div>
        <nav class="nav-show">
      <ul>
        <li><a href="#">Home</a></li>
        <li><router-link to="">About</router-link></li>
        <li><router-link to="">Contact</router-link></li>
        <li ><router-link to="/Login">Login</router-link></li>
      </ul>
    </nav>
      <div class="full-screen-image first-image">
        <h1 class="image-title">Quiz App</h1>
      </div>
      <div class="full-screen-image second-image"></div>
      <div class="full-screen-image third-image"></div>
    </div>
  </template>

<script>
export default {
    name: "HomePage",
    data() {
    return {
      navShow: false,
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
  },
};
</script>
  
<style scoped>
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
  background-color: black;
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
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 4rem;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.visible {
  opacity: 1;
}
</style>
  