<template>
    <!-- Pricing Plan Section -->
		<section class="pricing-section">
				<div class="container">
					<div class="row">
						<div class="col-md-8">
							<div class="section-heading heading-four aos" data-aos="fade-up">
								<h2>Our Pricing Plan</h2>
								<p>Search for coworking spaces in our most popular cities</p>
							</div>	
						</div>
						<div class="col-md-4 text-md-end aos" data-aos="fade-up">
							<div class="interset-btn">						
								<div class="status-toggle d-inline-flex align-items-center">
									Monthly
									<input type="checkbox" id="status_1" class="check">
									<label for="status_1" class="checktoggle">checkbox</label>
									Yearly
								</div>
							</div>
						</div>
					</div>
					<div class="price-wrap">
						<div class="row">
							<div class="col-lg-3 col-md-6 d-flex aos" data-aos="fade-up">
								<div class="price-card price-four flex-fill">
										<div>
									<div class="price-head">
										<h4>$10 <span>/ month</span></h4>	
										<div class="price-level">
											<h6>Starter</h6>
										</div>							
									</div>	
									<div class="price-body">
										<p>Unleash the power of automation.</p>
										<ul>
											<li class="active">Multi-step Zaps</li>
											<li class="active">3 Premium Apps</li>
											<li class="active">2 Users team</li>
										</ul>							
									</div>
									</div>
										<div>
											<router-link to="/login" class="btn viewdetails-btn">View details</router-link>
										</div>							
								</div>
							</div>
							<div class="col-lg-3 col-md-6 d-flex aos" data-aos="fade-up">
								<div class="price-card price-four flex-fill">
									<div>
										<div class="price-head">
											<h4>$54 <span>/ month</span></h4>
											<div class="price-level">
												<h6>Professional</h6>
											</div>									
										</div>	
										<div class="price-body">
											<p>Advanced tools to take your work to the next level.</p>
											<ul>
												<li class="active">Multi-step Zaps</li>
												<li class="active">3 Premium Apps</li>
												<li class="active">50 Users team</li>
												<li class="active">Shared Workspace</li>
											</ul>						
										</div>
									</div>
									<div>
										<router-link to="/login" class="btn viewdetails-btn">View details</router-link>
									</div>							
								</div>	
							</div>
							<div class="col-lg-3 col-md-6 aos" data-aos="fade-up">
								<div class="price-card price-four active">
									<div>
										<div class="price-head">
											<div class="text-end">
												<span class="feature">MOST POPULAR</span>
											</div>
											<h4>$89 <span>/ month</span></h4>
											<div class="price-level">
												<h6>Company</h6>
											</div>									
										</div>	
										<div class="price-body">
											<p>Automation plus enterprise-grade features.</p>
											<ul>
												<li class="active">Multi-step Zap</li>
												<li class="active">Unlimited Premium Apps</li>
												<li class="active">Unlimited Users Team</li>
												<li class="active">Advanced Admin</li>
												<li class="active">Custom Data Retention</li>
											</ul>							
										</div>							
									</div>
									<div>
										<router-link to="/login" class="btn viewdetails-btn">View details</router-link>
									</div>							
								</div>
							</div>
							<div class="col-lg-3 col-md-6 d-flex aos" data-aos="fade-up">
								 <div class="price-card price-four flex-fill">
									<div>
										<div class="price-head">
											<h4>$54 <span>/ month</span></h4>
											<div class="price-level">
												<h6>Professional</h6>
											</div>									
										</div>	
										<div class="price-body">
											<p>Advanced tools to take your work to the next level.</p>
											<ul>
												<li class="active">Multi-step Zaps</li>
												<li class="active">3 Premium Apps</li>
												<li class="active">50 Users team</li>
												<li class="active">Shared Workspace</li>
											</ul>						
										</div>
									</div>
									<div>
										<router-link to="/login" class="btn viewdetails-btn">View details</router-link>
									</div>								
								</div>
							</div>
						</div>
					</div>
				</div>
		</section>
		<!-- /Pricing Plan Section -->
</template>