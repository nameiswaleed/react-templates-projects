<template>
    <!-- Cowork Section -->
		<section class="cowork-section">
		    <div class="container">
				<div class="cowork-sec">
					<div class="row">
						<div class="col-md-8">
							<div class="section-heading heading-four aos" data-aos="fade-up">
								<h2>What Are You interested in?</h2>
								<p>Lorem Ipsum is simply dummy text of the printing</p>
							</div>	
						</div>
						<div class="col-md-4 text-md-end aos" data-aos="fade-up">
							<div class="interset-btn">		
								<router-link to="/service-details" class="btn btn-primary more-btn">View More <i class="feather-arrow-right"></i></router-link>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-md-4 aos" data-aos="fade-up" v-for="item in IndexCowork" :key="item.id">
							<div class="cowork-box">
								<router-link to="/service-details">
									<div class="cowork-img">
										<img :src="require(`../../../assets/img/${item.img}`)" class="img-fluid" alt="img">
									</div>
								</router-link>
								<div class="cowork-info">
									<h5><router-link to="/service-details">{{ item.title }}</router-link></h5>
								</div> 
							</div> 
						</div>
					</div>			   
				</div>			   
			</div>		
		</section>		
		<!-- /Cowork Section -->
		
		<!-- Category Section -->
		<section class="cate-section">
		    <div class="container">
				<div class="cate-sec">
					<div class="row">
						<div class="col-md-8">
							<div class="section-heading heading-four aos" data-aos="fade-up">
								<h2>What Are You interested in?</h2>
								<p>Lorem Ipsum is simply dummy text of the printing</p>
							</div>	
						</div>
						<div class="col-md-4 text-md-end">
							<div class="interset-btn aos" data-aos="fade-up">							
							   <div class="mynav3"></div>
								<router-link to="/categories" class="btn btn-primary more-btn">View More <i class="feather-arrow-right"></i></router-link>
							</div>
						</div>
						<div class="col-md-12">
								
							
								<div class="owl-carousel cat-slider cat-slider-print">	
									<Carousel :wrap-around="true" :settings="settings" :breakpoints="breakpoints">
										<Slide v-for="item in Indexfourcategory" :key="item.id">
											<div class="item">
											<div class="cat-wrap">
												<div class="cat-img">
													<img :src="require(`../../../assets/img/icons/${item.img}`)" class="img-fluid" alt="img">
												</div>
												<h5>{{ item.title }}</h5>
												<span>{{ item.count }}</span>
												<router-link to="/categories"><i class="feather-arrow-right"></i></router-link>
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
				</div>			   
			</div>		
		</section>		
		<!-- /Category Section -->
</template>

<script>
import { Carousel, Pagination, Navigation, Slide } from "vue3-carousel";
import IndexCowork from '../../../assets/json/indexCowork.json';
import Indexfourcategory from '../../../assets/json/indexFourCategory'
    export default {
        data() {
            return {
                IndexCowork: IndexCowork,
				Indexfourcategory: Indexfourcategory,
				settings: {
				itemsToShow: 1,
				snapAlign: "center"
			},
		
			breakpoints: {
				// 700px and up
				700: {
					itemsToShow: 3,
					snapAlign: "center"
				},
				// 1024 and up
				1024: {
					itemsToShow: 5,
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
    }
</script>