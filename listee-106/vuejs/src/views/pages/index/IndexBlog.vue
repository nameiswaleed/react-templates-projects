<template>
    <!-- Blog  Section -->
		<section class="blog-section">
			<div class="section-heading">
					<div class="container">				
			     		<div class="row align-items-center">
							<div class="col-md-6 aos aos-init aos-animate" data-aos="fade-up">
								<h2>Lat<span class="title-right">est</span> Blog</h2>
								<p>people are giving these goods for free so check them out</p>
							</div>
							<div class="col-md-6 text-md-end aos aos-init aos-animate" data-aos="fade-up">
									<router-link to="/blog-grid" class="btn  btn-view">View All</router-link>
							</div>		
						</div>	
					</div>	
			</div>
            <div class="container">	 									
				<div class="row">
                    <div class="col-lg-4 col-md-4 d-flex" v-for="item in IndexBlog" :key="item.id">
						    <div class="blog grid-blog">
						     	<div class="blog-image">
									<router-link to="/blog-details"><img class="img-fluid" :src="require(`../../../assets/img/blog/${item.img1}`)" alt="Post Image" /></router-link>
								</div>
								<div class="blog-content">
									<p class="blog-category">
									   <a href="javascript:void(0);"><span>Health</span></a><a href="javascript:void(0);"><span>Care</span></a>
									</p>
									<ul class="entry-meta meta-item">
										<li>
											<div class="post-author">
												<div class="post-author-img">
													<img :src="require(`../../../assets/img/profiles/${item.img2}`)" alt="Post Author">
												</div>
												<a href="javascript:void(0);" class="mb-0"> <span> {{ item.name }} </span></a>
											</div>
										</li>
										<li class="date-icon"><i class="fa-solid fa-calendar-days"></i> {{ item.date}}</li>
									</ul>
							     	<h3 class="blog-title"><router-link to="blog-details">The Best Spa Saloons for your relaxations?</router-link></h3>
									<p class="blog-description">Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur em adipiscing elit,</p>
									<p class="viewlink"><router-link to="blog-details">View Details <i class="feather-arrow-right"></i></router-link></p>
								</div>
							</div>
					</div>		
				</div>									
			</div>	 
		</section>
		<!-- /Blog  Section -->
</template>

<script>

import IndexBlog from '../../../assets/json/indexBlog.json'

export default {
	data() {
		return {
			IndexBlog: IndexBlog
		}
	},
}
</script>