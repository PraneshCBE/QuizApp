<template>
    <div class="box1">
        <p class="fp">Forget Password</p>
        <input class ="ipmail" type="text" v-model="email" placeholder="Enter your Email-Id">
        <p v-if="errorEmail.length!=0" class="errormsg">{{errorEmail}}</p>
        <div>
            <input class="resetp" type="submit" value="Reset Password" v-on:click="sent">
        </div>
        
    </div>
</template>

<script>
export default({
    name:'ForgetPassword',
    data(){
        return{
            email:'',
            errorEmail:''
        };
    },
    methods:{

        sent(){
            //  this.errorEmail="Link sent"
             alert('Reset link sent to the Email');
             this.$router.replace({ name: 'LogIn' })
        },
        validateEmail(email) {
            if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                this.errorEmail=""
             return
            } else {
                 this.errorEmail="Enter a valid Email"
            }
        },
    },
    watch: {
            email(value){
            this.email = value;
            this.validateEmail(value);
            }
        },
})
</script>

<style>
.fp{
    font-size: 30px;
    margin-top: 100px;
}
.ipmail{
    width: 300px;
    height: 40px;
    border-radius: 15px;
    text-align: center;

}
.resetp{
    margin-top: 20px;
    height: 30px;
    width: 150px;
    font-size: 10px;
    border-radius: 10px;
}
.errormsg{
    font-size: 10px;
    color: red;
}
.box1{
    border: 2px;
    border-color: black;
    border-radius: 20px;
}
</style>