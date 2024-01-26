import React from "react";
import { galleryimage_1, galleryimage_10, galleryimage_12, galleryimage_2, galleryimage_3, galleryimage_4, galleryimage_5, galleryimage_6, galleryimage_7, galleryimage_8, galleryimage_9, gallerypop_1, gallerypop_10, gallerypop_12, gallerypop_2, gallerypop_3, gallerypop_4, gallerypop_5, gallerypop_6, gallerypop_7, gallerypop_8, gallerypop_9 } from "../../imagepath";
import Header from "../../home/header";
import Footer from "../../home/footer/Footer";
import { Link, useLocation } from "react-router-dom";

import Apps from "./myComponents";





const Gallary = () => {
    const parms=useLocation().pathname
    return (
        <>
            <Header parms={parms}/>
            {/* Breadscrumb Section */}
            <div className="breadcrumb-bar">
                <div className="container">
                    <div className="row align-items-center text-center">
                        <div className="col-md-12 col-12">
                            <h2 className="breadcrumb-title">Gallery</h2>
                            <nav aria-label="breadcrumb" className="page-breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to="/index">Home</Link>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Gallery
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Breadscrumb Section */}
            {/* Gallery section*/}
            <div className="gallerypage-info">
                <div className="container">
                    <div className="gallery-content">
                        <div className="row">
                        <Apps/>
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
                    </div>
                </div>
            </div>
            {/* /Gallery section*/}
            <Footer />
        </>

    );
}
export default Gallary;