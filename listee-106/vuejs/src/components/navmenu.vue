<template>
    <ul class="main-nav">
        <li class="has-submenu megamenu" :class="IndexMenu ? 'active' : 'notactive'"
            >
            <router-link to="/">Home <i class="fas fa-chevron-down"></i></router-link>
            <ul class="submenu mega-submenu">
                <li>
                    <div class="megamenu-wrapper">
                        <div class="row">
                            <div class="col-lg-2">
                                <div class="single-demo">
                                    <div class="demo-img">
                                        <router-link to="/"><img src="../assets/img/home-01.jpg" class="img-fluid"
                                                alt="img"></router-link>
                                    </div>
                                    <div class="demo-info">
                                        <router-link to="/">Home 1</router-link>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-2">
                                <div class="single-demo">
                                    <div class="demo-img">
                                        <router-link to="/index-2"><img src="../assets/img/home-02.jpg" class="img-fluid"
                                                alt="img"></router-link>
                                    </div>
                                    <div class="demo-info">
                                        <router-link to="/index-2">Home 2</router-link>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-2">
                                <div class="single-demo">
                                    <div class="demo-img">
                                        <router-link to="/index-3"><img src="../assets/img/home-03.jpg"
                                                class="img-fluid" alt="img"></router-link>
                                    </div>
                                    <div class="demo-info">
                                        <router-link to="/index-3">Home 3</router-link>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-2">
                                <div class="single-demo">
                                    <div class="demo-img">
                                        <router-link to="index-4"><img src="../assets/img/home-04.jpg" class="img-fluid"
                                                alt="img"></router-link>
                                    </div>
                                    <div class="demo-info">
                                        <router-link to="/index-4">Home 4</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </li>
        <li class="has-submenu" :class="ListingsMenu ? 'active' : 'notactive'">
            <a href="javascript:void()">Listings <i class="fas fa-chevron-down"></i></a>
            <ul class="submenu">
                <li :class="currentPath == 'listing-grid' ? 'active' : 'notactive'"><router-link to="listing-grid">Listing
                        Grid</router-link></li>
                <li :class="currentPath == 'listing-grid-sidebar' ? 'active' : 'notactive'"><router-link
                        to="listing-grid-sidebar">Listing Grid Sidebar</router-link></li>
                <li :class="currentPath == 'listing-list-sidebar' ? 'active' : 'notactive'"><router-link
                        to="listing-list-sidebar">Listing List Sidebar</router-link></li>
                <li :class="currentPath == 'listingmap-list' ? 'active' : 'notactive'"><router-link
                        to="listingmap-list">Listing List Map</router-link></li>
                <li :class="currentPath == 'listingmap-grid' ? 'active' : 'notactive'"><router-link
                        to="listingmap-grid">Listing Grid Map</router-link></li>
            </ul>
        </li>
        <li class="has-submenu" :class="PagesMenu ? 'active' : 'notactive'">
            <a href="javascript:void()">Pages <i class="fas fa-chevron-down"></i></a>
            <ul class="submenu">
                <li :class="currentPath == 'about' ? 'active' : 'notactive'"><router-link to="/about">About Us</router-link>
                </li>
                <li :class="currentPath == 'service-details' ? 'active' : 'notactive'"><router-link
                        to="/service-details">Service Details </router-link></li>
                <li :class="currentPath == 'pricing' ? 'active' : 'notactive'"><router-link
                        to="/pricing">Pricing</router-link></li>
                <li :class="currentPath == 'faq' ? 'active' : 'notactive'"><router-link to="/faq">FAQ</router-link></li>
                <li :class="currentPath == 'gallery' ? 'active' : 'notactive'"><router-link
                        to="/gallery">Gallery</router-link></li>
                <li :class="currentPath == 'categories' ? 'active' : 'notactive'"><router-link
                        to="/categories">Category</router-link></li>
                <li :class="currentPath == 'howitworks' ? 'active' : 'notactive'"><router-link to="/howitworks">How it
                        Works</router-link></li>
                <li :class="currentPath == 'terms-condition' ? 'active' : 'notactive'"><router-link
                        to="/terms-condition">Terms & Conditions</router-link></li>
                <li :class="currentPath == 'privacy-policy' ? 'active' : 'notactive'"><router-link
                        to="/privacy-policy">Privacy Policy</router-link></li>
                <li :class="currentPath == 'error-404' ? 'active' : 'notactive'"><router-link to="/error-404">404
                        Error</router-link></li>
                <li :class="currentPath == 'error-500' ? 'active' : 'notactive'"><router-link to="/error-500">500
                        Error</router-link></li>
            </ul>
        </li>
        <li class="has-submenu" :class="UserMenu ? 'active' : 'notactive'">
            <a href="javascript:void()">User Pages <i class="fas fa-chevron-down"></i></a>
            <ul class="submenu">
                <li :class="currentPath == 'dashboard' ? 'active' : 'notactive'"><router-link
                        to="/dashboard">Dashboard</router-link></li>
                <li :class="currentPath == 'profile' ? 'active' : 'notactive'"><router-link
                        to="/profile">Profile</router-link></li>
                <li :class="currentPath == 'my-listing' ? 'active' : 'notactive'"><router-link to="/my-listing">My
                        Listing</router-link></li>
                <li :class="currentPath == 'bookmarks' ? 'active' : 'notactive'"><router-link
                        to="/bookmarks">Bookmarks</router-link></li>
                <li :class="currentPath == 'messages' ? 'active' : 'notactive'"><router-link
                        to="/messages">Messages</router-link></li>
                <li :class="currentPath == 'reviews' ? 'active' : 'notactive'"><router-link
                    to="/reviews">Reviews</router-link></li>
            <li :class="currentPath == 'add-listing' ? 'active' : 'notactive'"><router-link to="/add-listing">Add
                    Listing</router-link></li>
        </ul>
    </li>
    <li class="has-submenu" :class=" BlogMenu ? 'active' : 'notactive'">
        <a href="javascript:void()">Blog <i class="fas fa-chevron-down"></i></a>
        <ul class="submenu">
            <li :class="currentPath == 'blog-list' ? 'active' : 'notactive'"><router-link to="/blog-list">Blog
                    List</router-link></li>
            <li :class="currentPath == 'blog-grid' ? 'active' : 'notactive'"><router-link to="/blog-grid">Blog
                    Grid</router-link></li>
            <li :class="currentPath == 'blog-details' ? 'active' : 'notactive'"><router-link to="/blog-details">Blog
                    Details</router-link></li>
            <li :class="currentPath == 'blog-list-sidebar' ? 'active' : 'notactive'"><router-link
                    to="/blog-list-sidebar">Blog List Sidebar</router-link></li>
            <li :class="currentPath == 'blog-grid-sidebar' ? 'active' : 'notactive'"><router-link
                    to="/blog-grid-sidebar">Blog Grid Sidebar</router-link></li>
        </ul>
    </li>
    <li v-bind:class="{'active': currentPath == 'contact'}">
        <router-link to="contact">Contact</router-link>
    </li>
    <li class="login-link">
        <router-link to="/signup">Sign Up</router-link>
    </li>
    <li class="login-link">
        <router-link to="/login">Sign In</router-link>
    </li>
</ul>
</template>

<script>
    export default {
        components: {
        
        },
        mounted() {
            if ($(window).width() <= 991) {
            var Sidemenu = function () {
                this.$menuItem = $('.main-nav a');
            };

            function init() {
                var $this = Sidemenu;
                $('.main-nav a').on('click', function (e) {
                    if ($(this).parent().hasClass('has-submenu')) {
                        e.preventDefault();
                    }
                    if (!$(this).hasClass('submenu')) {
                        $('ul', $(this).parents('ul:first')).slideUp(350);
                        $('a', $(this).parents('ul:first')).removeClass('submenu');
                        $(this).next('ul').slideDown(350);
                        $(this).addClass('submenu');
                    } else if ($(this).hasClass('submenu')) {
                        $(this).removeClass('submenu');
                        $(this).next('ul').slideUp(350);
                    }
                });
            }
            init();
        }
        },
        computed:{
            currentPath() {
                return this.$route.name
            },
            IndexMenu() {
                return this.$route.name == 'index' || this.$route.name == 'index-2' || this.$route.name == 'index-3' || this.$route.name == 'index-4';
            },
            ListingsMenu() {
                return this.$route.name == 'listing-grid' || this.$route.name == 'listing-grid-sidebar' || this.$route.name == 'listing-list-sidebar' || this.$route.name == 'listingmap-list'  || this.$route.name == 'listingmap-grid';
            },
            PagesMenu() {
                return this.$route.name == 'about' || this.$route.name == 'service-details' || this.$route.name == 'pricing' || this.$route.name == 'faq' || this.$route.name == 'gallery' || this.$route.name == 'categories'
                || this.$route.name == 'howitworks' || this.$route.name == 'terms-condition' || this.$route.name == 'privacy-policy' || this.$route.name == 'error-404' || this.$route.name == 'error-500';
            },
            UserMenu() {
                return this.$route.name == 'dashboard' || this.$route.name == 'profile' || this.$route.name == 'my-listing' || this.$route.name == 'bookmarks' || this.$route.name == 'messages' || this.$route.name == 'reviews' || this.$route.name == 'add-listing';
            },
            BlogMenu() {
                return this.$route.name == 'blog-list' || this.$route.name == 'blog-grid' || this.$route.name == 'blog-details' || this.$route.name == 'blog-list-sidebar' || this.$route.name == 'blog-grid-sidebar';
            }
        }
    }
</script>