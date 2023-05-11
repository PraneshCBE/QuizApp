<template>
    <HeaderAll></HeaderAll>
    <router-link to="/QuizModule">Quiz1</router-link>
</template>
<script>
import HeaderAll from './HeaderAll.vue';
// import QuizModule from './QuizModule.vue';
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