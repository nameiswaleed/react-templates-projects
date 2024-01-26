<template>
        <div class="recommended-carousel">
            <div class="recommended-slider owl-carousel owl-theme">
                <Carousel :wrap-around="true" :settings="settings" :breakpoints="breakpoints">
                <Slide class="carousel__slide recommended-widget" v-for="item in RecommendSlide" :key="item.id">
                    <div class="img-blk">
                        <router-link to="/service-details">
                            <img :src="require(`../../../assets/img/recommended/${item.image}`)" class="img-fluid" alt="List 1">
                        </router-link>
                        <div :class="item.class">
                            <p>{{ item.badge }}</p>
                        </div>
                    </div>
                    <div class="content-blk">
                        <p><router-link to="/service-details">{{ item.title }}</router-link></p>
                        <div class="loc-blk">
                            <i class="feather-map-pin"></i>
                            <p>{{ item.location}}</p>
                        </div>
                        <div class="detail-blk">
                            <p>{{ item.text}} <span>{{ item.price }}</span></p>
                            <div class="detail-btm-blk">
                                <div class="rating-badge">
                                    <span class="material-icons">star</span>
                                    {{ item.rating }}
                                </div>
                                <small>{{ item.review }}</small>
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
    
</template>

<script>
import RecommendSlide from '../../../assets/json/recommendSlide.json'
import { Carousel, Pagination, Navigation, Slide } from "vue3-carousel";

export default {
    data() {
        return {
            RecommendSlide: RecommendSlide,
            settings: {
                itemsToShow: 1,
                snapAlign: "center"
            },
            breakpoints: {
                // 700px and up
                700: {
                    itemsToShow: 2,
                    snapAlign: "center"
                },
                // 991 and up
                991: {
                    itemsToShow: 3,
                    snapAlign: "center"
                },
                // 1024 and up
                1000: {
                    itemsToShow: 4.25,
                    snapAlign: "center"
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
.carousel__slide.recommended-widget {
	margin-right: 22px;
}
</style>