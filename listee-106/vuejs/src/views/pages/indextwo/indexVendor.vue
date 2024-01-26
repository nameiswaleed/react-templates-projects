<template>
    <!-- Vendor Section -->
    <section class="offer-section">
        <div class="container">
            <div class="offer-sec">
                <h3>Lets Celebrate Your Love</h3>
                <img class="img-fluid" src="../../../assets/img/celebrate-img.png" alt="img">
                <p>20% Off Special Offer</p>
					<router-link to="/contact" class="btn btn-grey">Contact Now</router-link>
                <div class="offer-img">
                    <div class="offer-img-left">
                        <img class="img-fluid" src="../../../assets/img/bg/celebrate.png" alt="img">
                    </div>
                    <div class="offer-img-right">
                        <img class="img-fluid" src="../../../assets/img/bg/celebration-bg-01.png" alt="img">
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- /Vendor Section -->

    <!-- Blog  Section -->
    <section class="venue-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-heading-two text-center">
                        <p>Look at this</p>
                        <h2>Wedding Venues</h2>
                        <img src="../../../assets/img/title-img.png" class="img-fluid" alt="title-img">
                    </div>
                    <div class="owl-carousel venue-slider">
                        <Carousel :wrap-around="true" :settings="settings" :breakpoints="breakpoints">
					        <Slide v-for="item in IndexTwoBlog" :key="item.id">
                                <div class="venue-item">
                                    <div class="venue-image">
                                        <router-link to="/service-details">
                                            <img class="img-fluid" :src="require(`../../../assets/img/venues/${item.image}`)" alt="Image">
                                        </router-link>
                                    </div>
                                    <div class="venue-content">
                                        <h3><router-link to="/service-details">{{ item.title }}</router-link></h3>
                                        <p><i class="feather-map-pin"></i> {{ item.location }}</p>
                                        <div class="price-review">
                                            <h6><span><i class="fa-solid fa-star"></i> {{ item.rating }}</span>{{ item.review }}</h6>
                                            <p>{{ item.price }}</p>
                                        </div>
                                        <ul>
                                            <li>
                                                <span><i class="feather-user"></i></span>
                                                <p>{{ item.guest }}</p>
                                            </li>
                                            <li>
                                                <span><i class="fa-solid fa-mug-hot"></i></span>
                                                <p>{{ item.food }}</p>
                                            </li>
                                            <li>
                                                <span><i class="feather-home"></i></span>
                                                <p>{{ item.room }}</p>
                                            </li>
                                        </ul>
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
import IndexTwoBlog from '../../../assets/json/indexTwoBlog.json'
export default {
    data() {
        return {
            IndexTwoBlog: IndexTwoBlog,
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
                    itemsToShow: 2,
					snapAlign: "start"
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
.venue-item {
	margin-right: 24px;
}
</style>
