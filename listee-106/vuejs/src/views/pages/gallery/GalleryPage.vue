<template>
	<!-- Gallery section-->
	<div class="gallerypage-info">
		<div class="container">
			<div class="gallery-content">
				<div class="row">
					<div class="col-lg-3 col-md-3 col-sm-3" v-for="(src, index) in imgs" :key="index" @click="() => showImg(index)">
						<div class="gallery-widget">
							<a href="javascript:void()" data-fancybox="gallery2">
								<img :src="require(`../../../assets/img/gallery/gallery2/${src.src}`)" class="img-fluid"
									alt="Image">
							</a>
						</div>
					</div>
					<vue-easy-lightbox 
						:visible="visible" 
						:imgs="img" :index="index" 
						@hide="handleHide"
					></vue-easy-lightbox>

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
												<a class="page-link" href="#">2 <span
														class="visually-hidden">(current)</span></a>
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
		</div>
	</div>
	<!-- /Gallery section-->
</template>

<script>
export default {
	data() {
		return {
			visible: false,
			index: 0, // default: 0
			imgs: [
				{
					src: "galleryimage-1.jpg",
				},
				{
					src: "galleryimage-2.jpg",
				},
				{
					src: "galleryimage-3.jpg"
				},
				{
					src: "galleryimage-4.jpg"
				},
				{
					src: "galleryimage-5.jpg"
				},
				{
					src: "galleryimage-6.jpg"
				},
				{
					src: "galleryimage-7.jpg"
				},
				{
					src: "galleryimage-8.jpg"
				},
				{
					src: "galleryimage-9.jpg"
				},
				{
					src: "galleryimage-10.jpg"
				},
				{
					src: "galleryimage-12.jpg"
				},
				{
					src: "galleryimage-3.jpg"
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
				},
				{
					src: "https://picsum.photos/785/505",
				},
				{
					src: "https://picsum.photos/785/506",
				},
				{
					src: "https://picsum.photos/785/507",
				},
				{
					src: "https://picsum.photos/785/508",
				},
				{
					src: "https://picsum.photos/785/509",
				},
				{
					src: "https://picsum.photos/785/510",
				},
				{
					src: "https://picsum.photos/785/511",
				},
				{
					src: "https://picsum.photos/785/512",
				},
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