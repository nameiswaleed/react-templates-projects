<template><!-- Blog  Section -->
    <section class="feedback-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-heading-two text-center">
                        <p>Find out</p>
                        <h2>Testimonials from Real Brides</h2>
                        <img src="../../../assets/img/title-img.png" class="img-fluid" alt="title-img">
                    </div>
                    <div class="owl-carousel feedback-slider">
                        <Carousel :wrap-around="true" :settings="settings" :breakpoints="breakpoints">
					        <Slide v-for="item in IndexTwoFeedback" :key="item.id">
                                <div class="testimonial-item" >
                                    <div class="testimonial-content">
                                        <p>{{ item.content }}</p>
                                        <span class="testi-icon"><i class="fa-solid fa-quote-left"></i></span>
                                    </div>
                                    <div class="testimonial-user-info">
                                        <img class="img-fluid" :src="require(`../../../assets/img/profiles/${item.image}`)" alt="Post Image">
                                        <div class="testimonial-user">
                                            <h6>{{ item.name }}</h6>
                                            <p>{{ item.location }}</p>
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
    <!-- /Blog  Section -->

    <!-- Blog  Section -->
    <section class="blog-section-two">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-heading-two text-center">
                        <p>Tips and News</p>
                        <h2>Latest Blogs</h2>
                        <img src="../../../assets/img/title-img.png" class="img-fluid" alt="title-img">
                    </div>
                    <div class="owl-carousel blog-slider">
                        <Carousel :wrap-around="true" :settings="settings" :breakpoints="breakpoints">
					        <Slide v-for="item in IndexLatestBlog" :key="item.id">
                                <div class="blog grid-blog blog-two">
                                    <div class="blog-image">
                                        <router-link to="/blog-details"><img class="img-fluid" :src="require(`../../../assets/img/blog/${item.image}`)"
                                                alt="Post Image"></router-link>
                                    </div>
                                    <div class="blog-content">
                                        <h3 class="blog-title"><router-link to="/blog-details">{{ item.title}}</router-link></h3>
                                        <ul class="entry-meta meta-item">
                                            <li class="date-icon"><i class="feather-calendar"></i> {{ item.date }}</li>
                                            <li class="blog-cat">{{ item.text }}</li>
                                        </ul>
                                        <p class="blog-description">{{ item.content }}</p>
                                        <div class="viewlink">
                                            <router-link to="/blog-details">{{ item.view }} <i class="feather-arrow-right-circle"></i></router-link>
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
<!-- /Blog  Section -->
</template>

<script>
import { Carousel, Pagination, Navigation, Slide } from "vue3-carousel";
import IndexTwoFeedback from '../../../assets/json/indexTwoFeedback.json'
import IndexLatestBlog from '../../../assets/json/indexLatestBlog.json'
export default {
    data() {
        return {
            IndexTwoFeedback: IndexTwoFeedback,
            IndexLatestBlog: IndexLatestBlog,
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
				767: {
					itemsToShow: 2,
					snapAlign: "center"
				},
                // 991 and up
                991: {
                    itemsToShow: 3,
					snapAlign: "center"
                },
				// 1024 and up
				1024: {
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
.carousel__item {
	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: 24px;
}
.grid-blog{
    margin-right: 24px;
}
</style>