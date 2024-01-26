import React from "react";
import Header from "../../../home/header";
import Footer from "../../../home/footer/Footer";
import { Link, useLocation } from "react-router-dom";
import { ProfileAvatar01, blogdetailimg_1, blogdetailimg_2, blogquote, reviewsvg } from "../../../imagepath";




const BlogDetailsh = () => {
    const parms=useLocation().pathname
    return (
        <>
        <Header parms={parms}/>
            {/*Blog Banner*/}
            <div className="blogbanner">
                <div className="blogbanner-content">
                    <span className="blog-hint">Health</span>
                    <h1>The Top 25 Bike Stores in Toronto by Neighbourhood</h1>
                    <ul className="entry-meta meta-item">
                        <li>
                            <div className="post-author">
                                <div className="post-author-img">
                                    <img src={ProfileAvatar01} alt="author" />
                                </div>
                                <Link to="#">
                                    <span> John Doe </span>
                                </Link>
                            </div>
                        </li>
                        <li className="date-icon">
                            <i className="fa-solid fa-calendar-days" /> October 6, 2022
                        </li>
                    </ul>
                </div>
            </div>
            {/*/Blog Banner*/}
            {/*Blog Content*/}
            <div className="blogdetail-content">
                <div className="container">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                        vehicula sapien nec nisi aliquam, vitae finibus purus sodales. Mauris at
                        turpis nulla. Curabitur nec tellus est. Class aptent taciti sociosqu ad
                        litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum
                        pharetra arcu ac arcu varius, non congue neque aliquet. Pellentesque at
                        feugiat purus. Aenean faucibus vehicula eros.
                    </p>
                    <p>
                        varius natoque penatibus et magnis dis parturient montes, nascetur
                        ridiculus mus. Nulla fermentum malesuada pulvinar. Vestibulum laoreet
                        rutrum semper. Vivamus malesuada, nisl in consectetur semper, mauris
                        nulla aliquam risus, nec ultricies sapien elit sed ante. Aenean luctus
                        felis in sem consequat auctor. Nulla turpis enim, scelerisque sit amet
                        consectetur vel, lacinia sed augue. Proin ultricies dui id ex fringilla
                        porta. Morbi nisi justo, venenatis ac nibh at, bibendum mattis risus.
                        Maecenas tincidunt, ligula sed congue tempus, magna augue cursus ipsum,
                        in malesuada justo risus nec lorem. Nam augue augue, mollis nec
                        condimentum euismod, lacinia ultricies leo.
                    </p>
                    <blockquote className="blog-quotes">
                        <img src={blogquote} alt="quotes" />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                            vehicula sapien nec nisi aliquam, vitae finibus purus sodales. Mauris
                            at turpis nulla. Curabitur nec tellus est. Class aptent taciti
                            sociosqu ad litora torquent per conubia nostra, per inceptos
                            himenaeos. Vestibulum pharetra arcu
                        </p>
                        <h6>Luis Pickford</h6>
                    </blockquote>
                    <p>
                        Orci varius natoque penatibus et magnis dis parturient montes, nascetur
                        ridiculus mus. Nulla fermentum malesuada pulvinar. Vestibulum laoreet
                        rutrum semper. Vivamus malesuada, nisl in consectetur semper, mauris
                        nulla aliquam risus, nec ultricies sapien elit sed ante. Aenean luctus
                        felis in sem consequat auctor. Nulla turpis enim, scelerisque sit amet
                        consectetur vel, lacinia sed augue. Proin ultricies dui id ex fringilla
                        porta. Morbi nisi justo, venenatis ac nibh at, bibendum mattis risus.
                        Maecenas tincidunt, ligula sed congue tempus, magna augue cursus ipsum,
                        in malesuada justo risus nec lorem. Nam augue augue, mollis nec
                        condimentum euismod, lacinia ultricies leo.{" "}
                    </p>
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="bloginner-img">
                                <img
                                    src={blogdetailimg_1}
                                    className="img-fluid"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="bloginner-img">
                                <img
                                    src={blogdetailimg_2}
                                    className="img-fluid"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <div className="requiremnts-info">
                        <h5>Requirements</h5>
                        <ul>
                            <li>
                                We do not require any previous experience or pre-defined skills to
                                take this course. A Great orientation would be enough to master
                                UI/UX design.
                            </li>
                            <li>A Computer with a good internet connection.</li>
                            <li>
                                Vestibulum laoreet rutrum semper. Vivamus malesuada, nisl in
                                consectetur semper, mauris nulla aliquam risus, nec ultricies sapien
                                elit sed ante. Aenean luctus felis in sem consequat auctor.
                            </li>
                            <li>
                                We do not require any previous experience or pre-defined skills to
                                take this course. A Great orientation would be enough to master
                                UI/UX design.
                            </li>
                            <li>A Computer with a good internet connection.</li>
                            <li>
                                Vestibulum laoreet rutrum semper. Vivamus malesuada, nisl in
                                consectetur semper, mauris nulla aliquam risus, nec ultricies sapien
                                elit sed ante. Aenean luctus felis in sem consequat auctor.
                            </li>
                        </ul>
                    </div>
                    <div className="share-postsection">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="sharelink">
                                    <Link to="#" className="share-img">
                                        <i className="fas fa-light fa-share-nodes" />
                                    </Link>
                                    <Link to="#" className="share-text">
                                        Share
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="tag-list">
                                    <ul className="tags">
                                        <li>Travelling </li>
                                        <li>Art </li>
                                        <li>Vacation </li>
                                        <li>Tourism </li>
                                        <li>Culture </li>
                                        <li>LSifestyle </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="blogdetails-pagination">
                        <ul>
                            <li>
                                <Link to="/blog-details" className="prev-link">
                                    <i className="fas fa-regular fa-arrow-left" /> Previous Post
                                </Link>
                                <Link to="/blog-details">
                                    <h3>The Best SPA Salons For Your Relaxation</h3>{" "}
                                </Link>
                            </li>
                            <li>
                                <Link to="/blog-details" className="next-link">
                                    Next Post <i className="fas fa-regular fa-arrow-right" />{" "}
                                </Link>
                                <Link to="/blog-details">
                                    <h3>8 Amazing Tricks About Business</h3>{" "}
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="card review-sec  mb-0">
                        <div className="card-header  align-items-center">
                            <img src={reviewsvg} alt="review" />
                            <h4>14 Reviews</h4>
                        </div>
                        <div className="card-body">
                            <div className="review-list">
                                <ul className="">
                                    <li className="review-box feedbackbox mb-0">
                                        <div className="review-details">
                                            <h6>Leave feedback about this</h6>
                                        </div>
                                        <div className="card-body">
                                            <form className="">
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Title"
                                                    />
                                                </div>
                                                <div className="namefield">
                                                    <div className="form-group">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Name*"
                                                            required=""
                                                        />
                                                    </div>
                                                    <div className="form-group me-0">
                                                        <input
                                                            type="email"
                                                            className="form-control"
                                                            placeholder="Email*"
                                                            required=""
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <textarea
                                                        rows={4}
                                                        className="form-control"
                                                        placeholder="Write a Review*"
                                                        required=""
                                                        defaultValue={""}
                                                    />
                                                </div>
                                                <div className="reviewbox-rating">
                                                    <p>
                                                        <span> Rating</span>
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star filled" />
                                                    </p>
                                                </div>
                                                <div className="submit-section">
                                                    <button
                                                        className="btn btn-primary submit-btn"
                                                        type="submit"
                                                    >
                                                        {" "}
                                                        Submit Review
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*/Blog Content*/}
            <Footer/>
        </>

    );
}
export default BlogDetailsh;