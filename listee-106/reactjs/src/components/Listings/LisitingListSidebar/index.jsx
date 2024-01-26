import React from "react";
import Sidebar from "../LisitingGridSidebar/sidebar";
import { ProfileAvatar01, ProfileAvatar04, ProfileAvatar05, ProfileAvatar06, ProfileAvatar08, ProfileAvatar09, ProfileAvatar10, bloglistimg_1, bloglistimg_2, bloglistimg_3, bloglistimg_4, bloglistimg_5, bloglistimg_6, bloglistimg_7, bloglistimg_8 } from "../../imagepath";
import Header from "../../home/header";
import Footer from "../../home/footer/Footer";
import { Link, useLocation } from "react-router-dom";





const ListSidebar = () => {
    const parms=useLocation().pathname
    return (
        <>
        <Header parms={parms}/>
            {/* Breadscrumb Section */}
            <div className="breadcrumb-bar">
                <div className="container">
                    <div className="row align-items-center text-center">
                        <div className="col-md-12 col-12">
                            <h2 className="breadcrumb-title">Listings-List</h2>
                            <nav aria-label="breadcrumb" className="page-breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to="/index">Home</Link>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        List
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
                        <Sidebar/>
                        <div className="col-lg-8">
                            <div className="row sorting-div">
                                <div className="col-lg-4 col-sm-4 align-items-center d-flex">
                                    <div className="count-search">
                                        <p>
                                            Showing <span>1-8</span> of 10 Results
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-sm-8  align-items-center">
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
                                                <Link to="/listing-list-sidebar" className="active">
                                                    <i className="feather-list" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/listing-grid-sidebar">
                                                    <i className="feather-grid" />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="blog-listview">
                                <div className="card">
                                    <div className="blog-widget">
                                        <div className="blog-img">
                                            <Link to="/service-details">
                                                <img
                                                    src={bloglistimg_1}
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
                                                    <div className="blog-features">
                                                        <Link to="#">
                                                            <span>
                                                                {" "}
                                                                <i className="fa-regular fa-circle-stop" />{" "}
                                                                Construction
                                                            </span>
                                                        </Link>
                                                    </div>
                                                    <div className="blog-author">
                                                        <div className="blog-author-img">
                                                            <img
                                                                src={ProfileAvatar01}
                                                                alt="author"
                                                            />
                                                        </div>
                                                        <Link to="#">John Doe</Link>
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
                                                        <i className="feather-phone-call" /> +44 6633 6526
                                                    </div>
                                                    <div className="location-info">
                                                        <i className="feather-eye" /> 4000
                                                    </div>
                                                </div>
                                                <p className="ratings">
                                                    <span>4.0</span> ( 50 Reviews )
                                                </p>
                                                <div className="amount-details">
                                                    <div className="amount">
                                                        <span className="validrate">$350</span>
                                                        <span>$450</span>
                                                    </div>
                                                    <Link to="/service-details">View details</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="blog-widget">
                                        <div className="blog-img">
                                            <Link to="/service-details">
                                                <img
                                                    src={bloglistimg_2}
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
                                                    <div className="blog-features">
                                                        <Link to="#">
                                                            <span>
                                                                {" "}
                                                                <i className="fa-regular fa-circle-stop" /> Jobs
                                                            </span>
                                                        </Link>
                                                    </div>
                                                    <div className="blog-author">
                                                        <div className="blog-author-img">
                                                            <img
                                                                src={ProfileAvatar10}
                                                                alt="author"
                                                            />
                                                        </div>
                                                        <Link to="#">Orlando Diggs</Link>
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
                                                        <i className="feather-phone-call" /> +44 6633 6526
                                                    </div>
                                                    <div className="location-info">
                                                        <i className="feather-eye" /> 4000
                                                    </div>
                                                </div>
                                                <p className="ratings">
                                                    <span>4.0</span> ( 50 Reviews )
                                                </p>
                                                <div className="amount-details">
                                                    <div className="amount">
                                                        <span className="validrate">$350</span>
                                                        <span>$450</span>
                                                    </div>
                                                    <Link to="/service-details">View details</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="blog-widget">
                                        <div className="blog-img">
                                            <Link to="/service-details">
                                                <img
                                                    src={bloglistimg_3}
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
                                                    <div className="blog-features">
                                                        <Link to="#">
                                                            <span>
                                                                {" "}
                                                                <i className="fa-regular fa-circle-stop" />{" "}
                                                                Electronics
                                                            </span>
                                                        </Link>
                                                    </div>
                                                    <div className="blog-author">
                                                        <div className="blog-author-img">
                                                            <img
                                                                src={ProfileAvatar04}
                                                                alt="author"
                                                            />
                                                        </div>
                                                        <Link to="#">Kate Morrison</Link>
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
                                                        <i className="feather-phone-call" /> +44 6633 6526
                                                    </div>
                                                    <div className="location-info">
                                                        <i className="feather-eye" /> 4000
                                                    </div>
                                                </div>
                                                <p className="ratings">
                                                    <span>4.0</span> ( 50 Reviews )
                                                </p>
                                                <div className="amount-details">
                                                    <div className="amount">
                                                        <span className="validrate">$350</span>
                                                        <span>$450</span>
                                                    </div>
                                                    <Link to="/service-details">View details</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="blog-widget">
                                        <div className="blog-img">
                                            <Link to="/service-details">
                                                <img
                                                    src={bloglistimg_4}
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
                                                    <div className="blog-features">
                                                        <Link to="#">
                                                            <span>
                                                                {" "}
                                                                <i className="fa-regular fa-circle-stop" /> Vehicles
                                                            </span>
                                                        </Link>
                                                    </div>
                                                    <div className="blog-author">
                                                        <div className="blog-author-img">
                                                            <img
                                                                src={ProfileAvatar06}
                                                                alt="author"
                                                            />
                                                        </div>
                                                        <Link to="#">Koray Okumus</Link>
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
                                                        <i className="feather-phone-call" /> +44 6633 6526
                                                    </div>
                                                    <div className="location-info">
                                                        <i className="feather-eye" /> 4000
                                                    </div>
                                                </div>
                                                <p className="ratings">
                                                    <span>4.0</span> ( 50 Reviews )
                                                </p>
                                                <div className="amount-details">
                                                    <div className="amount">
                                                        <span className="validrate">$350</span>
                                                        <span>$450</span>
                                                    </div>
                                                    <Link to="/service-details">View details</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="blog-widget">
                                        <div className="blog-img">
                                            <Link to="/service-details">
                                                <img
                                                    src={bloglistimg_5}
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
                                                    <div className="blog-features">
                                                        <Link to="#">
                                                            <span>
                                                                {" "}
                                                                <i className="fa-regular fa-circle-stop" /> Vehicles
                                                            </span>
                                                        </Link>
                                                    </div>
                                                    <div className="blog-author">
                                                        <div className="blog-author-img">
                                                            <img
                                                                src={ProfileAvatar05}
                                                                alt="author"
                                                            />
                                                        </div>
                                                        <Link to="#">Ava Wright</Link>
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
                                                        <i className="feather-phone-call" /> +44 6633 6526
                                                    </div>
                                                    <div className="location-info">
                                                        <i className="feather-eye" /> 4000
                                                    </div>
                                                </div>
                                                <p className="ratings">
                                                    <span>4.0</span> ( 50 Reviews )
                                                </p>
                                                <div className="amount-details">
                                                    <div className="amount">
                                                        <span className="validrate">$350</span>
                                                        <span>$450</span>
                                                    </div>
                                                    <Link to="/service-details">View details</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="blog-widget">
                                        <div className="blog-img">
                                            <Link to="/service-details">
                                                <img
                                                    src={bloglistimg_6}
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
                                                    <div className="blog-features">
                                                        <Link to="#">
                                                            <span>
                                                                {" "}
                                                                <i className="fa-regular fa-circle-stop" />{" "}
                                                                Electronics
                                                            </span>
                                                        </Link>
                                                    </div>
                                                    <div className="blog-author">
                                                        <div className="blog-author-img">
                                                            <img
                                                                src={ProfileAvatar08}
                                                                alt="author"
                                                            />
                                                        </div>
                                                        <Link to="#">Eve Leroy</Link>
                                                    </div>
                                                </div>
                                                <h6>
                                                    <Link to="/service-details">Fashion Luxury Men Date</Link>
                                                </h6>
                                                <div className="blog-location-details">
                                                    <div className="location-info">
                                                        <i className="feather-map-pin" /> Los Angeles
                                                    </div>
                                                    <div className="location-info">
                                                        <i className="feather-phone-call" /> +44 6633 6526
                                                    </div>
                                                    <div className="location-info">
                                                        <i className="feather-eye" /> 4000
                                                    </div>
                                                </div>
                                                <p className="ratings">
                                                    <span>4.0</span> ( 50 Reviews )
                                                </p>
                                                <div className="amount-details">
                                                    <div className="amount">
                                                        <span className="validrate">$350</span>
                                                        <span>$450</span>
                                                    </div>
                                                    <Link to="/service-details">View details</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="blog-widget">
                                        <div className="blog-img">
                                            <Link to="/service-details">
                                                <img
                                                    src={bloglistimg_7}
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
                                                    <div className="blog-features">
                                                        <Link to="#">
                                                            <span>
                                                                {" "}
                                                                <i className="fa-regular fa-circle-stop" />{" "}
                                                                Electronics
                                                            </span>
                                                        </Link>
                                                    </div>
                                                    <div className="blog-author">
                                                        <div className="blog-author-img">
                                                            <img
                                                                src={ProfileAvatar09}
                                                                alt="author"
                                                            />
                                                        </div>
                                                        <Link to="#">Zahir Mays</Link>
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
                                                        <i className="feather-phone-call" /> +44 6633 6526
                                                    </div>
                                                    <div className="location-info">
                                                        <i className="feather-eye" /> 4000
                                                    </div>
                                                </div>
                                                <p className="ratings">
                                                    <span>4.0</span> ( 50 Reviews )
                                                </p>
                                                <div className="amount-details">
                                                    <div className="amount">
                                                        <span className="validrate">$350</span>
                                                        <span>$450</span>
                                                    </div>
                                                    <Link to="/service-details">View details</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="blog-widget">
                                        <div className="blog-img">
                                            <Link to="/service-details">
                                                <img
                                                    src={bloglistimg_8}
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
                                                    <div className="blog-features">
                                                        <Link to="#">
                                                            <span>
                                                                {" "}
                                                                <i className="fa-regular fa-circle-stop" />{" "}
                                                                Electronics
                                                            </span>
                                                        </Link>
                                                    </div>
                                                    <div className="blog-author">
                                                        <div className="blog-author-img">
                                                            <img
                                                                src={ProfileAvatar10}
                                                                alt="author"
                                                            />
                                                        </div>
                                                        <Link to="#">Zahir Mays</Link>
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
                                                        <i className="feather-phone-call" /> +44 6633 6526
                                                    </div>
                                                    <div className="location-info">
                                                        <i className="feather-eye" /> 4000
                                                    </div>
                                                </div>
                                                <p className="ratings">
                                                    <span>4.0</span> ( 50 Reviews )
                                                </p>
                                                <div className="amount-details">
                                                    <div className="amount">
                                                        <span className="validrate">$350</span>
                                                        <span>$450</span>
                                                    </div>
                                                    <Link to="/service-details">View details</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Main Content Section */}
            <Footer/>
        </>

    );
}
export default ListSidebar;