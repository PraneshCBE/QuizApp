<template>
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk&family=Nunito:wght@500&family=Poppins&display=swap" rel="stylesheet"> 
    </head>
<nav>
  <div class="ui segment">
    <div class = "ui secondary two item menu">
        <a class="item">Logo (Lalith idhu nee paathukodaa)</a>
        <a class="item">Perusa Logo vum Name mattum venaa potuko</a>
    </div>

  </div>
</nav>
</template>
<script>
export default{
    name: 'HeaderAll',
    methods:{
        logout()
        {
            localStorage.clear();
            this.$router.push({name: 'LogIn'})

        }
    }
}
</script>
<style>
*{
  font-family: 'Hanken Grotesk', sans-serif;
  font-family: 'Nunito', sans-serif;
  font-family: 'Poppins', sans-serif;
}
</style>
