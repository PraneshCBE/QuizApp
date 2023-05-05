<template>
<div class="page_404">
    <div class="container">
      <div class="row"> 
      <div class="col-sm-12 ">
      <div class="col-sm-10 col-sm-offset-1  text-center">
      <div class="four_zero_four_bg">
        <h1 class="text-center ">404</h1>
      </div>
      
      <div class="contant_box_404">
      <h3 class="h2">
      Look like you're lost
      </h3>
      
      <p>the page you are looking for not avaible!</p>
      
      <router-link to="/" class="link_404">Go to Home</router-link>
    </div>
      </div>
      </div>
      </div>
    </div>
  </div>
</template>
<script>
export default{
    name:"SpaceP404"
}
</script>
<style scoped>
.page_404{ padding:40px 0; background:#fff; font-family: 'Arvo', serif;
}

.page_404  img{ width:100%;}

.four_zero_four_bg{
 
    background-image: url('../assets/404.gif');
    height: 50vh; /* Set the height to the full viewport height */
    background-position: center;
    background-repeat: no-repeat; /* Prevent the image from repeating */

 }
 
 
 .four_zero_four_bg h1{
 font-size:80px;
 }
 
  .four_zero_four_bg h3{
       font-size:80px;
       }
       
       .link_404{      
  color: #fff!important;
    padding: 10px 20px;
    background: #39ac31;
    margin: 20px 0;
    display: inline-block;}
  .contant_box_404{ margin-top:-50px;}
</style>