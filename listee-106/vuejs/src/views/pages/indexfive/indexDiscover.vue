<template>
    <!-- Banner Section -->
    <section class="banner-section banner-five">
        <div class="container">
            <div class="home-banner">
                <div class="row align-items-center">
                    <div class="col-lg-8 mx-auto">
                        <div class="section-search aos" data-aos="fade-up">
                            <h1>Discover your amazing city</h1>
                            <p>20 cities, 10 categories, 5662 listings.</p>
                            <div class="search-box">
                                <b-form action="listing-grid-sidebar" class="form-block d-flex">
                                    <div class="search-input line">
                                        <div class="form-group mb-0">
                                            <vue-select
												:options="Category"
												placeholder="Choose Category"
												/>                                 
                                        </div>
                                    </div>
                                    <div class="search-input">
                                        <div class="form-group mb-0">
                                            <div class="group-img">
                                                <vue-select 
                                                    :options="Location"
                                                    placeholder="Choose Location" />
                                                <i class="feather-map-pin"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="search-btn">
                                        <b-button variant="primary" type="submit">
                                            <i class="fa fa-search m-0" aria-hidden="true"></i>
                                        </b-button>
                                    </div>
                                </b-form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- /Banner Section -->

    <!-- Category Section -->
    <section class="category-five-section">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <ul class="category-items">
                        <li class="aos" data-aos="fade-up">
                            <div class="categories-box">
                                <div class="categories-info">
                                    <span><img src="../../../assets/img/icons/category-18.svg" class="img-fluid" alt="img"></span>
                                    <h6>Restaurant</h6>
                                    <p>09 Ads</p>
                                </div>
                            </div>
                        </li>
                        <li class="aos" data-aos="fade-up">
                            <div class="categories-box">
                                <div class="categories-info">
                                    <span><img src="../../../assets/img/icons/category-19.svg" class="img-fluid" alt="img"></span>
                                    <h6>Beauty & Care</h6>
                                    <p>09 Ads</p>
                                </div>
                            </div>
                        </li>
                        <li class="aos" data-aos="fade-up">
                            <div class="categories-box">
                                <div class="categories-info">
                                    <span><img src="../../../assets/img/icons/category-18.svg" class="img-fluid" alt="img"></span>
                                    <h6>Restaurant</h6>
                                    <p>09 Ads</p>
                                </div>
                            </div>
                        </li>
                        <li class="aos" data-aos="fade-up">
                            <div class="categories-box">
                                <div class="categories-info">
                                    <span><img src="../../../assets/img/icons/category-19.svg" class="img-fluid" alt="img"></span>
                                    <h6>Beauty & Care</h6>
                                    <p>09 Ads</p>
                                </div>
                            </div>
                        </li>
                        <li class="aos" data-aos="fade-up">
                            <div class="categories-box">
                                <div class="categories-info">
                                    <span><img src="../../../assets/img/icons/category-18.svg" class="img-fluid" alt="img"></span>
                                    <h6>Restaurant</h6>
                                    <p>09 Ads</p>
                                </div>
                            </div>
                        </li>
                        <li class="aos" data-aos="fade-up">
                            <div class="categories-box">
                                <div class="categories-info">
                                    <span><img src="../../../assets/img/icons/category-19.svg" class="img-fluid" alt="img"></span>
                                    <h6>Beauty & Care</h6>
                                    <p>09 Ads</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <ul class="category-items cate-row2">
                        <li class="aos" data-aos="fade-up">
                            <div class="categories-box">
                                <div class="categories-info">
                                    <span><img src="../../../assets/img/icons/category-18.svg" class="img-fluid" alt="img"></span>
                                    <h6>Restaurant</h6>
                                    <p>09 Ads</p>
                                </div>
                            </div>
                        </li>
                        <li class="aos" data-aos="fade-up">
                            <div class="categories-box">
                                <div class="categories-info">
                                    <span><img src="../../../assets/img/icons/category-19.svg" class="img-fluid" alt="img"></span>
                                    <h6>Beauty & Care</h6>
                                    <p>09 Ads</p>
                                </div>
                            </div>
                        </li>
                        <li class="aos" data-aos="fade-up">
                            <div class="categories-box">
                                <div class="categories-info">
                                    <span><img src="../../../assets/img/icons/category-18.svg" class="img-fluid" alt="img"></span>
                                    <h6>Restaurant</h6>
                                    <p>09 Ads</p>
                                </div>
                            </div>
                        </li>
                        <li class="aos" data-aos="fade-up">
                            <div class="categories-box">
                                <div class="categories-info">
                                    <span><img src="../../../assets/img/icons/category-19.svg" class="img-fluid" alt="img"></span>
                                    <h6>Beauty & Care</h6>
                                    <p>09 Ads</p>
                                </div>
                            </div>
                        </li>
                        <li class="aos" data-aos="fade-up">
                            <div class="categories-box">
                                <div class="categories-info">
                                    <span><img src="../../../assets/img/icons/category-18.svg" class="img-fluid" alt="img"></span>
                                    <h6>Restaurant</h6>
                                    <p>09 Ads</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <!-- /Category Section -->
</template>
<script>
export default {
    data() {
        return {
            Category: ["Choose Category", "Computer", "Automobile", "Car Wash", "Cleaning", "Electrical", "Construction"],
            Location: ["Choose Location", "Computer", "Automobile", "Car Wash", "Cleaning", "Electrical", "Construction"]
        }
    },
}
</script>