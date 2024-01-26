<template>
    <!-- Blog List -->
		<div class="bloglisting">
		    <div class="container">
		        <div class="row">
			        <div class="col-lg-8">
						<div class="bloglist-widget">
						    <div class="blog grid-blog" v-for="item in BlogList" :key="item.id">
								<div class="blog-image">
									<router-link to="blog-details"><img class="img-fluid" :src="require(`../../../../assets/img/blog/${item.img1}`)" alt="Post Image"></router-link>
								</div>
							   	<div class="blog-content">
									<p class="blog-category">
									   <a href="javascript:void(0)"><span>Health</span></a><a href="javascript:void(0)"><span>Care</span></a>
									</p>
									<ul class="entry-meta meta-item">
										<li>
											<div class="post-author">
											     <div class="post-author-img">
										       	       <img :src="require(`../../../../assets/img/profiles/${item.img2}`)" alt="author">
												 </div>
											<a href="javascript:void(0)"><span> {{ item.name }} </span></a>
											</div>
										</li>
										<li class="date-icon"><i class="fa-solid fa-calendar-days"></i> {{ item.date }}</li>
									</ul>
									<h3 class="blog-title"><router-link to="blog-details">{{ item.title }}</router-link></h3>
									<p class="mb-0">{{ item.content }}</p>
									<div class="viewlink"><router-link to="blog-details">{{ item.button }}<i class="feather-arrow-right"></i></router-link></div>
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
				    <div class="col-lg-4 theiaStickySidebar">
						<div class="stickysidebar">
				        <div class="rightsidebar blogsidebar">
						    <div class="card">
						      <h4><img src="../../../../assets/img/details-icon.svg" alt="details-icon"> Filter</h4>
						      <div class="filter-content looking-input form-group">
								  <input type="text" class="form-control" placeholder="To Search type and hit enter">
							  </div>
							</div>
							<div class="card">
							    <h4><img src="../../../../assets/img/category-icon.svg" alt="details-icon"> Categories</h4>
							    <ul class="blogcategories-list">
							      <li><a href="javascript:void(0)">Accept Credit Cards</a></li>
							      <li><a href="javascript:void(0)">Smoking Allowed</a></li>
							      <li><a href="javascript:void(0)">Bike Parking</a></li>
							      <li><a href="javascript:void(0)">Street Parking</a></li>
							      <li><a href="javascript:void(0)">Wireless Internet</a></li>
							      <li><a href="javascript:void(0)">Pet Friendly</a></li>										   
							    </ul>
							</div>
							<div class="card tags-widget">
							    <h4><i class="feather-tag"></i> Tags</h4>
								<ul class="tags">
								   <li>Travelling </li>
								   <li>Art </li>
								   <li>Vacation </li>
								   <li>Tourism </li>
								   <li>Culture </li>
								   <li>Lifestyle </li>
								   <li>Travelling </li>
								   <li>Art </li>
								   <li>vacation </li>
								   <li>Tourism </li>
								   <li>Culture </li>								
								</ul>
							</div>
							<div class="card">
							    <h4><i class="feather-tag"></i> Article</h4>
								<div class="article">
								    <router-link to="blog-details" class="articleimg-1">
								        <ul>
										   <li><h6>Great Business Tips in 2022</h6></li>
										   <li class="date-icon"><i class="fa-solid fa-calendar-days"></i> October 6, 2022</li> 
									   </ul>
								    </router-link>								 
								</div>
								<div class="article">
								    <router-link to="blog-details" class="articleimg-2">
								       <ul>
										   <li><h6>Excited News About Fashion.</h6></li>
										   <li class="date-icon"><i class="fa-solid fa-calendar-days"></i> October 9, 2022</li> 
									   </ul>
								    </router-link>								 
								</div>
								<div class="article">
								    <router-link to="blog-details" class="articleimg-3">
								       <ul>
										   <li><h6>8 Amazing Tricks About Business</h6></li>
										   <li class="date-icon"><i class="fa-solid fa-calendar-days"></i> October 10, 2022</li> 
									   </ul>
								    </router-link>								 
								</div>
							</div>
						</div>
					</div>
				</div>
				</div>
			</div>				   
		</div>			
		<!-- /Blog List -->
</template>

<script>
import BlogList from '../../../../assets/json/blogList.json'
	export default {
		data() {
			return {
				BlogList: BlogList
			};
		},
	};
</script>