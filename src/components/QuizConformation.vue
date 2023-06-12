<template>
    <div class="page_404">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 ">
            <div class="col-sm-10 col-sm-offset-1  text-center">
                <div class="form">
              <div class="four_zero_four_bg">
                <h1 class="text-center ">Ready to take the Test?!</h1>
              </div>
              <div class="contant_box_404">
                <h3 v-if="password" >
                  Do you have the Password ?
                </h3>
                <input v-if="password" class="inp" type="password" v-model="pass" required placeholder="Enter the assessment password" />
                <h3 class="link_404" @click="startAssignment">Begin Assessment</h3>
                <p v-if="errMess.length!=0" class="err"> {{ errMess }}</p>
            </div>
        </div>
                <div id="lottie-container"></div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  <script>
  import lottie from 'lottie-web';
  import animationData from '../assets/exams-preparation.json';
  // import Swal from 'sweetalert2'

  export default {
    name: "QuizConformation",
    data() {
      return {
        qid: this.$route.query.id,
        password: this.$route.query.pass,
        pass: '',
        errMess: '',
      };
    },
    // setup(){
    //     const handleFullScreenChange = () => {
    //   if (!document.fullscreenElement || !document.mozFullScreenElement ||
    //       !document.webkitFullscreenElement || !document.msFullscreenElement) {
    //     // Redirect to another page when full-screen exits
    //               Swal.fire({
    //         title: 'Please Enter FullScreen',
    //         showConfirmButton:true,
    //         confirmButtonText: 'Back',
    //       }).then((result) => {
    //         /* Read more about isConfirmed, isDenied below */
    //         if (result.isConfirmed) {
    //           this.$router.push('/dashboard');
    //           console.log('Exitted')
    //         } 
    //       })
    //     this.$router.push('/dashboard');
    //     console.log('Exitted')
    //   }
    // };

    // onMounted(() => {
    //   document.addEventListener('fullscreenchange', handleFullScreenChange);
    //   document.addEventListener('mozfullscreenchange', handleFullScreenChange);
    //   document.addEventListener('webkitfullscreenchange', handleFullScreenChange);
    //   document.addEventListener('msfullscreenchange', handleFullScreenChange);
    // });

    // onUnmounted(() => {
    //   document.removeEventListener('fullscreenchange', handleFullScreenChange);
    //   document.removeEventListener('mozfullscreenchange', handleFullScreenChange);
    //   document.removeEventListener('webkitfullscreenchange', handleFullScreenChange);
    //   document.removeEventListener('msfullscreenchange', handleFullScreenChange);
    // });
       
    // },
    methods:{

        startAssignment(){
            //password validation
            this.enterFullScreen();
            this.$router.replace({name:'QuizModule',query:{id:this.qid}})
        },
        enterFullScreen() {
            const docElement = document.documentElement;
            if (docElement.requestFullscreen) {
            docElement.requestFullscreen();
            } else if (docElement.mozRequestFullScreen) {
            docElement.mozRequestFullScreen();
            } else if (docElement.webkitRequestFullscreen) {
            docElement.webkitRequestFullscreen();
            } else if (docElement.msRequestFullscreen) {
            docElement.msRequestFullscreen();
            }
        },
        
        setupExitFullscreenListener() {
      document.addEventListener('fullscreenchange', this.handleExitFullscreen);
      document.addEventListener('webkitfullscreenchange', this.handleExitFullscreen);
      document.addEventListener('mozfullscreenchange', this.handleExitFullscreen);
      document.addEventListener('msfullscreenchange', this.handleExitFullscreen);
      window.addEventListener('beforeunload', this.handleBeforeUnload);
    },
   
    //     handleExitFullscreen() {
    //   if (!document.fullscreenElement && !document.webkitFullscreenElement &&
    //       !document.mozFullScreenElement && !document.msFullscreenElement) {
    //     Swal.fire({
    //       title: 'Are you sure you want to exit fullscreen?',
    //       icon: 'warning',
    //       showCancelButton: true,
    //       confirmButtonText: 'Continue',
    //       cancelButtonText: 'Cancel',
    //     }).then((result) => {
    //       if (result.isConfirmed) {
    //         // Continue with the same screen or perform any other desired action
    //       } else {
    //         // Stay in fullscreen or perform any other desired action
    //       }
    //     });
    //   }
    // },
    // handleBeforeUnload(event) {
    //   event.preventDefault();
    //   event.returnValue = '';

    //   const confirmationMessage = 'Are you sure you want to leave the quiz?';
    //   event.returnValue = confirmationMessage; // For Chrome    
    // },
    removeExitFullscreenListener() {
      document.removeEventListener('fullscreenchange', this.handleExitFullscreen);
      document.removeEventListener('webkitfullscreenchange', this.handleExitFullscreen);
      document.removeEventListener('mozfullscreenchange', this.handleExitFullscreen);
      document.removeEventListener('msfullscreenchange', this.handleExitFullscreen);
      window.removeEventListener('beforeunload', this.handleBeforeUnload);
    },
        
    },
    mounted() {
        // document.addEventListener('fullscreenchange', handleFullScreenChange);
        // document.addEventListener('mozfullscreenchange', handleFullScreenChange);
        // document.addEventListener('webkitfullscreenchange', handleFullScreenChange);
        // document.addEventListener('msfullscreenchange', handleFullScreenChange);
        this.setupExitFullscreenListener();
        window.addEventListener('beforeunload', this.handleBeforeUnload);
      const container = document.getElementById('lottie-container');
        console.log(this.$route.query)
      lottie.loadAnimation({
        container: container,
        renderer: 'svg',
        animationData: animationData,
        loop: true,
        autoplay: true,
      });
    },
    unmounted(){
      // document.removeEventListener('fullscreenchange', handleFullScreenChange);
      // document.removeEventListener('mozfullscreenchange', handleFullScreenChange);
      // document.removeEventListener('webkitfullscreenchange', handleFullScreenChange);
      // document.removeEventListener('msfullscreenchange', handleFullScreenChange);
      this.removeExitFullscreenListener();
    },
    beforeUnmount(){
      window.removeEventListener('beforeunload', this.handleBeforeUnload);
    }
  }
  </script>
  <style scoped>
  .page_404 {
    padding: 40px 0;
    background: #fff;
    font-family: 'Arvo', serif;
  }
  
  

  #lottie-container {
    width: 500px;
    height: 30%;
    margin: 0 auto;
  }
  .form{
    display: flex;
    flex-direction: column;
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
  .inp {
    width: 30vh;
    height: 5vh;
    display: block;
    margin-top: 3vh;
    margin-right: auto;
    margin-left: auto;
    font-size: 1.5vh;
    border: 1px solid #39ac31;
    border-radius: 1vh;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.5);
}
.h3{
    margin: 2%;
}
 </style>