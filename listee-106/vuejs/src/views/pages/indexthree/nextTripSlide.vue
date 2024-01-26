<template>
    <div class="recommended-carousel">
        <div class="recommended-slider owl-carousel owl-theme">
            <Carousel :wrap-around="true" :settings="settings" :breakpoints="breakpoints">
                <Slide v-for="item in NextTripPlan" :key="item.id">
                    <div class="nexttrip blog-widget">
                        <div class="img-blk">
                            <router-link to="/blog-details">
                                <img :src="require(`../../../assets/img/${item.image}`)" class="img-fluid" alt="List 1">
                            </router-link>
                        </div>
                        <div class="content-blk">
                            <p><router-link to="/blog-details">{{ item.title }}</router-link>
                            </p>
                            <div class="date-blk">
                                <p>{{ item.country }}</p>
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
import NextTripPlan from '../../../assets/json/nextTripPlan.json'
import { Carousel, Pagination, Navigation, Slide } from "vue3-carousel";

export default {
    data() {
        return {
            NextTripPlan: NextTripPlan,
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
                    itemsToShow: 4,
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
.nexttrip{
    margin-right: 24px;
}
</style>