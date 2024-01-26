<template>
    <!-- Login Section -->		
		<div class="login-content">
			<div class="container">
				<div class="row">
					<div class="col-md-6 col-lg-5 mx-auto">
						<div class="login-wrap password-form">
							
							<div class="login-header">
								<h3>Forgot Password</h3>
								<p>Enter your email and we will send you a link to reset your password.</p>								
							</div>
							
							<!-- Login Form -->
							<b-form action="login">
								<div class="form-group group-img">
								    <div class="group-img">
										<i class="feather-mail"></i>
										<b-form-input type="text" class="form-control" placeholder="Email Address" />
									</div>
								</div>
								<b-button variant="primary w-100 login-btn" type="submit">Submit</b-button>									
							</b-form>
							<router-link to="/" class="back-home"><i class="fas fa-regular fa-arrow-left me-1"></i> Back to Home</router-link>		
							<!-- /Login Form -->
											
						</div>
					</div>
				</div>
				
			</div>
		</div>
		<!-- /Login Section -->
</template>

<script>
export default {
	data() {
		return {
			
		}
	},
}
</script>