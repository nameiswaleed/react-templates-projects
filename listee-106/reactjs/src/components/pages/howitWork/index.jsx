import React from "react";
import Header from "../../home/header";
import Footer from "../../home/footer/Footer";
import { work1_jpg, work2_jpg, work3_jpg } from "../../imagepath";
import { Link, useLocation } from "react-router-dom";




const HowItWork = () => {
    const parms=useLocation().pathname
    return (
        <>
            <Header parms={parms}/>
            {/* Breadscrumb Section */}
            <div className="breadcrumb-bar">
                <div className="container">
                    <div className="row align-items-center text-center">
                        <div className="col-md-12 col-12">
                            <h2 className="breadcrumb-title">How it Works</h2>
                            <nav aria-label="breadcrumb" className="page-breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to="/index">Home</Link>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        How it Works
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Breadscrumb Section */}
            {/* How It Works section */}
            <section className="work-section">
                <div className="container">
                    <div className="work-heading">
                        <h4>Steps to improve your Business</h4>
                        <p className="description">
                            Add your business to Listee, so customers can easily find
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-4 d-flex">
                            <div className="work-info card">
                                <img
                                    src={work1_jpg}
                                    className="img-fluid"
                                    alt=""
                                />
                                <h5>01</h5>
                                <h6>Create Account</h6>
                                <p>
                                    Morbi nisi justo, venenatis ac nibh at, bibendum mattis risus.
                                    Maecenas tincidunt, ligula sed congue tempus, magna augue cursus
                                    ipsum, in malesuada justo risus nec lorem. Nam augue augue, mollis
                                    nec condimentum euismod, lacinia ultricies leo.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 d-flex">
                            <div className="work-info card">
                                <h5 className="mt-0">02</h5>
                                <h6>Post An Ad </h6>
                                <p>
                                    Morbi nisi justo, venenatis ac nibh at, bibendum mattis risus.
                                    Maecenas tincidunt, ligula sed congue tempus, magna augue cursus
                                    ipsum, in malesuada justo risus nec lorem. Nam augue augue, mollis
                                    nec condimentum euismod, lacinia ultricies leo.
                                </p>
                                <img
                                    src={work2_jpg}
                                    className="img-fluid"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 d-flex">
                            <div className="work-info card">
                                <img
                                    src={work3_jpg}
                                    className="img-fluid"
                                    alt=""
                                />
                                <h5>03</h5>
                                <h6>Find, Buy and Own Dreams</h6>
                                <p>
                                    Morbi nisi justo, venenatis ac nibh at, bibendum mattis risus.
                                    Maecenas tincidunt, ligula sed congue tempus, magna augue cursus
                                    ipsum, in malesuada justo risus nec lorem. Nam augue augue, mollis
                                    nec condimentum euismod, lacinia ultricies leo.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* /How It Works section */}
            {/* Pricing Plan Section */}
            <section className="pricingplan-section how-work">
                <div className="section-heading">
                    <div className="container">
                        <div className="row text-center">
                            <h2>
                                Our Pricing <span>Pla</span>n
                            </h2>
                            <p>
                                You can set to charge users for Packages, Subscriptions, Hybrid or
                                Free
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 d-flex col-md-6">
                            <div className="price-card flex-fill">
                                <div className="price-head">
                                    <div className="price-level">
                                        <h6>Intro</h6>
                                    </div>
                                    <h4>
                                        $10 <span>/ month</span>
                                    </h4>
                                </div>
                                <div className="price-body">
                                    <p>For most business that want to optimize web queries</p>
                                    <ul>
                                        <li className="active">Basic listing submission</li>
                                        <li className="active">One Listing</li>
                                        <li className="active">30 days Availabilty</li>
                                        <li className="inactive">Limited Support</li>
                                        <li className="inactive">Edit your listing</li>
                                    </ul>
                                    <div>
                                        <Link to="/login" className="btn viewdetails-btn">
                                            View details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 d-flex col-md-6">
                            <div className="price-card flex-fill">
                                <div className="price-head">
                                    <div className="price-level">
                                        <h6>Basic</h6>
                                    </div>
                                    <h4>
                                        $25 <span>/ month</span>
                                    </h4>
                                </div>
                                <div className="price-body">
                                    <p>For most business that want to optimize web queries</p>
                                    <ul>
                                        <li className="active">Basic listing submission</li>
                                        <li className="active">One Listing</li>
                                        <li className="active">30 days Availabilty</li>
                                        <li className="inactive">Limited Support</li>
                                        <li className="inactive">Edit your listing</li>
                                    </ul>
                                    <div>
                                        <Link to="/login" className="btn viewdetails-btn">
                                            View details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 d-flex col-md-6">
                            <div className="price-card flex-fill">
                                <div className="price-head">
                                    <div className="price-level">
                                        <h6>Popular</h6>
                                    </div>
                                    <h4>
                                        $50 <span>/ month</span>
                                    </h4>
                                </div>
                                <div className="price-body">
                                    <p>For most business that want to optimize web queries</p>
                                    <ul>
                                        <li className="active">Basic listing submission</li>
                                        <li className="active">One Listing</li>
                                        <li className="active">30 days Availabilty</li>
                                        <li className="inactive">Limited Support</li>
                                        <li className="inactive">Edit your listing</li>
                                    </ul>
                                    <div>
                                        <Link to="/login" className="btn viewdetails-btn">
                                            View details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 d-flex col-md-6">
                            <div className="price-card flex-fill">
                                <div className="price-head">
                                    <div className="price-level">
                                        <h6>Enterprise</h6>
                                    </div>
                                    <h4>
                                        $100 <span>/ month</span>
                                    </h4>
                                </div>
                                <div className="price-body">
                                    <p>For most business that want to optimize web queries</p>
                                    <ul>
                                        <li className="active">Basic listing submission</li>
                                        <li className="active">One Listing</li>
                                        <li className="active">30 days Availabilty</li>
                                        <li className="inactive">Limited Support</li>
                                        <li className="inactive">Edit your listing</li>
                                    </ul>
                                    <div>
                                        <Link to="/login" className="btn viewdetails-btn">
                                            View details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* /Pricing Plan Section */}
            <Footer />
        </>

    );
}
export default HowItWork;