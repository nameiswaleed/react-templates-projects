<template>
    <!-- Footer Banner -->
		<footer class="section-blk footer-blk footer-three">
			<div class="container">
				<div class="row">
					<div class="col-sm-12">
						<div class="top-foo-widget">
							<div class="help-info">
								<p>Toll Free Customer Care   +(1) 123 456 7890</p>
								<p>Need live support? listee@example.com</p>
							</div>
							<div class="social-info">
								<ul class="d-flex">
									<li>
										<a href="javscript:;"><i class="fab fa-facebook-f"></i></a>
									</li>
									<li>
										<a href="javscript:;"><i class="fab fa-twitter"></i></a>
									</li>
									<li>
										<a href="javscript:;"><i class="fab fa-linkedin-in"></i></a>
									</li>
									<li>
										<a href="javscript:;"><i class="fab fa-youtube"></i></a>
									</li>
								</ul>
							</div>
						</div>
						<div class="middle-foo-widget">
							<div class="row sm-row-gap-23">
								<div class="col-md-7">
									<div class="links-blk">
										<div class="row sm-row-gap-23">
											<div class="col-auto col-md-3">
												<div class="col-style">
													<h5>About us</h5>
													<ul>
														<li>
															<router-link to="/about">Our product</router-link>
														</li>
														<li>
															<a href="javascript:void(0)">Documentation</a>
														</li>
														<li>
															<router-link to="/service-details">Our Services</router-link>
														</li>
														<li>
															<a href="javascript:void(0)">Get Started Us</a>
														</li>
														<li>
															<router-link to="contact">Contact Us</router-link>
														</li>									
													</ul>
												</div>
											</div>
											<div class="col-auto col-md-3">
												<div class="col-style">
													<h5>Quick links</h5>
													<ul>
														<li>
															<a href="javascript:void(0)">Market Place</a>
														</li>
														<li>
															<a href="javascript:void(0)">Documentation</a>
														</li>
														<li>
															<a href="javascript:void(0)">Customers</a>
														</li>
														<li>
															<a href="javascript:void(0)">Carriers</a>
														</li>
														<li>
															<router-link to="/blog-list">Our Blog</router-link>
														</li>									
													</ul>
												</div>
											</div>
											<div class="col-auto col-md-3">
												<div class="col-style">
													<h5>Services</h5>
													<ul>
														<li><router-link to="/service-details">Hotel</router-link></li>
														<li><router-link to="/service-details">Activity Finder</router-link></li>
														<li><router-link to="/service-details">Flight finder</router-link></li>
														<li><router-link to="/service-details">Holiday Rental</router-link></li>
														<li><router-link to="/service-details">Travel Agents</router-link></li>
													</ul>
												</div>
											</div>
											<div class="col-auto col-md-3">
												<div class="col-style">
													<h5>Destinations</h5>
													<ul>
														<li>
															<a href="javascript:void(0)">Manhatten</a>
														</li>
														<li>
															<a href="javascript:void(0)">Los Angeles</a>
														</li>
														<li>
															<a href="javascript:void(0)">Houston</a>
														</li>
														<li>
															<a href="javascript:void(0)">Chicago</a>
														</li>
														<li>
															<a href="javascript:void(0)">Alabama</a>
														</li>	
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="col-md-5">
									<div class="drop-blk">
										<h5>Gallery</h5>
										<ul class="gallery-blk d-flex align-items-center">
											<li v-for="(src, index) in imgs" :key="index" @click="() => showImg(index)">
												<img :src="require(`../../../assets/img/gallery/${src.src}`)" alt="">
											</li>
											<vue-easy-lightbox
												:visible="visible"
												:imgs="img"
												:index="index"
												@hide="handleHide"
											></vue-easy-lightbox>
										</ul>	
										<ul class="navbar-nav selection-list mt-4">
											<li class="nav-item dropdown">
												<div class="lang-select">
													<span class="select-icon"><i class="feather-globe"></i></span>
													<vue-select 
														:class="select"
														:options="India"
														placeholder="India"
													/>
													
												</div>
											</li>
											<li class="nav-item dropdown">
												<div class="lang-select">
													<span class="select-icon"><i class="fa-solid fa-coins"></i></span>
													<vue-select 
														:class="select"
														:options="Currency"
														placeholder="Euro"
													/>		
												</div>	
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div class="btm-foo-widget">
							<div class="copy-info">
								<p class="mb-0">Copyright  © {{ new Date().getFullYear() }} Listee. All rights are reserved</p>          
							</div>
							<div class="payment-info">
								<ul class="d-flex">
									<li>
										<img class="img-fluid" src="../../../assets/img/icons/visa-01.svg" alt="visa">
									</li>
									<li>
										<img class="img-fluid" src="../../../assets/img/icons/master-01.svg" alt="paycard">
									</li>
									<li>
										<img class="img-fluid" src="../../../assets/img/icons/discover.svg" alt="spay">
									</li>
									<li>
										<img class="img-fluid" src="../../../assets/img/icons/stripe.svg" alt="spay">
									</li>
								</ul>
							</div>
						</div>
					</div>			
				</div>
			</div>
		</footer>
</template>

<script>
    export default {
        data(){
            return{
                India: ["India", "UK", "Japan"],
                Currency: ["Euro", "USD"],
				visible: false,
				index: 0, // default: 0
				imgs: [
						{
						src: "galleryimg-1.jpg",
						},
						{
						src: "galleryimg-2.jpg",
						},
						{
						src: "galleryimg-9.jpg"
						},
						{
						src: "galleryimg-10.jpg"
						}
					],
					img: [
						{
						src: "https://picsum.photos/785/501",
						},
						{
						src: "https://picsum.photos/785/502",
						},
						{
						src: "https://picsum.photos/785/503",
						},
						{
						src: "https://picsum.photos/785/504",
						}
					],
            };
        },
		methods: {
			showImg(index) {
			this.index = index;
			this.visible = true;
			},
			handleHide() {
			this.visible = false;
		},
    },
}
</script>