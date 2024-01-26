import React from "react";
import { Category10Svg, Category11Svg, Category12Svg, Category1Svg, Category2Svg, Category3Svg, Category4Svg, Category5Svg, Category6Svg, Category7Svg, Category8Svg, Category9Svg } from "../../imagepath";
import Header from "../../home/header";
import Footer from "../../home/footer/Footer";
import { Link, useLocation } from "react-router-dom";





const Category = () => {
    const parms=useLocation().pathname
    return (
        <>
        <Header parms={parms}/>
            {/* Breadscrumb Section */}
            <div className="breadcrumb-bar">
                <div className="container">
                    <div className="row align-items-center text-center">
                        <div className="col-md-12 col-12">
                            <h2 className="breadcrumb-title">Listings-Categories</h2>
                            <nav aria-label="breadcrumb" className="page-breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to="/index">Home</Link>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Categories
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Breadscrumb Section */}
            {/* Categories Section */}
            <div className="categorieslist-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-4">
                            <div className="categories-content">
                                <Link
                                    to="#"
                                    className="text-center aos aos-init aos-animate"
                                    data-aos="fade-up"
                                >
                                    <img src={Category1Svg} alt="car1" />
                                    <h6>Automotive</h6>
                                    <span className="ads">09 Ads</span>
                                    <span>Lorem Ipsum is simply dummy text of the typewriting</span>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4">
                            <div className="categories-content">
                                <Link
                                    to="#"
                                    className="text-center aos aos-init aos-animate"
                                    data-aos="fade-up"
                                >
                                    <img src={Category2Svg} alt="icons" />
                                    <h6>Electronics</h6>
                                    <span className="ads">09 Ads</span>
                                    <span>Lorem Ipsum is simply dummy text of the typewriting</span>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4">
                            <div className="categories-content">
                                <Link
                                    to="#"
                                    className="text-center aos aos-init aos-animate"
                                    data-aos="fade-up"
                                >
                                    <img src={Category3Svg} alt="car1" />
                                    <h6>Fashion Style</h6>
                                    <span className="ads">09 Ads</span>
                                    <span>Lorem Ipsum is simply dummy text of the typewriting</span>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4">
                            <div className="categories-content">
                                <Link
                                    to="#"
                                    className="text-center aos aos-init aos-animate"
                                    data-aos="fade-up"
                                >
                                    <img src={Category4Svg} alt="car1" />
                                    <h6>Health Care</h6>
                                    <span className="ads">09 Ads</span>
                                    <span>Lorem Ipsum is simply dummy text of the typewriting</span>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4">
                            <div className="categories-content">
                                <Link
                                    to="#"
                                    className="text-center aos aos-init aos-animate"
                                    data-aos="fade-up"
                                >
                                    <img src={Category5Svg} alt="car1" />
                                    <h6>Job Board</h6>
                                    <span className="ads">09 Ads</span>
                                    <span>Lorem Ipsum is simply dummy text of the typewriting</span>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4">
                            <div className="categories-content">
                                <Link
                                    to="#"
                                    className="text-center aos aos-init aos-animate"
                                    data-aos="fade-up"
                                >
                                    <img src={Category6Svg} alt="car1" />
                                    <h6>Education</h6>
                                    <span className="ads">09 Ads</span>
                                    <span>Lorem Ipsum is simply dummy text of the typewriting</span>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4">
                            <div className="categories-content">
                                <Link
                                    to="#"
                                    className="text-center aos aos-init aos-animate"
                                    data-aos="fade-up"
                                >
                                    <img src={Category7Svg} alt="car1" />
                                    <h6>Real Estate</h6>
                                    <span className="ads">09 Ads</span>
                                    <span>Lorem Ipsum is simply dummy text of the typewriting</span>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4">
                            <div className="categories-content ">
                                <Link
                                    to="#"
                                    className="text-center aos aos-init aos-animate"
                                    data-aos="fade-up"
                                >
                                    <img src={Category8Svg} alt="car1" />
                                    <h6>Travel</h6>
                                    <span className="ads">09 Ads</span>
                                    <span>Lorem Ipsum is simply dummy text of the typewriting</span>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4">
                            <div className="categories-content">
                                <Link
                                    to="#"
                                    className="text-center aos aos-init aos-animate"
                                    data-aos="fade-up"
                                >
                                    <img src={Category9Svg} alt="car1" />
                                    <h6>Sports &amp; Game</h6>
                                    <span className="ads">09 Ads</span>
                                    <span>Lorem Ipsum is simply dummy text of the typewriting</span>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4">
                            <div
                                className="categories-content aos aos-init aos-animate"
                                data-aos="fade-up"
                            >
                                <Link to="#" className="text-center">
                                    <img src={Category10Svg} alt="car1" />
                                    <h6>Magazines</h6>
                                    <span className="ads">09 Ads</span>
                                    <span>Lorem Ipsum is simply dummy text of the typewriting</span>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4">
                            <div className="categories-content">
                                <Link
                                    to="#"
                                    className="text-center aos aos-init aos-animate"
                                    data-aos="fade-up"
                                >
                                    <img src={Category11Svg} alt="car1" />
                                    <h6>Pet &amp; Animal </h6>
                                    <span className="ads">09 Ads</span>
                                    <span>Lorem Ipsum is simply dummy text of the typewriting</span>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4">
                            <div className="categories-content">
                                <Link
                                    to="#"
                                    className="text-center aos aos-init aos-animate"
                                    data-aos="fade-up"
                                >
                                    <img src={Category12Svg} alt="car1" />
                                    <h6>House Hold</h6>
                                    <span className="ads">09 Ads</span>
                                    <span>Lorem Ipsum is simply dummy text of the typewriting</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Categories Section */}
            <Footer/>
        </>

    );
}
export default Category;