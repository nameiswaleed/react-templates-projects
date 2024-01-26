<template>
<!-- Destination Banner -->
    <section class="section-blk destination-blk">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div class="title-blk">
                        <div class="title-left">
                            <h2>Popular Destinations</h2>
                            <h5>These popular destinations have a lot to offer</h5>
                        </div>
                        <div class="theme-btn">
                            <router-link to="/service-details" class="search-btn">
                                view all destination
                                <span>
                                    <i class="feather-arrow-right"></i>
                                </span>
                            </router-link>
                        </div>
                    </div>
                    <div class="destination-carousel">
                        <div class="destination-slider owl-carousel owl-theme">
                            <Carousel :wrap-around="true" :settings="settings" :breakpoints="breakpoints">
					            <Slide v-for="item in IndexDestination" :key="item.id">
                                    <div class="destination-widget">
                                        <a href="javascript:;" class="desti-link">
                                            <img :src="require(`../../../assets/img/recommended/${item.image}`)" class="img-fluid"
                                                alt="find your destination">
                                            <div class="desti-country-list">
                                                <span class="desti-btn">{{ item.country }}</span>
                                            </div>
                                        </a>
                                        <div class="overlay-blk">
                                            <h3>{{ item.location }}</h3>
                                            <p>{{ item.content }}</p>
                                            <div class="theme-btn">
                                                <router-link to="/service-details" class="search-btn">
                                                    {{ item.explore }}
                                                    <span>
                                                        <i class="feather-arrow-right"></i>
                                                    </span>
                                                </router-link>
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
    <!-- /Destination Banner -->

    <!-- Service Banner -->
    <section class="section-blk service-blk">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div class="service-info-card d-flex align-items-center">
                        <div class="flex-shrink-0">
                            <div class="img-blk">
                                <img src="../../../assets/img/service-img.png" class="img-fluid" alt="Dreamstrip Services">
                            </div>
                        </div>
                        <div class="service-content flex-grow-1">
                            <h2>Our Services</h2>
                            <div class="body-content">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                    has been the industry's standard dummy text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                    has been the industry's standard dummy text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>

                            <ul class="service-list d-flex">
                                <li>
                                    <div class="d-flex align-items-center">
                                        <div class="flex-shrink-0">
                                            <div class="icon-blk rounded-circle">
                                                <img src="../../../assets/img/services/icon-1.png" alt="Service Feature 1">
                                            </div>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <h6>trip adviser</h6>
                                            <p>Lorem Ipsum</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="d-flex align-items-center">
                                        <div class="flex-shrink-0">
                                            <div class="icon-blk rounded-circle">
                                                <img src="../../../assets/img/services/icon-2.png" alt="Service Feature 2">
                                            </div>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <h6>accommodation</h6>
                                            <p>Lorem Ipsum</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="d-flex align-items-center">
                                        <div class="flex-shrink-0">
                                            <div class="icon-blk rounded-circle">
                                                <img src="../../../assets/img/services/icon-3.png" alt="Service Feature 3">
                                            </div>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <h6>guide</h6>
                                            <p>Lorem Ipsum</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="d-flex align-items-center">
                                        <div class="flex-shrink-0">
                                            <div class="icon-blk rounded-circle">
                                                <img src="../../../assets/img/services/icon-4.png" alt="Service Feature 4">
                                            </div>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <h6>trip planner</h6>
                                        <p>Lorem Ipsum</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- /Service Banner -->
</template>

<script>
import IndexDestination from '../../../assets/json/indexDestination.json'
import { Carousel, Pagination, Navigation, Slide } from "vue3-carousel";

export default {
    data() {
        return {
            IndexDestination: IndexDestination,
            settings: {
				itemsToShow: 1,
				snapAlign: "center"
			},
			breakpoints: {
                500: {
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
					snapAlign: "start"
                },
				// 1024 and up
				1024: {
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
};
</script>

<style>
.destination-widget {
	margin-right: 24px;
}
</style>