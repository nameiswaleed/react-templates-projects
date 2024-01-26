<template>
    <!-- Main Content Section -->
		<div class="list-content">
		    <div class="container">
		        <div class="row">
		            <div class="col-lg-4 theiaStickySidebar">
			            <div class="listings-sidebar stickysidebar">
						    <div class="card">
				                <h4><img src="../../../../assets/img/details-icon.svg" alt="details-icon"> Filter</h4>
							    <b-form>
								    <div class="filter-content looking-input form-group">
									  <b-form-input type="text" class="form-control" placeholder="What are you looking for?" />
									</div> 
									<div class="filter-content form-group">  
										<vue-select 
											:options="Works"
											placeholder="Choose Category"
										/>
									</div>
									<div class="filter-content looking-input form-group input-placeholder">
										<div class="group-img">
										  <b-form-input type="text" class="form-control" placeholder="Where to look?" />
										  <i class="feather-map-pin"></i>
									    </div>
									</div>
									<div class="filter-content form-group region">
										<vue-select 
											:options="Region"
											placeholder="Region"
										/>						  
									</div>
									<div class="filter-content form-group amenities">
									    <h4> Amenities</h4>
										<ul>
											<li>
												<label class="custom_check">
												<input type="checkbox" name="wireless-internet">
												<span class="checkmark"></span> Wireless Internet
												</label>
											</li>
											<li>
												<label class="custom_check">
												<input type="checkbox" name="accept-credit-card">
												<span class="checkmark"></span> Accepts Credit Cards 
										    	 </label>
											</li>
											<li>
												<label class="custom_check">
												<input type="checkbox" name="Coupouns">
												<span class="checkmark"></span> Coupouns
										        </label>
											</li>
											<li>
												<label class="custom_check">
												<input type="checkbox" name="parking-street">
												<span class="checkmark"></span> Parking Street
												</label>
											</li>
											<li>
												<label class="custom_check">
												<input type="checkbox" name="bike-parking">
												<span class="checkmark"></span> Bike Parking
												</label>
											</li>
											<li>
												<label class="custom_check">
												<input type="checkbox" name="Smoking-Allowed">
												<span class="checkmark"></span> Smoking Allowed
												</label>
											</li>
										</ul>
									</div>
									<div class="filter-content form-group amenities radius">
									    <div class="slidecontainer">
										    <div class="slider-info">
											    <h4> Radius</h4>
											    <div class="demo"><span>50</span> Radius</div>
											</div>
										    <div class="clearfix"></div>
											<div class="filter-range">
												<div class="card-body roundskin-slider">
                									<Slider v-model="value1" class="roundskin" />
              									</div>
											</div>
										</div>
									</div>									
									<div class="filter-content amenities mb-0">
    									<h4> Price Range</h4>
										<div class="form-group mb-0">
											<b-form-input type="text" class="form-control" placeholder="Min" />
										     <b-form-input type="text" class="form-control me-0" placeholder="Max" />
										</div>
										<div class="search-btn">
											<b-button variant="primary" type="submit"> <i class="fa fa-search" aria-hidden="true"></i> Search</b-button>
											<b-button variant="reset mb-0" type="submit"> <i class="fas fa-light fa-arrow-rotate-right"></i> Reset Filters</b-button>
										</div>  
									</div>
								</b-form>
							</div>
						</div>
					</div>
					<div class="col-lg-8">
                        <div class="row sorting-div">
							<div class="col-lg-4 col-md-4 col-sm-4 align-items-center d-flex">
								<div class="count-search">
									<p>Showing <span>1-8</span> of 10 Results</p>
								</div>
							</div>
							<div class="col-lg-8 col-md-8 col-sm-8  align-items-center">
					            <div class="sortbyset">
						            <span class="sortbytitle">Sort by</span>
					    			<div class="sorting-select">
										<vue-select 
										class="select"
										:options="Default"
										placeholder="Default"/>
                        			</div>
								</div>
								<div class="grid-listview">
								    <ul>
									    <li>
										    <router-link to="listing-list-sidebar">
											    <i class="feather-list"></i>
                                            </router-link>
										</li>
										<li>
											<router-link to="listing-grid-sidebar"  class="active">
											    <i class="feather-grid"></i>
                                            </router-link>
										</li>
									</ul>
								</div>
							</div>
						</div>
					    <div class="grid-view listgrid-sidebar">
						    <div class="row">
							    <div class="col-lg-6 col-md-4" v-for="item in ListingGridSidebar" :key="item.id">
							        <div class="card">
								        <div class="blog-widget">
								            <div class="blog-img">
										        <router-link to="service-details">
													<img :src="require(`../../../../assets/img/list/${item.img1}`)" class="img-fluid" alt="blog-img">
                                                </router-link>
                                                <div class="fav-item">
											    	<span class="Featured-text">Featured</span>
													<a href="javascript:void(0)" class="fav-icon">
														<i class="feather-heart"></i>
													</a>										
												</div>	
                                            </div>
											<div class="bloglist-content">
											    <div class="card-body">
												    <div class="blogfeaturelink">
													    <div class="grid-author">
															<img :src="require(`../../../../assets/img/profiles/${item.img2}`)" alt="author">
														</div>													 
													    <div class="blog-features">
													       <a href="javascript:void(0)"><span> <i class="fa-regular fa-circle-stop"></i> {{ item.text }}</span></a>
                                                        </div>																	  
												        <div class="blog-author text-end"> 
														    <span>  <i class="feather-eye"></i>4000  </span>
														</div>
													</div> 
                                                    <h6><router-link to="service-details">{{ item.content }}</router-link></h6>																	 
													    <div class="blog-location-details">
													        <div class="location-info">
															    <i class="feather-map-pin"></i> {{ item.location }}
														    </div>
														    <div class="location-info">
														        <i class="fa-solid fa-calendar-days"></i> {{ item.date }}
															</div>
														</div>
														<div class="amount-details">
															<div class="amount">
															    <span class="validrate">{{ item.offer }}</span>
															    <span>{{ item.price }}</span>
															</div>
															<div class="ratings">
																<span>{{ item.rating }}</span> (50)
												            </div>															
														</div>	
												</div>	
											</div>			 
										</div> 
									</div>
								</div>
								
						</div>
					</div>
					
					<!--Pagination--> 
					<div class="blog-pagination">
						<nav>
					     	<ul class="pagination">
								<li class="page-item previtem">
						        	<a class="page-link" href="#"><i class="fas fa-regular fa-arrow-left"></i> Prev</a>
								</li>
								<li class="justify-content-center pagination-center"> 
									<div class="pagelink">
									    <ul>
											<li class="page-item">
												<a class="page-link" href="#">1</a>
											</li>
											<li class="page-item active">
												<a class="page-link" href="#">2 <span class="visually-hidden">(current)</span></a>
											</li>
											<li class="page-item">
												<a class="page-link" href="#">3</a>
										   </li>
										    <li class="page-item">
											    <a class="page-link" href="#">...</a>
											</li>
											<li class="page-item">
												<a class="page-link" href="#">14</a>
											</li>
									   </ul>
								    </div>													
								</li>													
								<li class="page-item nextlink">
	    							<a class="page-link" href="#">Next <i class="fas fa-regular fa-arrow-right"></i></a>
								</li>
							</ul>
						</nav>
     			     </div>
				     <!--Pagination-->
					 
					</div>
		        </div>
	        </div>			  
        </div>
		<!-- /Main Content Section -->		
</template>

<script>
import Slider from "@vueform/slider";
import ListingGridSidebar from '../../../../assets/json/listingGridSidebar.json'

	export default {
		components: {
			Slider,
		},
		data(){
			return{
				ListingGridSidebar: ListingGridSidebar,
				Works: ["Computer", "Electronics", "Car wash"],
				Region: ["Region", "Canada", "USA", "india"],
				Default: ["Default", "Price Low to High", "Price High to Low"],
				value1: 50
			};
		},
		mounted() {
			$('.fav-icon').on('click', function () {
			$(this).toggleClass('selected');
		});
		},
	};
</script>

<style>
.roundskin .slider-connect {
  background: var(--slider-connect-bg, #c10037) !important;
  cursor: pointer;
  height: 13px;
}
.roundskin .slider-base, .slider-connects {
	height: 13px !important;
}
.roundskin .slider-base,
.slider-connects {
  height: 4px;
  position: relative;
  width: 100%;
  border-radius: 4px;
}

.roundskin .slider-tooltip {
  background: var(--slider-tooltip-bg, #c10037) !important;
  border: 1px solid var(--slider-tooltip-bg, #c10037) !important;
  border-radius: var(--slider-tooltip-radius, 5px);
  color: var(--slider-tooltip-color, #fff);
  display: block;
  font-size: var(--slider-tooltip-font-size, 0.875rem);
  font-weight: var(--slider-tooltip-font-weight, 600);
  line-height: var(--slider-tooltip-line-height, 1.25rem);
  min-width: var(--slider-tooltip-min-width, 20px);
  padding: var(--slider-tooltip-py, 2px) var(--slider-tooltip-px, 6px);
  position: absolute;
  text-align: center;
  white-space: nowrap;
}

.roundskin-slider .slider-horizontal .slider-handle {
  top: calc(
    (var(--slider-handle-height, 30px) - var(--slider-height, 12px)) / 2 * -1 + 2px
  );
  width: 24px;
  height: 24px;
  position: absolute;
  display: block;
  border: 3px solid #fff;
  background-color: #c10037;
  border-radius: 24px;
  box-shadow: none;
}

</style>
<style src="@vueform/slider/themes/default.css"></style>