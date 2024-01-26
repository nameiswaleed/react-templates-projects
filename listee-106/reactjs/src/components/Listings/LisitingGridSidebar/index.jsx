import React from "react";
import Sidebar from "./sidebar";
import { ProfileAvatar02, ProfileAvatar03, ProfileAvatar04, ProfileAvatar05, ProfileAvatar06, ProfileAvatar07, listgrid_1, listgrid_2, listgrid_3, listgrid_4, listgrid_5, listgrid_6, listgrid_7, listgrid_8 } from "../../imagepath";
import Footer from "../../home/footer/Footer";
import Header from "../../home/header";
import { Link, useLocation } from "react-router-dom";






const GridSidebar = () => {
    const parms=useLocation().pathname
    return (
        <>
            <Header parms={parms}/>
            {/* Breadscrumb Section */}
            <div className="breadcrumb-bar">
                <div className="container">
                    <div className="row align-items-center text-center">
                        <div className="col-md-12 col-12">
                            <h2 className="breadcrumb-title">Listings-Grid</h2>
                            <nav aria-label="breadcrumb" className="page-breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to="/index">Home</Link>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Grid
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Breadscrumb Section */}
            {/* Main Content Section */}
            <div className="list-content">
                <div className="container">
                    <div className="row">
                        <Sidebar />

                        <div className="col-lg-8">

                            <div className="row sorting-div">

                                <div className="col-lg-4 col-md-4 col-sm-4 align-items-center d-flex">

                                    <div className="count-search">
                                        <p>
                                            Showing <span>1-8</span> of 10 Results
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-md-8 col-sm-8  align-items-center">
                                    <div className="sortbyset">
                                        <span className="sortbytitle">Sort by</span>
                                        <div className="sorting-select">
                                            <select className="form-control select">
                                                <option>Default</option>
                                                <option>Price Low to High</option>
                                                <option>Price High to Low</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="grid-listview">
                                        <ul>
                                            <li>
                                                <Link to="/listing-list-sidebar">
                                                    <i className="feather-list" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/listing-grid-sidebar" className="active">
                                                    <i className="feather-grid" />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="grid-view listgrid-sidebar">
                                <div className="row">
                                    <div className="col-lg-6 col-md-4">
                                        <div className="card">
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
                                                                        <i className="fa-regular fa-circle-stop" />{" "}
                                                                        Vehicle
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                            <div className="blog-author text-end">
                                                                <span>
                                                                    {" "}
                                                                    <i className="feather-eye" />
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
                                                                <i className="fa-solid fa-calendar-days" /> 06 Oct,
                                                                2022
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
                                    <div className="col-lg-6 col-md-4">
                                        <div className="card">
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
                                                                    src={ProfileAvatar07}
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
                                                                    <i className="feather-eye" />
                                                                    4000
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <h6>
                                                            <Link to="/service-details">
                                                                Villa 457 sq.m. In Benidorm Fully Qquipped House
                                                            </Link>
                                                        </h6>
                                                        <div className="blog-location-details">
                                                            <div className="location-info">
                                                                <i className="feather-map-pin" /> Los Angeles
                                                            </div>
                                                            <div className="location-info">
                                                                <i className="fa-solid fa-calendar-days" /> 06 Oct,
                                                                2022
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
                                    <div className="col-lg-6 col-md-4">
                                        <div className="card">
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
                                                                    src={ProfileAvatar02}
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
                                                                    <i className="feather-eye" />
                                                                    4000
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <h6>
                                                            <Link to="/service-details">
                                                                Customized Apple iMac 21.5" All-In
                                                            </Link>
                                                        </h6>
                                                        <div className="blog-location-details">
                                                            <div className="location-info">
                                                                <i className="feather-map-pin" /> Los Angeles
                                                            </div>
                                                            <div className="location-info">
                                                                <i className="fa-solid fa-calendar-days" /> 06 Oct,
                                                                2022
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
                                    <div className="col-lg-6 col-md-4">
                                        <div className="card">
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
                                                                    <i className="feather-eye" />
                                                                    4000
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <h6>
                                                            <Link to="/service-details">
                                                                Fashion Luxury Men Date
                                                            </Link>
                                                        </h6>
                                                        <div className="blog-location-details">
                                                            <div className="location-info">
                                                                <i className="feather-map-pin" /> Los Angeles
                                                            </div>
                                                            <div className="location-info">
                                                                <i className="fa-solid fa-calendar-days" /> 06 Oct,
                                                                2022
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
                                    <div className="col-lg-6 col-md-4">
                                        <div className="card">
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
                                                                    src={ProfileAvatar07}
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
                                                                    <i className="feather-eye" />
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
                                                                <i className="fa-solid fa-calendar-days" /> 06 Oct,
                                                                2022
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
                                    <div className="col-lg-6 col-md-4">
                                        <div className="card">
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
                                                                    src={ProfileAvatar05}
                                                                    alt="author"
                                                                />
                                                            </div>
                                                            <div className="blog-features">
                                                                <Link to="#">
                                                                    <span>
                                                                        {" "}
                                                                        <i className="fa-regular fa-circle-stop" />{" "}
                                                                        Vehicles
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                            <div className="blog-author text-end">
                                                                <span>
                                                                    {" "}
                                                                    <i className="feather-eye" />
                                                                    4000
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <h6>
                                                            <Link to="/service-details">
                                                                2022 Audi R8 GT Spyder Convertible
                                                            </Link>
                                                        </h6>
                                                        <div className="blog-location-details">
                                                            <div className="location-info">
                                                                <i className="feather-map-pin" /> Los Angeles
                                                            </div>
                                                            <div className="location-info">
                                                                <i className="fa-solid fa-calendar-days" /> 06 Oct,
                                                                2022
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
                                    <div className="col-lg-6 col-md-4">
                                        <div className="card">
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
                                                                    <i className="feather-eye" />
                                                                    4000
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <h6>
                                                            <Link to="/service-details">
                                                                Apple iphone6 16GB 4G LTE
                                                            </Link>
                                                        </h6>
                                                        <div className="blog-location-details">
                                                            <div className="location-info">
                                                                <i className="feather-map-pin" /> Los Angeles
                                                            </div>
                                                            <div className="location-info">
                                                                <i className="fa-solid fa-calendar-days" /> 06 Oct,
                                                                2022
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
                                    <div className="col-lg-6 col-md-4">
                                        <div className="card">
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
                                                                    src={ProfileAvatar06}
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
                                                                    <i className="feather-eye" />
                                                                    4000
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <h6>
                                                            <Link to="/service-details">
                                                                HP Gaming 15.6 Touchscreen 12G
                                                            </Link>
                                                        </h6>
                                                        <div className="blog-location-details">
                                                            <div className="location-info">
                                                                <i className="feather-map-pin" /> Los Angeles
                                                            </div>
                                                            <div className="location-info">
                                                                <i className="fa-solid fa-calendar-days" /> 06 Oct,
                                                                2022
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
                            {/*Pagination*/}

                        </div>

                    </div>
                </div>
            </div>
            {/* /Main Content Section */}

            <Footer />
        </>

    );
}
export default GridSidebar;