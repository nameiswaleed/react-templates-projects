import React from "react";
import Header from "../../home/header";
import Footer from "../../home/footer/Footer";
import { ProfileAvatar02, ProfileAvatar03, ProfileAvatar04, ProfileAvatar05, ProfileAvatar06, ProfileAvatar07, eye, listgrid_1, listgrid_2, listgrid_3, listgrid_4, listgrid_5, listgrid_6, listgrid_7, listgrid_8 } from "../../imagepath";
import { Link, useLocation } from "react-router-dom";
import UserHeader from "../Userheader";



const Bookmarks = () => {
    const parms=useLocation().pathname
    return (
        <>
        <UserHeader parms={parms}/>
            {/* Breadscrumb Section */}
            <div className="breadcrumb-bar">
                <div className="container">
                    <div className="row align-items-center text-center">
                        <div className="col-md-12 col-12">
                            <h2 className="breadcrumb-title">Bookmarks</h2>
                            <nav aria-label="breadcrumb" className="page-breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to="/index">Home</Link>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Bookmarks
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Breadscrumb Section */}
            {/* Bookmark Content */}
            <div className="dashboard-content">
                <div className="container">
                    <div className="">
                        <ul className="dashborad-menus">
                            <li>
                                <Link to="/dashboard">
                                    <i className="feather-grid" /> <span>Dashboard</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/profile">
                                    <i className="fa-solid fa-user" /> <span>Profile</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/my-listing">
                                    <i className="feather-list" /> <span>My Listing</span>
                                </Link>
                            </li>
                            <li className="active">
                                <Link to="/bookmarks">
                                    <i className="fas fa-solid fa-heart" /> <span>Bookmarks</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/messages">
                                    <i className="fa-solid fa-comment-dots" /> <span>Messages</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/reviews">
                                    <i className="fas fa-solid fa-star" /> <span>Reviews</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/login">
                                    <i className="fas fa-light fa-circle-arrow-left" />{" "}
                                    <span>Logout</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="bookmarks-content grid-view featured-slider">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-6 ">
                                <div className="card aos aos-init aos-animate" data-aos="fade-up">
                                    <div className="blog-widget">
                                        <div className="blog-img">
                                            <Link to="/service-details">
                                                <img
                                                    src={listgrid_1}
                                                    className="img-fluid"
                                                    alt="blog-img"
                                                />
                                            </Link>
                                            <div className="fav-item">
                                                <span className="Featured-text">Featured</span>
                                                <Link to="#" className="fav-icon">
                                                    <i className="feather-heart" />
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="bloglist-content">
                                            <div className="card-body">
                                                <div className="blogfeaturelink">
                                                    <div className="grid-author">
                                                        <img
                                                            src={ProfileAvatar02}
                                                            alt="author"
                                                        />
                                                    </div>
                                                    <div className="blog-features">
                                                        <Link to="#">
                                                            <span>
                                                                {" "}
                                                                <i className="fa-regular fa-circle-stop" /> Vehicles
                                                            </span>
                                                        </Link>
                                                    </div>
                                                    <div className="blog-author text-end">
                                                        <span>
                                                            {" "}
                                                            <img src={eye} alt="electronics" />
                                                            4000
                                                        </span>
                                                    </div>
                                                </div>
                                                <h6>
                                                    <Link to="/service-details">
                                                        2017 Gulfsteam Ameri-lite
                                                    </Link>
                                                </h6>
                                                <div className="blog-location-details">
                                                    <div className="location-info">
                                                        <i className="feather-map-pin" /> Los Angeles
                                                    </div>
                                                    <div className="location-info">
                                                        <i className="fa-solid fa-calendar-days" /> 06 Oct, 2022
                                                    </div>
                                                </div>
                                                <div className="amount-details">
                                                    <div className="amount">
                                                        <span className="validrate">$350</span>
                                                        <span>$450</span>
                                                    </div>
                                                    <div className="ratings">
                                                        <span>4.7</span> (50)
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 ">
                                <div className="card aos aos-init aos-animate" data-aos="fade-up">
                                    <div className="blog-widget">
                                        <div className="blog-img">
                                            <Link to="/service-details">
                                                <img
                                                    src={listgrid_4}
                                                    className="img-fluid"
                                                    alt="blog-img"
                                                />
                                            </Link>
                                            <div className="fav-item">
                                                <span className="Featured-text">Featured</span>
                                                <Link to="#" className="fav-icon">
                                                    <i className="feather-heart" />
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="bloglist-content">
                                            <div className="card-body">
                                                <div className="blogfeaturelink">
                                                    <div className="grid-author">
                                                        <img
                                                            src={ProfileAvatar03}
                                                            alt="author"
                                                        />
                                                    </div>
                                                    <div className="blog-features">
                                                        <Link to="#">
                                                            <span>
                                                                {" "}
                                                                <i className="fa-regular fa-circle-stop" />{" "}
                                                                Electronics
                                                            </span>
                                                        </Link>
                                                    </div>
                                                    <div className="blog-author text-end">
                                                        <span>
                                                            {" "}
                                                            <img src={eye} alt="electronics" />
                                                            4000
                                                        </span>
                                                    </div>
                                                </div>
                                                <h6>
                                                    <Link to="/service-details">Fashion luxury Men date</Link>
                                                </h6>
                                                <div className="blog-location-details">
                                                    <div className="location-info">
                                                        <i className="feather-map-pin" /> Los Angeles
                                                    </div>
                                                    <div className="location-info">
                                                        <i className="fa-solid fa-calendar-days" /> 08 Oct, 2022
                                                    </div>
                                                </div>
                                                <div className="amount-details">
                                                    <div className="amount">
                                                        <span className="validrate">$250</span>
                                                        <span>$350</span>
                                                    </div>
                                                    <div className="ratings">
                                                        <span>4.6</span> (50)
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <div className="card aos aos-init aos-animate" data-aos="fade-up">
                                    <div className="blog-widget">
                                        <div className="blog-img">
                                            <Link to="/service-details">
                                                <img
                                                    src={listgrid_8}
                                                    className="img-fluid"
                                                    alt="blog-img"
                                                />
                                            </Link>
                                            <div className="fav-item">
                                                <span className="Featured-text">Featured</span>
                                                <Link to="#" className="fav-icon">
                                                    <i className="feather-heart" />
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="bloglist-content">
                                            <div className="card-body">
                                                <div className="blogfeaturelink">
                                                    <div className="grid-author">
                                                        <img
                                                            src={ProfileAvatar04}
                                                            alt="author"
                                                        />
                                                    </div>
                                                    <div className="blog-features">
                                                        <Link to="#">
                                                            <span>
                                                                {" "}
                                                                <i className="fa-regular fa-circle-stop" />{" "}
                                                                Electronics
                                                            </span>
                                                        </Link>
                                                    </div>
                                                    <div className="blog-author text-end">
                                                        <span>
                                                            {" "}
                                                            <img src={eye} alt="electronics" />
                                                            4000
                                                        </span>
                                                    </div>
                                                </div>
                                                <h6>
                                                    <Link to="/service-details">
                                                        Apple Iphone 6 16GB 4G LTE
                                                    </Link>
                                                </h6>
                                                <div className="blog-location-details">
                                                    <div className="location-info">
                                                        <i className="feather-map-pin" /> Los Angeles
                                                    </div>
                                                    <div className="location-info">
                                                        <i className="fa-solid fa-calendar-days" /> 09 Oct, 2022
                                                    </div>
                                                </div>
                                                <div className="amount-details">
                                                    <div className="amount">
                                                        <span className="validrate">$550</span>
                                                        <span>$400</span>
                                                    </div>
                                                    <div className="ratings">
                                                        <span>4.7</span> (50)
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 ">
                                <div className="card aos aos-init aos-animate" data-aos="fade-up">
                                    <div className="blog-widget">
                                        <div className="blog-img">
                                            <Link to="/service-details">
                                                <img
                                                    src={listgrid_3}
                                                    className="img-fluid"
                                                    alt="blog-img"
                                                />
                                            </Link>
                                            <div className="fav-item">
                                                <span className="Featured-text">Featured</span>
                                                <Link to="#" className="fav-icon">
                                                    <i className="feather-heart" />
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="bloglist-content">
                                            <div className="card-body">
                                                <div className="blogfeaturelink">
                                                    <div className="grid-author">
                                                        <img
                                                            src={ProfileAvatar05}
                                                            alt="author"
                                                        />
                                                    </div>
                                                    <div className="blog-features">
                                                        <Link to="#">
                                                            <span>
                                                                {" "}
                                                                <i className="fa-regular fa-circle-stop" />{" "}
                                                                Electronics
                                                            </span>
                                                        </Link>
                                                    </div>
                                                    <div className="blog-author text-end">
                                                        <span>
                                                            {" "}
                                                            <img src={eye} alt="electronics" />
                                                            4000
                                                        </span>
                                                    </div>
                                                </div>
                                                <h6>
                                                    <Link to="/service-details">Customized Apple Imac </Link>
                                                </h6>
                                                <div className="blog-location-details">
                                                    <div className="location-info">
                                                        <i className="feather-map-pin" /> Los Angeles
                                                    </div>
                                                    <div className="location-info">
                                                        <i className="fa-solid fa-calendar-days" /> 10 Oct, 2022
                                                    </div>
                                                </div>
                                                <div className="amount-details">
                                                    <div className="amount">
                                                        <span className="validrate">$450</span>
                                                        <span>$300</span>
                                                    </div>
                                                    <div className="ratings">
                                                        <span>4.5</span> (50)
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <div className="card aos aos-init aos-animate" data-aos="fade-up">
                                    <div className="blog-widget">
                                        <div className="blog-img">
                                            <Link to="/service-details">
                                                <img
                                                    src={listgrid_2}
                                                    className="img-fluid"
                                                    alt="blog-img"
                                                />
                                            </Link>
                                            <div className="fav-item">
                                                <span className="Featured-text">Featured</span>
                                                <Link to="#" className="fav-icon">
                                                    <i className="feather-heart" />
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="bloglist-content">
                                            <div className="card-body">
                                                <div className="blogfeaturelink">
                                                    <div className="grid-author">
                                                        <img
                                                            src={ProfileAvatar06}
                                                            alt="author"
                                                        />
                                                    </div>
                                                    <div className="blog-features">
                                                        <Link to="#">
                                                            <span>
                                                                {" "}
                                                                <i className="fa-regular fa-circle-stop" />{" "}
                                                                Construction
                                                            </span>
                                                        </Link>
                                                    </div>
                                                    <div className="blog-author text-end">
                                                        <span>
                                                            {" "}
                                                            <img src={eye} alt="electronics" />
                                                            4000
                                                        </span>
                                                    </div>
                                                </div>
                                                <h6>
                                                    <Link to="/service-details">
                                                        Villa 457 sq.m. In Benidorm Fully
                                                    </Link>
                                                </h6>
                                                <div className="blog-location-details">
                                                    <div className="location-info">
                                                        <i className="feather-map-pin" /> Los Angeles
                                                    </div>
                                                    <div className="location-info">
                                                        <i className="fa-solid fa-calendar-days" /> 11 Oct, 2022
                                                    </div>
                                                </div>
                                                <div className="amount-details">
                                                    <div className="amount">
                                                        <span className="validrate">$650</span>
                                                        <span>$600</span>
                                                    </div>
                                                    <div className="ratings">
                                                        <span>4.5</span> (50)
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <div className="card aos aos-init aos-animate" data-aos="fade-up">
                                    <div className="blog-widget">
                                        <div className="blog-img">
                                            <Link to="/service-details">
                                                <img
                                                    src={listgrid_5}
                                                    className="img-fluid"
                                                    alt="blog-img"
                                                />
                                            </Link>
                                            <div className="fav-item">
                                                <span className="Featured-text">Featured</span>
                                                <Link to="#" className="fav-icon">
                                                    <i className="feather-heart" />
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="bloglist-content">
                                            <div className="card-body">
                                                <div className="blogfeaturelink">
                                                    <div className="grid-author">
                                                        <img
                                                            src={ProfileAvatar03}
                                                            alt="author"
                                                        />
                                                    </div>
                                                    <div className="blog-features">
                                                        <Link to="#">
                                                            <span>
                                                                {" "}
                                                                <i className="fa-regular fa-circle-stop" /> Jobs
                                                            </span>
                                                        </Link>
                                                    </div>
                                                    <div className="blog-author text-end">
                                                        <span>
                                                            {" "}
                                                            <img src={eye} alt="electronics" />
                                                            4000
                                                        </span>
                                                    </div>
                                                </div>
                                                <h6>
                                                    <Link to="/service-details">
                                                        CDL A OTR Compnay Driver Job-N
                                                    </Link>
                                                </h6>
                                                <div className="blog-location-details">
                                                    <div className="location-info">
                                                        <i className="feather-map-pin" /> Los Angeles
                                                    </div>
                                                    <div className="location-info">
                                                        <i className="fa-solid fa-calendar-days" /> 12 Oct, 2022
                                                    </div>
                                                </div>
                                                <div className="amount-details">
                                                    <div className="amount">
                                                        <span className="validrate">$550</span>
                                                        <span>$450</span>
                                                    </div>
                                                    <div className="ratings">
                                                        <span>4.7</span> (50)
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <div className="card aos aos-init aos-animate" data-aos="fade-up">
                                    <div className="blog-widget">
                                        <div className="blog-img">
                                            <Link to="/service-details">
                                                <img
                                                    src={listgrid_6}
                                                    className="img-fluid"
                                                    alt="blog-img"
                                                />
                                            </Link>
                                            <div className="fav-item">
                                                <span className="Featured-text">Featured</span>
                                                <Link to="#" className="fav-icon">
                                                    <i className="feather-heart" />
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="bloglist-content">
                                            <div className="card-body">
                                                <div className="blogfeaturelink">
                                                    <div className="grid-author">
                                                        <img
                                                            src={ProfileAvatar04}
                                                            alt="author"
                                                        />
                                                    </div>
                                                    <div className="blog-features">
                                                        <Link to="#">
                                                            <span>
                                                                {" "}
                                                                <i className="fa-regular fa-circle-stop" />{" "}
                                                                Electronics
                                                            </span>
                                                        </Link>
                                                    </div>
                                                    <div className="blog-author text-end">
                                                        <span>
                                                            {" "}
                                                            <img src={eye} alt="electronics" />
                                                            4000
                                                        </span>
                                                    </div>
                                                </div>
                                                <h6>
                                                    <Link to="/service-details">
                                                        2012 Audi R8 GT Spyder Convertibl
                                                    </Link>
                                                </h6>
                                                <div className="blog-location-details">
                                                    <div className="location-info">
                                                        <i className="feather-map-pin" /> Los Angeles
                                                    </div>
                                                    <div className="location-info">
                                                        <i className="fa-solid fa-calendar-days" /> 02 Oct, 2022
                                                    </div>
                                                </div>
                                                <div className="amount-details">
                                                    <div className="amount">
                                                        <span className="validrate">$450</span>
                                                        <span>$350</span>
                                                    </div>
                                                    <div className="ratings">
                                                        <span>4.7</span> (50)
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <div className="card aos aos-init aos-animate" data-aos="fade-up">
                                    <div className="blog-widget">
                                        <div className="blog-img">
                                            <Link to="/service-details">
                                                <img
                                                    src={listgrid_7}
                                                    className="img-fluid"
                                                    alt="blog-img"
                                                />
                                            </Link>
                                            <div className="fav-item">
                                                <span className="Featured-text">Featured</span>
                                                <Link to="#" className="fav-icon">
                                                    <i className="feather-heart" />
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="bloglist-content">
                                            <div className="card-body">
                                                <div className="blogfeaturelink">
                                                    <div className="grid-author">
                                                        <img
                                                            src={ProfileAvatar07}
                                                            alt="author"
                                                        />
                                                    </div>
                                                    <div className="blog-features">
                                                        <Link to="#">
                                                            <span>
                                                                {" "}
                                                                <i className="fa-regular fa-circle-stop" /> Vehicles
                                                            </span>
                                                        </Link>
                                                    </div>
                                                    <div className="blog-author text-end">
                                                        <span>
                                                            {" "}
                                                            <img src={eye} alt="electronics" />
                                                            4000
                                                        </span>
                                                    </div>
                                                </div>
                                                <h6>
                                                    <Link to="/service-details">
                                                        HP Gaming 15.6 TouchScreen 12G
                                                    </Link>
                                                </h6>
                                                <div className="blog-location-details">
                                                    <div className="location-info">
                                                        <i className="feather-map-pin" /> Los Angeles
                                                    </div>
                                                    <div className="location-info">
                                                        <i className="fa-solid fa-calendar-days" /> 02 Oct, 2022
                                                    </div>
                                                </div>
                                                <div className="amount-details">
                                                    <div className="amount">
                                                        <span className="validrate">$450</span>
                                                        <span>$350</span>
                                                    </div>
                                                    <div className="ratings">
                                                        <span>4.7</span> (50)
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 ">
                                <div className="card aos aos-init aos-animate" data-aos="fade-up">
                                    <div className="blog-widget">
                                        <div className="blog-img">
                                            <Link to="/service-details">
                                                <img
                                                    src={listgrid_1}
                                                    className="img-fluid"
                                                    alt="blog-img"
                                                />
                                            </Link>
                                            <div className="fav-item">
                                                <span className="Featured-text">Featured</span>
                                                <Link to="#" className="fav-icon">
                                                    <i className="feather-heart" />
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="bloglist-content">
                                            <div className="card-body">
                                                <div className="blogfeaturelink">
                                                    <div className="grid-author">
                                                        <img
                                                            src={ProfileAvatar02}
                                                            alt="author"
                                                        />
                                                    </div>
                                                    <div className="blog-features">
                                                        <Link to="#">
                                                            <span>
                                                                {" "}
                                                                <i className="fa-regular fa-circle-stop" /> Vehicles
                                                            </span>
                                                        </Link>
                                                    </div>
                                                    <div className="blog-author text-end">
                                                        <span>
                                                            {" "}
                                                            <img src={eye} alt="electronics" />
                                                            4000
                                                        </span>
                                                    </div>
                                                </div>
                                                <h6>
                                                    <Link to="/service-details">
                                                        2017 Gulfsteam Ameri-lite
                                                    </Link>
                                                </h6>
                                                <div className="blog-location-details">
                                                    <div className="location-info">
                                                        <i className="feather-map-pin" /> Los Angeles
                                                    </div>
                                                    <div className="location-info">
                                                        <i className="fa-solid fa-calendar-days" /> 06 Oct, 2022
                                                    </div>
                                                </div>
                                                <div className="amount-details">
                                                    <div className="amount">
                                                        <span className="validrate">$350</span>
                                                        <span>$450</span>
                                                    </div>
                                                    <div className="ratings">
                                                        <span>4.7</span> (50)
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Pagination*/}
                            <div className="blog-pagination">
                                <nav>
                                    <ul className="pagination">
                                        <li className="page-item previtem">
                                            <Link className="page-link" to="#">
                                                <i className="fas fa-regular fa-arrow-left" /> Prev
                                            </Link>
                                        </li>
                                        <li className="justify-content-center pagination-center">
                                            <div className="pagelink">
                                                <ul>
                                                    <li className="page-item">
                                                        <Link className="page-link" to="#">
                                                            1
                                                        </Link>
                                                    </li>
                                                    <li className="page-item active">
                                                        <Link className="page-link" to="#">
                                                            2 <span className="visually-hidden">(current)</span>
                                                        </Link>
                                                    </li>
                                                    <li className="page-item">
                                                        <Link className="page-link" to="#">
                                                            3
                                                        </Link>
                                                    </li>
                                                    <li className="page-item">
                                                        <Link className="page-link" to="#">
                                                            ...
                                                        </Link>
                                                    </li>
                                                    <li className="page-item">
                                                        <Link className="page-link" to="#">
                                                            14
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="page-item nextlink">
                                            <Link className="page-link" to="#">
                                                Next <i className="fas fa-regular fa-arrow-right" />
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            {/*/Pagination*/}
                        </div>
                    </div>
                </div>
            </div>
            {/* /Bookmark Content */}
            <Footer/>
        </>

    );
}
export default Bookmarks;