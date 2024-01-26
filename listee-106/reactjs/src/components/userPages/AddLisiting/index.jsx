import React from "react";
import { Link, useLocation } from "react-router-dom";
import { gallerymedia_1, gallerymedia_2, gallerymedia_3, gallerymedia_4, gallerymedia_5, mediaimg_1, mediaimg_2 } from "../../imagepath";
import Footer from "../../home/footer/Footer";
import UserHeader from "../Userheader";




const AddLisiting = () => {
    const parms=useLocation().pathname
    return (
        <>
        <UserHeader parms={parms}/>
            {/* Breadscrumb Section */}
            <div className="breadcrumb-bar">
                <div className="container">
                    <div className="row align-items-center text-center">
                        <div className="col-md-12 col-12">
                            <h2 className="breadcrumb-title">Add Listing</h2>
                            <nav aria-label="breadcrumb" className="page-breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to="/index">Home</Link>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Add Listing
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Breadscrumb Section */}
            {/* Profile Content */}
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
                                <Link to="/mesaages">
                                    <i className="fa-solid fa-comment-dots" /> <span>Messages</span>
                                </Link>
                            </li>
                            <li>
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
                    <div className="profile-content">
                        <div className="messages-form">
                            <div className="card">
                                <div className="card-header">
                                    <h4>Basic information</h4>
                                </div>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label className="col-form-label">
                                            Listing Title <span>*</span>
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control pass-input"
                                            placeholder="Title"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="col-form-label">
                                            Listing Description <span>*</span>
                                        </label>
                                        <textarea
                                            rows={6}
                                            className="form-control listingdescription"
                                            placeholder="Message"
                                            defaultValue={""}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="col-form-label label-heading">
                                            Category{" "}
                                        </label>
                                        <div className="row category-listing">
                                            <div className="col-lg-4">
                                                <ul>
                                                    <li>
                                                        <label className="custom_check">
                                                            <input type="checkbox" name="wireless-internet" />
                                                            <span className="checkmark" /> Automotive
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className="custom_check">
                                                            <input type="checkbox" name="accept-credit-card" />
                                                            <span className="checkmark" /> Electronics
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className="custom_check">
                                                            <input type="checkbox" name="Coupouns" />
                                                            <span className="checkmark" /> Fashion Style
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className="custom_check">
                                                            <input type="checkbox" name="parking-street" />
                                                            <span className="checkmark" /> Health Care
                                                        </label>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-4">
                                                <ul>
                                                    <li>
                                                        <label className="custom_check">
                                                            <input type="checkbox" name="wireless-internet" />
                                                            <span className="checkmark" /> Job board
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className="custom_check">
                                                            <input type="checkbox" name="accept-credit-card" />
                                                            <span className="checkmark" /> Education
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className="custom_check">
                                                            <input type="checkbox" name="Coupouns" />
                                                            <span className="checkmark" /> Real Estate
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className="custom_check">
                                                            <input type="checkbox" name="parking-street" />
                                                            <span className="checkmark" /> Travel
                                                        </label>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-4">
                                                <ul>
                                                    <li>
                                                        <label className="custom_check">
                                                            <input type="checkbox" name="wireless-internet" />
                                                            <span className="checkmark" /> Sports &amp; Game
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className="custom_check">
                                                            <input type="checkbox" name="accept-credit-card" />
                                                            <span className="checkmark" /> Magazines
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className="custom_check">
                                                            <input type="checkbox" name="Coupouns" />
                                                            <span className="checkmark" /> Pet &amp; Animal
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className="custom_check">
                                                            <input type="checkbox" name="parking-street" />
                                                            <span className="checkmark" /> Household
                                                        </label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group formlast-input">
                                        <label className="col-form-label label-heading">Tagline</label>
                                        <textarea
                                            rows={2}
                                            className="form-control tagline"
                                            placeholder=""
                                            defaultValue={""}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header">
                                    <h4>Basic information</h4>
                                </div>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label className="col-form-label">Price Range</label>
                                        <input
                                            type="text"
                                            className="form-control pass-input"
                                            placeholder="$$$"
                                        />
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group formlast-input">
                                                <label className="col-form-label">Price From</label>
                                                <select className="form-control select">
                                                    <option>65</option>
                                                    <option>75</option>
                                                    <option>85</option>
                                                    <option>95</option>
                                                    <option>105</option>
                                                    <option>110</option>
                                                    <option>115</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group formlast-input formlast-input-inner">
                                                <label className="col-form-label">Price To</label>
                                                <select className="form-control select">
                                                    <option>120</option>
                                                    <option>130</option>
                                                    <option>140</option>
                                                    <option>150</option>
                                                    <option>160</option>
                                                    <option>170</option>
                                                    <option>190</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header">
                                    <h4>Features information</h4>
                                </div>
                                <div className="card-body">
                                    <div className="form-group featuresform-list mb-0">
                                        <ul>
                                            <li>
                                                <label className="custom_check">
                                                    <input type="checkbox" name="wireless-internet" />
                                                    <span className="checkmark" /> Accepts Credit Cards
                                                </label>
                                            </li>
                                            <li>
                                                <label className="custom_check">
                                                    <input type="checkbox" name="accept-credit-card" />
                                                    <span className="checkmark" /> Bike Parking
                                                </label>
                                            </li>
                                            <li>
                                                <label className="custom_check">
                                                    <input type="checkbox" name="Coupouns" />
                                                    <span className="checkmark" /> Parking Street
                                                </label>
                                            </li>
                                            <li>
                                                <label className="custom_check">
                                                    <input type="checkbox" name="parking-street" />
                                                    <span className="checkmark" /> Pets Friendly
                                                </label>
                                            </li>
                                            <li>
                                                <label className="custom_check">
                                                    <input type="checkbox" name="Coupouns" />
                                                    <span className="checkmark" /> Wheelchair Accessible
                                                </label>
                                            </li>
                                            <li>
                                                <label className="custom_check">
                                                    <input type="checkbox" name="parking-street" />
                                                    <span className="checkmark" /> Wireless Internet
                                                </label>
                                            </li>
                                        </ul>
                                        <div className="clearfix" />
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header">
                                    <h4>Location information</h4>
                                </div>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label className="col-form-label">Location</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            defaultValue="$$$"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="col-form-label">Address</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            defaultValue="8697-8747 Stirling Rd, Florida"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="col-form-label">Map Address</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            defaultValue="8697-8747 Stirling Rd, Florida"
                                        />
                                    </div>
                                    <div className="listing-map">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3584.6461688381!2d-80.26548188573862!3d26.045130803169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9a862f9831459%3A0xafcb9384c02e8b75!2s8697%20Stirling%20Rd%2C%20Cooper%20City%2C%20FL%2033328%2C%20USA!5e0!3m2!1sen!2sin!4v1671519522101!5m2!1sen!2sin"
                                            width={100}
                                            height={430}
                                            style={{ border: 0 }}
                                            allowFullScreen=""
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                        />
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group formlast-input lat-input">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    defaultValue="26.045197767574102"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group formlast-input">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    defaultValue="-80.26095677163161"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header">
                                    <h4>Contact Information </h4>
                                </div>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label className="col-form-label">Email </label>
                                        <input
                                            type="text"
                                            className="form-control pass-input"
                                            placeholder=""
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="col-form-label">Website </label>
                                        <input
                                            type="text"
                                            className="form-control pass-input"
                                            placeholder=""
                                        />
                                    </div>
                                    <div className="form-group formlast-input">
                                        <label className="col-form-label">Phone </label>
                                        <input
                                            type="text"
                                            className="form-control pass-input"
                                            placeholder=""
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header">
                                    <h4>Social Information </h4>
                                </div>
                                <div className="card-body">
                                    <div className="row social-info">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <label className="col-form-label">Facebook</label>
                                                <div className="pass-group group-img">
                                                    <span className="lock-icon">
                                                        <i className="fab fa-facebook-f" />
                                                    </span>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        defaultValue="http://facebook.com"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <label className="col-form-label">Twitter</label>
                                                <div className="pass-group group-img">
                                                    <span className="lock-icon">
                                                        <i className="fab fa-twitter" />
                                                    </span>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        defaultValue="http://twitter.com"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row social-info">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group formlast-input lat-input">
                                                <label className="col-form-label">Google+</label>
                                                <div className="pass-group group-img">
                                                    <span className="lock-icon">
                                                        <i className="fa-brands fa-google-plus-g" />
                                                    </span>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        defaultValue="http://google.com"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group formlast-input">
                                                <label className="col-form-label">Instagram</label>
                                                <div className="pass-group group-img">
                                                    <span className="lock-icon">
                                                        <i className="fab fa-instagram" />
                                                    </span>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        defaultValue="http://instagram.com"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card media-section">
                                <div className="card-header">
                                    <h4>Media Information </h4>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 featured-img1">
                                            <h6 className="media-title">Featured Image</h6>
                                            <div className="media-image ">
                                                <img src={mediaimg_2} alt="" />
                                            </div>
                                            <div className="settings-upload-btn">
                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    name="image"
                                                    className="hide-input image-upload"
                                                    id="file"
                                                />
                                                <label htmlFor="file" className="file-upload">
                                                    Upload File
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 featured-img2">
                                            <h6 className="Featured image">Logo</h6>
                                            <div className="media-image">
                                                <img src={mediaimg_1} alt="" />
                                            </div>
                                            <div className="settings-upload-btn">
                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    name="image"
                                                    className="hide-input image-upload"
                                                    id="file1"
                                                />
                                                <label htmlFor="file1" className="file-upload">
                                                    Upload File
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="gallery-media">
                                        <h6 className="media-title">Gallery</h6>
                                        <div className="galleryimg-upload">
                                            <div className="gallery-upload">
                                                <img
                                                    src={gallerymedia_1}
                                                    className="img-fluid"
                                                    alt=""
                                                />
                                                <Link to="#" className="profile-img-del">
                                                    <i className="feather-trash-2" />
                                                </Link>
                                            </div>
                                            <div className="gallery-upload">
                                                <img
                                                    src={gallerymedia_2}
                                                    className="img-fluid"
                                                    alt=""
                                                />
                                                <Link to="#" className="profile-img-del">
                                                    <i className="feather-trash-2" />
                                                </Link>
                                            </div>
                                            <div className="gallery-upload">
                                                <img
                                                    src={gallerymedia_3}
                                                    className="img-fluid"
                                                    alt=""
                                                />
                                                <Link to="#" className="profile-img-del">
                                                    <i className="feather-trash-2" />
                                                </Link>
                                            </div>
                                            <div className="gallery-upload">
                                                <img
                                                    src={gallerymedia_4}
                                                    className="img-fluid"
                                                    alt=""
                                                />
                                                <Link to="#" className="profile-img-del">
                                                    <i className="feather-trash-2" />
                                                </Link>
                                            </div>
                                            <div className="gallery-upload">
                                                <img
                                                    src={gallerymedia_5}
                                                    className="img-fluid"
                                                    alt=""
                                                />
                                                <Link to="#" className="profile-img-del">
                                                    <i className="feather-trash-2" />
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="settings-upload-btn">
                                            <input
                                                type="file"
                                                accept="image/*"
                                                name="image"
                                                className="hide-input image-upload"
                                                id="file2"
                                            />
                                            <label htmlFor="file2" className="file-upload">
                                                Upload File
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="btn btn-primary" type="submit">
                                {" "}
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Profile Content */}
            <Footer/>
        </>

    );
}
export default AddLisiting;