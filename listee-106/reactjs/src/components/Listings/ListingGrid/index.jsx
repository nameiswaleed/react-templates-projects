import React, { useEffect } from "react";
import ListSilder from "./silder/listSilder";
import Header from "../../home/header";
import Footer from "../../home/footer/Footer";
import { Link, useLocation, useParams } from "react-router-dom";





const Listing_Grid = () => {
    const parms=useLocation().pathname
    document.querySelectorAll('.fav-icon').forEach(function(element) {
        element.addEventListener('click', function() {
          element.classList.toggle('selected');
        });
      });
      
      document.querySelectorAll('.fav-icon-top').forEach(function(element) {
        element.addEventListener('click', function() {
          element.classList.toggle('selected');
        });
      });
      
    return (
        <>
            <Header parms={parms}/>
            {/* Breadscrumb Section */}
            <div className="breadcrumb-bar">
                <div className="container">
                    <div className="row align-items-center text-center">
                        <div className="col-md-12 col-12">
                            <h2 className="breadcrumb-title">Listings - Grid</h2>
                            <nav aria-label="breadcrumb" className="page-breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link href="/index">Home</Link>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Grid
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Breadscrumb Section */}
            {/* Bookmark Content */}
            <div className="dashboard-content">
                <div className="container">
                    <ListSilder />
                </div>
            </div>
            {/* /Bookmark Content */}
            <Footer/>
        </>
    );
}
export default Listing_Grid;