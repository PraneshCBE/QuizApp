<template>
    <img class="logo" src="../assets/clipboard.png">
    <h1>Log in</h1>
    <div class="register">
        <input type="text" v-model="email" placeholder="Enter your University Email"/>
        <input type="password" v-model="password" placeholder="Enter Password"/>
        <button v-on:click="login">Log in</button>
    </div>
</template>
<script>
import axios from 'axios'
export default{
    name: 'LogIn',
    data()
    {       
        return{
            email:'',
            password:''
        }
    },
    methods:{
        async login(){
            try {
        const result = await axios.get(
            'api/getStudDetails',
            { params: { studEmail: this.email, password: this.password } }
        )
        // Check if email and password match with the data on the server
        const match = result.data.some(obj => obj.studEmail === this.email && obj.password === this.password)
        console.warn(match);
        if (match) {
            localStorage.setItem("user-info", JSON.stringify({ "email": this.email }))
            this.$router.push({ name: 'HomeScreen' })
        } else {
            // Display error message
            alert('Invalid email or password.')
        }
    } catch (error) {
        console.error(error)
        // Display error message
        alert('Error logging in. Please try again later.')
    }
        }
    },
    mounted()
    {
        let user= localStorage.getItem('user-info');
        if(user)
        {
            this.$router.push({name:'HomeScreen'})
        }
    }
}
</script>
<style>
.logo{
  width: 150px;
}
.register input{
    width: 300px;
    height: 40px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid skyblue;
    text-align: center;
}
.register button{
    width: 320px;
    height: 40px;
    background: skyblue;
    color: white;
    border-color: skyblue;
}

</style>