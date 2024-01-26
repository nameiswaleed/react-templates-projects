<template>
    <!--Galler Slider Section-->
		<div class="bannergallery-section">
		     <div class="gallery-slider d-flex">
                    <div class="gallery-widget" v-for="(src, index) in imgs" :key="index" @click="() => showImg(index)">   
							<img class="img-fluid" alt="Image" :src="require(`../../../assets/img/gallery/gallery1/${src.src}`)">
						
					</div>	
					<vue-easy-lightbox
						:visible="visible"
						:imgs="img"
						:index="index"
						@hide="handleHide"
					></vue-easy-lightbox>	
                    			
					<div class="showphotos">
						<a href="javascript:void(0)" data-fancybox="gallery1">... Show Photos</a>
					</div>								
			   </div>			
		</div>		
		<!--/Galler Slider Section-->
</template>

<script>
export default {
	data() {
		return {
			visible: false,
			index: 0, // default: 0
			imgs: [
					{
					src: "gallery-1.jpg",
					},
					{
					src: "gallery-2.jpg",
					},
					{
					src: "gallery-3.jpg"
					},
					{
					src: "gallery-4.jpg"
					}
				],
				img: [
					{
					src: "https://picsum.photos/785/501",
					},
					{
					src: "https://picsum.photos/785/502",
					},
					{
					src: "https://picsum.photos/785/503",
					},
					{
					src: "https://picsum.photos/785/504",
					}
				],
			
			};
		},
		methods: {
			showImg(index) {
			this.index = index;
			this.visible = true;
			},
			handleHide() {
			this.visible = false;
		},
	},
		
};
</script>