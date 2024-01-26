<template>
    <!-- Client Testimonilas Section -->
		<section class="testimonial-section"> 
			<div class="container"> 
				<div class="row">
					<div class="col-md-8">
						<div class="section-heading heading-four aos" data-aos="fade-up">
							<h2>People Talking About Us</h2>
							<p>Lorem Ipsum is simply dummy text of the printing</p>
						</div>	
					</div>
					<div class="col-md-4 text-md-end aos" data-aos="fade-up">
						<div class="interset-btn">							
							<div class="owl-nav mynav1"></div>
						</div>
					</div>
				</div>
			    <div class="row">
			        <div class="col-md-12">
			            <div class="owl-carousel testi-slider">
							<Carousel :wrap-around="true" :settings="settings" :breakpoints="breakpoints">
								<Slide v-for="item in IndexFourClient" :key="item.id">	
									<div class="testimonial-info testi-four aos" data-aos="fade-up">
										<div class="testimonialslider-content">
											<span><i class="fa-solid fa-quote-left"></i></span>
											<div class="rating">
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star"></i>
											</div>
											<h6>{{ item.title }}</h6>
											<p>{{ item.content}}</p>
										</div>
										<div class="testimonialslider-heading d-flex">
											<div class="testi-img">
												<img :src="require(`../../../assets/img/${item.image}`)" class="img-fluid" alt="testi-img">
											</div>
											<div class="testi-author">
												<h6>{{ item.name }}</h6>
												<p>{{ item.text }}</p>
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
				</div>
			</div>	
        </section>		
	<!-- /Client Testimonilas Section -->

</template>

<script>
import { Carousel, Pagination, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import IndexFourClient from '../../../assets/json/indexFourClient.json'

export default {
	data() {
		return {
			IndexFourClient: IndexFourClient,
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
					itemsToShow: 2.1,
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