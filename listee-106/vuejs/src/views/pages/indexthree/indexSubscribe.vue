<template>
    <!-- Blog Section -->
		<section class="section-blk blog-block">
			<div class="container">				
				<div class="row text-center">		
					<div class="col-md-12">	
						<div class="title-blk justify-content-center text-center">
							<h2>Latest Blog</h2>
							<h5>Lorem Ipsum is simply dummy text of the printing</h5>
						</div>	
						<div class="testim-slider owl-carousel owl-theme">
							<Carousel :wrap-around="true" :settings="settings" :breakpoints="breakpoints">
                				<Slide v-for="item in IndexLatestBlog" :key="item.id">
									<div class="blog-slide">
										<div class="blog grid-blog">
											<div class="blog-image">
												<router-link to="/blog-details"><img class="img-fluid" :src="require(`../../../assets/img/blog/${item.image}`)" alt="Post Image"></router-link>
												<div :class="item.class">
													<p>{{item.badge}}</p>
												</div>
											</div>
											<div class="blog-content">
												<ul class="entry-meta meta-item mb-0">
													<li>
														<div class="post-author">
															<div class="post-author-img">
																<img :src="require(`../../../assets/img/profiles/${item.profile}`)" alt="Post Author">
															</div>
															<a href="javascript:void(0);" class="mb-0"> <span> {{item.name}} </span></a>
														</div>
													</li>
													<li class="date-icon"><i class="fa-solid fa-calendar-days"></i> {{item.date}}</li>
												</ul>
												<h3 class="blog-title"><router-link to="/blog-details">{{item.title}}</router-link></h3>
												<p class="blog-description">{{item.content}}</p>
												<p class="viewlink"><router-link to="/blog-details">{{item.detail}}<i class="feather-arrow-right"></i></router-link></p>
											</div>
										</div>
									</div>
								</Slide>
                    				<template #addons>
                        				<Navigation />
                    				</template>
            				</Carousel>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- /Blog Section -->
		
		<!-- Subscribe Banner -->
		<section class="section-blk subscribe-blk">
			<div class="container">
				<div class="row">
					<div class="col-sm-12">
						<div class="subscribe-style">
							<div class="row align-items-center">
								<div class="col-md-6 d-sm-none d-md-block">
									<div class="banner-blk">
										<img src="../../../assets/img/subscribe-bg.png" class="img-fluid" alt="">
									</div>
								</div>
								<div class="col-sm-12 col-md-6">
									<div class="banner-info">
										<h2>Your Travel Journey Starts Here</h2>
										<p>Sign up and we'll send the best deals to you</p>
										<div class="row justify-content-center">
											<div class="col-md-10">
												<div class="subscribe-blk bg-white">
													<div class="input-group align-items-center">
														<span class="input-group-text material-icons" id="basic-addon1">mail_outline</span>
														<input type="email" class="form-control" placeholder="Enter your email here" aria-label="email" aria-describedby="basic-addon1">
														<div class="subscribe-btn-grp">
															<input type="submit" class="btn" value="Subscribe">
															<img src="../../../assets/img/mail-check.png" alt="">
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>	
</template>

<script>
import IndexLatestBlog from '../../../assets/json/indexThreeLatestBlog.json'
import { Carousel, Pagination, Navigation, Slide } from "vue3-carousel";

export default {
	data() {
		return {
			IndexLatestBlog: IndexLatestBlog,
			settings: {
                itemsToShow: 1,
                snapAlign: "center"
            },
            breakpoints: {
                // 700px and up
                767: {
                    itemsToShow: 2,
                    snapAlign: "center"
                },
				 // 991 and up
				 991: {
                    itemsToShow: 2,
					snapAlign: "start"
                },
                // 1024 and up
                1000: {
                    itemsToShow: 3,
                    snapAlign: "start"
                }
            },
		}
	},
	components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
}
</script>

<style>
.blog-slide {
	margin-right: 24px;
}
</style>