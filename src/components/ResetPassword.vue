<template>
	<br><br><br><br><br><br><br><br>
	<div class="center1 ui center aligned grid">
		<div class="column">
			<form class="ui form">
				<div class="ui segment">
					<h1><img src="../assets/ll.png" class="tiny ui centered image"></h1>
					<h2>Reset Password</h2>
					<div class="ui center aligned basic segment">
						<form class="ui form" @submit.prevent=savePass>
							<div class="field">
								<div class="ui left input">
									<input type="password" name="password" placeholder="New  Password">
								</div>
							</div>
							<div class="field">
								<div class="ui left input">
									<input type="password" name="password" placeholder="Confirm Password" v-model="newpass">
								</div>
							</div>
							<button class="ui primary fluid button" type="submit" >Submit</button>
						</form>
						<div class="ui divider"></div>
					</div>
				</div>
			</form>
		</div>
	</div>
</template>
<script>
import axios from 'axios'
import swal from 'sweetalert2'
export default {
	name: 'ResetPassword',
	data() {
		return {
			resetToken: '',
			newpass:''
		}

	},
	methods: {
		async savePass() {
			console.log(this.newpass)
			try {
				var body = {
					resetToken: (this.$route.query.resetToken).toString,
					pass: this.newpass
				}
				const result = await axios.post(this.$url + "/student/resetpass",body)
				console.log(result)	 
				if (result.status==200)
				{
					swal.fire('Password Update Successfull', '', 'success',)
					this.$router.replace({name:'LogIn'})
				}
					
			}catch(err){
				//Error handling if anythimg wrong in saving the new password
				console.log(err.response.status)
				if(err.response.status==400)
				{swal.fire('Invalid Reset Link', '', 'info',)}
				else if(err.response.status==408)
				{swal.fire('Token Expired', '', 'info',)}
				else
				{swal.fire('500 Internal Server Error', '', 'info',)}
				
			}
			
		}
	},
	mounted() {
		console.log(this.$route.query.resetToken)
	}
}
</script>
<style scoped>
body>.grid {
	height: 100%;
}

/* .center1{
	display: grid;
    place-items: center;
	height: 600px;
} */
.column {
	max-width: 360px;
}
</style>