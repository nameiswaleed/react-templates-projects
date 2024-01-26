import React from "react";
import { about_img, australia_1, canada_1, china_1, cta_img, france_1, london_1, quotes, uk_1, usa_1 } from "../../imagepath";
import Cilent from "./silder/cilent";
import Sponcer from "./silder/sponcer";
import Footer from "../../home/footer/Footer";
import Header from "../../home/header";
import { Link, useLocation } from "react-router-dom";





const About = () => {
    const parms=useLocation().pathname
    console.log(parms,"aboutpage");
    return (
        <>
            <Header parms={parms}/>
            {/*Inner Banner*/}
            <div className="aboutbanner innerbanner">
                <div className="inner-breadcrumb">
                    <div className="container">
                        <div className="row align-items-center text-center">
                            <div className="col-md-12 col-12 ">
                                <h2 className="breadcrumb-title">About Us</h2>
                                <nav aria-label="breadcrumb" className="page-breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <Link to="/index">Home</Link>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            About us
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*/Inner Banner*/}
            {/*About Content*/}
            <section className="about-content">
                <div className="container">
                    <div className="about-listee">
                        <div className="about-img">
                            <img src={about_img} className="img-fluid" alt="" />
                        </div>
                        <div className="about-info">
                            <h4>
                                {" "}
                                <span>About</span> Listee
                            </h4>
                            <p>
                                Orci varius natoque penatibus et magnis dis parturient montes,
                                nascetur ridiculus mus. Nulla fermentum malesuada pulvinar.
                                Vestibulum laoreet rutrum semper. Vivamus malesuada, nisl in
                                consectetur semper, mauris nulla aliquam risus, nec ultricies sapien
                                elit sed ante. Aenean luctus felis in sem
                            </p>
                            <p>
                                Orci varius natoque penatibus et magnis dis parturient montes,
                                nascetur ridiculus mus. Nulla fermentum malesuada pulvinar.
                                Vestibulum laoreet rutrum semper. Vivamus malesuada,{" "}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/*/About Content*/}
            {/*How It Works*/}
            <section className="howitworks">
                <div className="container">
                    <h3>How It Work</h3>
                    <p>
                        Orci varius natoque penatibus et magnis dis parturient montes, nascetur
                        ridiculus mus. Nulla fermentum malesuada pulvinar. Vestibulum laoreet
                        rutrum semper. Vivamus malesuada, nisl in consectetur semper, mauris
                        nulla aliquam risus, nec ultricies sapien elit sed ante. Aenean luctus
                        felis in sem consequat auctor. Nulla turpis enim, scelerisque sit amet
                        consectetur vel, lacinia sed augue. Proin ultricies dui id ex fringilla
                        porta.
                    </p>
                    <p>
                        Morbi nisi justo, venenatis ac nibh at, bibendum mattis risus. Maecenas
                        tincidunt, ligula sed congue tempus, magna augue cursus ipsum, in
                        malesuada justo risus nec lorem. Nam augue augue, mollis nec condimentum
                        euismod, lacinia ultricies leo.
                    </p>
                    <div className="row">
                        <div className="col-lg-4 col-md-4 d-flex">
                            <div className="howitwork-info">
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
                            <div className="howitwork-info">
                                <h5>02</h5>
                                <h6>Post An Ad</h6>
                                <p>
                                    Morbi nisi justo, venenatis ac nibh at, bibendum mattis risus.
                                    Maecenas tincidunt, ligula sed congue tempus, magna augue cursus
                                    ipsum, in malesuada justo risus nec lorem. Nam augue augue, mollis
                                    nec condimentum euismod, lacinia ultricies leo.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 d-flex">
                            <div className="howitwork-info">
                                <h5>03</h5>
                                <h6>Find,Buy &amp; Own Dreams</h6>
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
            {/*/How It Works*/}
            {/*Popular Location*/}
            <div className="aboutpopular-locations">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-4">
                            <div className="aboutlocation-details usa">
                                <div className="aboutloc-img">
                                    <img src={london_1} alt="" />
                                </div>
                                <Link to="/listing-grid-sidebar">
                                    <div className="aboutlocations-info">
                                        <h3>London</h3>
                                        <span>20+ Ads Posted</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4">
                            <div className="aboutlocation-details usa">
                                <div className="aboutloc-img">
                                    <img src={usa_1} alt="" />
                                </div>
                                <Link to="/listing-grid-sidebar">
                                    <div className="aboutlocations-info">
                                        <h3>USA</h3>
                                        <span>15+ Ads Posted</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4">
                            <div className="aboutlocation-details canada">
                                <div className="aboutloc-img">
                                    <img src={canada_1} alt="" />
                                </div>
                                <Link to="/listing-grid-sidebar">
                                    <div className="aboutlocations-info">
                                        <h3>Canada</h3>
                                        <span>25+ Ads Posted</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="aboutlocation-details china">
                                <div className="aboutloc-img">
                                    <img src={china_1} alt="" />
                                </div>
                                <Link to="/listing-grid-sidebar">
                                    <div className="aboutlocations-info">
                                        <h3>China</h3>
                                        <span>17+ Ads Posted</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="aboutlocation-details uk">
                                <div className="aboutloc-img">
                                    <img src={uk_1} alt="" />
                                </div>
                                <Link to="/listing-grid-sidebar">
                                    <div className="aboutlocations-info">
                                        <h3>United Kingdom</h3>
                                        <span>12+ Ads Posted</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="aboutlocation-details australi-loc">
                                <div className="aboutloc-img">
                                    <img src={australia_1} alt="" />
                                </div>
                                <Link to="/listing-grid-sidebar">
                                    <div className="aboutlocations-info">
                                        <h3>Australia</h3>
                                        <span>25+ Ads Posted</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="aboutlocation-details france">
                                <div className="aboutloc-img">
                                    <img src={france_1} alt="" />
                                </div>
                                <Link to="/listing-grid-sidebar">
                                    <div className="aboutlocations-info">
                                        <h3>France</h3>
                                        <span>14+ Ads Posted</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*/Popular location*/}
            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <div className="cta-content">
                                <h3>
                                    Earn Cash by <span>Selling</span> <br />
                                    or Find Anything you desire
                                </h3>
                                <p>
                                    There are many variations of passages of Lorem Ipsum available,
                                    but the majority have suffered alteration in some form, by
                                    injected humo or randomised words which don't look even slightlys
                                </p>
                                <div className="cta-btn">
                                    <Link to="/add-listing" className="btn-primary postad-btn">
                                        Post Your Ads
                                    </Link>
                                    <Link to="/listing-grid-sidebar" className="browse-btn">
                                        Browse Ads
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="cta-img">
                                <img src={cta_img} className="img-fluid" alt="CTA" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* /CTA Section */}
            {/* Client Testimonilas Section */}
            <section className="testimonials-section">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="testimonial-heading d-flex">
                            <h4>
                                {" "}
                                Client <br /> Testimonials
                            </h4>
                            <img src={quotes} alt="quotes" />
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="rightimg" />
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="testimonials-slidersection">
                            <div className="owl-nav mynav1" />
                            <Cilent />
                        </div>
                    </div>
                </div>
            </section>
            {/* /Client Testimonilas Section */}
            {/* Partners Section */}
            <div className="partners-section">
                <div className="container">
                    <p className="partners-heading">
                        Over 5,26,000+ Sponsers being contact with us
                    </p>
                    <Sponcer />
                </div>
            </div>
            {/* /Partners Section */}

            <Footer />
        </>

    );
}
export default About;