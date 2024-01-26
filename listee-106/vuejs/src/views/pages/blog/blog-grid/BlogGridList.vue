<template>
    <!-- Blog List -->
		<div class="bloglist-section blog-gridpage">
		    <div class="container">
		        <div class="row">
		            <div class="col-lg-4 col-md-4 d-lg-flex" v-for="item in BlogGrid" :key="item.id">
				      <div class="blog grid-blog">
						<div class="blog-image">
		    				<router-link to="/blog-details"><img class="img-fluid" :src="require(`../../../../assets/img/blog/${item.img1}`)" alt="Post Image"></router-link>
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
									 <a href="javascript:void(0)"> <span> {{ item.name }} </span></a>
									</div>
								</li>
								<li class="date-icon"><i class="fa-solid fa-calendar-days"></i> {{ item.date }}</li>
							</ul>
							<h3 class="blog-title"><router-link to="blog-details">{{ item.title }}</router-link></h3>
								<p class="blog-description">{{ item.content }}</p>
								<div class="viewlink"><router-link to="blog-details.">{{ item.button }}<i class="feather-arrow-right"></i></router-link></div>
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
		<!-- /Blog List -->
</template>

<script>
import BlogGrid from '../../../../assets/json/blogGrid.json'

	export default {
		data() {
			return {
				BlogGrid: BlogGrid
			};
		},
	};
</script>