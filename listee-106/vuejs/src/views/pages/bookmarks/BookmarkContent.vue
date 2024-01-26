<template>
    <!-- Bookmark Content -->
    <div class="dashboard-content">		
			<div class="container">
				<div class="">			        
					<ul class="dashborad-menus">
						<li>
							<router-link to="dashboard">
								<i class="feather-grid"></i> <span>Dashboard</span>
                            </router-link>
						</li>
						<li>
							<router-link to="profile">
								<i class="fa-solid fa-user"></i> <span>Profile</span>
                            </router-link>
						</li>
						<li>
							<router-link to="my-listing">
								<i class="feather-list"></i> <span>My Listing</span>
                            </router-link>
						</li>
						<li class="active">
							<router-link to="bookmarks">
								<i class="fas fa-solid fa-heart"></i> <span>Bookmarks</span>
                            </router-link>
						</li>
						<li>
							<router-link to="messages">
								<i class="fa-solid fa-comment-dots"></i> <span>Messages</span>
                            </router-link>
						</li>
						<li>
							<router-link to="reviews">
								<i class="fas fa-solid fa-star"></i> <span>Reviews</span>
                            </router-link>
						</li>
						<li>
							<router-link to="login">
								<i class="fas fa-light fa-circle-arrow-left"></i> <span>Logout</span>
                            </router-link>
						</li>
					</ul>											
				</div>
				<div class="bookmarks-content grid-view featured-slider">
				    <div class="row">
					    <div class="col-lg-4 col-md-4 col-sm-6" v-for="item in Bookmarks" :key="item.id">
							<div class="card aos aos-init aos-animate" data-aos="fade-up">
				    			<div class="blog-widget">
									<div class="blog-img">
										<router-link to="service-details">
											<img :src="require(`../../../assets/img/list/${item.img1}`)" class="img-fluid" alt="blog-img">
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
												<img :src="require(`../../../assets/img/profiles/${item.img2}`)" alt="author">	
												</div>
												<div class="blog-features">
												   <a href="javascript:void(0)"><span> <i class="fa-regular fa-circle-stop"></i> {{ item.text }}</span></a>
												</div>																	  
												<div class="blog-author text-end"> 
													<span>  
														<img :src="require(`../../../assets/img/${item.eye}`)" alt="electronics">4000  
													</span>
												</div>
											</div> 
											<h6><router-link to="service-details">{{ item.title }}</router-link></h6>																	 
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
						<!--/Pagination-->	
						
					</div>						
				</div>
			</div>		
		</div>		
		<!-- /Bookmark Content -->
</template>

<script>
import Bookmarks from '../../../assets/json/bookmarks.json'
	export default {
		data() {
			return {
				Bookmarks: Bookmarks
			}
		},
	}
</script>