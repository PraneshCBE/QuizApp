<template>
    <HeaderAll></HeaderAll>
    <h1>Welcome to Amrita Quiz App</h1>
    <img class="dia" src="../assets/amrita_dia.png">
</template>
<script>
import HeaderAll from './HeaderAll.vue';
    export default{
        name: 'HomeScreen',
        components:{
            HeaderAll
        },
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
<style>
    .dia {
        width: 100%;
        height: auto;
        filter: contrast(1.5) brightness(1.2) saturate(1.2);
    }
</style>