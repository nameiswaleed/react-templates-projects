<template>
	<!-- Dashboard Content -->
	<div class="dashboard-content">
		<div class="container">
			<div class="">
				<ul class="dashborad-menus">
					<li>
						<router-link to="/dashboard">
							<i class="feather-grid"></i> <span>Dashboard</span>
						</router-link>
					</li>
					<li>
						<router-link to="/profile">
							<i class="fa-solid fa-user"></i> <span>Profile</span>
						</router-link>
					</li>
					<li class="active">
						<router-link to="/my-listing">
							<i class="feather-list"></i> <span>My Listing</span>
						</router-link>
					</li>
					<li>
						<router-link to="/bookmarks">
							<i class="fas fa-solid fa-heart"></i> <span>Bookmarks</span>
						</router-link>
					</li>
					<li>
						<router-link to="/messages">
							<i class="fa-solid fa-comment-dots"></i> <span>Messages</span>
						</router-link>
					</li>
					<li>
						<router-link to="/reviews">
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
			<div class="dash-listingcontent dashboard-info">
				<div class="dash-cards card">
					<div class="card-header">
						<h4>My Listings</h4>
						<router-link class="nav-link header-login add-listing" to="/add-listing"><i
								class="fa-solid fa-plus"></i> Add Listing</router-link>
					</div>
					<div class="card-body">
						<div class="listing-search">
							<div class="filter-content form-group">
								<div class="group-img">
									<input type="text" class="form-control" placeholder="Search...">
									<i class="feather-search"></i>
								</div>
							</div>
							<div class="sorting-div">
								<div class="sortbyset">
									<span class="sortbytitle">Sort by</span>
									<div class="sorting-select">
										<vue-select :options="Newest" placeholder="Newest" />
									</div>
								</div>
							</div>
						</div>
						<div class="table-responsive">
							<a-table
                    class="stripped table-hover listing-table datatable"
                    :columns="columns"
                    :data-source="data"
                    @change="onChange"
                  >
                    <template #bodyCell="{ column, record }">
                      <template
                        v-if="column.key === 'image'"
                      >
					  <div class="listingtable-img">
							<router-link to="/service-details">
								<img class="img-fluid avatar-img"
									:src="require(`../../../assets/img/list/${record.image}`)" alt="">
							</router-link>
						</div>
                      </template>
                      <template v-else-if="column.key === 'id'">
						<h6>
							<router-link to="/service-details">{{record.title}}</router-link>
						</h6>
						<div class="listingtable-rate">
							<a href="javascript:void(0)" class="cat-icon"><i
									class="fa-regular fa-circle-stop"></i>  Electronics </a> <span
								class="discount-amt">$350000.00</span><span
								class="fixed-amt">$40000</span>
						</div>
						<p>Mauris vestibulum lorem a condimentum vulputate</p>
                      </template>
                      <template v-else-if="column.key === 'status'">
                        <span :class="record.class">{{record.status}}</span>
                      </template>
					  <template v-else-if="column.key === 'views'">
                        <span class="views-count">{{record.views}}</span>
                      </template>
                      <template v-else-if="column.key === 'action'">
                        <div class="action">
							<a href="javascript:void(0)" class="action-btn btn-view"><i
									class="feather-eye"></i></a>
							<a href="javascript:void(0)" class="action-btn btn-edit"><i
									class="feather-edit-3"></i></a>
							<a href="javascript:void(0)" class="action-btn btn-trash"><i
									class="feather-trash-2"></i></a>
						</div>
                      </template>
                    </template>
                  </a-table>
					</div>
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
										</ul>
									</div>
								</li>
								<li class="page-item nextlink">
									<a class="page-link" href="#">Next <i class="fas fa-regular fa-arrow-right"></i></a>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<!-- /Dashboard Content -->
</template>
<script>
const columns = [
  {
    title: "Image",
    dataIndex: "image",
    key: "image",
	sorter: {
      compare: (a, b) => {
        a = a.image.toLowerCase();
        b = b.image.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Details",
    dataIndex: "title",
	key: "id",
    sorter: {
      compare: (a, b) => {
        a = a.title.toLowerCase();
        b = b.title.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Status",
    dataIndex: "status",
	key: "status",
    sorter: {
      compare: (a, b) => {
        a = a.status.toLowerCase();
        b = b.status.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Views",
    dataIndex: "views",
    key: "views",
    sorter: {
      compare: (a, b) => {
        a = a.views.toLowerCase();
        b = b.views.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Action",
    key: "action",
    class: "text-end",
    sorter: true,
  },
];

const data =[
    {
        id: 1,
        image: "tablelist-1.jpg",
        title: "Villa 457 sq.m. In Benidorm Fully Qquipped House",
        class: "status-text",
        status: "Published",
        views: "1523"
    },
    {
        id: 2,
        image: "tablelist-2.jpg",
        title: "CDL A OTR Compnay Driver Job-N",
        class: "status-text",
        status: "Published",
        views: "1523"
    },
    {
        id: 3,
        image: "tablelist-3.jpg",
        title: "HP Gaming 15.6 Touchscren 12G",
        class: "status-text",
        status: "Published",
        views: "1523"
    },
    {
        id: 4,
        image: "tablelist-4.jpg",
        title: "2012 AudiR8 GT Spider Convrtibile",
        class: "status-text",
        status: "Published",
        views: "1523"
    },
    {
        id: 5,
        image: "tablelist-5.jpg",
        title: "2017 Gulfsteam Ameri-Lite",
        class: "status-text",
        status: "Published",
        views: "1523"
    },
    {
        id: 6,
        image: "tablelist-6.jpg",
        title: "Fashion Luxury Men Date",
        class: "status-text",
        status: "Published",
        views: "1523"
    },
    {
        id: 7,
        image: "tablelist-7.jpg",
        title: "Apple iPhone 6 16GB 4G LTE",
        class: "status-text",
        status: "Published",
        views: "1523"
    },
    {
        id: 8,
        image: "tablelist-8.jpg",
        title: "Customized Apple iMac 21.5″ All-In",
        class: "status-text unpublish",
        status: "Un Published",
        views: "1523"
    }

]
export default {
	data() {
		return {
			
			Newest: ["Newest", "Newest", "Oldest"],
			data,
			columns,
		}
	}
}
</script>