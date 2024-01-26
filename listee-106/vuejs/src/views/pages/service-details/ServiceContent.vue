<template>
    <!--Details Main  Section-->
		<div class="details-main-wrapper">	
            <div class="container">
			        <div class="row">
					  <div class="col-lg-9">                             					
							<div class="card ">
								<div class="card-header">
									<span class="bar-icon">
									<span></span>
									<span></span>
									<span></span>
									</span> 
									<h4>Description</h4>
								</div>
								<div class="card-body">
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
									<p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
								</div>
							</div>					
								
						<!--Listing Features Section-->
                        <div class="card ">
							<div class="card-header">
									<i class="feather-list"></i>
									<h4>Listing Features</h4>
							</div>
							<div class="card-body">
							  <div class="lisiting-featues">
							    <div class="row">
							        <div class="featureslist d-flex align-items-center col-lg-4 col-md-4">
									    <div class="feature-img">
										       <img src="../../../assets/img/featured/Feature-1.svg" alt="Room amenties" >
									    </div>
										<div class="featues-info">
										     <h6>Room <br> amenities</h6>
										</div>
									</div>
									<div class="featureslist d-flex align-items-center col-lg-4 col-md-4">
									    <div class="feature-img">
									      <img src="../../../assets/img/featured/Feature-2.svg" alt="Bathroom amenities" >
									    </div>
										<div class="featues-info">
										    <h6>Bathroom <br> amenities</h6>
										</div>
									</div>
									<div class="featureslist d-flex align-items-center col-lg-4 col-md-4">
									    <div class="feature-img">
									      <img src="../../../assets/img/featured/Feature-3.svg" alt="Media Technology" >
									    </div>
										<div class="featues-info">
										    <h6>Media & Technology <br> amenities</h6>
										</div>
									</div>
									<div class="featureslist d-flex align-items-center col-lg-4 col-md-4">
									    <div class="feature-img">
									      <img src="../../../assets/img/featured/Feature-4.svg" alt="Food Security" >
									    </div>
										<div class="featues-info">
										    <h6>Food & Security  <br> amenities</h6>
										 </div>
									</div>
									<div class="featureslist d-flex align-items-center col-lg-4 col-md-4">
									    <div class="feature-img">
									      <img src="../../../assets/img/featured/Feature-5.svg" alt="Media Technology" >
									    </div>
										<div class="featues-info">
										    <h6>Services & Extra <br> amenities</h6>
										</div>
									</div>
									<div class="featureslist d-flex align-items-center col-lg-4 col-md-4">
									    <div class="feature-img">
									      <img src="../../../assets/img/featured/Feature-6.svg" alt="Media Technology">
									    </div>
										<div class="featues-info">
										     <h6>Outdoor & View <br> amenities</h6>
										</div>
									</div>
									<div class="featureslist d-flex  access-feature align-items-center col-lg-4 col-md-4">
									    <div class="feature-img">
									      <img src="../../../assets/img/featured/Feature-7.svg" alt="Media Technology">
									    </div>
										<div class="featues-info">
										    <h6>Accessibility <br> amenities</h6>
										</div>
									</div>
									<div class="featureslist d-flex align-items-center access-feature col-lg-4 col-md-4">
									    <div class="feature-img">
									      <img src="../../../assets/img/featured/Feature-8.svg" alt="Media Technology">
									    </div>
										<div class="featues-info">
										    <h6>Safety & Security<br> amenities</h6>
										</div>
									</div>
									</div>
								</div>	
							</div>	
                        </div>									
						<!--/Listing Features Section-->
							
                        <!--Gallery Section-->							   
                        <div class="card gallery-section ">
							<div class="card-header ">
								<img src="../../../assets/img/galleryicon.svg" alt="gallery">
								<h4>Gallery</h4>
							</div>
							<div class="card-body">
							  <div class="gallery-content">
							    <div class="row">
								    <div class="col-lg-3 col-md-3 col-sm-3" v-for="(src, index) in imgs" :key="index" @click="() => showImg(index)">
										<div class="gallery-widget">	
											<a href="javascript:void()" data-fancybox="gallery1">
												<img class="img-fluid" alt="Image" :src="require(`../../../assets/img/gallery/${src.src}`)">
											</a>
										</div>								
									</div>

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
						<!--/Gallery Section-->
						
						<!--Ratings Section-->
						<div class="card ">
							<div class="card-header  align-items-center">
								<i class="feather-star"></i>
								<h4>Ratings</h4>
							</div>
							<div class="card-body">
						        <div class="ratings-content">											
									<div class="row">
									    <div class="col-lg-3">
								          <div class="ratings-info">
								 	        <p class="ratings-score"><span>4</span>/5</p>
											<p>OVERALL</p>
											<p> <i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fa-regular fa-star"></i></p>
											<p>Based on Listing</p>
								 		  </div>   
										</div>
										<div class="col-lg-9">
										   <div class="ratings-table table-responsive">
										     <table class="">
										        <tr>
											       <td class="star-ratings"><i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i></td>
											        <td class="scrore-width"><span> </span></td>
													<td> 0</td>														   
												</tr>
												<tr>
												    <td class="star-ratings" ><i class="fas fa-star filled"></i>
												    	<i class="fas fa-star filled"></i>
														<i class="fas fa-star filled"></i>
														<i class="fas fa-star filled"></i>
														<i class="fa-regular fa-star rating-color"></i>
													</td>
												    <td class="scrore-width selected"><span> </span></td>
												    <td> 1</td>														   
												</tr>
												<tr>
												    <td class="star-ratings"><i class="fas fa-star filled"></i>
														<i class="fas fa-star filled"></i>
														<i class="fas fa-star filled"></i>
														<i class="fa-regular fa-star rating-color"></i>
														<i class="fa-regular fa-star rating-color"></i></td>
												    <td class="scrore-width"><span> </span></td>
												    <td> 0</td>														   
												</tr>
												<tr>
												    <td class="star-ratings">
														<i class="fas fa-star filled"></i>
													    <i class="fas fa-star filled"></i>
														<i class="fa-regular fa-star rating-color"></i>
														<i class="fa-regular fa-star rating-color"></i>
														<i class="fa-regular fa-star rating-color"></i>
													</td>
													<td class="scrore-width"><span> </span></td>
													<td> 0</td>														   
												</tr>
												<tr>
												    <td class="star-ratings"><i class="fas fa-star filled"></i>
														<i class="fa-regular fa-star rating-color"></i>
														<i class="fa-regular fa-star rating-color"></i>
														<i class="fa-regular fa-star rating-color"></i>
														<i class="fa-regular fa-star rating-color"></i></td>
												    <td class="scrore-width"><span> </span></td>
												    <td> 0</td>														   
												</tr>
											</table>
									      </div>
									    </div>
									</div>
								</div>
							</div>
						</div>							
						<!--/Ratings Section-->

						<servicereview />	
						
                        <!--/Review Section-->	
							
					</div>
					<div class="col-lg-3 theiaStickySidebar">
						<div class="stickysidebar">
						<div class="rightsidebar">
						    <div class="card">
						     <h4><img  src="../../../assets/img/details-icon.svg" alt="details-icon"> Details</h4>
						     <ul>
							    <li>Contract <span>For Rent</span></li>
							    <li>Location <span>New York, USA</span></li>
							    <li>Year Built <span>1988</span></li>
							    <li>Rooms <span>3</span></li>
							    <li>Beds <span>4</span></li>
							    <li>Baths<span>8</span></li>
							    <li>Gadgets <span>6</span></li>
							    <li>Home Area <span>30sqft</span></li>
							    <li>Lot Dimensions <span>30*30*20 ft</span></li>
							    <li class="p-0">Lot Area <span>50 ft</span></li>
							 </ul>
							</div>
							<div class="card">
							    <h4><img src="../../../assets/img/breifcase.svg" alt=""> Business Info</h4>
							    <div class="map-details">
								  <div class="map-frame">
								    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.2238528387797!2d-122.41637708468208!3d37.78479337975754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858090475dcdc3%3A0x417fdbbd16e076ed!2s484%20Ellis%20St%2C%20San%20Francisco%2C%20CA%2094102%2C%20USA!5e0!3m2!1sen!2sin!4v1669879954211!5m2!1sen!2sin" width="200" height="160" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
								  </div>							  
								  <ul class="info-list">
								    <li><i class="feather-map-pin"></i> 484, Ellis st, San Fransisco,<br>CS 94102, United States</li>
								    <li><i class="feather-phone-call"></i> + 62 8245 9875</li>
								    <li><i class="feather-mail"></i> support@listee.com</li>
								    <li><img src="../../../assets/img/website.svg" alt="website"> www.listee.com</li>
								    <li class="socialicons pb-0">
									 <a href="#" target="_blank"><i class="fab fa-facebook-f"></i> </a>
									 <a href="#" target="_blank"><i class="fab fa-twitter"></i></a>
									 <a href="#" target="_blank"><i class="fab fa-instagram"></i></a>
									 <a href="#" target="_blank"><i class="fab fa-linkedin-in"></i></a>
								    </li>
								  </ul>
								</div>
							</div>
							<div class="card">
							    <h4><img src="../../../assets/img/statistic-icon.svg" alt="location"> Statisfic</h4>
							    <ul class="statistics-list">
								    <li><div class="statistic-details"><span class="icons"><i class="fa-regular fa-eye"></i></span>
								       Views </div><span class="text-end"> 453563</span></li>
									<li><div class="statistic-details"><span class="icons"><i class="feather-star"></i></span>
									   Ratings </div><span class="text-end"> 153</span></li>
									<li><div class="statistic-details"><span class="icons"><i class="feather-heart"></i></span>
										 Favuorites </div><span class="text-end"> 123</span></li>
									<li class="mb-0"><div class="statistic-details"><span class="icons"><i class="feather-share-2"></i></span>
									     Shares </div><span class="text-end"> 50</span></li>
								</ul>
							</div>
						    <div class="card">
							    <h4> <i class="feather-user"></i> Author</h4>
							    <div class="sidebarauthor-details align-items-center">
								   <div class="sideauthor-img">
								     <img src="../../../assets/img/profiles/avatar-12.jpg" alt="author">
								   </div>
								   <div class="sideauthor-info">
								       <p class="authorname">Johnson</p>
								       <p >Member since Nov 24, 2017</p>
								   </div>
								</div>
							</div>
							<div class="card mb-0">
							    <h4> <i class="feather-phone-call"></i> Contact Business</h4>
							     	<b-form class="contactbusinessform">
										<div class="form-group">
										   <b-form-input type="text" class="form-control" placeholder="Name" />
										</div>
										<div class="form-group">
										   <b-form-input type="email" class="form-control" placeholder="Email Address" />
										</div>
                            			<div class="form-group">
       										<textarea rows="6" class="form-control"  placeholder="Message" ></textarea>
							    		</div>
										<div class="submit-section">
											<b-button variant="primary submit-btn" type="submit">Send Message</b-button>
										</div>
									</b-form>
							</div>
						</div>
					</div>
					</div>
				</div>
			</div>		
		</div>		
		<!-- /Details Main Section -->
</template>

<script>
import ServiceGallery from '../../../assets/json/serviceGallery.json'
export default {
	data() {
		return {
			ServiceGallery: ServiceGallery,
			visible: false,
			index: 0, // default: 0
			imgs: [
					{
					src: "galleryimg-1.jpg",
					},
					{
					src: "galleryimg-2.jpg",
					},
					{
					src: "galleryimg-3.jpg"
					},
					{
					src: "galleryimg-11.jpg"
					},
					{
					src: "galleryimg-9.jpg"
					},
					{
					src: "galleryimg-10.jpg"
					},
					{
					src: "galleryimg-11.jpg"
					},
					{
					src: "galleryimg-2.jpg"
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
					},
					{
					src: "https://picsum.photos/785/507",
					},
					{
					src: "https://picsum.photos/785/508",
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
}
</script>

