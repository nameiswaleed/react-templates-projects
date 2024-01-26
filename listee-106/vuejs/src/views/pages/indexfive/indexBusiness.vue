<template>
    <!-- Business Section -->
		<section class="business-section">
		    <div class="container">
				<div class="row">
					<div class="col-md-12 text-center">
						<div class="section-heading heading-five aos" data-aos="fade-up">
							<h2>Trending Business Places</h2>
						</div>	
					</div>
				</div>
				<div class="owl-carousel business-slider grid-view">	
					<Carousel :wrap-around="true" :settings="settings" :breakpoints="breakpoints">
					<Slide v-for="item in IndexBusiness" :key="item.id">
						<div class="card business-card aos" data-aos="fade-up" >
							<div class="blog-widget">
								<div class="blog-img">
									<router-link to="/service-details">
										<img :src="require(`../../../assets/img/business/${item.image}`)" class="img-fluid" alt="blog-img">
									</router-link>
									<div class="fav-item  justify-content-end">
										<a href="javascript:void(0)" class="fav-icon">
											<i class="feather-heart"></i>
										</a>										
									</div>	
								</div>
								<div class="bloglist-content">
									<div class="card-body">
										<span class="Featured-text">Featured</span>
										<div class="grid-author">
											<img :src="require(`../../../assets/img/profiles/avatar-03.jpg`)" alt="author">
										</div>					
										<div class="blogfeaturelink">									
											<div class="blog-features">
											<a href="javascript:void(0)"><span>  <i class="fa-regular fa-circle-stop"></i> {{item.shop}}</span></a>
											</div>																	  
											<div class="blog-author text-end"> 
												<span><i class="feather-map-pin"></i> {{item.location}}</span>
											</div>
										</div> 
										<h6><router-link to="/service-details">{{item.title}}</router-link></h6>
										<div class="amount-details">
											<div class="amount">
												<span class="validrate">{{ item.offer }}</span>
												<span>{{ item.price }}</span>
											</div>
											<div class="ratings">
												<span>4.7</span> (50)
											</div>														
										</div>	
									</div>	
								</div>			 
							</div>
						</div>
					</Slide>
						<template #addons>
							<Navigation />
						</template>
					</Carousel>
				</div>			   
			</div>		
		</section>		
		<!-- /Business Section -->
		
		<!-- Cities Section -->
		<section class="feature-section">
		    <div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="section-heading heading-five aos" data-aos="fade-up">
							<h2>Featured Cities</h2>
						</div>	
					</div>
				</div>
				<div class="row">
					<div class="col-md-3" v-for="item in IndexCities" :key="item.id">
						<div class="city-box aos" data-aos="fade-up">
							<div class="citi-img">
								<a href="#">
									<img :src="require(`../../../assets/img/city/${item.image}`)" class="img-fluid" alt="img">
								</a>
							</div>
							<div class="city-overlay">
								<div class="city-name">
									<h5>{{ item.loction }}</h5>
									<ul>
										<li><i class="feather-map-pin"></i>{{ item.city }}</li>
										<li><i class="feather-map"></i>{{ item.list }}</li>
									</ul>
								</div>
								<div class="rating d-flex">
									<i class="fas fa-star filled"></i>
									<i class="fas fa-star filled"></i>
									<i class="fas fa-star filled"></i>
									<i class="fas fa-star filled"></i>
									<i class="fas fa-star"></i>
								</div>
							</div> 
						</div> 
					</div>							
				</div>			   
			</div>		
		</section>		
		<!-- /Cities Section -->
</template>

<script>
	import { Carousel, Pagination, Navigation, Slide } from "vue3-carousel";
	import IndexBusiness from '../../../assets/json/indexBusiness.json'
	import IndexCities from '../../../assets/json/indexCities.json'
	export default {
		data() {
			return {
				IndexBusiness: IndexBusiness,
				IndexCities: IndexCities,
				settings: {
				itemsToShow: 1,
				snapAlign: "center"
				},
				breakpoints: {
					// 700px and up
					700: {
						itemsToShow: 3.3,
						snapAlign: "center"
					},
					// 1024 and up
					1024: {
						itemsToShow: 4.3,
						snapAlign: "start"
					}
				},
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