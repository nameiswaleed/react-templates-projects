import React from "react";

import Mylistings from "../../json/Mylisting"
import { Table } from "antd";
import { Link, useLocation } from "react-router-dom";
import Footer from "../../home/footer/Footer";
import UserHeader from "../Userheader";


const MyListe = () => {
    const data = Mylistings.Mylistings;
    const dataSource = {
        data,

    };

    const columns = [
        {
            title: 'Image',
            dataIndex: 'image',
            render: (text, record, data) => (


                <div className="listingtable-img">
                    {" "}
                    <Link to="/service-details">
                        <img
                            className="img-fluid avatar-img"
                            src={text}
                            alt=""
                        />
                    </Link>
                </div>

            ),
            sorter: (a, b) => { a.image.length - b.image.length }
        },
        {
            title: 'Details',
            dataIndex: 'content',
            render: (text, record, data) => (
                <>
                    <h6>
                        <Link to="/service-details">
                            {text}
                        </Link>
                    </h6>
                    <div className="listingtable-rate">
                        <Link to="#" className="cat-icon">
                            <i className="fa-regular fa-circle-stop" />{" "}
                            Electronics
                        </Link>{" "}
                        <span className="discount-amt">$350000.00</span>
                        <span className="fixed-amt">$40000</span>
                    </div>
                    <p>Mauris vestibulum lorem a condimentum vulputate.</p>
                </>
            ),
            sorter: (a, b) => { a.content.length - b.content.length }
        },
        {
            title: 'Status',
            dataIndex: 'status',
            render: (text, record, data) => (
                <span className={record.bg}>{text}</span>
            ),
            sorter: (a, b) => { a.status.length - b.status.length }
        },
        {
            title: 'Views',
            dataIndex: 'numbers',
            render: (text, record, data) => (
                <span>{text}</span>
            ),
            sorter: (a, b) => { a.numbers.length - b.numbers.length }
        },
        {
            title: 'Action',
            dataIndex: 'class',
            render: (text, record, data) => (
                <div className={text}>
                    <Link
                        to="#"
                        className="action-btn btn-view"
                    >
                        <i className="feather-eye" />
                    </Link>
                    <Link
                        to="#"
                        className="action-btn btn-edit"
                    >
                        <i className="feather-edit-3" />
                    </Link>
                    <Link
                        to="#"
                        className="action-btn btn-trash"
                    >
                        <i className="feather-trash-2" />
                    </Link>
                </div>
            ),
            sorter: (a, b) => { a.class.length - b.class.length }
        },


    ]
    const parms=useLocation().pathname
    return (
        <>
            <UserHeader parms={parms}/>
            {/* Breadscrumb Section */}
            <div className="breadcrumb-bar">
                <div className="container">
                    <div className="row align-items-center text-center">
                        <div className="col-md-12 col-12">
                            <h2 className="breadcrumb-title">My Listing</h2>
                            <nav aria-label="breadcrumb" className="page-breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to="/index">Home</Link>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        My Listing
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Breadscrumb Section */}
            {/* Dashboard Content */}
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
                            <li className="active">
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
                    <div className="dash-listingcontent dashboard-info">
                        <div className="dash-cards card">
                            <div className="card-header">
                                <h4>My Listings</h4>
                                <Link
                                    className="nav-link header-login add-listing"
                                    to="/add-listing"
                                >
                                    <i className="fa-solid fa-plus" /> Add Listing
                                </Link>
                            </div>
                            <div className="card-body">
                                <div className="listing-search">
                                    <div className="filter-content form-group">
                                        <div className="group-img">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Search..."
                                            />
                                            <i className="feather-search" />
                                        </div>
                                    </div>
                                    <div className="sorting-div">
                                        <div className="sortbyset">
                                            <span className="sortbytitle">Sort by</span>
                                            <div className="sorting-select">
                                                <select className="form-control select">
                                                    <option>Newest</option>
                                                    <option>Newest</option>
                                                    <option>Oldest</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="table-responsive">
                                    
                                        <Table
                                            className="listing-table datatable"
                                            columns={columns}
                                            // bordered
                                            dataSource={data}
                                            rowKey={(record) => record.id}
                                            showSizeChanger={true}
                                            


                                        />
                                    
                                </div>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Dashboard Content */}
            <Footer/>
        </>

    );
}
export default MyListe;