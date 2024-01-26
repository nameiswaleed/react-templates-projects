import React from "react";
import Header from "../../../home/header";
import Footer from "../../../home/footer/Footer";
import { Link, useLocation } from "react-router-dom";




const Pricing = () => {
    const parms=useLocation().pathname
    return (
        <>
            <Header parms={parms}/>
            {/* Breadscrumb Section */}
            <div className="breadcrumb-bar">
                <div className="container">
                    <div className="row align-items-center text-center">
                        <div className="col-md-12 col-12">
                            <h2 className="breadcrumb-title">Pricing Plan</h2>
                            <nav aria-label="breadcrumb" className="page-breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to="/index">Home</Link>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Pricing Plan
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Breadscrumb Section */}
            {/* Pricing Plan Section */}
            <section className="pricingplan-section pricing-page">
                <div className="section-heading">
                    <div className="container">
                        <div className="row text-center">
                            <h2>
                                Our Pricing <span>Pla</span>n
                            </h2>
                            <p>checkout these latest cool ads from our members</p>
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

            <Footer/>
        </>

    );
}
export default Pricing;