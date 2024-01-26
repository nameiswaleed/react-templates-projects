<template>
	<!-- Main Content Section -->
	<div class="list-content">
		<div class="container-fluid">
			<div class="row">
				<div class="col-lg-6 listingmaplist-content">
					<div class="listmapgrid-content listmaplist-content">
						<div class="row sorting-div">
							<div class="col-lg-4 col-md-4 col-sm-4 align-items-center d-flex">
								<div class="count-search">
									<p>Showing <span>1-8</span> of 10 Results</p>
								</div>
							</div>
							<div class="col-lg-8 col-md-8 col-sm-8  align-items-center">
								<div class="sortbyset">
									<span class="sortbytitle">Sort by</span>
									<div class="sorting-select">
										<vue-select
											:options="Default"
											placeholder="Default"
										/>
									</div>
								</div>
								<div class="grid-listview">
									<ul>
										<li>
											<router-link to="#" class="active">
												<i class="feather-list"></i>
											</router-link>
										</li>
										<li>
											<router-link to="listingmap-grid">
												<i class="feather-grid"></i>
											</router-link>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div class="blog-listview">
							<div class="card" v-for="item in ListingMapList" :key="item.id">
								<div class="blog-widget">
									<div class="blog-img">
										<router-link to="service-details">
											<img :src="require(`../../../../assets/img/blog/${item.image}`)" class="img-fluid"
												alt="blog-img">
										</router-link>
										<div class="fav-item">
											<span class="Featured-text">Featured</span>
											<a href="javascript:void(0)" class="fav-icon">
												<i class="feather-heart"></i>
											</a>
										</div>
									</div>
									<div class="bloglist-content">
										<div class="card-body">
											<div class="blogfeaturelink">
												<div class="blog-features">
													<a href="javascript:void(0)">
														<span> 
															<i class="fa-regular fa-circle-stop"></i>
															{{item.text}}</span></a>
												</div>
												<div class="blog-author">
													<div class="blog-author-img">
														<img :src="require(`../../../../assets/img/profiles/${item.author}`)"
															alt="author">
													</div>
													<a href="javascript:void(0)">{{item.name}}</a>
												</div>
											</div>
											<h6><router-link to="service-details">{{item.title}}</router-link></h6>
											<div class="blog-location-details">
												<div class="location-info">
													<i class="feather-map-pin"></i>{{ item.location }}
												</div>
												<div class="location-info">
													<i class="feather-phone-call"></i>{{item.number}}
												</div>
												<div class="location-info">
													<i class="feather-eye"></i>{{item.view}}
												</div>
											</div>
											<p class="ratings">
												<span>4.0</span> ( 50 Reviews )
											</p>
											<div class="amount-details">
												<div class="amount">
													<span class="validrate">{{ item.offer }}</span>
													<span>{{item.price}}</span>
												</div>
												<router-link to="service-details">View details</router-link>
											</div>
										</div>
									</div>
								</div>
							</div>

						</div>

						<!--Pagination-->
						<div class="blog-pagination">
							<nav>
								<ul class="pagination">
									<li class="page-item previtem">
										<a class="page-link" href="#"><i class="fas fa-regular fa-arrow-left"></i>
											Prev</a>
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
										<a class="page-link" href="#">Next <i
												class="fas fa-regular fa-arrow-right"></i></a>
									</li>
								</ul>
							</nav>
						</div>
						<!--/Pagination-->

					</div>
				</div>
				<div class="col-lg-6 map-right">
					<div id="map" class="map-listing">
					</div>
					<div class="showfilter" v-on:click="filter = !filter"
                    		:class="{ filteropen: filter }">
						<button class="btn filterbtn">
							<span class="showfilter-btn"><img src="../../../../assets/img/details-icon.svg"
									alt="details-icon"> Show Filters</span>
							<span class="hidefilter-btn"><i class="feather-eye-off"></i> Hide Filters</span>
						</button>
						<div class="listings-sidebar">
							<div class="card">
								<h4><img src="../../../../assets/img/details-icon.svg" alt="details-icon"> Filter</h4>
								<form>
									<div class="filter-content looking-input form-group">
										<input type="text" class="form-control" placeholder="What are you looking for?">
									</div>
									<div class="filter-content form-group">
										<vue-select
											class="category-select"
											:options="Category"
											placeholder="Choose Category"
										/>
									</div>
									<div class="filter-content looking-input form-group">
										<div class="group-img">
											<input type="text" class="form-control" placeholder="Where to look?">
											<i class="feather-map-pin"></i>
										</div>
									</div>
									<div class="filter-content form-group region">
										<vue-select 
											:options="Region"
											class="region-select"
											placeholder="Region"
										/>	
									</div>
									<div class="filter-content form-group amenities">
										<h4> Amenities</h4>
										<ul>
											<li>
												<label class="custom_check">
													<input type="checkbox" name="wireless-internet">
													<span class="checkmark"></span> Wireless Internet
												</label>
											</li>
											<li>
												<label class="custom_check">
													<input type="checkbox" name="accept-credit-card">
													<span class="checkmark"></span> Accepts Credit Cards
												</label>
											</li>
											<li>
												<label class="custom_check">
													<input type="checkbox" name="Coupouns">
													<span class="checkmark"></span> Coupouns
												</label>
											</li>
											<li>
												<label class="custom_check">
													<input type="checkbox" name="parking-street">
													<span class="checkmark"></span> Parking Street
												</label>
											</li>
											<li>
												<label class="custom_check">
													<input type="checkbox" name="bike-parking">
													<span class="checkmark"></span> Bike Parking
												</label>
											</li>
											<li>
												<label class="custom_check">
													<input type="checkbox" name="Smoking-Allowed">
													<span class="checkmark"></span> Smoking Allowed
												</label>
											</li>
										</ul>
									</div>
									<div class="filter-content form-group amenities radius">
									    <div class="slidecontainer">
										    <div class="slider-info">
											    <h4> Radius</h4>
											    <div class="demo"><span>50</span> Radius</div>
											</div>
										    <div class="clearfix"></div>
											<div class="filter-range">
												<div class="card-body roundskin-slider">
                									<Slider v-model="value1" class="roundskin" />
              									</div>
											</div>
										</div>
									</div>
									<div class="filter-content amenities mb-0">
										<h4> Price Range</h4>
										<div class="form-group mb-0">
											<input type="text" class="form-control" placeholder="Min">
											<input type="text" class="form-control me-0" placeholder="Max">
										</div>
										<div class="search-btn">
											<b-button variant="primary" type="submit"> <i class="fa fa-search"
													aria-hidden="true"></i> Search</b-button>
											<b-button variant="reset mb-0" type="submit"> <i
													class="fas fa-light fa-arrow-rotate-right"></i> Reset
												Filters</b-button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- /Main Content Section -->
</template>

<script>
import Slider from "@vueform/slider";
import ListingMapList from '../../../../assets/json/listingMapList.json'

const icons = {
	'default': require('@/assets/img/icons/marker.png'),
	'icon2': require('@/assets/img/icons/marker1.png'),
	'icon3': require('@/assets/img/icons/marker2.png'),
	'icon4': require('@/assets/img/icons/marker3.png'),
	'icon5': require('@/assets/img/icons/marker4.png'),
	'icon6': require('@/assets/img/icons/marker5.png'),
	'icon7': require('@/assets/img/icons/marker6.png'),
	'icon8': require('@/assets/img/icons/marker7.png')
};
const locations = [
			{
				"id":1,
				"doc_name":"Audi A6 1.8 TFSI 201",
				"address":"Alabama, USA",
				"amount":"$350",
				"lat":53.470692,
				"lng":-2.220328,
				"icons":"default",
				"total_review":"Fixed",
				"image":'car-img.jpg'
			}, 
			{	
				"id":2,
				"doc_name":"Amsterdam",
				"address":"Newyork, USA",
				"amount":"$50",
				"lat":53.469189,
				"lng":-2.199262,
				"icons":"icon2",
				"total_review":"Fixed",
				"image":'amsterdam.jpg'
			}, 
			{
				"id":3,
				"doc_name":"Fresh organic herbs",
				"address":"Georgia, USA",
				"amount":"$100",
				"lat":53.468665,
				"lng":-2.189269,
				"icons":"icon3",
				"total_review":"Fixed",
				"image":'foodhabits.jpg'
			}, 
			{
				"id":4,
				"doc_name":"Light Wool Navy Blazer",
				"address":"Louisiana, USA",
				"amount":"$150",
				"lat":53.463894,
				"lng":-2.177880,
				"icons":"icon4",
				"total_review":"Fixed",
				"image":'fashion.jpg'
			},
			{
				"id":5,
				"doc_name":"Easy Ways To Learn",
				"address":"Michigan, USA",
				"amount":"$50",
				"lat":53.460359,
				"lng":-2.210394,
				"icons":"icon7",
				"total_review":"Fixed",
				"image":'education.jpg'
			},
			{
				"id":6,
				"doc_name":"Joyful dog",
				"address":"Texas, USA",
				"amount":"$100",
				"lat":53.463906,
				"lng":-2.213271,
				"icons":"icon5",
				"total_review":"Fixed",
				"image":'petanimal.jpg'	
			}, 
			{
				"id":7,
				"doc_name":"Apple iPhone 6 16GB 4G LTE",
				"address":"Kansas, USA",
				"amount":"$450",
				"lat":53.468974,
				"lng":-2.210661,
				"icons":"icon6",
				"total_review":"Fixed",
				"image":'apple-phone.jpg'
			}
		];
export default {
	components: {
			Slider,
		},
	data() {
		return {
			filter: false,
			ListingMapList: ListingMapList,
			Default: ["Default", "Price Low to High", "Price High to Low"],
			Category: ["Computer", "Electronics", "Car wash"],
			Region: ["Region", "Canada", "USA", "india"],
			value1: 50,
			icons: icons,
			locations: locations
		}
	},
	mounted() {
		google.maps.visualRefresh = true;
		var slider, infowindow = null;
		var bounds = new google.maps.LatLngBounds();
		var map, current = 0;
		

		function show() {
			infowindow.close();
		if (!map.slide) {
			return;
		}
			var next, marker;
			if (locations.length == 0 ) {
			return
			} else if (locations.length == 1 ) {
			next = 0;
			}
			if (locations.length >1) {
			do {
				next = Math.floor (Math.random()*locations.length);
			} while (next == current)
			}
			current = next;
			marker = locations[next];
			setInfo(marker);
			infowindow.open(map, marker);
		}

		function initialize() {
			var bounds = new google.maps.LatLngBounds();
			var mapOptions = {
				zoom: 14,
				center: new google.maps.LatLng(53.470692, -2.220328),
				scrollwheel: false,
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				
			};
		
			map = new google.maps.Map(document.getElementById('map'), mapOptions);
			map.slide = true;

			setMarkers(map, locations);
			infowindow = new google.maps.InfoWindow({
				content: "loading..."
			});
			google.maps.event.addListener(infowindow, 'closeclick',function(){
			infowindow.close();
			});
			slider = window.setTimeout(show, 3000);
		}

		function setInfo(marker) {
		const content = `
			<div class="profile-widget" style="width: 276px; background: url(${require(`@/assets/img/${marker.image}`)}) center center / cover no-repeat; position: relative; padding: 90px 0; display: inline-block; border-radius: 10px;">
				<div class="pro-content">
					<h3 class="title">
						<a href="javascript:void(0)">${marker.doc_name}</a>
					</h3>
					<ul class="available-info">
						<li class="mapaddress"><i class="fas fa-map-marker-alt me-2"></i>${marker.address}</li>
						<li class="map-amount">${marker.amount}<span class="d-inline-block average-rating"> (${marker.total_review})</span></li>
					</ul>
				</div>
			</div>
		`;
		infowindow.setContent(content);
	}


		function setMarkers(map, markers) {
		for (var i = 0; i < markers.length; i++) {
			var item = markers[i];
			var latlng = new google.maps.LatLng(item.lat, item.lng);
			var marker = new google.maps.Marker({
				position: latlng,
				map: map,
				doc_name: item.doc_name,
				address: item.address,
				next_available: item.next_available,
				amount: item.amount,
				profile_link: item.profile_link,
				total_review: item.total_review,
				animation: google.maps.Animation.DROP,
				icon: icons[item.icons],
				image: item.image
				});
				bounds.extend(marker.position);
				markers[i] = marker;
				google.maps.event.addListener(marker, "click", function () {
					setInfo(this);
					infowindow.open(map, this);
					window.clearTimeout(slider);
				});
			}
			map.fitBounds(bounds);
		google.maps.event.addListener(map, 'zoom_changed', function() {
			if (map.zoom > 16) map.slide = false;
		});
		}

		google.maps.event.addDomListener(window, 'load', initialize);
	},
}
</script>

<style>
.roundskin .slider-connect {
  background: var(--slider-connect-bg, #c10037) !important;
  cursor: pointer;
  height: 13px;
}
.roundskin .slider-base, .slider-connects {
	height: 13px !important;
}
.roundskin .slider-base,
.slider-connects {
  height: 4px;
  position: relative;
  width: 100%;
  border-radius: 4px;
}

.roundskin .slider-tooltip {
  background: var(--slider-tooltip-bg, #c10037) !important;
  border: 1px solid var(--slider-tooltip-bg, #c10037) !important;
  border-radius: var(--slider-tooltip-radius, 5px);
  color: var(--slider-tooltip-color, #fff);
  display: block;
  font-size: var(--slider-tooltip-font-size, 0.875rem);
  font-weight: var(--slider-tooltip-font-weight, 600);
  line-height: var(--slider-tooltip-line-height, 1.25rem);
  min-width: var(--slider-tooltip-min-width, 20px);
  padding: var(--slider-tooltip-py, 2px) var(--slider-tooltip-px, 6px);
  position: absolute;
  text-align: center;
  white-space: nowrap;
}

.roundskin-slider .slider-horizontal .slider-handle {
  top: calc(
    (var(--slider-handle-height, 30px) - var(--slider-height, 12px)) / 2 * -1 + 2px
  );
  width: 24px;
  height: 24px;
  position: absolute;
  display: block;
  border: 3px solid #fff;
  background-color: #c10037;
  border-radius: 24px;
  box-shadow: none;
}

</style>
<style src="@vueform/slider/themes/default.css"></style>