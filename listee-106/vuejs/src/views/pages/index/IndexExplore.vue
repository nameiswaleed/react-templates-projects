<template>
    <!-- Banner Section -->
    <section class="banner-section">
            <div class="banner-circle">
					<img src="../../../assets/img/bannerbg.png" class="img-fluid" alt="bannercircle">
			</div>		
			<div class="container">
				<div class="home-banner">		
					<div class="row align-items-center">					    
						<div class="col-lg-7">
							<div class="section-search aos" data-aos="fade-up">
							    <p class="explore-text">
                                    <span>Explore top-rated attractions</span>
                                </p>
								<img src="../../../assets/img/arrow-banner.png" class="arrow-img" alt="arrow">
								<h1>Let us help you <br>
								    <span>Find, Buy</span> & Own Dreams
                                </h1>
								<p>Countrys most loved and trusted classified ad listing website classified ad.randomised words which don't look even slightly Browse thousand of items near you.</p>
								<div class="search-box">
								    <b-form action="/listing-grid-sidebar" class="d-flex"> 
                                        <div class="search-input line">											
                                            <div class="form-group mb-0">			
                                                <vue-select 
                                                    class="select"
                                                    :options="Category"
                                                    placeholder="Choose Category" />
                                            </div>
                                        </div>
                                        <div class="search-input">											
                                            <div class="form-group mb-0">												
                                                <div class="group-img">
                                                    <i class="feather-map-pin"></i>
                                                    <b-form-input type="text" class="form-control" placeholder="Choose Location" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="search-btn">
											<b-button variant="primary" type="submit"> <i class="fa fa-search" aria-hidden="true"></i> Search</b-button>
										</div>
									 </b-form>
								</div>
							</div>
						</div>
						<div class="col-lg-5">
							<div class="banner-imgs">
                                  <img src="../../../assets/img/Right-img.png" class="img-fluid" alt="bannerimage">							
							</div>
						</div>
					</div>
				</div>	
			</div>
			<img src="../../../assets/img/bannerellipse.png" class="img-fluid banner-elipse" alt="arrow">
			<img src="../../../assets/img/banner-arrow.png" class="img-fluid bannerleftarrow" alt="arrow">
    </section>
    <!-- /Banner Section -->
		
		
		
</template>

<script>
export default {
    data() {
        return{
            Category: ["Choose Category", "Computer", "Automobile", "Car Wash", "Cleaning", "Electrical", "Construction"]
        };
    },
    components: {},
	
};
</script>