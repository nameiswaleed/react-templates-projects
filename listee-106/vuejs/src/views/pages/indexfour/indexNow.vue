<template>
    <!-- Banner Section -->
		<section class="banner-section banner-four">
			<div class="container">
				<div class="home-banner">		
					<div class="row align-items-center">					    
						<div class="col-lg-7">
							<div class="section-search aos" data-aos="fade-up">
								<h6>Now</h6>
								<h1>Find perfect working space near you!</h1>
								<p>Affordable workspaces in the cities you love</p>
								<div class="search-box">
									<b-form action="listing-grid-sidebar" class="form-block d-flex"> 
										<div class="search-input line">											
											<div class="form-group mb-0">
												<label>Find</label>
												<b-form-input type="text" class="form-control" placeholder="Ex: Virutual Office" />
											</div>
										</div>
										<div class="search-input">											
											<div class="form-group mb-0">
												<label>Where</label>
												<b-form-input type="text" class="form-control" placeholder="Your City" />
											</div>
										</div>
										<div class="search-btn">
											<b-button variant="primary" type="submit">Search Now <i class="fa fa-search" aria-hidden="true"></i></b-button>
										</div>
									</b-form>
								</div>
							</div>
							<div class="banner-imgs">
                                  <img src="../../../assets/img/banner/banner-img-04.png" class="img-fluid" alt="bannerimage">							
							</div>
						</div>
					</div>
				</div>	
			</div>
		</section>
		<!-- /Banner Section -->
		
		<!-- Category Section -->
		<section class="category-four-section">
		    <div class="container">
				<div class="category-sec">
					<div class="row">
						<div class="col-lg-3 col-md-6 col-sm-6 d-flex aos" v-for="item in IndexNow" :key="item.id" data-aos="fade-up">
							<div class="category-box flex-fill">
								<span>
									<img :src="require(`../../../assets/img/icons/${item.img}`)" class="img-fluid" alt="img">
								</span>
								<div class="category-info">
									<h6>{{ item.title }}</h6>
									<p>{{ item.text }}</p>
								</div> 
							</div> 
						</div>
					</div>			   
				</div>			   
			</div>		
		</section>		
		<!-- /Category Section -->
</template>

<script>
import IndexNow from '../../../assets/json/indexNow.json'

    export default {
        data() {
            return {
                IndexNow: IndexNow
            }
        },
    }
</script>