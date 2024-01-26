import React, { useState } from "react";
import { Link } from "react-router-dom";
import { profile_img } from "../imagepath";
import Header from "../home/header";
import Footer from "../home/footer/Footer";
import UserHeader from "./Userheader";



const Profile = () => {
    const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const handlePasswordChange =(evnt)=>{
    setPasswordInput(evnt.target.value);
}

const togglePassword =()=>{
  if(passwordType==="password")
  {
   setPasswordType("text")
   return;
  }
  setPasswordType("password")
}
    return (
        <>
        <UserHeader/>
            {/* Breadscrumb Section */}
            <div className="breadcrumb-bar">
                <div className="container">
                    <div className="row align-items-center text-center">
                        <div className="col-md-12 col-12">
                            <h2 className="breadcrumb-title">Profile</h2>
                            <nav aria-label="breadcrumb" className="page-breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to="/index">Home</Link>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Profile
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
                            <li className="active">
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
                        <div className="row dashboard-info">
                            <div className="col-lg-9">
                                <div className="card dash-cards">
                                    <div className="card-header">
                                        <h4>Profile Details</h4>
                                    </div>
                                    <div className="card-body">
                                        <div className="profile-photo">
                                            <div className="profile-img">
                                                <div className="settings-upload-img">
                                                    <img src={profile_img} alt="profile" />
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
                                                        Upload New photo
                                                    </label>
                                                </div>
                                                <span>Max file size: 10 MB</span>
                                            </div>
                                            <Link to="#" className="profile-img-del">
                                                <i className="feather-trash-2" />
                                            </Link>
                                        </div>
                                        <div className="profile-form">
                                            <form>
                                                <div className="form-group">
                                                    <label className="col-form-label">Your Full Name</label>
                                                    <div className="pass-group group-img">
                                                        <span className="lock-icon">
                                                            <i className="feather-user" />
                                                        </span>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            defaultValue="John Doe"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="form-group">
                                                            <label className="col-form-label">Phone Number</label>
                                                            <div className="pass-group group-img">
                                                                <span className="lock-icon">
                                                                    <i className="feather-phone-call" />
                                                                </span>
                                                                <input
                                                                    type="tel"
                                                                    className="form-control"
                                                                    defaultValue="+44 215346 1223"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="form-group">
                                                            <label className="col-form-label">
                                                                Email Address
                                                            </label>
                                                            <div className="group-img">
                                                                <i className="feather-mail" />
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    defaultValue="johndoe@email.com"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="col-form-label">Notes</label>
                                                    <div className="pass-group group-img">
                                                        <textarea
                                                            rows={4}
                                                            className="form-control"
                                                            defaultValue={
                                                                "Mauris vestibulum lorem a condimentum vulputate. Integer vitae turpis turpis. Cras at tincidunt urna. Aenean leo justo, congue et felis a, elementum rutrum felis. Fusce rutrum ipsum eu pretium faucibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean leo justo, congue et felis a.  Aenean leo justo, congue et felis a.\t"
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                                <div className="row socialmedia-info">
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
                                                                    defaultValue="https://www.facebook.com/"
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
                                                                    defaultValue="https://twitter.com/"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row socialmedia-info">
                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="form-group formlast-input">
                                                            <label className="col-form-label">Google+</label>
                                                            <div className="pass-group group-img">
                                                                <span className="lock-icon">
                                                                    <i className="fa-brands fa-google-plus-g" />
                                                                </span>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    defaultValue="https://www.google.com/"
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
                                                                    defaultValue="https://www.instagram.com/"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="profile-sidebar">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4>Change Password</h4>
                                        </div>
                                        <div className="card-body">
                                            <form>
                                                <div className="form-group">
                                                    <label className="col-form-label">Current Password</label>
                                                    <div className="pass-group group-img">
                                                        <span className="lock-icon">
                                                            <i className="feather-lock" />
                                                        </span>
                                                        <input
                                                            type="password"
                                                            className="form-control pass-input"
                                                            placeholder="Password"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="col-form-label">New Password</label>
                                                    <div className="pass-group group-img">
                                                        <span className="lock-icon">
                                                            <i className="feather-lock" />
                                                        </span>
                                                        <input
                                                            type={passwordType}
                                                            className="form-control pass-input"
                                                            defaultValue=".............."
                                                            onChange={handlePasswordChange}
                                                            
                                                        />
                                                        <span className={`toggle-password  ${ passwordType==="password"? "feather-eye":"feather-eye-off" } `} onClick={togglePassword} />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="col-form-label">
                                                        Confirm New Password
                                                    </label>
                                                    <div className="pass-group group-img">
                                                        <span className="lock-icon">
                                                            <i className="feather-lock" />
                                                        </span>
                                                        <input
                                                            type={passwordType}
                                                            className="form-control pass-input"
                                                            defaultValue=".............."
                                                            onChange={handlePasswordChange}
                                                            
                                                        />
                                                        <span className={`toggle-password  ${ passwordType==="password"? "feather-eye":"feather-eye-off" } `} onClick={togglePassword} />
                                                    </div>
                                                </div>
                                                <button className="btn btn-primary" type="submit">
                                                    {" "}
                                                    Change Password
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Profile Content */}
            <Footer/>
        </>

    );
}
export default Profile;