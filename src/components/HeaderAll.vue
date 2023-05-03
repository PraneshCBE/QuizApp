<template>
    <div class="nav">
       <a href="#">Home</a> 
       <a href="#">Subjets&Tests</a>
       <a href="#">Profile</a>
       <a v-on:click="logout" href="#">Logout</a>
    </div>
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
    body{
        padding: 0;
        margin: 0;
    }
    .nav{
        background-color: #8B0304;
        overflow: hidden;
        display: flex;
        justify-content:space-around;
    }
    .nav a{
        float: left;
        color: white;
        padding: 14px 16px;
        font-size: 16px;
        text-decoration: none;
        margin-right: 8px;
    }
    .nav a:hover{
        background: white;
        color: #8B0304;
    }
</style>