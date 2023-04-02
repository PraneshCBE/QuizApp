<template>
    <h1>Welcome to the Home Page</h1>
</template>
<script>
    export default{
        name: 'HomeScreen',
        mounted()
    {
        let user= localStorage.getItem('user-info');
        if(!user)
        {
            this.$router.push({name:'LogIn'})
        }
    }
    }
    
</script>