<template>
    <!-- Footer -->
		<footer class="footer footer-four">
		
        <!-- Footer Top -->
        <div class="footer-top aos" data-aos="fade-up">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-6">
                        <!-- Footer Widget -->
                        <div class="footer-widget">
                            <div class="footer-logo">
                                <a href="#"><img src="../../../assets/img/logo.png" alt="logo"></a>
                            </div>
                            <div class="footer-content">
                                <p>Discover amazing things to do everywhere you go.</p>
                            </div>							
                        </div>
                        <!-- /Footer Widget -->
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <!-- Footer Widget -->
                        <div class="footer-widget footer-menu">
                            <h2 class="footer-title">About us</h2>
                            <ul>
                                <li>
                                    <router-link to="/about">Our product</router-link>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">Documentation</a>
                                </li>
                                <li>
                                    <router-link to="/service-details">Our Services</router-link>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">Get Started Us</a>
                                </li>
                                <li>
                                    <router-link to="/contact">Contact Us</router-link>
                                </li>									
                            </ul>
                        </div>
                        <!-- /Footer Widget -->
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <!-- Footer Widget -->
                        <div class="footer-widget footer-menu">
                            <h2 class="footer-title">Quick links</h2>
                            <ul>
                                <li>
                                    <a href="javascript:void(0)">Market Place</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">Documentation</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">Customers</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">Carriers</a>
                                </li>
                                <li>
                                    <router-link to="/blog-list">Our Blog</router-link>
                                </li>									
                            </ul>
                        </div>
                        <!-- /Footer Widget -->
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <!-- Footer Widget -->
                        <div class="footer-widget">
                            <h2 class="footer-title">Communication</h2>
                            <div class="footer-contact-info">
                                <ul>
                                    <li>Email: contact@example.com</li>
                                    <li>Phone: 1 (00) 832 2342</li>
                                </ul>
                            </div>	

                            <div class="social-icon">
                                <ul>
                                    <li>
                                        <a href="#" target="_blank"><i class="fa-brands fa-facebook"></i></a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank"><i class="fab fa-twitter"></i> </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank"><i class="fab fa-instagram"></i></a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                                    </li>
                                </ul>
                            </div>									
                        </div>
                        <!-- /Footer Widget -->							
                    </div>
                </div>
            </div>
        </div>
        <!-- /Footer Top -->
                    
        <!-- Footer Bottom -->
        <div class="footer-bottom">
            <div class="container">
                <!-- Copyright -->
                <div class="copyright">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="copyright-text text-center">
                                <p class="mb-0">All Copyright Reserved © {{ new Date().getFullYear() }} - Listee.</p>          
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /Copyright -->
            </div>
        </div>
        <!-- /Footer Bottom -->
        
    </footer>
    <!-- /Footer -->
</template>