<template>
    <!-- Blog  Section -->
		<section class="blog-section-four">
            <div class="container">	
				<div class="row">
					<div class="col-md-8">
						<div class="section-heading heading-four aos" data-aos="fade-up">
							<h2>From Our Blog</h2>
							<p>Search for coworking spaces in our most popular cities</p>
						</div>	
					</div>
					<div class="col-md-4 text-md-end aos" data-aos="fade-up">
						<div class="interset-btn">	
							<router-link to="/blog-grid" class="btn btn-primary more-btn">View More <i class="feather-arrow-right"></i></router-link>
						</div>
					</div>
				</div> 									
				<div class="row">
                    <div class="col-lg-3 col-md-6 d-flex aos" data-aos="fade-up" v-for="item in IndexFourBlog" :key="item.id">
						<div class="blog grid-blog blog-four flex-fill">
						    <div class="blog-image">
								<router-link to="/blog-details"><img class="img-fluid" :src="require(`../../../assets/img/blog/${item.img1}`)" alt="Post Image"></router-link>
							</div>
							<div class="blog-content">
						     	<h3 class="blog-title"><router-link to="/blog-details">{{ item.title }}</router-link></h3>
								<ul class="entry-meta meta-item">
									<li>
										<div class="post-author">
											<div class="post-author-img">
												<img :src="require(`../../../assets/img/profiles/${item.img2}`)" alt="Post Author">
											</div>
											<div>
												<a href="javascript:void(0);"> <span>{{ item.name }}</span></a>
												<p>{{ item.date }}</p>
												<h6>{{ item.hotel}}</h6>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>									
			</div>	 
		</section>
		<!-- /Blog  Section -->
</template>

<script>
import IndexFourBlog from '../../../assets/json/indexFourBlog.json'
    export default {
        data() {
            return {
                IndexFourBlog: IndexFourBlog
            };
        },
    };
</script>