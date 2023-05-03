<template>
    <div class="container">
    <img class="logo" src="../assets/clipboard.png">
    <div class="right-container">
    <h1>Log in</h1>
    <div class="register">
        <form @submit.prevent=onSubmit>
        <input  class ="inp" type="text" v-model="email"  required placeholder="Enter your University Email"/>
        <p v-if="errorEmail.length!=0" class="error">{{ errorEmail }}</p>
        <input class = "inp" type="password" v-model="password" placeholder="Enter Password"/>
        <input id ="loginBtn" type="submit" value="Log-in"/>
    </form>
    <p v-if="errorLogin.length!=0" class="error">{{ errorLogin }}</p>
    </div>
</div>
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
            password:'',
            errorEmail:'',
            errorLogin:''
        }
    },
    methods:{
        async login(){
            try {
               // let uri="http://13.127.127.139/getStudDetails";
             //let uri="api/getStudDetails";
             //temp url
            //  let uri="http://13.235.176.78:4202/users";
            let uri="api/users"
        const result = await axios.get(uri,
            // { params: { studEmail: this.email, password: this.password } }
        )
        console.log(result.data)
        // Check if email and password match with the data on the server
        const matchUser = result.data.some(obj => obj.email === this.email)
        console.log(matchUser);
        if (matchUser)
        {
            const matchPass=result.data.some(obj => obj.password === this.password)
            console.log(matchPass);
            if (matchPass)
            {
                localStorage.setItem("user-info", JSON.stringify({ "email": this.email }))
                this.$router.push({ name: 'HomeScreen' })
            }
            else {
            // Display error message
            this.errorLogin='Invalid password.'
            }
        }
        else{
            this.errorLogin='User not Found'
        }
        
    } catch (error) {
        console.error(error)
        // Display error message
        this.errorLogin='Error logging in. Please try again later.'
    }
        },
        onSubmit(event)
        {
            console.log(event)
            this.login()
        },
        validateEmail(email) {
            if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                this.errorEmail=""
             return
            } else {
                 this.errorEmail="Enter a proper Mail Id"
            }
        },
    },
    watch: {
            email(value){
            this.email = value;
            this.validateEmail(value);
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
<style scoped>
.logo{
  height: 40vh;
  margin-top: 50px;
  margin-right: 20px;
}
.inp{
    width: 300px;
    height: 40px;
    display: block;
    margin-top: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid #8B0304;
    text-align: center;
}
#loginBtn{
    width: 320px;
    height: 40px;
    margin-top: 30px;
    background: #8B0304;
    color: white;
    border-color: #8B0304;
}
.error{
    color: red;
    font-size: small;
}
.container{
    display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.right-container{
    display: flex;
  flex-direction: column;
}

</style>