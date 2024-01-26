<template>
    <!-- Header -->
    <header class="header header-four">
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
                        <a id="menu_close" class="menu-close" href="javascript:void(0);"> <i class="fas fa-times"></i></a>
                    </div>
                  <navmenu />
                </div>
                <ul class="nav header-navbar-rht nav">
                    <li class="nav-item">
                        <div class="cta-btn">
                            <router-link to="/login" class="btn"><i class="feather-user"></i> sign in /</router-link>
                            <router-link to="/signup" class="btn ms-1"> register</router-link>
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