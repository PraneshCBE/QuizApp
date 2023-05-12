<template> 
<div class="ui middle aligned center aligned grid">
	<div class="column">
		<form class="ui form">
			<div class="ui segment">
				<h1><img src="../assets/ll.png" class="ui centered image"></h1>
			<h2>Reset Password</h2>
				<div class="ui center aligned basic segment">
					<form class="ui form">
						<div class="field">
							<div class="ui left input">
								<input type="password" name="password" placeholder="New  Password">
							</div>
						</div>
						<div class="field">
							<div class="ui left input">
								<input type="password" name="password" placeholder="Confirm Password">
							</div>
						</div>
						<button class="ui primary fluid button" type="submit">Submit</button>
					</form>
					<div class="ui divider"></div>
				</div>
			</div>
		</form>
	</div>
</div>

</template>
<script>
export default{
    name:'ResetPassword',
    data()
    {
        return{
            resetToken:''
        }
        
    },
    mounted(){
        console.log(this.$route.query.resetToken)
    }
}
</script>
<style scoped>
    body > .grid {
	height: 100%;
}

.column {
	max-width: 360px;
}
</style>