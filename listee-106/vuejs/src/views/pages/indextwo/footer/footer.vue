<template>
    <!-- Footer -->
		<footer class="footer footer-two">
		
        <div class="footer-social">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-6">
                        <h6>Would you like to connect with us</h6>
                    </div>
                    <div class="col-md-6">
                        <div class="social-icon">
                            <ul>
                                <li>
                                    <router-link to="#" target="_blank"><i class="fab fa-facebook-f"></i> </router-link>
                                </li>
                                <li>
                                    <router-link to="#" target="_blank"><i class="fab fa-twitter"></i> </router-link>
                                </li>
                                <li>
                                    <router-link to="#" target="_blank"><i class="fab fa-instagram"></i></router-link>
                                </li>
                                <li>
                                    <router-link to="#" target="_blank"><i class="fab fa-linkedin-in"></i></router-link>
                                </li>
                            </ul>
                        </div>	
                    </div>
                </div>
            </div>
        </div>
    
        <!-- Footer Top -->
        <div class="footer-top aos" data-aos="fade-up">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-6">
                        <!-- Footer Widget -->
                        <div class="footer-widget">
                            <div class="footer-logo">
                                <router-link to="/index"><img src="../../../../assets/img/footerlogo.svg" alt="logo"></router-link>
                            </div>
                            <div class="footer-content">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
                            </div>
                            <div class="update-form">
                                <b-form action="#">
                                    <span><i class="feather-mail"></i></span> 
                                    <b-form-input type="email" class="form-control" placeholder="Enter You Email Here" />
                                    <b-button type="submit" variant="primary">Subscribe</b-button>
                                </b-form>
                            </div>								
                        </div>
                        <!-- /Footer Widget -->
                    </div>
                    <div class="col-lg-2 col-md-6">
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
                    <div class="col-lg-2 col-md-6">
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
                    <div class="col-lg-2 col-md-6">
                        <!-- Footer Widget -->
                        <div class="footer-widget footer-menu">
                            <h2 class="footer-title">Top Cities</h2>
                            <ul>
                                <li>
                                    <a href="javascript:void(0)">Manhatten</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">Los Angeles</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">Houston</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">Chicago</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">Alabama</a>
                                </li>									
                            </ul>
                        </div>
                        <!-- /Footer Widget -->
                    </div>
                    <div class="col-lg-2 col-md-6">
                        <!-- Footer Widget -->
                        <div class="footer-widget">
                            <h2 class="footer-title">Communication</h2>
                            <div class="footer-contact-info">
                                <div class="footer-address">
                                    <img src="../../../../assets/img/call-calling.svg" alt="Callus">
                                    <p><span>Call Us</span> <br> +017 123 456 78	 </p>
                                </div>
                                <div class="footer-address">
                                    <img src="../../../../assets/img/sms-tracking.svg" alt="Callus">
                                    <p><span>Send Message</span> <br> listee@example.com	 </p>
                                </div>							
                            </div>																
                        </div>
                        <!-- /Footer Widget -->							
                    </div>
                </div>
                
                <!-- Footer Counter Section-->
                <div class="footercount">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="vistors-details">
                                <ul class="d-flex">
                                    <li><a href="javascript:void(0)"><img class="img-fluid" src="../../../../assets/img/icons/visa-01.svg" alt="visa"></a></li>
                                    <li><a href="javascript:void(0)"><img class="img-fluid" src="../../../../assets/img/icons/master-01.svg" alt="paycard"></a></li>
                                    <li><a href="javascript:void(0)"><img class="img-fluid" src="../../../../assets/img/icons/discover.svg" alt="spay"></a></li>
                                    <li><a href="javascript:void(0)"><img class="img-fluid" src="../../../../assets/img/icons/stripe.svg" alt="spay"></a></li>
                                </ul>										   								
                            </div>						 
                        </div>
                        <div class="col-md-6">
                            <div class="selection-list">
                                <div class="lang-select">
                                    <span class="select-icon"><i class="feather-globe"></i></span>
                                    <vue-select
                                        class="select"
                                        :options="India"
                                        placeholder="India" 
                                    />  
                                </div>
                                <div class="currency-select">
                                    <vue-select
                                        class="select"
                                        :options="Currency"
                                        placeholder="USD" 
                                    />					
                                </div>	
                            </div>									 
                        </div>
                    </div>
                </div>			
                <!-- /Footer  Counter Section-->	
                
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
                                <p class="mb-0">All Copyrights Reserved © {{ new Date().getFullYear() }} - Listee.</p>      
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

<script>
    export default {
        data() {
            return{
                India: ["India", "UK", "Japan"],
                Currency: ["USD", "Euro"]
            };
        },
        components: {},
		mouted() {},
    };
</script>