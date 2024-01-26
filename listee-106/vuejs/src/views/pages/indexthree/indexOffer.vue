<template>
<!-- Recommended Banner -->
    <section class="section-blk recommended-blk style1-blk">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div class="title-blk justify-content-center text-center">
                        <h2>Recommended</h2>
                        <h5>These popular destinations have a lot to offer</h5>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-lg-12">
                            <div class="recommended-tabs-blk">
                                <ul class="nav tabs-style gap-3" data-bs-tabs="tabs">
										<li>
											<a class="active" aria-current="true" data-bs-toggle="tab" href="#hotels">
												<span>
													<img src="../../../assets/img/icons/trip-icon-01.svg" alt="Dreamstrip Recommended">
												</span>
												hotel
											</a>
										</li>
										<li>
											<a data-bs-toggle="tab" href="#restaurants">
												<span>
													<img src="../../../assets/img/icons/trip-icon-02.svg" alt="Dreamstrip Recommended">
												</span>
												Restaurants
											</a>
										</li>
										<li>
											<a data-bs-toggle="tab" href="#shops">
												<span>
													<img src="../../../assets/img/icons/trip-icon-03.svg" alt="Dreamstrip Recommended">
												</span>
												shops
											</a>
										</li>
										<li>
											<a data-bs-toggle="tab" href="#business">
												<span>
													<img src="../../../assets/img/icons/trip-icon-04.svg" alt="Dreamstrip Recommended">
												</span>
												business
											</a>
										</li>
										<li>
											<a data-bs-toggle="tab" href="#lifestyle">
												<span>
													<img src="../../../assets/img/icons/trip-icon-05.svg" alt="Dreamstrip Recommended">
												</span>
												lifestyle
											</a>
										</li>
									</ul>
                            </div>
                        </div>
                    </div>
                    <div class="card-body tab-content">
                        <div class="tab-pane active">
                            <recommendslide />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- /Recommended Banner -->

    <!-- Offer Banner -->
    <section class="section-blk offer-blk">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="box-style sm-mb-23">
                        <img src="../../../assets/img/designation-img1.jpg" class="img-fluid" alt="Dreamstrip Offers">
                        <div class="btm-box-style">
                            <div>
                                <p>Enjoy Summer Deals</p>
                                <h3>Up to 30% Discount!</h3>
                            </div>
                            <div>
                                <div class="theme-btn">
                                    <router-link to="/categories" class="btn">
                                        learn more
                                        <span>
                                            <i class="feather-arrow-right"></i>
                                        </span>
                                    </router-link>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="box-style">
                    <img src="../../../assets/img/designation-img2.jpg" class="img-fluid" alt="Dreamstrip Offers">
                    <div class="btm-box-style">
                        <div>
                            <p>Enjoy Summer Deals</p>
                            <h3>Up to 30% Discount!</h3>
                        </div>
                        <div>
                            <div class="theme-btn">
                                <router-link to="/categories" class="btn">
                                    learn more
                                    <span>
                                        <i class="feather-arrow-right"></i>
                                    </span>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- /Offer Banner -->
</template>

<script>

</script>