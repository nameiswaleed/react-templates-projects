import React from "react";
import { ProfileAvatar12, ProfileAvatar13, ProfileAvatar14, bloglistingimg_1, bloglistingimg_2, bloglistingimg_3, category_icon, details_icon } from "../../imagepath";
import { Link, useLocation } from "react-router-dom";
import Footer from "../../home/footer/Footer";
import StickyBox from "react-sticky-box";
import Header from "../../home/header";



const BlogList = () => {
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
            <div className="bloglisting">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="bloglist-widget">
                                <div className="blog grid-blog">
                                    <div className="blog-image">
                                        <Link to="/blog-details">
                                            <img
                                                className="img-fluid"
                                                src={bloglistingimg_1}
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
                                                The Best SPA Salons For Your Relaxation
                                            </Link>
                                        </h3>
                                        <p className="mb-0">
                                            Contrary to popular belief, Lorem Ipsum is not simply random
                                            text. It has roots in a piece of classical Latin literature
                                            from 45 BC, making it over 2000 years old. Richard
                                        </p>
                                        <div className="viewlink">
                                            <Link to="/blog-details">
                                                View Details <i className="feather-arrow-right" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog grid-blog">
                                    <div className="blog-image">
                                        <Link to="/blog-details">
                                            <img
                                                className="img-fluid"
                                                src={bloglistingimg_2}
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
                                                <i className="fa-solid fa-calendar-days" /> October 9, 2022
                                            </li>
                                        </ul>
                                        <h3 className="blog-title">
                                            <Link to="/blog-details">Great Business Tips in 2022</Link>
                                        </h3>
                                        <p className="mb-0">
                                            Contrary to popular belief, Lorem Ipsum is not simply random
                                            text. It has roots in a piece of classical Latin literature
                                            from 45 BC, making it over 2000 years old. Richard
                                        </p>
                                        <div className="viewlink">
                                            <Link to="/blog-details">
                                                View Details <i className="feather-arrow-right" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog grid-blog">
                                    <div className="blog-image">
                                        <Link to="/blog-details">
                                            <img
                                                className="img-fluid"
                                                src={bloglistingimg_3}
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
                                                <i className="fa-solid fa-calendar-days" /> October 7, 2022
                                            </li>
                                        </ul>
                                        <h3 className="blog-title">
                                            <Link to="/blog-details">
                                                8 Amazing Tricks About Business
                                            </Link>
                                        </h3>
                                        <p className="mb-0">
                                            Contrary to popular belief, Lorem Ipsum is not simply random
                                            text. It has roots in a piece of classical Latin literature
                                            from 45 BC, making it over 2000 years old. Richard
                                        </p>
                                        <div className="viewlink">
                                            <Link to="/blog-details">
                                                View Details <i className="feather-arrow-right" />
                                            </Link>
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
                        <div className="col-lg-4 theiaStickySidebar">
                            <StickyBox>
                                <div className="rightsidebar blogsidebar">
                                    <div className="card">
                                        <h4>
                                            <img src={details_icon} alt="details-icon" />{" "}
                                            Filter
                                        </h4>
                                        <div className="filter-content looking-input form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="To Search type and hit enter"
                                            />
                                        </div>
                                    </div>
                                    <div className="card">
                                        <h4>
                                            <img src={category_icon} alt="details-icon" />{" "}
                                            Categories
                                        </h4>
                                        <ul className="blogcategories-list">
                                            <li>
                                                <Link to="#">Accept Credit Cards</Link>
                                            </li>
                                            <li>
                                                <Link to="#">Smoking Allowed</Link>
                                            </li>
                                            <li>
                                                <Link to="#">Bike Parking</Link>
                                            </li>
                                            <li>
                                                <Link to="#">Street Parking</Link>
                                            </li>
                                            <li>
                                                <Link to="#">Wireless Internet</Link>
                                            </li>
                                            <li>
                                                <Link to="#">Pet Friendly</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="card tags-widget">
                                        <h4>
                                            <i className="feather-tag" /> Tags
                                        </h4>
                                        <ul className="tags">
                                            <li>Travelling </li>
                                            <li>Art </li>
                                            <li>Vacation </li>
                                            <li>Tourism </li>
                                            <li>Culture </li>
                                            <li>Lifestyle </li>
                                            <li>Travelling </li>
                                            <li>Art </li>
                                            <li>vacation </li>
                                            <li>Tourism </li>
                                            <li>Culture </li>
                                        </ul>
                                    </div>
                                    <div className="card">
                                        <h4>
                                            <i className="feather-tag" /> Article
                                        </h4>
                                        <div className="article">
                                            <Link to="/blog-details" className="articleimg-1">
                                                <ul>
                                                    <li>
                                                        <h6>Great Business Tips in 2022</h6>
                                                    </li>
                                                    <li className="date-icon">
                                                        <i className="fa-solid fa-calendar-days" /> October 6,
                                                        2022
                                                    </li>
                                                </ul>
                                            </Link>
                                        </div>
                                        <div className="article">
                                            <Link to="/blog-details" className="articleimg-2">
                                                <ul>
                                                    <li>
                                                        <h6>Excited News About Fashion.</h6>
                                                    </li>
                                                    <li className="date-icon">
                                                        <i className="fa-solid fa-calendar-days" /> October 9,
                                                        2022
                                                    </li>
                                                </ul>
                                            </Link>
                                        </div>
                                        <div className="article">
                                            <Link to="/blog-details" className="articleimg-3">
                                                <ul>
                                                    <li>
                                                        <h6>8 Amazing Tricks About Business</h6>
                                                    </li>
                                                    <li className="date-icon">
                                                        <i className="fa-solid fa-calendar-days" /> October 10,
                                                        2022
                                                    </li>
                                                </ul>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </StickyBox>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Blog List */}
            <Footer />
        </>

    );
}
export default BlogList;