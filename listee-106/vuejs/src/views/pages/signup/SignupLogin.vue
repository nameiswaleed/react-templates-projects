<template>
    <!-- Login Section -->		
		<div class="login-content">
			<div class="container">
				<div class="row">
					<div class="col-md-6 col-lg-5 mx-auto">
						<div class="login-wrap register-form">
							
							<div class="login-header">
								<h3>Create an Account</h3>
								<p>Lets start with <span>Listee</span></p>								
							</div>
							
							<!-- Login Form -->
							<b-form action="/login">
							    <div class="form-group group-img">
								    <div class="group-img">
										<i class="feather-user"></i>
										<b-form-input type="text" class="form-control" placeholder="Full Name" />
									</div>
								</div>
								<div class="form-group group-img">
								    <div class="group-img">
										<i class="feather-mail"></i>
										<b-form-input type="text" class="form-control" placeholder="Email Address" />
									</div>
								</div>
								<div class="form-group">
									<div class="pass-group group-img">
										<span class="lock-icon"><i class="feather-lock"></i></span>
											<b-form-input
												v-if="showPassword"
												type="text"
												class="form-control pass-input"
												v-model="password"
												placeholder="password"
										/>
										<b-form-input v-else type="password"
											class="form-control pass-input"
											placeholder="password" v-model="password" />
										<span
											class="toggle-password"
											@click="toggleShow"
											:class="{
											'feather-eye': showPassword,
											'feather-eye-off': !showPassword,
											}"
										></span>
									</div>
								</div>
								<b-button variant="primary w-100 login-btn" type="submit">Create Account</b-button>
								<div class="register-link text-center">
									<p>Already have an account? <router-link class="forgot-link" to="/login">Sign In</router-link></p>
								</div>
								<div class="login-or">
									<span class="or-line"></span>
									<span class="span-or">Sign in with Social Media Accounts</span>
								</div>					
								<div class="social-login">
									<a href="#" class="btn btn-apple w-100"><img src="../../../assets/img/apple.svg" class="me-1" alt="img">Sign in with Apple</a>
								</div>
								<div class="social-login">
									<a href="#" class="btn btn-google w-100"><img src="../../../assets/img/google.svg" class="me-1" alt="img">Sign in with Google</a>
								</div>
								<div class="social-login">
									<a href="#" class="btn btn-facebook w-100 mb-0"><img src="../../../assets/img/facebook.svg" class="me-2" alt="img">Continue with Facebook</a>
								</div>								
							</b-form>
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
		 	title: "Profile",
		 	title1: "User Profile",
			showPassword: false,
		 	password: null,
			title01: "Profile",
		 	title2: "User Profile",
			showPassword2: false,
		 	password2: null,
		};
	},
	computed: {
		buttonLabel() {
			return this.showPassword ? "Hide" : "Show";
		},
	},
	methods: {
		toggleShow() {
		 	this.showPassword = !this.showPassword;
		},
	},
	}
</script>