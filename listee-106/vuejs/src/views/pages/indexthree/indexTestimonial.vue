<template>
    <!-- Blog Banner -->
		<section class="section-blk blog-blk">
			<div class="container">
				<div class="row">
					<div class="col-sm-12">
						<div class="title-blk justify-content-center text-center">
							<h2>Get inspiration for your next trip</h2>
							<h5>Lorem Ipsum is simply dummy text of the printing</h5>
						</div>
						<div class="row justify-content-center">
							<div class="col-lg-12">
								<div class="recommended-tabs-blk">
									<ul class="nav tabs-style gap-3" data-bs-tabs="tabs">
										<li>
											<a class="active" aria-current="true" data-bs-toggle="tab" href="#Bloghotel">
												<span>
													<img src="../../../assets/img/icons/trip-icon-06.svg" alt="Dreamstrip Recommended">
												</span>
												hotel
											</a>
										</li>
										<li>
											<a data-bs-toggle="tab" href="#Blogrestaurants">
												<span>
													<img src="../../../assets/img/icons/trip-icon-07.svg" alt="Dreamstrip Recommended">
												</span>
												Restaurants
											</a>
										</li>
										<li>
											<a data-bs-toggle="tab" href="#Blogshops">
												<span>
													<img src="../../../assets/img/icons/trip-icon-08.svg" alt="Dreamstrip Recommended">
												</span>
												shops
											</a>
										</li>
										<li>
											<a data-bs-toggle="tab" href="#Blogbusiness">
												<span>
													<img src="../../../assets/img/icons/trip-icon-09.svg" alt="Dreamstrip Recommended">
												</span>
												business
											</a>
										</li>
										<li>
											<a data-bs-toggle="tab" href="#Bloglifestyle">
												<span>
													<img src="../../../assets/img/icons/trip-icon-10.svg" alt="Dreamstrip Recommended">
												</span>
												lifestyle
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>	
						
						<div class="card-body tab-content">
							<div class="tab-pane active">	
								<nexttripslide />						
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>	
		<!-- /Blog Banner -->		
			

		<!-- Testimonial Banner -->
		<section class="section-blk testi-blk">
			<div class="container">
				<div class="row">
					<div class="col-sm-12">
						<div class="title-blk">
							<div class="title-left">
								<h2>What our customers are saying us?</h2>
								<h5>These popular destinations have a lot to offer</h5>
							</div>
							
							<div class="theme-btn">
								<router-link to="/service-details" class="btn">
									View All Destinations
									<span class="material-icons">arrow_forward</span>
								</router-link>
							</div>
						</div>
						<div class="testi-carousel">
							<div class="testim-slider owl-carousel owl-theme">
								<Carousel :wrap-around="true" :settings="settings" :breakpoints="breakpoints">
                					<Slide v-for="item in IndexTestimonial" :key="item.id">
										<div class="testi-widget">
											<div class="d-flex">
												<div class="flex-shrink-0">
													<div class="icon-blk rounded-circle overflow-hidden">
														<img :src="require(`../../../assets/img/profiles/${item.image}`)" alt="Dreamstrip Testimonials">
													</div>
												</div>
												<div class="flex-grow-1 ms-3">
													<h4>{{ item.name }}</h4>
													<p class="text-gray-style">{{ item.location }}</p>
												</div>
											</div>
											<div class="testi-info-blk">
												<p>{{ item.content }}</p>
											</div>
											<hr class="custom-hr">
											<div class="testi-btm-blk">
												<div class="circle-grp">
													<img :src="require(`../../../assets/img/${item.circle1}`)" alt="">
													<img :src="require(`../../../assets/img/${item.circle2}`)" alt="">
													<img :src="require(`../../../assets/img/${item.circle3}`)" alt="">
													<img :src="require(`../../../assets/img/${item.circle4}`)" alt="">
												</div>
												<div class="circle-right">
													<img :src="require(`../../../assets/img/${item.icon}`)" alt="">
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
			</div>
		</section>
		<!-- /Testimonial Banner -->
</template>

<script>
import IndexTestimonial from '../../../assets/json/indexThreeTestimonial.json'
import { Carousel, Pagination, Navigation, Slide } from "vue3-carousel";

export default {
	data() {
		return {
			IndexTestimonial: IndexTestimonial,
			settings: {
                itemsToShow: 1,
                snapAlign: "center"
            },
            breakpoints: {
				575: {
					itemsToShow: 1,
					snapAlign: "center"
				},
                // 700px and up
                767: {
                    itemsToShow: 2,
                    snapAlign: "center"
                },
				 // 991 and up
				 991: {
                    itemsToShow: 2,
					snapAlign: "start"
                },
                // 1024 and up
                1000: {
                    itemsToShow: 3,
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

<style>
.testi-widget {
	margin-right: 24px;
}
</style>