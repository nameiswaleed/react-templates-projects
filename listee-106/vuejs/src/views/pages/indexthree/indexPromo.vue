<template>
    <!-- Recommended Banner -->
    <section class="section-blk recommended-blk style2-blk">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div class="title-blk justify-content-center text-center">
                        <h2>Top Guide Recommentation</h2>
                        <h5>These popular destinations have a lot to offer</h5>
                    </div>
                    <div class="recommended-carousel">
                        <div class="recommended-slider owl-carousel owl-theme">
                            <Carousel  :wrap-around="true" :settings="settings" :breakpoints="breakpoints">
                                <Slide class="carousel__slide recommended-widget" v-for="item in ThreePromo" :key="item.id">
                                    <div class="recommended-widget">
                                        <div class="img-blk">
                                            <a href="javascript:void(0);">
                                                <img :src="require(`../../../assets/img/recommended/${item.image}`)" class="img-fluid" alt="List 1">
                                            </a>
                                            <div :class="item.class">
                                                <p>{{ item.badge }}</p>
                                            </div>
                                        </div>
                                        <div class="content-blk">
                                            <p><a href="javascript:void(0);">{{ item.name }}</a></p>
                                            <div class="loc-blk">
                                                <i class="feather-map-pin"></i>
                                                <p>{{ item.location }}</p>
                                            </div>
                                            <div class="detail-blk mt-15">
                                                <p>
                                                    {{ item.price }} <span>{{ item.text }}</span>
                                                </p>
                                                <div class="detail-btm-blk">
                                                    <div class="rating-blk">
                                                        <span class="material-icons">star</span>
                                                        <span class="material-icons">star</span>
                                                        <span class="material-icons">star</span>
                                                        <span class="material-icons">star</span>
                                                        <span class="material-icons">star</span>
                                                    </div>
                                                    <small>{{ item.rating }} {{ item.review }}</small>
                                                </div>
                                                <p class="my-10 exp-style">{{ item.experience }}</p>
                                                <div class="tags-blk">
                                                    <a href="javscript:;" class="tag-style">English</a>
                                                    <a href="javscript:;" class="tag-style">Spanish</a>
                                                    <a href="javscript:;" class="tag-style">Japanese</a>
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
        </div>
    </section>
    <!-- /Recommended Banner -->

    <!-- Promo Banner -->
    <section class="section-blk promo-blk">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div class="promo-style">
                        <div class="flex-style">
                            <div>
                                <h3>Save Time : Create a Trip & Get Offers</h3>
                                <div class="list-style">
                                    <ul>
                                        <li>
                                            <span class="position-style">01</span>
                                            <span class="count-style">01</span>
                                            Create Trip
                                        </li>
                                        <li>
                                            <span class="position-style">02</span>
                                            <span class="count-style">02</span>
                                            Get offers
                                        </li>
                                        <li>
                                            <span class="position-style">03</span>
                                            <span class="count-style">03</span>
                                            Search Guide
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="btn-style2">
                                <a href="javascript:;">
                                    <span class="text-style">Create a Trip</span>
                                    <span class="shape-bg">
                                        <span class="material-icons">arrow_forward</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- /Promo Banner -->
</template>

<script>
import ThreePromo from '../../../assets/json/indexThreePromo.json'
import { Carousel, Pagination, Navigation, Slide } from "vue3-carousel";

    export default {
        data() {
            return {
                ThreePromo: ThreePromo,
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
                    // 1024 and up
                    1000: {
                        itemsToShow: 4.25,
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
.carousel__slide.recommended-widget {
	margin-right: 22px;
}
</style>