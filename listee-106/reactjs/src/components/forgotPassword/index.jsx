import React from "react";
import Header from "../home/header";
import Footer from "../home/footer/Footer";
import { Link } from "react-router-dom";




const ForgotPassword = () => {
    return (
        <>
            <Header />
            {/* Breadscrumb Section */}
            <div className="breadcrumb-bar">
                <div className="container">
                    <div className="row align-items-center text-center">
                        <div className="col-md-12 col-12">
                            <h2 className="breadcrumb-title">Forgot Password</h2>
                            <nav aria-label="breadcrumb" className="page-breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to="index">Home</Link>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Forgot Password
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Breadscrumb Section */}
            {/* Login Section */}
            <div className="login-content">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-5 mx-auto">
                            <div className="login-wrap password-form">
                                <div className="login-header">
                                    <h3>Forgot Password</h3>
                                    <p>
                                        Enter your email and we will send you a link to reset your
                                        password.
                                    </p>
                                </div>
                                {/* Login Form */}
                                <form action="login">
                                    <div className="form-group group-img">
                                        <div className="group-img">
                                            <i className="feather-mail" />
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Email Address"
                                            />
                                        </div>
                                    </div>
                                    <button className="btn btn-primary w-100 login-btn" type="submit">
                                        Submit
                                    </button>
                                </form>
                                <Link to="index" className="back-home">
                                    <i className="fas fa-regular fa-arrow-left me-1" /> Back to Home
                                </Link>
                                {/* /Login Form */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Login Section */}
            <Footer />
        </>

    );
}
export default ForgotPassword;