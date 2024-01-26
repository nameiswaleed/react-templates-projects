<template>
    <!-- Activities Banner -->
		<section class="section-blk activities-blk">
			<div class="container">
				<div class="row">
					<div class="col-sm-12">
						<div class="title-blk justify-content-center text-center">
							<h2 class="m-0">Top destinations with Activities</h2>
						</div>	
						<div class="row row-gap-14">
							<div class="col-sm-6 col-lg-3" v-for="item in IndexActivity" :key="item.id">
								<div class="shadow-box d-flex">
									<div class="flex-shrink-0">
										<div class="icon-blk rounded-circle overflow-hidden">
											<img :src="require(`../../../assets/img/${item.image}`)" alt="Dreamstrip Activities">
											
										</div>
									</div>
									<div class="flex-grow-1 ms-3">
										<h4>{{item.country}}</h4>
										<p>{{item.content}}</p>
									</div>
								</div>									
							</div>
							
						</div>
					</div>			
				</div>
			</div>
		</section>
		<!-- /Activities Banner -->
</template>

<script>
import IndexActivity from '../../../assets/json/indexThreeActivity.json'
export default {
	data() {
		return {
			IndexActivity: IndexActivity
		}
	},
}
</script>