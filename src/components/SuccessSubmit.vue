<template>
    <div class="page_404">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 ">
            <div class="col-sm-10 col-sm-offset-1  text-center">
              <div class="four_zero_four_bg">
                <h1 class="text-center ">Successfully Submitted</h1>
              </div>
              <div id="lottie-container"></div>
              <div class="contant_box_404">
                <h3 class="h2">
                  Results will be published soon 
                </h3>
                <p>Thank you</p>
  
                <router-link to="/dashboard" class="link_404" @click="exitFullscreenHandler">Go to Home</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  <script>
  import lottie from 'lottie-web';
  import animationData from '../assets/successsubmit.json';
  export default {
    name: "SuccessSubmit",
    mounted() {
      const container = document.getElementById('lottie-container');
  
      lottie.loadAnimation({
        container: container,
        renderer: 'svg',
        animationData: animationData,
        loop: true,
        autoplay: true,
      });
    },
    methods:{
    //   exitFullscreenHandler() {
    //     if (document.exitFullscreen) {
    //     document.exitFullscreen();
    //   } else if (document.mozCancelFullScreen) {
    //     document.mozCancelFullScreen();
    //   } else if (document.webkitExitFullscreen) {
    //     document.webkitExitFullscreen();
    //   } else if (document.msExitFullscreen) {
    //     document.msExitFullscreen();
    //   }
    // if (!document.fullscreenElement) {
    //   // The page is not in fullscreen mode
    //   // Redirect to another page
    //   this.$router.replace({ name: 'AnotherPage' });
    // }
    // },

    }
  }
  </script>
  <style scoped>
  .page_404 {
    padding: 40px 0;
    background: #fff;
    font-family: 'Arvo', serif;
  }
  
  
  .four_zero_four_bg {
  
    height: 10vh;
    /* Set the height to the full viewport height */
    background-position: center;
    background-repeat: no-repeat;
  }
  
  #lottie-container {
    width: 500px;
    height: 30%;
    margin: 0 auto;
  }
  
  .four_zero_four_bg h1 {
    font-size: 50px;
  }
  
  .four_zero_four_bg h3 {
    font-size: 80px;
  }
  
  .link_404 {
    color: #fff !important;
    padding: 10px 20px;
    background: #39ac31;
    margin: 20px 0;
    display: inline-block;
  }
  
  .contant_box_404 {
    margin-top: -50px;
  }</style>