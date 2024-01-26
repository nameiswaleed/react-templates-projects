<template>
    <!-- Partners Section -->
		<div class="partners-section">
		    <div class="container">
		        <p class="partners-heading">Over 5,26,000+ Sponsers being contact with us</p>	
				
					<Carousel :autoplay="3000" :loop="true" :wrap-around="true" :settings="settings" :breakpoints="breakpoints">
                		<Slide  v-for="item in IndexPartners" :key="item.id">	
							<li class="carousel__item item">
								<a href="javascript:void(0);">
									<img class="img-fluid" :src="require(`../../../assets/img/partners/${item.img}`)" alt="partners">
								</a>
							</li>
						</Slide> 
						<template #addons>
							<Navigation />
						</template>
					</Carousel>
				
			</div>
		</div>		
		<!-- /Partners Section -->
</template>


<script>
import { Carousel, Slide, Navigation } from "vue3-carousel";
import IndexPartners from '../../../assets/json/indexPartners.json'
import "vue3-carousel/dist/carousel.css";


export default {
	data() {
		return {
			IndexPartners: IndexPartners,
			settings: {
				itemsToShow: 1,
				snapAlign: "center"
			},
		
			breakpoints: {
				575: {
					itemsToShow: 2.6,
					snapAlign: "center"
				},
                // 700px and up
                700: {
                    itemsToShow: 4,
                    snapAlign: "center"
                },
                // 1024 and up
                1024: {
                    itemsToShow: 6,
                    snapAlign: "start"
                }
            }
		}
	},
	components: {
    Carousel,
    Slide,
	Navigation
  },
}
</script>