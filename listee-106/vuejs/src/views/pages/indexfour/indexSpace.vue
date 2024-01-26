<template>
    <!-- Space Section -->
		<section class="space-section">
		    <div class="container">
				<div class="space-sec">
					<div class="row">
						<div class="col-md-8">
							<div class="section-heading heading-four aos" data-aos="fade-up">
								<h2>Newest Flexible Office Spaces</h2>
								<p>Search for coworking spaces in our most popular cities</p>
							</div>	
						</div>
						<div class="col-md-4 text-md-end aos" data-aos="fade-up">
							<div class="interset-btn">	
								<router-link to="/service-details" class="btn btn-primary more-btn">View More <i class="feather-arrow-right"></i></router-link>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-lg-3 col-md-6 aos" data-aos="fade-up" v-for="item in IndexSpace" :key="item.id">
							<div class="space-wrap">
								<div class="space-img">
									<router-link to="/service-details">
										<img :src="require(`../../../assets/img/work/${item.img1}`)" class="img-fluid" alt="blog-img">
									</router-link>
									<div class="fav-item">
										<span class="featured-text">Featured</span>
									</div>	
								</div>
								<div class="space-content">
									<div class="space-cat">
										<img :src="require(`../../../assets/img/icons/${item.img2}`)" class="img-fluid" alt="img">
									</div>
									<div class="rating">
										<i class="fas fa-star filled"></i>
										<i class="fas fa-star filled"></i>
										<i class="fas fa-star filled"></i>
										<i class="fas fa-star filled"></i>
										<i class="fas fa-star filled"></i>
										<span>(10)</span>
									</div>
									<h5><router-link to="/service-details">{{ item.title }}</router-link></h5>
									<ul>
										<li class="addr"><i class="feather-map-pin"></i> {{ item.city }}</li>
										<li><a href="javascript:void(0);" class="fav-icon"><i class="fa-solid fa-heart"></i></a></li>
									</ul>
									<div class="price">
										<img :src="require(`../../../assets/img/profiles/${item.img3}`)" class="img-fluid" alt="img">
										<span>{{ item.rate }}</span>
									</div> 
								</div> 
							</div> 
						</div>	 
					</div>			   
				</div>			   
			</div>		
		</section>		
		<!-- /Space Section -->
		
		<!-- City Section -->
		<section class="city-section">
		    <div class="container">
				<div class="city-sec">
					<div class="row">
						<div class="col-md-8">
							<div class="section-heading heading-four aos" data-aos="fade-up">
								<h2>Top Coworking Cities</h2>
								<p>Search for coworking spaces in our most popular cities</p>
							</div>	
						</div>
						<div class="col-md-4 text-md-end aos" data-aos="fade-up">
							<div class="interset-btn">	
								<router-link to="/categories" class="btn btn-primary more-btn">View More <i class="feather-arrow-right"></i></router-link>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-lg-2 col-sm-6 aos" data-aos="fade-up" v-for="item in IndexCity" :key="item.id">
							<div class="city-wrap">
								<div class="city-img">
									<img :src="require(`../../../assets/img/work/${item.img}`)" class="img-fluid" alt="blog-img">										
									<router-link to="/categories">
										<i class="feather-arrow-right"></i>
									</router-link>
								</div>
								<div class="city-content">
									<h5><router-link to="/categories">{{ item.title}}</router-link></h5>
									<p><span>{{ item.count }}</span> {{ item.content }}</p>
								</div> 
							</div> 
						</div>	
					</div>			   
				</div>			   
			</div>	
			
		</section>		
		<!-- /Space Section -->	
</template>

<script>
import IndexSpace from '../../../assets/json/indexSpace.json'
import IndexCity from '../../../assets/json/indexCity.json'
	export default {
		data() {
			return {
				IndexSpace: IndexSpace,
				IndexCity: IndexCity
			};
		},
		mounted() {
			$('.fav-icon').on('click', function () {
			$(this).toggleClass('selected');
		});
		},
	};
</script>