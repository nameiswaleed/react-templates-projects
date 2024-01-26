import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Blog1, Blog4, Blog5, ProfileAvatar06, ProfileAvatar07, ProfileAvatar08, ProfileAvatar09, ProfileAvatar10, ProfileAvatar11, ProfileAvatar12, ProfileAvatar13, ProfileAvatar14 } from "../../../imagepath";
import Footer from "../../../home/footer/Footer";
import Header from "../../../home/header";





const BlogGrid = () => {
    const parms=useLocation().pathname
    return (
        <>
        <Header parms={parms}/>
            {/* Breadscrumb Section */}
            <div className="breadcrumb-bar">
                <div className="container">
                    <div className="row align-items-center text-center">
                        <div className="col-md-12 col-12">
                            <h2 className="breadcrumb-title">Listings-Blog</h2>
                            <nav aria-label="breadcrumb" className="page-breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to="/index">Home</Link>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Blog
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Breadscrumb Section */}
            {/* Blog List */}
            <div className="bloglist-section blog-gridpage">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 d-lg-flex">
                            <div className="blog grid-blog">
                                <div className="blog-image">
                                    <Link to="/blog-details">
                                        <img
                                            className="img-fluid"
                                            src={Blog1}
                                            alt="Post Image"
                                        />
                                    </Link>
                                </div>
                                <div className="blog-content">
                                    <p className="blog-category">
                                        <Link to="#">
                                            <span>Health</span>
                                        </Link>
                                        <Link to="#">
                                            <span>Care</span>
                                        </Link>
                                    </p>
                                    <ul className="entry-meta meta-item">
                                        <li>
                                            <div className="post-author">
                                                <div className="post-author-img">
                                                    <img
                                                        src={ProfileAvatar13}
                                                        alt="author"
                                                    />
                                                </div>
                                                <Link to="#">
                                                    {" "}
                                                    <span> Mary </span>
                                                </Link>
                                            </div>
                                        </li>
                                        <li className="date-icon">
                                            <i className="fa-solid fa-calendar-days" /> October 6, 2022
                                        </li>
                                    </ul>
                                    <h3 className="blog-title">
                                        <Link to="/blog-details">
                                            The Best Spa Saloons for your relaxations?
                                        </Link>
                                    </h3>
                                    <p className="blog-description">
                                        Dimply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry’s standard dumy text ever
                                        since the 1500s, when an unknown printer took a galley of type
                                        ...{" "}
                                    </p>
                                    <div className="viewlink">
                                        <Link to="/blog-details">
                                            View Details <i className="feather-arrow-right" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 d-lg-flex">
                            <div className="blog grid-blog">
                                <div className="blog-image">
                                    <Link to="/blog-details">
                                        <img
                                            className="img-fluid"
                                            src={Blog4}
                                            alt="Post Image"
                                        />
                                    </Link>
                                </div>
                                <div className="blog-content">
                                    <p className="blog-category">
                                        <Link to="#">
                                            <span>Health</span>
                                        </Link>
                                        <Link to="#">
                                            <span>Care</span>
                                        </Link>
                                    </p>
                                    <ul className="entry-meta meta-item">
                                        <li>
                                            <div className="post-author">
                                                <div className="post-author-img">
                                                    <img
                                                        src={ProfileAvatar14}
                                                        alt="author"
                                                    />
                                                </div>
                                                <Link to="#">
                                                    {" "}
                                                    <span> Barbara </span>
                                                </Link>
                                            </div>
                                        </li>
                                        <li className="date-icon">
                                            <i className="fa-solid fa-calendar-days" /> October 6, 2022
                                        </li>
                                    </ul>
                                    <h3 className="blog-title">
                                        <Link to="/blog-details">
                                            The Best Spa Saloons for your relaxations?
                                        </Link>
                                    </h3>
                                    <p className="blog-description">
                                        Dimply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry’s standard dumy text ever
                                        since the 1500s, when an unknown printer took a galley of type
                                        ...{" "}
                                    </p>
                                    <div className="viewlink">
                                        <Link to="/blog-details">
                                            View Details <i className="feather-arrow-right" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 d-lg-flex">
                            <div className="blog grid-blog">
                                <div className="blog-image">
                                    <Link to="/blog-details">
                                        <img
                                            className="img-fluid"
                                            src={Blog5}
                                            alt="Post Image"
                                        />
                                    </Link>
                                </div>
                                <div className="blog-content">
                                    <p className="blog-category">
                                        <Link to="#">
                                            <span>Health</span>
                                        </Link>
                                        <Link to="#">
                                            <span>Care</span>
                                        </Link>
                                    </p>
                                    <ul className="entry-meta meta-item">
                                        <li>
                                            <div className="post-author">
                                                <div className="post-author-img">
                                                    <img
                                                        src={ProfileAvatar12}
                                                        alt="author"
                                                    />
                                                </div>
                                                <Link to="#">
                                                    {" "}
                                                    <span> Darryl </span>
                                                </Link>
                                            </div>
                                        </li>
                                        <li className="date-icon">
                                            <i className="fa-solid fa-calendar-days" /> October 6, 2022
                                        </li>
                                    </ul>
                                    <h3 className="blog-title">
                                        <Link to="/blog-details">
                                            The Best Spa Saloons for your relaxations?
                                        </Link>
                                    </h3>
                                    <p className="blog-description">
                                        Dimply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry’s standard dumy text ever
                                        since the 1500s, when an unknown printer took a galley of type
                                        ...{" "}
                                    </p>
                                    <div className="viewlink">
                                        <Link to="/blog-details">
                                            View Details <i className="feather-arrow-right" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 d-lg-flex">
                            <div className="blog grid-blog">
                                <div className="blog-image">
                                    <Link to="/blog-details">
                                        <img
                                            className="img-fluid"
                                            src={Blog1}
                                            alt="Post Image"
                                        />
                                    </Link>
                                </div>
                                <div className="blog-content">
                                    <p className="blog-category">
                                        <Link to="#">
                                            <span>Health</span>
                                        </Link>
                                        <Link to="#">
                                            <span>Care</span>
                                        </Link>
                                    </p>
                                    <ul className="entry-meta meta-item">
                                        <li>
                                            <div className="post-author">
                                                <div className="post-author-img">
                                                    <img
                                                        src={ProfileAvatar11}
                                                        alt="author"
                                                    />
                                                </div>
                                                <Link to="#">
                                                    {" "}
                                                    <span> Wilkerson </span>
                                                </Link>
                                            </div>
                                        </li>
                                        <li className="date-icon">
                                            <i className="fa-solid fa-calendar-days" /> October 6, 2022
                                        </li>
                                    </ul>
                                    <h3 className="blog-title">
                                        <Link to="/blog-details">
                                            The Best Spa Saloons for your relaxations?
                                        </Link>
                                    </h3>
                                    <p className="blog-description">
                                        Dimply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry’s standard dumy text ever
                                        since the 1500s, when an unknown printer took a galley of type
                                        ...{" "}
                                    </p>
                                    <div className="viewlink">
                                        <Link to="/blog-details">
                                            View Details <i className="feather-arrow-right" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 d-lg-flex">
                            <div className="blog grid-blog">
                                <div className="blog-image">
                                    <Link to="/blog-details">
                                        <img
                                            className="img-fluid"
                                            src={Blog4}
                                            alt="Post Image"
                                        />
                                    </Link>
                                </div>
                                <div className="blog-content">
                                    <p className="blog-category">
                                        <Link to="#">
                                            <span>Health</span>
                                        </Link>
                                        <Link to="#">
                                            <span>Care</span>
                                        </Link>
                                    </p>
                                    <ul className="entry-meta meta-item">
                                        <li>
                                            <div className="post-author">
                                                <div className="post-author-img">
                                                    <img
                                                        src={ProfileAvatar10}
                                                        alt="author"
                                                    />
                                                </div>
                                                <Link to="#">
                                                    {" "}
                                                    <span> Joseph </span>
                                                </Link>
                                            </div>
                                        </li>
                                        <li className="date-icon">
                                            <i className="fa-solid fa-calendar-days" /> October 6, 2022
                                        </li>
                                    </ul>
                                    <h3 className="blog-title">
                                        <Link to="/blog-details">
                                            The Best Spa Saloons for your relaxations?
                                        </Link>
                                    </h3>
                                    <p className="blog-description">
                                        Dimply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry’s standard dumy text ever
                                        since the 1500s, when an unknown printer took a galley of type
                                        ...{" "}
                                    </p>
                                    <div className="viewlink">
                                        <Link to="/blog-details">
                                            View Details <i className="feather-arrow-right" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 d-lg-flex">
                            <div className="blog grid-blog">
                                <div className="blog-image">
                                    <Link to="/blog-details">
                                        <img
                                            className="img-fluid"
                                            src={Blog5}
                                            alt="Post Image"
                                        />
                                    </Link>
                                </div>
                                <div className="blog-content">
                                    <p className="blog-category">
                                        <Link to="#">
                                            <span>Health</span>
                                        </Link>
                                        <Link to="#">
                                            <span>Care</span>
                                        </Link>
                                    </p>
                                    <ul className="entry-meta meta-item">
                                        <li>
                                            <div className="post-author">
                                                <div className="post-author-img">
                                                    <img
                                                        src={ProfileAvatar09}
                                                        alt="author"
                                                    />
                                                </div>
                                                <Link to="#">
                                                    {" "}
                                                    <span> Daniel </span>
                                                </Link>
                                            </div>
                                        </li>
                                        <li className="date-icon">
                                            <i className="fa-solid fa-calendar-days" /> October 6, 2022
                                        </li>
                                    </ul>
                                    <h3 className="blog-title">
                                        <Link to="/blog-details">
                                            The Best Spa Saloons for your relaxations?
                                        </Link>
                                    </h3>
                                    <p className="blog-description">
                                        Dimply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry’s standard dumy text ever
                                        since the 1500s, when an unknown printer took a galley of type
                                        ...{" "}
                                    </p>
                                    <div className="viewlink">
                                        <Link to="/blog-details">
                                            View Details <i className="feather-arrow-right" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 d-lg-flex">
                            <div className="blog grid-blog">
                                <div className="blog-image">
                                    <Link to="/blog-details">
                                        <img
                                            className="img-fluid"
                                            src={Blog1}
                                            alt="Post Image"
                                        />
                                    </Link>
                                </div>
                                <div className="blog-content">
                                    <p className="blog-category">
                                        <Link to="#">
                                            <span>Health</span>
                                        </Link>
                                        <Link to="#">
                                            <span>Care</span>
                                        </Link>
                                    </p>
                                    <ul className="entry-meta meta-item">
                                        <li>
                                            <div className="post-author">
                                                <div className="post-author-img">
                                                    <img
                                                        src={ProfileAvatar08}
                                                        alt="author"
                                                    />
                                                </div>
                                                <Link to="#">
                                                    {" "}
                                                    <span> Ashley </span>
                                                </Link>
                                            </div>
                                        </li>
                                        <li className="date-icon">
                                            <i className="fa-solid fa-calendar-days" /> October 6, 2022
                                        </li>
                                    </ul>
                                    <h3 className="blog-title">
                                        <Link to="/blog-details">
                                            The Best Spa Saloons for your relaxations?
                                        </Link>
                                    </h3>
                                    <p className="blog-description">
                                        Dimply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry’s standard dumy text ever
                                        since the 1500s, when an unknown printer took a galley of type
                                        ...{" "}
                                    </p>
                                    <div className="viewlink">
                                        <Link to="/blog-details">
                                            View Details <i className="feather-arrow-right" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 d-lg-flex">
                            <div className="blog grid-blog">
                                <div className="blog-image">
                                    <Link to="/blog-details">
                                        <img
                                            className="img-fluid"
                                            src={Blog4}
                                            alt="Post Image"
                                        />
                                    </Link>
                                </div>
                                <div className="blog-content">
                                    <p className="blog-category">
                                        <Link to="#">
                                            <span>Health</span>
                                        </Link>
                                        <Link to="#">
                                            <span>Care</span>
                                        </Link>
                                    </p>
                                    <ul className="entry-meta meta-item">
                                        <li>
                                            <div className="post-author">
                                                <div className="post-author-img">
                                                    <img
                                                        src={ProfileAvatar07}
                                                        alt="author"
                                                    />
                                                </div>
                                                <Link to="#">
                                                    {" "}
                                                    <span> Garcia </span>
                                                </Link>
                                            </div>
                                        </li>
                                        <li className="date-icon">
                                            <i className="fa-solid fa-calendar-days" /> October 6, 2022
                                        </li>
                                    </ul>
                                    <h3 className="blog-title">
                                        <Link to="/blog-details">
                                            The Best Spa Saloons for your relaxations?
                                        </Link>
                                    </h3>
                                    <p className="blog-description">
                                        Dimply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry’s standard dumy text ever
                                        since the 1500s, when an unknown printer took a galley of type
                                        ...{" "}
                                    </p>
                                    <div className="viewlink">
                                        <Link to="/blog-details">
                                            View Details <i className="feather-arrow-right" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 d-lg-flex">
                            <div className="blog grid-blog">
                                <div className="blog-image">
                                    <Link to="/blog-details">
                                        <img
                                            className="img-fluid"
                                            src={Blog5}
                                            alt="Post Image"
                                        />
                                    </Link>
                                </div>
                                <div className="blog-content">
                                    <p className="blog-category">
                                        <Link to="#">
                                            <span>Health</span>
                                        </Link>
                                        <Link to="#">
                                            <span>Care</span>
                                        </Link>
                                    </p>
                                    <ul className="entry-meta meta-item">
                                        <li>
                                            <div className="post-author">
                                                <div className="post-author-img">
                                                    <img
                                                        src={ProfileAvatar06}
                                                        alt="author"
                                                    />
                                                </div>
                                                <Link to="#">
                                                    {" "}
                                                    <span> Victor </span>
                                                </Link>
                                            </div>
                                        </li>
                                        <li className="date-icon">
                                            <i className="fa-solid fa-calendar-days" /> October 6, 2022
                                        </li>
                                    </ul>
                                    <h3 className="blog-title">
                                        <Link to="/blog-details">
                                            The Best Spa Saloons for your relaxations?
                                        </Link>
                                    </h3>
                                    <p className="blog-description">
                                        Dimply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry’s standard dumy text ever
                                        since the 1500s, when an unknown printer took a galley of type
                                        ...{" "}
                                    </p>
                                    <div className="viewlink">
                                        <Link to="/blog-details">
                                            View Details <i className="feather-arrow-right" />
                                        </Link>
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
            {/* /Blog List */}
            <Footer/>
        </>

    );
}
export default BlogGrid;