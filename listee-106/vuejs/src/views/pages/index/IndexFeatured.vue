<template>
	<!-- Featured ADS Section -->
	<section class="featured-section">
		<div class="container">
			<div class="row align-items-center">
				<div class="col-md-6 aos aos-init aos-animate" data-aos="fade-up">
					<div class="section-heading">
						<h2>Featu<span class="title-right">red</span> Ads</h2>
						<p>Checkout these latest coo ads from our members</p>
					</div>
				</div>
				<div class="col-md-6 text-md-end aos" data-aos="fade-up">
					<div class="owl-nav mynav2"></div>
				</div>
			</div>
			<div class="row">

				<div class="col-md-12">
					<div class="owl-carousel featured-slider grid-view">
						<Carousel :wrap-around="true" :settings="settings" :breakpoints="breakpoints">
							<Slide v-for="item in IndexFeatured" :key="item.id">
								<div class="carousel__item">
									<div class="card">
										<div class="blog-widget">
											<div class="blog-img">
												<router-link to="service-details">
													<img :src="require(`../../../assets/img/featured/${item.img1}`)"
														class="img-fluid" alt="blog-img" />
												</router-link>
												<div class="fav-item">
													<span class="Featured-text">Featured</span>
													<a href="javascript:void(0)" class="fav-icon">
														<i class="feather-heart"></i>
													</a>
												</div>
											</div>
											<div class="bloglist-content">
												<div class="card-body">
													<div class="blogfeaturelink">
														<div class="grid-author">
															<img :src="require(`../../../assets/img/profiles/${item.img2}`)"
																alt="author" />
														</div>
														<div class="blog-features">
															<a href="javascript:void(0)"><span> <i
																		class="fa-regular fa-circle-stop"></i> {{
																			item.text }}</span></a>
														</div>
														<div class="blog-author text-end">
															<span> <i class="feather-eye"></i>4000 </span>
														</div>
													</div>
													<h6>
														<router-link to="service-details">{{ item.title }}</router-link>
													</h6>
													<div class="blog-location-details">
														<div class="location-info">
															<i class="feather-map-pin"></i> Los Angeles
														</div>
														<div class="location-info">
															<i class="fa-solid fa-calendar-days"></i> {{ item.date }}
														</div>
													</div>
													<div class="amount-details">
														<div class="amount">
															<span class="validrate">{{ item.offer }}</span>
															<span>{{ item.price }}</span>
														</div>
														<div class="ratings">
															<span>{{ item.rateing }}</span> (50)
														</div>
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

			</div>
		</div>
	</section>
	<!-- /Featured ADS Section -->
</template>
	
<script>
import {
	Carousel,
	Pagination,
	Navigation,
	Slide
} from "vue3-carousel";
import IndexFeatured from '../../../assets/json/indexFeatured.json'
import "vue3-carousel/dist/carousel.css";
export default {
	data() {
		return {
			IndexFeatured: IndexFeatured,
			settings: {
				itemsToShow: 1,
				snapAlign: "center",
				loop: true,
				margin: 24,
			},

			breakpoints: {
				575: {
					itemsToShow: 2,
					snapAlign: "center"
				},
				// 700px and up
				767: {
					itemsToShow: 2,
					snapAlign: "center"
				},
				// 991px and up
				991: {
					itemsToShow: 3,
					snapAlign: "center"
				},
				// 1024 and up
				1024: {
					itemsToShow: 3.95,
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
	mounted() {
		$('.fav-icon').on('click', function () {
		$(this).toggleClass('selected');
	});
	},
}
</script>
	
<style>
.carousel__item {
	display: flex;
	justify-content: center;
	align-items: center;

}
</style>
	