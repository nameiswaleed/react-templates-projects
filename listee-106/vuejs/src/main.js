import { createApp } from 'vue';
import { router } from './router';
import App from "./App.vue";
import {BootstrapVue3, BToastPlugin} from 'bootstrap-vue-3'
import VueApexCharts from "vue3-apexcharts";
import VueSelect from 'vue3-select2-component'
import CoolLightBox from "vue-cool-lightbox";
import "vue-cool-lightbox/dist/vue-cool-lightbox.min.css";
import VueEasyLightbox from "vue-easy-lightbox";
import Antd from 'ant-design-vue';
import AOS from 'aos'
import VueCarousel from 'vue-carousel';


// Header Components
import Navbar from './components/navbar.vue'
import UserNavbar from './components/UserpageNavbar.vue'
import NavbarTwo from './components/navbarTwo.vue'
import NavbarTwoHeader from './components/navbarTwoHeader.vue'
import NavbarThree from './components/navbarThree.vue'
import NavbarFour from './components/navbarFour.vue'
import NavbarFive from './components/navbarFive.vue'
import NavMenu from './components/navmenu.vue'


// Page Components
import Header from './views/layouts/header.vue'
import IndexExplore from './views/pages/index/IndexExplore.vue'
import IndexCategory from './views/pages/index/IndexCategory.vue'
import Indexfeatured from './views/pages/index/IndexFeatured.vue'
import IndexPopular from './views/pages/index/IndexPopular.vue'
import IndexAds from './views/pages/index/IndexAds.vue'
import IndexCta from './views/pages/index/IndexCTA.vue'
import IndexClient from './views/pages/index/IndexClient.vue'
import IndexPartners from './views/pages/index/IndexPartners.vue'
import IndexPricing from './views/pages/index/IndexPricing.vue'
import IndexBlog from './views/pages/index/IndexBlog.vue'
import Foot from './views/pages/Footer.vue'
import Scroll from './views/pages/Scroll.vue'
import AboutContent from './views/pages/about/AboutContent.vue'
import AboutPopular from './views/pages/about/AboutPopular.vue'
import AboutPartners from './views/pages/about/AboutPartners.vue'
import AddListing from './views/pages/add-listing/AddListing.vue'
import BlogContent from './views/pages/blog/blog-details/BlogContent.vue'
import BlogGridSidebar from './views/pages/blog/blog-grid-sidebar/BlogGridSidebar.vue'
import BlogGridList from './views/pages/blog/blog-grid/BlogGridList.vue'
import BlogListSidebar from './views/pages/blog/blog-list-sidebar/BlogListSidebar.vue'
import BlogList from './views/pages/blog/blog-list/BlogList.vue'
import BookContent from './views/pages/bookmarks/BookmarkContent.vue'
import CategoriesList from './views/pages/categories/CategoriesList.vue'
import ContactInfo from './views/pages/contact/ContactInformation.vue'
import Dashboard from './views/pages/dashboard/DashboardContent.vue'
import FaqContent from './views/pages/faq/FaqContent.vue'
import ForgotPassword from './views/pages/forgot-password/ForgotPassword.vue'
import Gallerypage from './views/pages/gallery/GalleryPage.vue'
import HowWorks from './views/pages/howitworks/Works.vue'
import HowItPricing from './views/pages/howitworks/Pricing.vue'
import ListGridSidebar from './views/pages/list/listing-grid-sidebar/ListingGridSidebar.vue'
import Listgrid from './views/pages/list/listing-grid/DashboardContent.vue'
import ListContent from './views/pages/list/listing-list-sidebar/ListContent.vue'
import ListMapContent from './views/pages/list/listingmap-grid/ListingmapContent.vue'
import ListinglistContent from './views/pages/list/listingmap-list/ListingListContent.vue'
import LoginForm from './views/pages/Login/LoginForm.vue'
import MessageContent from './views/pages/messages/MessageContent.vue'
import MyListing from './views/pages/my-listing/MyListing.vue'
import PricingPlan from './views/pages/pricing/PricingPlan.vue'
import PrivacyPolicy from './views/pages/privacy-policy/PrivacyTerms.vue'
import ProfileDashboard from './views/pages/profile/ProfileDashboard.vue'
import ReviewDashboard from './views/pages/reviews/ReviewDashboard.vue'
import ServiceGallery from './views/pages/service-details/ServiceGallery.vue'
import ServiceDescription from './views/pages/service-details/ServiceDescription.vue'
import ServiceContent from './views/pages/service-details/ServiceContent.vue'
import SignupLogin from './views/pages/signup/SignupLogin.vue'
import TermsContent from './views/pages/terms-conditions/TermsContent'
import IndexWedding from './views/pages/indextwo/indexwedding.vue'
import IndexCelebrate from './views/pages/indextwo/indexCelebrate.vue'
import IndexVendor from './views/pages/indextwo/indexVendor.vue'
import IndexPackage from './views/pages/indextwo/indexPackage.vue'
import IndexPortfolio from './views/pages/indextwo/indexPortfolio.vue'
import IndexTimeline from './views/pages/indextwo/indexTimeline.vue'
import WeddingIndexBlog from './views/pages/indextwo/indexBlog.vue'
import IndexAppointment from './views/pages/indextwo/indexAppointment.vue'
import WeddingFooter from './views/pages/indextwo/footer/footer.vue'
import IndexHome from './views/pages/indexthree/indexHome.vue'
import IndexThreeDestination from './views/pages/indexthree/indexDestination.vue'
import IndexOffer from './views/pages/indexthree/indexOffer.vue'
import IndexPromo from './views/pages/indexthree/indexPromo.vue'
import IndexTestimonial from './views/pages/indexthree/indexTestimonial.vue'
import IndexPrice from './views/pages/indexthree/indexPrice.vue'
import IndexSubscribe from './views/pages/indexthree/indexSubscribe.vue'
import IndexActivity from './views/pages/indexthree/indexActivity'
import NavThreeFooter from './views/pages/indexthree/footer.vue'
import IndexNow from './views/pages/indexfour/indexNow.vue'
import IndexCowork from './views/pages/indexfour/indexCowork.vue'
import IndexSpace from './views/pages/indexfour/indexSpace.vue'
import IndexFourClient from './views/pages/indexfour/indexFourClient.vue'
import IndexFourPricing from './views/pages/indexfour/indexFourPricing.vue'
import IndexFourBlog from './views/pages/indexfour/indexFourBlog.vue'
import IndexFourFooter from './views/pages/indexfour/footer.vue'
import RecommendSlide from './views/pages/indexthree/recommendSlide.vue'
import NextTripSlide from './views/pages/indexthree/nextTripSlide.vue'

import IndexDiscover from './views/pages/indexfive/indexDiscover.vue'
import IndexBusiness from './views/pages/indexfive/indexBusiness.vue'
import IndexFiveSpace from './views/pages/indexfive/indexSpace.vue'
import IndexFiveClient from './views/pages/indexfive/indexClient.vue'
import IndexFiveFooter from './views/pages/indexfive/footer.vue'
import ServiceReview from './views/pages/service-details/serviceReview.vue'

// Breadcrumbs 
import BreadCrumb from './components/breadcrumb/Component.vue'
import AboutBreadcrumb from './components/breadcrumb/AboutBreadcrumb.vue'

// plugins
// import './assets/js/map.js'
import 'aos/dist/aos.css'
import './assets/js/backToTop.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'ant-design-vue/dist/antd.css';
import './assets/css/feather.css';
import './assets/css/style.css';


const app = createApp(App)
app.component('layouts',Header)
app.component('navbar',Navbar)
app.component('usernavbar',UserNavbar)
app.component('navbartwo',NavbarTwo)
app.component('navbartwoHeader',NavbarTwoHeader)
app.component('navbarthree',NavbarThree)
app.component('navbarfour',NavbarFour)
app.component('navbarfive',NavbarFive)
app.component('navmenu',NavMenu)

app.component('indexcategory',IndexCategory)
app.component('indexexplore',IndexExplore)
app.component('indexfeatured',Indexfeatured)
app.component('indexpopular',IndexPopular)
app.component('indexads',IndexAds)
app.component('indexcta',IndexCta)
app.component('indexclient',IndexClient)
app.component('indexpartners',IndexPartners)
app.component('indexpricing',IndexPricing)
app.component('indexblog',IndexBlog)
app.component('foot',Foot)
app.component('scroll',Scroll)
app.component('aboutcontent',AboutContent)
app.component('aboutpopular',AboutPopular)
app.component('aboutpartners',AboutPartners)
app.component('addlisting',AddListing)
app.component('blogcontent',BlogContent)
app.component('bloggridsidebar',BlogGridSidebar)
app.component('bloggridlist',BlogGridList)
app.component('bloglistsidebar',BlogListSidebar)
app.component('bloglist',BlogList)
app.component('bookmarkcontent',BookContent)
app.component('categorieslist',CategoriesList)
app.component('contactinformation',ContactInfo)
app.component('dashboardcontent',Dashboard)
app.component('faqcontent',FaqContent)
app.component('forgotpassword',ForgotPassword)
app.component('gallerypage',Gallerypage)
app.component('howworks',HowWorks)
app.component('howitpricing',HowItPricing)
app.component('listgridsidebar',ListGridSidebar)
app.component('listgrid',Listgrid)
app.component('listcontent',ListContent)
app.component('listmapcontent',ListMapContent)
app.component('litinglistcontent',ListinglistContent)
app.component('loginform',LoginForm)
app.component('messagecontent',MessageContent)
app.component('mylisting',MyListing)
app.component('pricingplan',PricingPlan)
app.component('privacypolicy',PrivacyPolicy)
app.component('profiledashboard',ProfileDashboard)
app.component('reviewdashboard',ReviewDashboard)
app.component('servicegallery',ServiceGallery)
app.component('servicedescription',ServiceDescription)
app.component('servicecontent',ServiceContent)
app.component('signuplogin',SignupLogin)
app.component('termscontent',TermsContent)
app.component('indexwedding',IndexWedding)
app.component('indexcelebrate',IndexCelebrate)
app.component('indexvendor',IndexVendor)
app.component('indexpackage',IndexPackage)
app.component('indexportfolio',IndexPortfolio)
app.component('indextimeline',IndexTimeline)
app.component('weddingindexblog',WeddingIndexBlog)
app.component('indexappointment',IndexAppointment)
app.component('weddingfooter',WeddingFooter)
app.component('indexhome',IndexHome)
app.component('indexthreedestination',IndexThreeDestination)
app.component('indexoffer',IndexOffer)
app.component('indexpromo',IndexPromo)
app.component('indextestimonial',IndexTestimonial)
app.component('indexprice',IndexPrice)
app.component('indexsubscribe',IndexSubscribe)
app.component('indexactivity',IndexActivity)
app.component('navbarthreefooter',NavThreeFooter)
app.component('indexnow',IndexNow)
app.component('indexcowork',IndexCowork)
app.component('indexspace',IndexSpace)
app.component('indexfourclient',IndexFourClient)
app.component('indexfourpricing',IndexFourPricing)
app.component('indexfourblog',IndexFourBlog)
app.component('indexfourfooter',IndexFourFooter)
app.component('recommendslide',RecommendSlide)

app.component('nexttripslide',NextTripSlide)

app.component('indexdiscover',IndexDiscover)
app.component('indexbusiness',IndexBusiness)
app.component('indexfivespace',IndexFiveSpace)
app.component('indexfiveclient',IndexFiveClient)
app.component('indexfivefooter',IndexFiveFooter)
app.component('servicereview',ServiceReview)

// Breadcrumb
app.component('breadcrumb',BreadCrumb)
app.component('aboutbreadcrumb',AboutBreadcrumb)

app.component('vue-select', VueSelect)
.use(BootstrapVue3)
.use(BToastPlugin)
.use(Antd)
.use(AOS.init())
app.use(VueEasyLightbox);
app.use(CoolLightBox);
app.use(VueApexCharts);
app.use(VueCarousel);
app.use(router).mount('#app');