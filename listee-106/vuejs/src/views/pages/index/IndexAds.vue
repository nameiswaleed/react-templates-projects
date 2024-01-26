<template>
    <section class="latestad-section grid-view featured-slider">
        <div class="container">
            <div class="section-heading">
                <div class="row align-items-center">
                    <div class="col-md-6 aos aos-init aos-animate" data-aos="fade-up">
                        <h2>Lat<span class="title-right">est</span> Ads</h2>
                        <p>checkout these latest cool ads from our members</p>
                    </div>
                    <div class="col-md-6 text-md-end aos aos-init aos-animate" data-aos="fade-up">
                        <router-link to="/service-details" class="btn  btn-view">View All</router-link>
                    </div>
                </div>
            </div>
            <div class="lateestads-content">
                <div class="row">
                    <div class="col-lg-3 col-md-4 col-sm-6 d-flex" v-for="item in IndexAds" :key="item.id">
                        <div class="card flex-fill">
                            <div class="blog-widget">
                                <div class="blog-img">
                                    <router-link to="/service-details">
                                        <img :src="require(`../../../assets/img/featured/${item.img1}`)" class="img-fluid" alt="blog-img" />
                                    </router-link>
                                    <div class="fav-item">
                                        <span class="Featured-text">Featured</span>
                                        <a href="javascript:void(0)" class="fav-icon"><i class="feather-heart"></i></a>
                                    </div>
                                </div>
                                <div class="bloglist-content">
                                    <div class="card-body">
                                        <div class="blogfeaturelink">
                                            <div class="grid-author">
                                                <img :src="require(`../../../assets/img/profiles/${item.img2}`)" alt="author" />
                                            </div>
                                            <div class="blog-features">
                                                <a href="javascript:void(0)"><span> <i class="fa-regular fa-circle-stop"></i> {{ item.text }}</span></a>
                                            </div>
                                            <div class="blog-author text-end">
                                                <span> <i class="feather-eye"></i> 4000 </span>
                                            </div>
                                        </div>
                                        <h6><router-link to="/service-details">{{ item.title }}</router-link></h6>
                                        <div class="blog-location-details">
                                            <div class="location-info">
                                                <i class="feather-map-pin"></i> Los Angeles
                                            </div>
                                            <div class="location-info">
                                                <p><i class="fa-solid fa-calendar-days"></i> {{ item.date }}</p>
                                            </div>
                                        </div>
                                        <div class="amount-details">
                                            <div class="amount">
                                                <span class="validrate">{{ item.offer }}</span>
                                                <span>{{ item.price }}</span>
                                            </div>
                                            <div class="ratings">
                                                <span>{{ item.rating}}</span> (50)
                                            </div>
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
</template>

<script>
import IndexAds from '../../../assets/json/indexAds.json'

export default {
    data() {
        return {
            IndexAds: IndexAds
        };
    },
};
</script>