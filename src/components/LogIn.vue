<template>
    <div class="outer-container">
        <div class="container">
            <div class="card">
                <kinesis-container>
                    <KinesisElement :strength="20">
                <img class="logo" src="../assets/clipboard.png">
            </KinesisElement>
            </kinesis-container>
                <div class="right-container">

                    <h1 id="select">
                        
                                <span class="usermsg">Login | </span>
                                <Transition name="fade" mode="out-in">
                                    <span class="usermsg1" :key="UserMsg"
                                        style="display: inline-block; width:max-content;height:max-content">{{ UserMsg }}</span>
                                </Transition>
                          
                        <img v-if="!isAdmin" class="userlogo" src="../assets/stud1.png" @click="toggleImage">
                        <img v-else class="userlogo" src="../assets/admin1.png" @click="toggleImage">
                    </h1>

                    <div class="register">
                        <form @submit.prevent=onSubmit>
                            <input class="inp" type="text" v-model="email" required
                                placeholder="Enter your University Email" />
                            <p v-if="errorEmail.length != 0" class="error">{{ errorEmail }}</p>
                            <input class="inp" type="password" v-model="password" placeholder="Enter Password" />
                            <kinesis-container>
                                <kinesis-element :strength="10">
                                    <input id="loginBtn" type="submit" value="Login" />
                                </kinesis-element>
                            </kinesis-container>
                        </form>
                        <p v-if="errorLogin.length != 0" class="error">{{ errorLogin }}</p>
                    </div>
                    <!-- <router-link to="/ForgetPassword" class="fgpass">Forget password ?</router-link> -->
                    <p v-on:click="pop">Forget Password</p>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
import { KinesisContainer, KinesisElement } from "vue-kinesis";
import axios from 'axios'
import swal from 'sweetalert';
export default {
    name: 'LogIn',
    data() {
        return {
            email: '',
            password: '',
            errorEmail: '',
            errorLogin: '',
            UserMsg: 'Student',
            imgSrc: "../assets/logo.png",
            isAdmin: false
        }
    },
    components: {
        KinesisContainer,
        KinesisElement,
    },
    methods: {

        pop(){
            swal(
                {
                    title:"Reset Password",
                    button:"Reset",
                    content:{
                        element:"input",
                        attributes:{
                            placeholder:"Email id",
                            type:"mail"
                        }
                    }
            }).then((value) =>{

                if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
                swal("Reset Link sent Successfully",{icon:"success"});
            } else {
                swal('Enter a valid Email',{icon:"error"});
            }

            });
        },
        toggleImage() {
            this.isAdmin = !this.isAdmin;
            this.UserMsg = this.isAdmin ? 'Faculty  ' : 'Student'
            this.imgSrc = this.isAdmin ? '../assets/admin1.png' : '../assets/stud1.png'

        },

        async login() {
            if (this.isAdmin) {
                //Admin Http request
            }
            else {
                //user http request
                try {




                    // let uri="    ";
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
                            localStorage.setItem("role", this.isAdmin)
                            localStorage.setItem("user-info", JSON.stringify({ "email": this.email, "pwd": this.password }))
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
        let admin = localStorage.getItem('role');
        if (user && admin) {
            //admin JWT verification and if it is valid then we should route to Admin Homescreen (for now just route) 
            this.$router.push({ name: 'HomeScreen' })
        }
        if (user && !admin) {
            //User JWT verification and if it is valid then we should route to User Homescreen (for now just route) 
            this.$router.push({ name: 'HomeScreen' })
        }

    }
}
</script>
<style scoped>
body {
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
}

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
.oc{
background: #0f0c29;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #24243e, #302b63, #0f0c29); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
height: 100vh;

}
.outer-container {
    height: 100vh;
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
}
.rp{
    border: 3px solid black;
    background-color: red;
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 1s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

h1 {
    margin-top: 0;
    margin-bottom: 1rem;
    padding: 0;
    margin-right: 2vh;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 3.5vh;
    display: block;
    align-items: left;
}

.card {
    border: rgba(255, 255, 255, 0.3);
    border-radius: 2vh;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin: 5vh;
    max-width: 80%;
    padding: 3vh;
    display: flex;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.3);
}

@media only screen and (max-width: 767px) {
    .card {
        flex-direction: column;
        align-items: center;
    }
}

.logo {
    height: 40vh;
    margin-top: 2vh;
    margin-bottom: 2vh;
    margin-right: 5vh;
    margin-left: 5vh;
}

.userlogo {
    height: 4vh;
    width: 4vh;
    float: right;
}

.usermsg {
    font-size: 1.5rem;
    margin-left: 1rem;
    flex: 1;
}

.usermsg1 {
    font-size: 1.5rem;
    margin-right: 1rem;
    flex: 1;
}

.inp {
    width: 30vh;
    height: 5vh;
    display: block;
    margin-top: 3vh;
    margin-right: auto;
    margin-left: auto;
    font-size: 1.5vh;
    border: 1px solid #8B0304;
    border-radius: 1vh;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.5);
}

.inp:focus {
    outline: 1px solid #0008ff;
}

#loginBtn {
    width: 12vh;
    height: 5vh;
    margin-top: 3vh;
    background: #8B0304;
    color: white;
    font-size: large;
    font-size: 2vh;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    border-color: #8B0304;
    border-radius: 2vh;
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
}
.swal-button {
  padding: 7px 19px;
  border-radius: 2px;
  background-color: #4962B3;
  font-size: 12px;
  border: 1px solid #3e549a;
  text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.3);
}
</style>