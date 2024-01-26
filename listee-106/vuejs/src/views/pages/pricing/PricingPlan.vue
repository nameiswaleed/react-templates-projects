<template>
    <!-- Pricing Plan Section -->
		<section class="pricingplan-section pricing-page">
		     	<div class="section-heading">
						<div class="container">				
							 <div class="row text-center">
									<h2>Our Pricing <span>Pla</span>n</h2>
									<p>checkout these latest cool ads from our members</p>
							 </div>									 
						</div>	 
				</div>
				<div class="container">
					<div class="row">
					    <div class="col-lg-3 d-flex col-md-6" v-for="item in IndexPricing" :key="item.id">
						    <div class="price-card flex-fill">
								<div class="price-head">
									<div class="price-level">
										<h6>{{ item.title }}</h6>
									</div>
									<h4>{{ item.price }}<span>{{ item.month }}</span></h4>								
								</div>	
								<div class="price-body">
									<p>{{ item.content }}</p>
									<ul>
										<li class="active">{{ item.basic }}</li>
										<li class="active">{{ item.one }}</li>
										<li class="active">{{ item.days }}</li>
										<li class="inactive">{{ item.limit }}</li>
										<li class="inactive">{{ item.edit }}</li>
									</ul>
									<div>
										<router-link to="/login" class="btn viewdetails-btn">{{ item.view }}</router-link>
									</div>							
								</div>							
						    </div>
						</div>
						
					</div>
				</div>
		</section>
		<!-- /Pricing Plan Section -->
</template>

<script>
import IndexPricing from '../../../assets/json/indexPricing.json'
export default {
	data() {
		return {
			IndexPricing: IndexPricing
		}
	},
}
</script>