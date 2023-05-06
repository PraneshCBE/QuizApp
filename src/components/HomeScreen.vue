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
        let user = localStorage.getItem('user-info');
        let admin = localStorage.getItem('role');
        if (user && admin) {
            //admin JWT verification and if it is not valid then we should route to Login 
        }
        else if (user && !admin) {
            //User JWT verification and if it is not valid then we should route to Login  
        }
        else{this.$router.push({ name: 'LogIn' })}

    }
    }
    
</script>
<style scoped>
    .dia {
        width: 100%;
        height: auto;
        filter: contrast(1.5) brightness(1.2) saturate(1.2);
    }
</style>