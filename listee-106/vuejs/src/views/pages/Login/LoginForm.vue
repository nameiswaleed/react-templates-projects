<template>
    <div class="login-content">
			<div class="container">
				<div class="row">
					<div class="col-md-6 col-lg-5 mx-auto">
						<div class="login-wrap">
							
							<div class="login-header">
								<h3>Welcome Back</h3>
								<p>Please Enter your Details</p>								
							</div>
							
							<!-- Login Form -->
							<b-form action="/dashboard">
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
								<div class="row">
									<div class="col-md-6 col-sm-6">
										<label class="custom_check">
											<input type="checkbox" name="rememberme" class="rememberme">
											<span class="checkmark"></span>Remember Me
										</label>
									</div>									
									<div class="col-md-6 col-sm-6">
										<div class="text-md-end">
											<router-link class="forgot-link" to="forgot-password">Forgot password?</router-link>
										</div>
									</div>									
								</div>
								<b-button variant="primary w-100 login-btn" type="submit" to="/dashboard">Sign in</b-button>
								<div class="register-link text-center">
									<p>No account yet? <router-link class="forgot-link" to="/signup">Signup</router-link></p>
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
};
</script>