<template>
    <!-- Profile Content -->
    <div class="dashboard-content">		
			<div class="container">
				<div class="">			        
					<ul class="dashborad-menus">
						<li>
							<router-link to="dashboard">
								<i class="feather-grid"></i> <span>Dashboard</span>
                            </router-link>
						</li>
						<li  class="active">
							<router-link to="profile">
								<i class="fa-solid fa-user"></i> <span>Profile</span>
                            </router-link>
						</li>
						<li>
							<router-link to="my-listing">
								<i class="feather-list"></i> <span>My Listing</span>
                            </router-link>
						</li>
						<li>
							<router-link to="bookmarks">
								<i class="fas fa-solid fa-heart"></i> <span>Bookmarks</span>
                            </router-link>
						</li>
						<li>
							<router-link to="messages">
								<i class="fa-solid fa-comment-dots"></i> <span>Messages</span>
							</router-link>
						</li>
						<li>
							<router-link to="reviews">
								<i class="fas fa-solid fa-star"></i> <span>Reviews</span>
                            </router-link>
						</li>
						<li>
							<router-link to="login">
								<i class="fas fa-light fa-circle-arrow-left"></i> <span>Logout</span>
                            </router-link>
						</li>
					</ul>											
				</div>
				<div class="profile-content">
				     <div class="row dashboard-info">
					    <div class="col-lg-9">
						    <div class="card dash-cards">
								<div class="card-header">
									<h4>Profile Details</h4>																
								</div>
                                <div class="card-body">
								    <div class="profile-photo">
									    <div class="profile-img">
											<div class="settings-upload-img">
												<img :src="imageUrl" alt="profile">
											</div>										    
											<div class="settings-upload-btn">
												<input type="file" accept="image/*" name="image" class="hide-input image-upload" @change="onFileSelected">
												<label for="file" class="file-upload">Upload New photo</label>												
											</div>	
											<span>Max file size: 10 MB</span>
										</div>                                        									
                                        <a href="javascript:void(0)" class="profile-img-del"><i class="feather-trash-2"></i></a>										
									</div>
									<div class="profile-form">
									     <b-form>
										    <div class="form-group">
											    <label class="col-form-label">Your Full Name</label>
										        <div class="pass-group group-img">
													<span class="lock-icon"><i class="feather-user"></i></span>
													<b-form-input type="text" class="form-control" placeholder="John Doe" />													
												</div>
										    </div> 
											<div class="row">
											     <div class="col-lg-6 col-md-6">
												    <div class="form-group">
														<label class="col-form-label">Phone Number</label>
														<div class="pass-group group-img">
															<span class="lock-icon"><i class="feather-phone-call"></i></span>
															<b-form-input type="tel" class="form-control" placeholder="+44 215346 1223" />													
														</div>
													</div>
												 </div>
												 <div class="col-lg-6 col-md-6">
												    <div class="form-group">
														<label class="col-form-label">Email Address</label>
														<div class="group-img">
															<i class="feather-mail"></i>
															<b-form-input type="text" class="form-control" placeholder="johndoe@email.com" />
														</div>
													</div>
												 </div>											
											</div>
											<div class="form-group">
											    <label class="col-form-label">Notes</label>
												<div class="pass-group group-img">
													<textarea rows="4" class="form-control">Mauris vestibulum lorem a condimentum vulputate. Integer vitae turpis turpis. Cras at tincidunt urna. Aenean leo justo, congue et felis a, elementum rutrum felis. Fusce rutrum ipsum eu pretium faucibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean leo justo, congue et felis a.  Aenean leo justo, congue et felis a.	</textarea>												
												</div>
											</div>
											<div class="row socialmedia-info">
											     <div class="col-lg-6 col-md-6">
												    <div class="form-group">
														<label class="col-form-label">Facebook</label>
														<div class="pass-group group-img">
															<span class="lock-icon"><i class="fab fa-facebook-f"></i></span>
															<b-form-input type="text" class="form-control" placeholder="https://www.facebook.com/" />												
														</div>
													</div>
												 </div>
												 <div class="col-lg-6 col-md-6">
												    <div class="form-group">
														<label class="col-form-label">Twitter</label>
														<div class="pass-group group-img">
															<span class="lock-icon"><i class="fab fa-twitter"></i></span>
															<b-form-input type="text" class="form-control" placeholder="https://twitter.com/" />												
														</div>
													</div>
												 </div>											
											</div>
											<div class="row socialmedia-info">
											     <div class="col-lg-6 col-md-6">
												    <div class="form-group formlast-input">
														<label class="col-form-label">Google+</label>
														<div class="pass-group group-img">
															<span class="lock-icon"><i class="fa-brands fa-google-plus-g"></i></span>
															<b-form-input type="text" class="form-control" placeholder="https://www.google.com/" />												
														</div>
													</div>
												 </div>
												 <div class="col-lg-6 col-md-6">
												    <div class="form-group formlast-input">
														<label class="col-form-label">Instagram</label>
														<div class="pass-group group-img">
															<span class="lock-icon"><i class="fab fa-instagram"></i></span>
															<b-form-input type="text" class="form-control" placeholder="https://www.instagram.com/" />												
														</div>
													</div>
												 </div>											
											</div>										 
										 </b-form>
								    </div> 
								</div>								
							</div>	
						</div>
                        <div class="col-lg-3">
						    <div class="profile-sidebar">
							    <div class="card">
								    <div class="card-header">
									    <h4>Change Password</h4>
									</div>	
                                    <div class="card-body">
                                       <b-form>
                                            <div class="form-group">
											    <label class="col-form-label">Current Password</label>
										        <div class="pass-group group-img">
													<span class="lock-icon"><i class="feather-lock"></i></span>
													<b-form-input type="password" class="form-control pass-input" placeholder="Password" />													
												</div>
										    </div>
                                            <div class="form-group">
											    <label class="col-form-label">New Password</label>
										        <div class="pass-group group-img">
													<span class="lock-icon"><i class="feather-lock"></i></span>
													<b-form-input
														v-if="showPassword"
														type="text"
														class="form-control pass-input"
														v-model="password"
														placeholder=".............."
													/>
													<b-form-input v-else type="password"
														class="form-control pass-input"
														placeholder=".............." v-model="password" />
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
                                            <div class="form-group">
											    <label class="col-form-label">Confirm New Password</label>
										        <div class="pass-group group-img">
													<span class="lock-icon"><i class="feather-lock"></i></span>
													<b-form-input
														v-if="showPassword2"
														type="text"
														class="form-control pass-input"
														v-model="password2"
														placeholder=".............."
													/>
													<b-form-input v-else type="password"
														class="form-control pass-input"
														placeholder=".............." v-model="password2" />
													<span
														class="toggle-password"
														@click="toggleShow1"
														:class="{
														'feather-eye': showPassword2,
														'feather-eye-off': !showPassword2,
														}"
													></span>
												</div>
										    </div>	
                                            <b-button variant="primary" type="submit"> Change Password</b-button>											
									   </b-form>								
									</div>  									
								</div>							
							</div>
						</div>							
					 </div>				
				</div>
			</div>		
		</div>		
		<!-- /Profile Content -->
</template>

<script>
const image = require(`@/assets/img/profile-img.jpg`)
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
			 imageUrl: image
		};
	},
	computed: {
		buttonLabel() {
			return this.showPassword ? "Hide" : "Show";
		},
		buttonLabel1() {
			return this.showPassword2 ? "Hide" : "Show";
		},
	},
	methods: {
		toggleShow() {
		 	this.showPassword = !this.showPassword;
		},
		toggleShow1() {
		 	this.showPassword2 = !this.showPassword2;
		},
		onFileSelected(event) {
		const file = event.target.files[0]
		const reader = new FileReader()

		reader.onload = (event) => {
			this.imageUrl = event.target.result
		}

		reader.readAsDataURL(file)
		}
	},
};
</script>
	