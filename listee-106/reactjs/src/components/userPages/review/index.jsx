import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ProfileAvatar01, ProfileAvatar02, ProfileAvatar11, profile_img, review_1, review_2, review_3, review_4 } from "../../imagepath";
import UserHeader from "../Userheader";
import Footer from "../../home/footer/Footer";



const Review = () => {
    const [change,setChange]=useState(false);
    const [change1,setChange1]=useState(false);
    const parms=useLocation().pathname
    return (
        <>
        <UserHeader parms={parms}/>
            {/* Breadscrumb Section */}
            <div className="breadcrumb-bar">
                <div className="container">
                    <div className="row align-items-center text-center">
                        <div className="col-md-12 col-12">
                            <h2 className="breadcrumb-title">Reviews</h2>
                            <nav aria-label="breadcrumb" className="page-breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to="/index">Home</Link>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Reviews
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Breadscrumb Section */}
            {/* Reviews Content */}
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
                            <li>
                                <Link to="/bookmarks">
                                    <i className="fas fa-solid fa-heart" /> <span>Bookmarks</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/messages">
                                    <i className="fa-solid fa-comment-dots" /> <span>Messages</span>
                                </Link>
                            </li>
                            <li className="active">
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
                    <div className="row dashboard-info reviewpage-content">
                        <div className="col-lg-6 d-flex">
                            <div className="card dash-cards">
                                <div className="card-header">
                                    <h4>Visitor Review</h4>
                                    <div className="card-dropdown">
                                        <ul>
                                            <li className="nav-item dropdown has-arrow logged-item">
                                                <Link
                                                    to="#"
                                                    className="dropdown-toggle pageviews-link"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false"
                                                    onClick={()=>setChange(!change)}
                                                >
                                                    <span>All Listing</span>
                                                </Link>
                                                <div className={`${change===true ? 'dropdown-menu dropdown-menu-end show' : "dropdown-menu dropdown-menu-end"}`}>
                                                    <Link className="dropdown-item" to="#">
                                                        Next Week
                                                    </Link>
                                                    <Link className="dropdown-item" to="#">
                                                        Last Month
                                                    </Link>
                                                    <Link className="dropdown-item" to="#">
                                                        Next Month
                                                    </Link>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <ul className="review-list">
                                        <li className="review-box">
                                            <div className="review-profile">
                                                <div className="review-img">
                                                    <img
                                                        src={ProfileAvatar11}
                                                        className="img-fluid"
                                                        alt="img"
                                                    />
                                                </div>
                                            </div>
                                            <div className="review-details">
                                                <h6>Joseph</h6>
                                                <div className="rating">
                                                    <div className="rating-star">
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star filled" />
                                                    </div>
                                                    <div>
                                                        <i className="fa-sharp fa-solid fa-calendar-days" /> 4
                                                        months ago
                                                    </div>
                                                    <div>by: Joseph</div>
                                                </div>
                                                <p>
                                                    Lorem Ipsum is simply dummy text of the printing and
                                                    typesetting industry. It has been the industry's standard
                                                    dummy.
                                                </p>
                                                <ul className="review-gallery">
                                                    <li>
                                                        <img
                                                            className="img-fluid"
                                                            alt="Image"
                                                            src={review_1}
                                                        />
                                                    </li>
                                                    <li>
                                                        <img
                                                            className="img-fluid"
                                                            alt="Image"
                                                            src={review_2}
                                                        />
                                                    </li>
                                                    <li>
                                                        <img
                                                            className="img-fluid"
                                                            alt="Image"
                                                            src={review_3}
                                                        />
                                                    </li>
                                                    <li>
                                                        <img
                                                            className="img-fluid"
                                                            alt="Image"
                                                            src={review_4}
                                                        />
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="review-box">
                                            <div className="review-profile">
                                                <div className="review-img">
                                                    <img
                                                        src={ProfileAvatar02}
                                                        className="img-fluid"
                                                        alt="img"
                                                    />
                                                </div>
                                            </div>
                                            <div className="review-details">
                                                <h6>Dev</h6>
                                                <div className="rating">
                                                    <div className="rating-star">
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star filled" />
                                                    </div>
                                                    <div>
                                                        <i className="fa-sharp fa-solid fa-calendar-days" /> 6
                                                        months ago
                                                    </div>
                                                    <div>by: Joseph</div>
                                                </div>
                                                <p>
                                                    Lorem Ipsum is simply dummy text of the printing and
                                                    typesetting industry. It has been the industry's standard
                                                    dummy.
                                                </p>
                                            </div>
                                        </li>
                                        <li className="review-box">
                                            <div className="review-profile">
                                                <div className="review-img">
                                                    <img
                                                        src={ProfileAvatar01}
                                                        className="img-fluid"
                                                        alt="img"
                                                    />
                                                </div>
                                            </div>
                                            <div className="review-details">
                                                <h6>Jonson</h6>
                                                <div className="rating">
                                                    <div className="rating-star">
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star filled" />
                                                    </div>
                                                    <div>
                                                        <i className="fa-sharp fa-solid fa-calendar-days" /> 8
                                                        months ago
                                                    </div>
                                                    <div>by: Joseph</div>
                                                </div>
                                                <p>
                                                    Lorem Ipsum is simply dummy text of the printing and
                                                    typesetting industry. It has been the industry's standard
                                                    dummy.
                                                </p>
                                                <ul className="review-gallery">
                                                    <li>
                                                        <img
                                                            className="img-fluid"
                                                            alt="Image"
                                                            src={review_1}
                                                        />
                                                    </li>
                                                    <li>
                                                        <img
                                                            className="img-fluid"
                                                            alt="Image"
                                                            src={review_2}
                                                        />
                                                    </li>
                                                    <li>
                                                        <img
                                                            className="img-fluid"
                                                            alt="Image"
                                                            src={review_3}
                                                        />
                                                    </li>
                                                    <li>
                                                        <img
                                                            className="img-fluid"
                                                            alt="Image"
                                                            src={review_4}
                                                        />
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex">
                            <div className="card dash-cards">
                                <div className="card-header">
                                    <h4>Your Review</h4>
                                    <div className="card-dropdown">
                                        <ul>
                                            <li className="nav-item dropdown has-arrow logged-item">
                                                <Link
                                                    to="#"
                                                    className="dropdown-toggle pageviews-link"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false"
                                                    onClick={()=>setChange1(!change1)}
                                                >
                                                    <span>All Listing</span>
                                                </Link>
                                                <div className={`${change1===true ? 'dropdown-menu dropdown-menu-end show' : "dropdown-menu dropdown-menu-end"}`}>
                                                    <Link className="dropdown-item" to="#">
                                                        Next Week
                                                    </Link>
                                                    <Link className="dropdown-item" to="#">
                                                        Last Month
                                                    </Link>
                                                    <Link className="dropdown-item" to="#">
                                                        Next Month
                                                    </Link>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <ul className="review-list">
                                        <li className="review-box">
                                            <div className="review-profile">
                                                <div className="review-img">
                                                    <img
                                                        src={profile_img}
                                                        className="img-fluid"
                                                        alt="img"
                                                    />
                                                </div>
                                            </div>
                                            <div className="review-details">
                                                <h6>John Doe</h6>
                                                <div className="rating">
                                                    <div className="rating-star">
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star filled" />
                                                    </div>
                                                    <div>
                                                        <i className="fa-sharp fa-solid fa-calendar-days" /> 4
                                                        months ago
                                                    </div>
                                                    <div>by: John Doe</div>
                                                </div>
                                                <p>
                                                    Lorem Ipsum is simply dummy text of the printing and
                                                    typesetting industry. It has been the industry's standard
                                                    dummy.
                                                </p>
                                                <ul className="review-gallery">
                                                    <li>
                                                        <img
                                                            className="img-fluid"
                                                            alt="Image"
                                                            src={review_1}
                                                        />
                                                    </li>
                                                    <li>
                                                        <img
                                                            className="img-fluid"
                                                            alt="Image"
                                                            src={review_2}
                                                        />
                                                    </li>
                                                    <li>
                                                        <img
                                                            className="img-fluid"
                                                            alt="Image"
                                                            src={review_3}
                                                        />
                                                    </li>
                                                    <li>
                                                        <img
                                                            className="img-fluid"
                                                            alt="Image"
                                                            src={review_4}
                                                        />
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="review-box">
                                            <div className="review-profile">
                                                <div className="review-img">
                                                    <img
                                                        src={profile_img}
                                                        className="img-fluid"
                                                        alt="img"
                                                    />
                                                </div>
                                            </div>
                                            <div className="review-details">
                                                <h6>John Doe</h6>
                                                <div className="rating">
                                                    <div className="rating-star">
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star filled" />
                                                    </div>
                                                    <div>
                                                        <i className="fa-sharp fa-solid fa-calendar-days" /> 6
                                                        months ago
                                                    </div>
                                                    <div>by: John Doe</div>
                                                </div>
                                                <p>
                                                    Lorem Ipsum is simply dummy text of the printing and
                                                    typesetting industry. It has been the industry's standard
                                                    dummy.
                                                </p>
                                            </div>
                                        </li>
                                        <li className="review-box">
                                            <div className="review-profile">
                                                <div className="review-img">
                                                    <img
                                                        src={profile_img}
                                                        className="img-fluid"
                                                        alt="img"
                                                    />
                                                </div>
                                            </div>
                                            <div className="review-details">
                                                <h6>John Doe</h6>
                                                <div className="rating">
                                                    <div className="rating-star">
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star filled" />
                                                    </div>
                                                    <div>
                                                        <i className="fa-sharp fa-solid fa-calendar-days" /> 11
                                                        months ago
                                                    </div>
                                                    <div>by: John Doe</div>
                                                </div>
                                                <p>
                                                    Lorem Ipsum is simply dummy text of the printing and
                                                    typesetting industry. It has been the industry's standard
                                                    dummy.
                                                </p>
                                                <ul className="review-gallery">
                                                    <li>
                                                        <img
                                                            className="img-fluid"
                                                            alt="Image"
                                                            src={review_1}
                                                        />
                                                    </li>
                                                    <li>
                                                        <img
                                                            className="img-fluid"
                                                            alt="Image"
                                                            src={review_2}
                                                        />
                                                    </li>
                                                    <li>
                                                        <img
                                                            className="img-fluid"
                                                            alt="Image"
                                                            src={review_3}
                                                        />
                                                    </li>
                                                    <li>
                                                        <img
                                                            className="img-fluid"
                                                            alt="Image"
                                                            src={review_4}
                                                        />
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Reviews Content */}
            <Footer/>
            
        </>

    );
}
export default Review;