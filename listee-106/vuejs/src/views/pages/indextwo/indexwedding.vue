<template>
    <!-- Banner Section -->
		<section class="banner-section banner-section-two">
			<img src="../../../assets/img/banner.png" class="img-fluid" alt="bannercircle">	
			<div class="home-banner-two">
				<div class="container">		
					<div class="row align-items-center">					    
						<div class="col-lg-8 mx-auto">
							<div class="banner-content aos" data-aos="fade-up">
								 <h1>Find the Perfect Wedding Vendor</h1>
								 <p>Browse the best wedding vendors in your area — from venues and photographers, to wedding planners, caterers, florists and more.</p>
							</div>
						</div>
					</div>
				</div>	
			</div> 
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="search-box">
							<b-form action="/listing-grid-sidebar" class="d-flex"> 
								<div class="searchbox-list">	
									<div class="search-input line">	
										<span class="search-icon">
											<i class="feather-navigation"></i>
										</span>
										<div class="form-group mb-0">	
											<label>Choose Vendor Type</label>
											<vue-select
												:options="Venue"
												placeholder="Wedding Venue"
												/>
										</div>
									</div>
									<div class="search-input">		
										<span class="search-icon">
											<i class="feather-map-pin"></i>
										</span>									
										<div class="form-group mb-0">	
											<label>Location</label>	
											<vue-select
												:options="Location"
												placeholder="Bangalore, India"
												/>
										</div>
									</div>
									<div class="search-input">	
										<span class="search-icon">
											<i class="feather-user"></i>
										</span>										
										<div class="form-group mb-0">	
											<label>Number of Guest</label>	
											<vue-select
												:options="Guest"
												placeholder="10"
												/>
										</div>
									</div>
								</div>
								<div class="search-btn">
									<b-button variant="primary" type="submit">Search</b-button>
								</div>
							</b-form>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- /Banner Section -->
		
		<!-- Popular Search Section -->
		<section class="popular-section">
		    <div class="container">
				
			   <div class="section-heading-two text-center">
			     <div class="row">
			        <div class="col-md-12 aos aos-init aos-animate" data-aos="fade-up">
						<p>Loved One</p>
						<h2>Popular Searches</h2>
						<img src="../../../assets/img/title-img.png" class="img-fluid" alt="title-img">
					</div>		
				 </div>			     
			   </div>	
			   
				<div class="owl-carousel search-slider">
					<Carousel  :wrap-around="true" :settings="settings" :breakpoints="breakpoints">
						<Slide v-for="item in IndexWedding" :key="item.id">
							<div class="carousel__item" >
								<div class="popular-wrap">
									<div class="popular-img">
										<img :src="require(`../../../assets/img/service/${item.image}`)" class="img-fluid" alt="icons">
										<router-link to="/listing-grid-sidebar" class="btn">{{ item.title }}</router-link>
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
		<!-- /Popular Search Section -->
</template>

<script>
import { Carousel, Pagination, Navigation, Slide } from "vue3-carousel";
import IndexWedding from '../../../assets/json/indexWedding.json'
    export default {
        data(){
			return{
				IndexWedding: IndexWedding,
				Venue: ["Wedding Venue", "Reception", "Party Hall"],
				Location: ["Bangalore, India" , "Delhi", "Hyderabad"],
				Guest : ["10", "20", "30"],
				settings: {
				itemsToShow: 1,
				snapAlign: "center"
			},
		
			breakpoints: {
				575: {
					itemsToShow: 2,
					snapAlign: "center"
				},
				// 700px and up
				700: {
					itemsToShow: 3,
					snapAlign: "center"
				},
				// 1024 and up
				1000: {
					itemsToShow: 4,
					snapAlign: "start"
				}
			},
			};
		},
		components: {
			Carousel,
			Slide,
			Pagination,
			Navigation,
		},
		mouted() {},
    };
</script>

<style>
.carousel__item {
	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: 24px;
}
</style>
