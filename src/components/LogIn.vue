<template>
    <head>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link
            href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk&family=Nunito:wght@500&family=Poppins&display=swap"
            rel="stylesheet">
    </head>
    <div class="outer-container">
        <div class="container">
            <div class="card">
                <kinesis-container>
                    <KinesisElement :strength="20">
                        <img class="ui center floated small logo image" src="../assets/ll.png">
                    </KinesisElement>
                </kinesis-container>
                <div class="right-container" style="margin-top: 5vh;padding-left: 2vh;">

                    <h1 id="select" style="padding-left: 5vh;">

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
                            <input class="inp" type="text" v-model="rollno" required
                                placeholder="Enter your University Email" />
                            <p v-if="errorEmail.length != 0" class="error">{{ errorEmail }}</p>
                            <input class="inp" type="password" v-model="password" placeholder="Enter Password" />
                            <select class="inp" v-model="semester" required>
                                <option value="" disabled selected>Semester</option>
                                <option value="1">Sem 1</option>
                                <option value="2">Sem 2</option>
                                <option value="3">Sem 3</option>
                                <option value="4">Sem 4</option>
                                <option value="5">Sem 5</option>
                                <option value="6">Sem 6</option>
                                <option value="7">Sem 7</option>
                                <option value="8">Sem 8</option>
                            </select>
                            <input id="loginBtn" type="submit" value="Login" :disabled="loading" />
                        </form>
                        <div v-if="loading" class="loading-indicator">
                            <p class="error">Loading....</p>
                            <!-- Display a loading spinner or any desired loading animation here -->
                        </div>
                        <p v-if="errorLogin.length != 0" class="error">{{ errorLogin }}</p>
                    </div>
                    <!-- <router-link to="/ForgetPassword" class="fgpass">Forget password ?</router-link> -->
                    <br>
                    <p v-on:click="pop" style="padding-left: 2vh;">Forget Password</p>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
import { KinesisContainer, KinesisElement } from "vue-kinesis";
import axios from 'axios'
import swal from 'sweetalert2'
import 'animate.css';
import CryptoJS from 'crypto-js'
export default {
    name: 'LogIn',
    data() {
        return {
            rollno: '',
            password: '',
            errorEmail: '',
            errorLogin: '',
            UserMsg: 'Student',
            imgSrc: "../assets/logo.png",
            isAdmin: false,
            semester: '',
            loading: false
        }
    },
    components: {
        KinesisContainer,
        KinesisElement,
    },
    methods: {

        pop() {

            const url = this.$url + "/student/reset?username="
            swal.fire(
                {
                    title: "Reset Password",
                    text: "Enter your Roll Number",
                    showCloseButton: true,
                    padding: '2em',
                    confirmButtonText: 'Reset',
                    input: 'text',
                    inputPlaceholder: 'Roll Number',
                    showLoaderOnConfirm: true,
                    preConfirm: (rollno) => {
                        let tempurl = url.concat(rollno)
                        console.log(tempurl);
                        return fetch(tempurl)
                            .then(response => {
                                if (!response.ok) {
                                    throw new Error(response.statusText)
                                }
                                console.log(response.body.getReader)
                                return response
                            })
                            .catch(error => {
                                swal.showValidationMessage(
                                    `Request failed: ${error}`
                                )
                            })
                    },
                    allowOutsideClick: () => !swal.isLoading()

                }
            ).then((result) => {
                if (result.isConfirmed) {
                    swal.fire('Reset Link sent to the valid Email', '', 'success',)
                }
                else if (result.isDenied) {
                    swal.fire('Failed', '', 'info')
                }
            })
        },
        toggleImage() {
            this.isAdmin = !this.isAdmin;
            this.UserMsg = this.isAdmin ? 'Faculty  ' : 'Student'
            this.imgSrc = this.isAdmin ? '../assets/admin1.png' : '../assets/stud1.png'

        },
        
        async login() {
            this.loading = true;
            console.log(this.$url)
            if (this.isAdmin) {
                //Admin Http request
                this.$router.push('/FacultyDashboard')
            }
            else {
                //user http request
                var result = '';
                let uri = this.$url + "/student/login"
                console.log(uri)
                // let uri="http://localhost:8080/student/login"
                let password=CryptoJS.SHA256(this.password).toString()
                console.log(password)
                let data = {
                    username: (this.rollno).toUpperCase(),
                    pass: password,
                    semester: this.semester
                }
                console.log(this.semester)
                try {
                    result = await axios.post(uri, data)
                    console.log("result")
                    console.log(result);

                    if (result.status == 200) {
                        console.log("Login Successfull")
                        const encryptedData=this.$globalmethods.encryptData(JSON.stringify({ "rollno": this.rollno,"sem":this.semester,"st": result.data.secretToken,"name":result.data.name,"dp":result.data.dp }))
                        localStorage.setItem("user-info",JSON.stringify(encryptedData))
                        this.$router.push({ name: 'HomeScreen' })
                    }
                    else {
                        console.error(result)
                        this.errorLogin = "Login Failed!, Try Again later";
                    }
                } catch (err) {
                    if (!err.response) {
                        console.error(err)
                        this.errorLogin = "Login Failed!, Try Again";
                    }
                    else if (err.response.status == 404) {
                        console.error(err)
                        this.errorLogin = "Invalid Credentials!";
                    }
                    else {
                        console.error(err)
                        this.errorLogin = "Login Failed!, Try Again later";
                    }
                } finally {
                    this.loading = false; // Set loading flag back to false when the request is complete
                }


            }
        },
        onSubmit(event) {
            console.log(event)
            this.login()
        },
        validateEmail(rollno) {
            if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(rollno)) {
                this.errorEmail = ""
                return
            } else {
                this.errorEmail = "Enter a valid Email"
            }
        },
    },

    watch: {
        rollno(value) {
            this.rollno = value;
            //this.validateEmail(value);
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
* {
    font-family: 'Hanken Grotesk', sans-serif;
    font-family: 'Nunito', sans-serif;
    font-family: 'Poppins', sans-serif;
}

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

.oc {
    background: #0f0c29;
    /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29);
    /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #24243e, #302b63, #0f0c29);
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    height: 100vh;

}

.outer-container {
    height: 100vh;
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
}

.rp {
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
    padding-right: 7vh;
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
    height: 3.7vh;
    width: 3.7vh;
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

.register {
    margin-left: 2.5vh;
}

.inp {
    width: 30vh;
    height: 5vh;
    display: block;
    margin-top: 3vh;
    margin-right: auto;
    margin-left: auto;
    font-size: 1.5vh;
    border: 1px solid #1835b9;
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
    background: #1835b9;
    color: white;
    font-size: large;
    font-size: 2vh;
    /* font-family: Verdana, Geneva, Tahoma, sans-serif; */
    /* border-color: #8B0304; */
    border-radius: 2vh;
}

#loginBtn :hover {
    background: #f81d1d;
}

.error {
    color: red;
    font-size: small;
    padding-top: 2vh;
}

.container {
    float: center;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
  transform: translate(-50%, -50%);
}

.right-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

.rr {
    border-radius: 40px;
}
</style>