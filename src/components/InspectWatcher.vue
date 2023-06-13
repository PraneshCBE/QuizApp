<template>
  <div class="page_404">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 ">
          <div class="col-sm-10 col-sm-offset-1  text-center">
            <div class="four_zero_four_bg">
              <h1 class="text-center ">Hey, Script Kiddie!</h1>
            </div>
            <div id="lottie-container"></div>
            <div class="contant_box_404">
              <h3 class="h2">
                Stop Playing with the Inspect
              </h3>
              <p>Else You're Dead</p>

              <router-link to="/" class="link_404">Go to Home Baby</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import lottie from 'lottie-web';
import animationData from '../assets/you-r-dead.json';
export default {
  name: "InspectWatcher",
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