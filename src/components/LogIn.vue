<template>
    <div class="outer-container">
        <div class="container">
            <div class="card">
                <img class="logo" src="../assets/clipboard.png">
                <div class="right-container">
                    <h1>{{ UserMsg }}</h1>
                    <img class="userlogo" :src=imgSrc @click="toggleImage">
                    <div class="register">
                        <form @submit.prevent=onSubmit>
                            <input class="inp" type="text" v-model="email" required
                                placeholder="Enter your University Email" />
                            <p v-if="errorEmail.length != 0" class="error">{{ errorEmail }}</p>
                            <input class="inp" type="password" v-model="password" placeholder="Enter Password" />
                            <input id="loginBtn" type="submit" value="Login" />
                        </form>
                        <p v-if="errorLogin.length != 0" class="error">{{ errorLogin }}</p>
                    </div>
                    <router-link to="/ForgetPassword" class="fgpass">Forget password ?</router-link>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'LogIn',
    data() {
        return {
            email: '',
            password: '',
            errorEmail: '',
            errorLogin: '',
            UserMsg: 'Login | Student',
            imgSrc: '../assets/stud.png',
            isAdmin: false
        }
    },
    methods: {
        toggleImage() {
            this.isAdmin = !this.isAdmin;
            this.UserMsg = this.isAdmin ? 'Login | Faculty' : 'Login | Student'
            this.imgSrc=this.isAdmin ? '../assets/admin.png' : '../assets/stud.png'

        },
        async login() {
            try {
                // let uri="http://13.127.127.139/getStudDetails";
                //let uri="api/getStudDetails";
                //temp url
                //  let uri="http://13.235.176.78:4202/users";
                let uri = "api/users"
                const result = await axios.get(uri,
                    // { params: { studEmail: this.email, password: this.password } }
                )
                console.log(result.data)
                // Check if email and password match with the data on the server
                const matchUser = result.data.some(obj => obj.email === this.email)
                console.log(matchUser);
                if (matchUser) {
                    const matchPass = result.data.some(obj => obj.password === this.password)
                    console.log(matchPass);
                    if (matchPass) {
                        localStorage.setItem("user-info", JSON.stringify({ "email": this.email }))
                        this.$router.push({ name: 'HomeScreen' })
                    }
                    else {
                        // Display error message
                        this.errorLogin = 'Invalid password.'
                    }
                }
                else {
                    this.errorLogin = 'User not Found'
                }

            } catch (error) {
                console.error(error)
                // Display error message
                this.errorLogin = 'Error logging in. Please try again later.'
            }
        },
        onSubmit(event) {
            console.log(event)
            this.login()
        },
        validateEmail(email) {
            if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                this.errorEmail = ""
                return
            } else {
                this.errorEmail = "Enter a valid Email"
            }
        },
    },
    
    watch: {
        email(value) {
            this.email = value;
            this.validateEmail(value);
        }
    },
    mounted() {
        let user = localStorage.getItem('user-info');
        if (user) {
            this.$router.push({ name: 'HomeScreen' })
        }
    }
}
</script>
<style scoped>
@keyframes gradient {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}

.outer-container {
    height: 100vh;
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
    height: 100vh;
    /* background: linear-gradient(to right, #333333, #dd1818); */
}

h1 {
    margin-top: 0;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 4dvh;
}

.card {
    border: rgba(255, 255, 255, 0.3);
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin: 20px auto;
    max-width: 80%;
    padding: 20px;
    display: flex;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.3);
}

.logo {
    height: 40vh;
    margin-top: 40px;
    margin-bottom: 40px;
    margin-right: 20px;
}

.inp {
    width: 350px;
    height: 45px;
    display: block;
    margin-top: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid #8B0304;
    border-radius: 15px;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.5);
}

.inp:focus {
    outline: 1px solid #0008ff;
}

#loginBtn {
    width: 125px;
    height: 45px;
    margin-top: 30px;
    background: #8B0304;
    color: white;
    font-size: large;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    border-color: #8B0304;
    border-radius: 15px;
}

#loginBtn :hover {
    background: #f81d1d;
}

.error {
    color: red;
    font-size: small;
}

.container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}

.right-container {
    display: flex;
    flex-direction: column;
}

.fgpass {
    font-size: 10px;
    margin-top: 10px;
    text-decoration: none;
}</style>