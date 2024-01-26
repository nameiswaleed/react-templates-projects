import {createRouter, createWebHistory} from 'vue-router';

import Index from '../views/pages/index/index.vue'
import About from '../views/pages/about/about.vue'
import Listing from '../views/pages/add-listing/Add.vue'
import BlogDetail from '../views/pages/blog/blog-details/BlogDetails.vue'
import BlogGridSidebar from '../views/pages/blog/blog-grid-sidebar/BlogGrid.vue'
import blogGrid from '../views/pages/blog/blog-grid/BlogGrid.vue'
import BlogListSidebar from '../views/pages/blog/blog-list-sidebar/BlogLsidebar.vue'
import BlogList from '../views/pages/blog/blog-list/BList.vue'
import BookMark from '../views/pages/bookmarks/Bookmark'
import Categories from '../views/pages/categories/Categories.vue'
import Contact from '../views/pages/contact/Contact.vue'
import Dashboard from '../views/pages/dashboard/Dashboard.vue'
import Error404 from '../views/pages/Error/error404/Error404.vue'
import Error500 from '../views/pages/Error/error500/Error500.vue'
import Faq from '../views/pages/faq/Faq.vue'
import ForgotPass from '../views/pages/forgot-password/Password.vue'
import Gallery from '../views/pages/gallery/Gallery.vue'
import HowItWorks from '../views/pages/howitworks/HowitWorks.vue'
import ListingGridSidebar from '../views/pages/list/listing-grid-sidebar/GridSidebar.vue'
import listGrid from '../views/pages/list/listing-grid/ListingGrid.vue'
import ListingSidebar from '../views/pages/list/listing-list-sidebar/ListingListSidebar.vue'
import ListMapGrid from '../views/pages/list/listingmap-grid/ListingmapGrid.vue'
import listListingMap from '../views/pages/list/listingmap-list/ListingmapList.vue'
import LoginPage from '../views/pages/Login/Login.vue'
import Message from '../views/pages/messages/Message.vue'
import MyListing from '../views/pages/my-listing/List.vue'
import PricingPage from '../views/pages/pricing/Pricing.vue'
import Privacy from '../views/pages/privacy-policy/PrivacyPolicy.vue'
import Profiles from '../views/pages/profile/Profile.vue'
import Reviews from '../views/pages/reviews/Review.vue'
import Service from '../views/pages/service-details/ServiceDetails.vue'
import SignUp from '../views/pages/signup/Signup.vue'
import TermsAndConditions from '../views/pages/terms-conditions/TermsConditions.vue'
import IndexTwo from '../views/pages/indextwo/indexTwo.vue'
import IndexThree from '../views/pages/indexthree/indexThree.vue'
import IndexFour from '../views/pages/indexfour/indexFour.vue'
import IndexFive from '../views/pages/indexfive/indexFive.vue'

const routes = [
    {
        path: '/',
        name: 'index',
        component: Index
    },
    {
        path: '/index-2',
        name: 'index-2',
        component: IndexTwo
    },
    {
        path: '/index-3',
        name: 'index-3',
        component: IndexThree
    },
    {
        path: '/index-4',
        name: 'index-4',
        component: IndexFour
    },
    {
        path: '/index-five',
        name: 'index-five',
        component: IndexFive
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/add-listing',
        name: 'add-listing',
        component: Listing
    },
    {
        path: '/blog-details',
        name: 'blog-details',
        component: BlogDetail
    },
    {
        path: '/blog-grid-sidebar',
        name: 'blog-grid-sidebar',
        component: BlogGridSidebar
    },
    {
        path: '/blog-grid',
        name: 'blog-grid',
        component: blogGrid 
    },
    {
        path: '/blog-list-sidebar',
        name: 'blog-list-sidebar',
        component: BlogListSidebar
    },
    {
        path: '/blog-list',
        name: 'blog-list',
        component: BlogList
    },
    {
        path: '/bookmarks',
        name: 'bookmarks',
        component: BookMark
    },
    {
        path: '/categories',
        name: 'categories',
        component: Categories
    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard
    },
    {
        path: '/error-404',
        name: 'error-404',
        component: Error404
    },
    {
        path: '/error-500',
        name: 'error-500',
        component: Error500
    },
    {
        path: '/faq',
        name: 'faq',
        component: Faq
    },
    {
        path: '/forgot-password',
        name: 'Password',
        component: ForgotPass
    },
    {
        path: '/gallery',
        name: 'gallery',
        component: Gallery
    },
    {
        path: '/howitworks',
        name: 'howitworks',
        component: HowItWorks
    },
    {
        path: '/listing-grid-sidebar',
        name: 'listing-grid-sidebar',
        component: ListingGridSidebar
    },
    {
        path: '/listing-grid',
        name: 'listing-grid',
        component: listGrid
    },
    {
        path: '/listing-list-sidebar',
        name: 'listing-list-sidebar',
        component: ListingSidebar
    },
    {
        path: '/listingmap-grid',
        name: 'listingmap-grid',
        component: ListMapGrid
    },
    {
        path: '/listingmap-list',
        name: 'listingmap-list',
        component: listListingMap
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginPage
    },
    {
        path: '/messages',
        name: 'messages',
        component: Message
    },
    {
        path: '/my-listing',
        name: 'my-listing',
        component: MyListing
    },
    {
        path: '/pricing',
        name: 'pricing',
        component: PricingPage
    },
    {
        path: '/privacy-policy',
        name: 'privacy-policy',
        component: Privacy
    },
    {
        path: '/profile',
        name: 'profile',
        component: Profiles
    },
    {
        path: '/reviews',
        name: 'reviews',
        component: Reviews 
    },
    {
        path: '/service-details',
        name: 'service-details',
        component: Service
    },
    {
        path: '/signup',
        name: 'Signup',
        component: SignUp
    },
    {
        path: '/terms-condition',
        name: 'terms-condition',
        component: TermsAndConditions
    }
   

]

export const router = createRouter({
    history: createWebHistory('vuejs'),
    linkActiveClass: 'active',
    routes,
}); 

