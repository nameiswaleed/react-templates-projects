<template>
    <!-- Header -->
    <header class="header">
        <div class="container">
            <nav class="navbar navbar-expand-lg header-nav">
                <div class="navbar-header">
                    <a id="mobile_btn" href="javascript:void(0);">
                        <span class="bar-icon">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </a>
                    <router-link to="/" class="navbar-brand logo">
					    <img src="../assets/img/logo.svg" class="img-fluid" alt="Logo">
				    </router-link>	
                </div>
                <div class="main-menu-wrapper">
                    <div class="menu-header">
                        <router-link to="/" class="menu-logo">
                            <img src="../assets/img/logo.svg" class="img-fluid" alt="Logo">
                        </router-link>
                        <a id="menu_close" class="menu-close" href="javascript:void(0);"> <i
                                class="fas fa-times"></i></a>
                    </div>
                    <navmenu />
                </div>
                <ul class="nav header-navbar-rht">
					    <li class="nav-item">
							<router-link class="nav-link header-login add-listing" to="add-listing"><i class="fa-solid fa-plus"></i> Add Listing</router-link>
						</li>
						<li class="nav-item dropdown has-arrow logged-item">
							<a href="#" class="dropdown-toggle profile-userlink" data-bs-toggle="dropdown" aria-expanded="false">
								<img src="../assets/img/profile-img.jpg" alt="">
								<span>John Doe</span>
							</a>
							<div class="dropdown-menu dropdown-menu-end">
								<router-link class="dropdown-item" to="/dashboard">Dashboard</router-link>
								<router-link class="dropdown-item" to="/profile">Profile Settings</router-link>
								<router-link class="dropdown-item" to="/login">Logout</router-link>
							</div>
						</li>						
					</ul>
            </nav>
        </div>
    </header>
    <!-- /Header -->
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    mounted() {
        $('body').append('<div class="sidebar-overlay"></div>');
	$(document).on('click', '#mobile_btn', function () {
		$('main-wrapper').toggleClass('slide-nav');
		$('.sidebar-overlay').toggleClass('opened');
		$('html').addClass('menu-opened');
		return false;
	});

	$(document).on('click', '.sidebar-overlay', function () {
		$('html').removeClass('menu-opened');
		$(this).removeClass('opened');
		$('main-wrapper').removeClass('slide-nav');
	});

	$(document).on('click', '#menu_close', function () {
		$('html').removeClass('menu-opened');
		$('.sidebar-overlay').removeClass('opened');
		$('main-wrapper').removeClass('slide-nav');
	});
    },
}
</script>