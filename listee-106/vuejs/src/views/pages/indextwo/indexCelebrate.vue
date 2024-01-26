<template>
<!-- Celebrating Section -->
	<section class="celebrate-section">
		<div class="container">
			<div class="section-heading-two text-center">
				<div class="row">
					<div class="col-md-12 aos" data-aos="fade-up">
						<p>Loved One</p>
						<h2>Celebrating Your Love</h2>
						<img src="../../../assets/img/title-img.png" class="img-fluid" alt="title-img">
					</div>
				</div>
			</div>
			
			<div class="owl-carousel celebrate-slider">
				<Carousel :wrap-around="true" :settings="settings" :breakpoints="breakpoints">
					<Slide v-for="item in IndexCelebrate" :key="item.id">
						<div class="item">
							<div class="celebrate-wrap aos" data-aos="fade-up">
								<div class="celebrate-img">
									<img :src="require(`../../../assets/img/${item.image}`)" class="img-fluid" alt="img">
									<div class="play-btn">
									<a href="https://youtu.be/txNwby8qPlg" data-fancybox="" class="play-icon"><i class="fa-solid fa-play"></i></a>
										
										<span class="animate-circle"></span>
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
	<!-- /Celebrating Section -->

	<!-- Wedding Section -->
	<section class="wedding-section">
		<div class="container">
			<div class="row">
				<div class="col-md-12 aos" data-aos="fade-up">
					<div class="section-heading-two text-center">
						<p>Loved One</p>
						<h2>Wedding Categories</h2>
						<img src="../../../assets/img/title-img.png" class="img-fluid" alt="title-img">
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-5 col-md-6">
					<!-- Category -->
					<div class="wedding-wrap aos" data-aos="fade-up" v-for="item in IndexTwoCategory" :key="item.id">
						<div class="wedding-img">
							<router-link to="/categories">
								<img class="img-fluid" :src="require(`../../../assets/img/service/${item.image}`)" alt="locations">
							</router-link>
						</div>
						<div class="wedding-content">
							<h6><router-link to="categories">{{ item.title }}</router-link></h6>
							<p>{{ item.content }}</p>
							<router-link to="/categories">{{ item.explore }} <i class="feather-arrow-right-circle"></i></router-link>
						</div>
					</div>
					<!-- /Category -->
				</div>

				<div class="col-lg-2 wedding-wrap-img aos" data-aos="fade-up">
					<img class="img-fluid" src="../../../assets/img/service/category-img.png" alt="locations">
				</div>
				
				<div class="col-lg-5 col-md-6 aos" data-aos="fade-up">
					<!-- Category -->
					<div class="wedding-wrap wedding-align" v-for="item in IndexTwoWeds" :key="item.id">
						<div class="wedding-content">
							<h6><router-link to="/categories">{{ item.title }}</router-link></h6>
							<p>{{ item.content }}</p>
							<router-link to="/categories">{{ item.explore }} <i class="feather-arrow-right-circle"></i></router-link>
						</div>
						<div class="wedding-img align-right">
							<router-link to="/categories">
								<img class="img-fluid" :src="require(`../../../assets/img/service/${item.image}`)" alt="locations">
							</router-link>
						</div>
					</div>
					<!-- /Category -->

				</div>
			</div>
		</div>
	</section>
<!-- /Wedding Section -->
</template>

<script>
import { Carousel, Pagination, Navigation, Slide } from "vue3-carousel";
import IndexCelebrate from '../../../assets/json/indexCelebrate.json'
import IndexTwoCategory from '../../../assets/json/indexTwoCategory.json'
import IndexTwoWeds from '../../../assets/json/indexTwoWeds.json'

export default {
	data() {
		return {
			IndexCelebrate: IndexCelebrate,
			IndexTwoWeds: IndexTwoWeds,
			IndexTwoCategory: IndexTwoCategory,
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
					itemsToShow: 1,
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