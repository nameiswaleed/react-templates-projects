<template>
    <!-- CTA Section -->
		<section class="cta-section">
		    <div class="container">
			    <div class="row align-items-center">
				     <div class="col-lg-7">
					      <div class="cta-content">
						      <h3>Earn Cash by <span>Selling</span> <br>
							  or Find Anything you desire							     
							  </h3>
							  <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humo or randomised words which don't look even slightlys</p>
							  <div class="cta-btn">
							     <router-link to="/add-listing" class="btn-primary postad-btn">Post Your Ads</router-link>
							     <router-link to="/listing-grid-sidebar" class="browse-btn">Browse Ads</router-link>							  
							  </div>
						  </div>
					 </div>
				     <div class="col-lg-5">
					       <div class="cta-img">
						        <img src="../../../assets/img/cta-img.png" class="img-fluid" alt="CTA">
						   </div>
					 </div>
				</div>
			</div>
		</section>		
		<!-- /CTA Section -->
		
		
		<!-- Client Testimonilas Section -->
		<section class="testimonials-section">    
		    <div class="row">
		        <div class="col-lg-5">			
				   <div class="testimonial-heading d-flex">
					   <h4> Client <br> Testimonials</h4>
					   <img class="img-fluid" src="../../../assets/img/quotes.png" alt="quotes">
				   </div>
			    </div>
				<div class="col-lg-7">			
				   <div class="rightimg"></div>
			    </div>
			</div>
			<!-- <div class="container"> -->
			    <div class="row">
			        <div class="testimonials-slidersection">
		        	<div class="owl-nav mynav1"></div>
			            <div class="owl-carousel testi-slider">
							<Carousel :wrap-around="true" :settings="settings" :breakpoints="breakpoints">
								<Slide v-for="item in IndexClient" :key="item.id" class="slide">	
									<div class="testimonial-info">
										<div class="testimonialslider-heading d-flex">
											<div class="testi-img">
												<img :src="require(`../../../assets/img/${item.img}`)" class="img-fluid" alt="testi-img" />
											</div>
											<div class="testi-author">
												<h6>{{ item.name }}</h6>
												<p>{{ item.title }}</p>
											</div>
											
										</div>
										<div class="testimonialslider-content">
											<p>Omnis totam molestiae delectus nemo alias nesciunt harum et. Nobis dolorum excepturi quod vel. Sunt est qui ab non dolores repellat rem impedit dolores. Ut ea rerum cum eum. Alias dolores tempore illo accusantium est et voluptatem voluptas</p>
										</div>
									</div>
								</Slide> 
									<template #addons>
										<Navigation />
									</template>
							</Carousel>	
						</div>
					</div>
				</div>
			<!-- </div> -->
		</section>		
		<!-- /Client Testimonilas Section -->
</template>

<script>
	import { Carousel, Pagination, Navigation, Slide } from "vue3-carousel";
	import IndexClient from '../../../assets/json/indexClient.json'
	import "vue3-carousel/dist/carousel.css";


	export default {
		data() {
			return {
				IndexClient: IndexClient,
				settings: {
					itemsToShow: 1,
					snapAlign: "center"
				},
			
				breakpoints: {
					// 700px and up
					700: {
						itemsToShow: 1,
						snapAlign: "center"
					},
					// 1024 and up
					1024: {
						itemsToShow: 2.3,
						snapAlign: "start"
					}
				}
			}
		},
		components: {
		Carousel,
		Slide,
		Pagination,
		Navigation,
	},
	}
</script>

<style>
.slide {
	margin-right: 24px;
}
.carousel__item {
	display: flex;
	justify-content: center;
	align-items: center;	
}
</style>