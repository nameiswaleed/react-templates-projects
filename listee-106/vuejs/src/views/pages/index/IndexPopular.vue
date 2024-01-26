<template>
    <!-- Popular Location Section -->
		<section class="popular-locations">	
			<div class="popular-circleimg">
				 <img class="img-fluid" src="../../../assets/img/popular-img.png" alt="Popular-sections">
			</div>
            <div class="container">		
				 <div class="section-heading">
					<h2>Popular <span>Loc</span>ations</h2>
					<p>Start by selecting your favuorite location and explore the goods</p>
				</div>
				<div class="location-details d-flex">	
                    <div class="row">				
				     <div class="location-info col-lg-4 col-md-6">
					    <div class="location-info-details d-flex align-items-center">
					      <div class="location-img">
						     <router-link to="listing-grid-sidebarl"><img class="img-fluid" src="../../../assets/img/locations/usa.jpg" alt="locations"></router-link>
						  </div>
						  <div class="location-content">
						      <router-link to="listing-grid-sidebar">USA</router-link>
							  <p>20+ Ads Posted</p>
							  <router-link to="listing-grid-sidebar" class="view-detailsbtn">View Details</router-link>
						  </div>
						</div>
					 </div>	
				     <div class="location-info col-lg-4 col-md-6">
					    <div class="location-info-details d-flex align-items-center">
					      <div class="location-img">
						     <router-link to="listing-grid-sidebar"><img class="img-fluid" src="../../../assets/img/locations/canada.jpg" alt="locations"></router-link>
						  </div>
						  <div class="location-content">
						      <router-link to="listing-grid-sidebar">Canada</router-link>
							  <p>20+ Ads Posted</p>
							  <router-link to="listing-grid-sidebar" class="view-detailsbtn">View Details</router-link>
						  </div>
						</div>
					 </div>	
				     <div class="location-info col-lg-4 col-md-6">
					    <div class="location-info-details d-flex align-items-center">
					      <div class="location-img">
						     <router-link to="listing-grid-sidebar"><img class="img-fluid" src="../../../assets/img/locations/china.jpg" alt="locations"></router-link>
						  </div>
						  <div class="location-content">
						      <router-link to="listing-grid-sidebar">China</router-link>
							  <p>20+ Ads Posted</p>
							  <router-link to="listing-grid-sidebar" class="view-detailsbtn">View Details</router-link>
						  </div>
						</div>
					 </div>				
				     <div class="location-info col-lg-4 col-md-6">
					    <div class="location-info-details d-flex align-items-center">
					      <div class="location-img">
						     <router-link to="listing-grid-sidebar"><img  class="img-fluid" src="../../../assets/img/locations/uk.jpg" alt="locations"></router-link>
						  </div>
						  <div class="location-content">
						      <router-link to="listing-grid-sidebar">United Kingdom</router-link>
							  <p>20+ Ads Posted</p>
							  <router-link to="listing-grid-sidebar" class="view-detailsbtn">View Details</router-link>
						  </div>
						 </div>
					 </div>				   
					 <div class="location-info col-lg-4 col-md-6">
					    <div class="location-info-details d-flex align-items-center">
						  <div class="location-img">
							 <router-link to="listing-grid-sidebar.html"><img  class="img-fluid" src="../../../assets/img/locations/australia.jpg" alt="locations"></router-link>
						  </div>
						  <div class="location-content">
							  <router-link to="listing-grid-sidebar">Australia</router-link>
							  <p>20+ Ads Posted</p>
							  <router-link to="listing-grid-sidebar" class="view-detailsbtn">View Details</router-link>
						  </div>
						</div>
					 </div>
				     <div class="location-info col-lg-4 col-md-6">
					    <div class="location-info-details d-flex align-items-center">
						  <div class="location-img">
							 <router-link to="listing-grid-sidebar"><img class="img-fluid" src="../../../assets/img/locations/france.jpg" alt="locations"></router-link>
						  </div>
						  <div class="location-content">
						    <router-link to="listing-grid-sidebar">France</router-link>
							<p>20+ Ads Posted</p>
							<router-link to="listing-grid-sidebar" class="view-detailsbtn">View Details</router-link>
						  </div>
						</div>							 
					 </div>				 
					</div>				 
				</div>
				 <div class="align-items-center"><router-link to="listing-grid-sidebar" class="browse-btn">Browse Ads</router-link></div>
			</div>
		</section>		
		<!-- /Popular Locations Section -->
</template>