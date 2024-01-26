<template>
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
                <ul class="nav header-navbar-rht">
                    <li class="nav-item">
                        <router-link class="nav-link header-reg" to="/signup">Sign Up</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link header-login" to="/login"> Sign In</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link header-login" to="/add-listing">Add Listing <i class="fa-solid fa-plus"></i></router-link>
                    </li>
		        </ul>
            </nav>
        </div>
    </header>
</template>


<script>
export default {
    mounted() {
            const handlesidebar=()=>{
            document.body.classList.toggle('mini-sidebar');
        }
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