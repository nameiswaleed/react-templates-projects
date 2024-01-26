<template>
	<!-- Dashboard Content -->
	<div class="dashboard-content">
		<div class="container">
			<div class="">
				<ul class="dashborad-menus">
					<li class="active">
						<router-link to="dashboard">
							<i class="feather-grid"></i> <span>Dashboard</span>
						</router-link>
					</li>
					<li>
						<router-link to="profile">
							<i class="fa-solid fa-user"></i> <span>Profile</span>
						</router-link>
					</li>
					<li>
						<router-link to="my-listing">
							<i class="feather-list"></i> <span>My Listing</span>
						</router-link>
					</li>
					<li>
						<router-link to="bookmarks">
							<i class="fas fa-solid fa-heart"></i> <span>Bookmarks</span>
						</router-link>
					</li>
					<li>
						<router-link to="messages">
							<i class="fa-solid fa-comment-dots"></i> <span>Messages</span>
						</router-link>
					</li>
					<li>
						<router-link to="reviews">
							<i class="fas fa-solid fa-star"></i> <span>Reviews</span>
						</router-link>
					</li>
					<li>
						<router-link to="login">
							<i class="fas fa-light fa-circle-arrow-left"></i> <span>Logout</span>
						</router-link>
					</li>
				</ul>
			</div>
			<div class="dashboard-details">
				<div class="row">
					<div class="col-lg-3 col-md-3 " v-for="item in Dashboard" :key="item.id">
						<div class="card dash-cards">
							<div class="card-body">
								<div class="dash-top-content">
									<div class="dashcard-img">
										<img :src="require(`../../../assets/img/icons/${item.image}`)" class="img-fluid"
											alt="">
									</div>
								</div>
								<div class="dash-widget-info">
									<h6>{{ item.title }}</h6>
									<h3 class="counter">{{ item.count }}</h3>
								</div>
							</div>
						</div>
					</div>

				</div>

				<!-- dashboard-info -->
				<div class="row dashboard-info">
					<div class="col-lg-6 d-flex">
						<div class="card dash-cards w-100">
							<div class="card-header">
								<h4>Page Views</h4>
								<div class="card-dropdown">
									<ul>
										<li class="nav-item dropdown has-arrow logged-item">
											<router-link to="#" class="dropdown-toggle pageviews-link"
												data-bs-toggle="dropdown" aria-expanded="false">
												<span>This week</span>
											</router-link>
											<div class="dropdown-menu dropdown-menu-end">
												<a class="dropdown-item" href="javascript:void();">Next Week</a>
												<a class="dropdown-item" href="javascript:void()">Last Month</a>
												<a class="dropdown-item" href="javascript:void()">Next Month</a>
											</div>
										</li>
									</ul>
								</div>
							</div>
							<div class="card-body">
								<apexchart type="radar" height="350" 
									:options="radarChart.chart"
									:series="radarChart.series">
								</apexchart>
							</div>
						</div>
					</div>
					<div class="col-lg-6 d-flex">
						<div class="card dash-cards w-100">
							<div class="card-header">
								<h4>Visitor Review</h4>
								<div class="card-dropdown">
									<ul>
										<li class="nav-item dropdown has-arrow logged-item">
											<router-link to="#" class="dropdown-toggle pageviews-link"
												data-bs-toggle="dropdown" aria-expanded="false">
												<span>All Listing</span>
											</router-link>
											<div class="dropdown-menu dropdown-menu-end">
												<a class="dropdown-item" href="javascript:void(0)">Next Week</a>
												<a class="dropdown-item" href="javascript:void(0)">Last Month</a>
												<a class="dropdown-item" href="javascript:void(0)">Next Month</a>
											</div>
										</li>
									</ul>
								</div>
							</div>
							<div class="card-body">
								<ul class="review-list" v-for="item in DashboardReview" :key="item.id">
									<li class="review-box">
										<div class="review-profile">
											<div class="review-img">
												<img :src="require(`../../../assets/img/profiles/${item.image}`)"
													class="img-fluid" alt="img">
											</div>
										</div>
										<div class="review-details">
											<h6>{{ item.name }}</h6>
											<div class="rating">
												<div class="rating-star">
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
												</div>
												<div><i class="fa-sharp fa-solid fa-calendar-days"></i>{{ item.date }}</div>
												<div>{{ item.test }}</div>
											</div>
											<p>{{ item.content }}</p>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<!-- /dashboard-info -->
			</div>
		</div>
	</div>
	<!-- /Dashboard Content -->
</template>

<script>
import Dashboard from '../../../assets/json/dashboard.json'
import DashboardReview from '../../../assets/json/dashboardReview.json'
import {
	radarChart
}
from "./data";
export default {
	data() {
		return {
			Dashboard: Dashboard,
			DashboardReview: DashboardReview,
			radarChart: radarChart
		}
	},
}
</script>