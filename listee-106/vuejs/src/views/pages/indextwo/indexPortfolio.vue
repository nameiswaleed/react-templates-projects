<template>
    <!-- Category  Section -->
    <section class="categories-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-heading-two text-center">
                        <p>Try This</p>
                        <h2>Venues by Category</h2>
                        <img src="../../../assets/img/title-img.png" class="img-fluid" alt="title-img">
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="category-item aos" data-aos="fade-up">
                                <div class="category-img">
                                    <img src="../../../assets/img/category/category-01.jpg" class="img-fluid" alt="img">
                                    <router-link to="/categories" class="btn">Banquet halls</router-link>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-8">
                            <div class="row">
                                <div class="col-md-8">
                                    <div class="category-item aos" data-aos="fade-up">
                                        <div class="category-img">
                                            <img src="../../../assets/img/category/category-02.jpg" class="img-fluid" alt="img">
                                            <router-link to="/categories" class="btn">Outdoors</router-link>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="category-item aos" data-aos="fade-up">
                                        <div class="category-img">
                                            <img src="../../../assets/img/category/category-03.jpg" class="img-fluid" alt="img">
                                            <router-link to="/categories" class="btn">Beaches and Islands </router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="category-item aos" data-aos="fade-up">
                                        <div class="category-img">
                                            <img src="../../../assets/img/category/category-04.jpg" class="img-fluid" alt="img">
                                            <router-link to="/categories" class="btn">Hotels</router-link>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-8">
                                    <div class="category-item aos" data-aos="fade-up">
                                        <div class="category-img">
                                            <img src="../../../assets/img/category/category-05.jpg" class="img-fluid" alt="img">
                                            <router-link to="/categories" class="btn">House</router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- /Category  Section -->

    <!-- Portfolio  Section -->
    <section class="portfolio-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-heading-two text-center">
                        <p>Portfolio</p>
                        <h2>Our Amazing Work</h2>
                        <img src="../../../assets/img/title-img.png" class="img-fluid" alt="title-img">
                    </div>
                    <div class="owl-carousel portfolio-slider">
                        <Carousel :wrap-around="true" :settings="settings" :breakpoints="breakpoints">
					        <Slide v-for="(src, index) in imgs" :key="index" @click="() => showImg(index)">
                                <div class="portfolio-wrap">
                                    <div class="row gx-2 bg-white port-wrap">
                                        <div class="col-md-3 col-sm-6">
                                            <div class="portfolio-item">
                                                <div class="portfolio-img">
                                                    <img src="../../../assets/img/gallery/gallery-01.jpg" class="img-fluid" alt="img">
                                                </div>
                                                <div class="portfolio-overlay-item">
                                                    
                                                        <div class="portfolio-overlay">
                                                            <h6>Wedding Venues</h6>
                                                            <p>15 Photos and 5 Videos</p>
                                                        </div>
                                                    
                                                </div>
                                            </div>
                                            <div class="portfolio-item">
                                                <div class="portfolio-img">
                                                    <img src="../../../assets/img/gallery/gallery-02.jpg" class="img-fluid" alt="img">
                                                </div>
                                                <div class="portfolio-overlay-item">
                                                    
                                                        <div class="portfolio-overlay">
                                                            <h6>Wedding Venues</h6>
                                                            <p>55 Photos and 5 Videos</p>
                                                        </div>
                                                   
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-3 col-sm-6">
                                            <div class="portfolio-item">
                                                <div class="portfolio-img">
                                                    <img src="../../../assets/img/gallery/gallery-03.jpg" class="img-fluid" alt="img">
                                                </div>
                                                <div class="portfolio-overlay-item">
                                                    
                                                        <div class="portfolio-overlay">
                                                            <h6>Wedding Venues</h6>
                                                            <p>135 Photos and 5 Videos</p>
                                                        </div>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-sm-12">
                                            <div class="row gx-2">
                                                <div class="col-md-6">
                                                    <div class="portfolio-item">
                                                        <div class="portfolio-img">
                                                            <img src="../../../assets/img/gallery/gallery-04.jpg" class="img-fluid"
                                                                alt="img">
                                                        </div>
                                                        <div class="portfolio-overlay-item">
                                                           
                                                                <div class="portfolio-overlay">
                                                                    <h6>Wedding Venues</h6>
                                                                    <p>115 Photos and 5 Videos</p>
                                                                </div>
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="portfolio-item">
                                                        <div class="portfolio-img">
                                                            <img src="../../../assets/img/gallery/gallery-05.jpg" class="img-fluid"
                                                                alt="img">
                                                        </div>
                                                        <div class="portfolio-overlay-item">
                                                            
                                                                <div class="portfolio-overlay">
                                                                    <h6>Wedding Venues</h6>
                                                                    <p>155 Photos and 5 Videos</p>
                                                                </div>
                                                           
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="portfolio-item">
                                                        <div class="portfolio-img">
                                                            <img src="../../../assets/img/gallery/gallery-06.jpg" class="img-fluid"
                                                                alt="img">
                                                        </div>
                                                        <div class="portfolio-overlay-item">
                                                            
                                                                <div class="portfolio-overlay">
                                                                    <h6>Wedding Venues</h6>
                                                                    <p>155 Photos and 5 Videos</p>
                                                                </div>
                                                            
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

                        <vue-easy-lightbox
                            :visible="visible"
                            :imgs="img"
                            :index="index"
                            @hide="handleHide"
                        ></vue-easy-lightbox>
                    </div>
                </div>
        </div>
    </div>
</section>
<!-- /Portfolio Section -->
</template>

<script>
import { Carousel, Pagination, Navigation, Slide } from "vue3-carousel";

export default {
    data() {
        return {
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
            visible: false,
			index: 0, // default: 0
			imgs:[
				{
				src: "gallery-01.jpg",
				},
				{
				src: "gallery-02.jpg",
				},
				{
				src: "gallery-03.jpg"
				},
				{
				src: "gallery-04.jpg"
				},
				{
				src: "gallery-05.jpg"
				},
				{
				src: "gallery-06.jpg"
				}
				],
			img: [
				{
				src: "https://picsum.photos/785/501",
				},
				{
				src: "https://picsum.photos/785/502",
				},
				{
				src: "https://picsum.photos/785/503",
				},
				{
				src: "https://picsum.photos/785/504",
				},
				{
				src: "https://picsum.photos/785/505",
				},
				{
				src: "https://picsum.photos/785/506",
				}
			],
        }
    },
    methods: {
		showImg(index) {
		this.index = index;
		this.visible = true;
		},
		handleHide() {
		this.visible = false;
		},
	},
    components: {
		Carousel,
		Slide,
		Pagination,
		Navigation,
	},
}
</script>