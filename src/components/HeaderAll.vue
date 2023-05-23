<template>
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk&family=Nunito:wght@500&family=Poppins&display=swap" rel="stylesheet"> 
    </head>
<nav>
  <div class="nav">
    <div class = "nav-items">
      <router-link to="/" class="logo"><img src="../assets/ll.png"></router-link>
        <router-link to="/dashboard" class="item">Go to Dashboard</router-link>
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
<style scoped>
*{
  font-family: 'Hanken Grotesk', sans-serif;
  font-family: 'Nunito', sans-serif;
  font-family: 'Poppins', sans-serif;
}
.nav{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #f2f2f200;
  height: 80px;
  width: 100%;
  padding: 0 50px;
  box-sizing: border-box;
  background-color: lightsteelblue;
}
.logo{
  height: 50px;
  width: 50px;
  margin-right: 20px;
}
.nav-items{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.item{
  text-decoration: none;
  color: black;
  font-size: 20px;
  font-weight: bold;
  margin-right: 20px;
}
.item:hover{
  color: #002aff;
}

</style>
