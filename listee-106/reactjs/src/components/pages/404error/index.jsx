import React from "react";
import { LogoSvg, error404 } from "../../imagepath";
import { Link } from "react-router-dom";





const Error404 = () => {
    return (
        <>
            <div className="content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mx-auto">
                            <div className="error-wrap">
                                <div className="error-logo">
                                    <Link to="/index">
                                        <img className="img-fluid" src={LogoSvg} alt="img" />
                                    </Link>
                                </div>
                                <h2>Something went wrong</h2>
                                <div className="error-img">
                                    <img
                                        className="img-fluid"
                                        src={error404}
                                        alt="img"
                                    />
                                </div>
                                <Link to="/index" className="btn btn-primary rounded-pill">
                                    Back to Home
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
export default Error404;