<template>
    <!-- Category Section -->	
	<section class="category-section">
	    <div class="container">
	        <div class="section-heading">
		    <div class="row align-items-center">
	            <div class="col-md-6 aos aos-init aos-animate" data-aos="fade-up">
					<h2>Our  <span class="title-left">Cat</span>egory</h2>
					<p>Buy and Sell Everything from Used Our Top Category</p>
				</div>
				<div class="col-md-6 text-md-end aos aos-init aos-animate" data-aos="fade-up">
					<router-link to="/categories" class="btn btn-view">View All</router-link>
				</div>		
			 </div>			     
	        </div>	
        	<div class="row" >
				<div class="col-lg-2 col-md-3 col-sm-6" v-for="item in IndexCategory" :key="item.id">
				    <router-link to="/categories" class="category-links">
					        <h5>{{ item.title }}</h5>
						    <span>{{ item.text}}</span>
						    <img :src="require(`../../../assets/img/icons/${item.img}`)" alt="icons" />
					</router-link> 
				</div>
				
			</div>			   
		</div>		
	</section>
		<!-- /Category Section -->
</template>

<script>
import IndexCategory from '../../../assets/json/indexCategory.json'

export default {
	data(){
		return{
			IndexCategory: IndexCategory
		}
	}
}
</script>