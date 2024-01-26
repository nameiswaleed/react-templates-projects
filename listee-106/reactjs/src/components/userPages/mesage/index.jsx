import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ProfileAvatar03, ProfileAvatar04, ProfileAvatar05, chat_attachment, chatsearch } from "../../imagepath";
import Footer from "../../home/footer/Footer";
import UserHeader from "../Userheader";



const Message = () => {
    const parms=useLocation().pathname
    return (
        <>
        <UserHeader parms={parms}/>
            {/* Breadscrumb Section */}
            <div className="breadcrumb-bar">
                <div className="container">
                    <div className="row align-items-center text-center">
                        <div className="col-md-12 col-12">
                            <h2 className="breadcrumb-title">Messages</h2>
                            <nav aria-label="breadcrumb" className="page-breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to="/index">Home</Link>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Messages
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
                            <li className="active">
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
                        <div className="row dashboard-info chat-window">
                            <div className="col-lg-4">
                                <div className="chat-cont-left">
                                    <form className="chat-search">
                                        <div className="form-group">
                                            <div className="group-img">
                                                <img src={chatsearch} alt="" />
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Search"
                                                />
                                            </div>
                                        </div>
                                    </form>
                                    <div className="chat-users-list">
                                        <div className="chat-scroll">
                                            <Link to="#" className="media d-flex active">
                                                <div className="media-img-wrap flex-shrink-0">
                                                    <div className="avatar avatar-online">
                                                        <img
                                                            src={ProfileAvatar03}
                                                            alt="User Image"
                                                            className="avatar-img rounded-circle"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="media-body flex-grow-1">
                                                    <div>
                                                        <div className="user-name">Marvin Downey </div>
                                                        <div className="user-last-chat">Hey, How are you?</div>
                                                    </div>
                                                    <div>
                                                        <div className="last-chat-time block">2 min</div>
                                                        <div className="badge badge-success rounded-pill">
                                                            15
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                            <Link to="#" className="media d-flex">
                                                <div className="media-img-wrap flex-shrink-0">
                                                    <div className="avatar avatar-away">
                                                        <img
                                                            src={ProfileAvatar04}
                                                            alt="User Image"
                                                            className="avatar-img rounded-circle"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="media-body flex-grow-1">
                                                    <div>
                                                        <div className="user-name">Charlene Reed</div>
                                                        <div className="user-last-chat">
                                                            I'll Call you later
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="last-chat-time block">2 min</div>
                                                    </div>
                                                </div>
                                            </Link>
                                            <Link to="#" className="media d-flex">
                                                <div className="media-img-wrap flex-shrink-0">
                                                    <div className="avatar avatar-online">
                                                        <img
                                                            src={ProfileAvatar05}
                                                            alt="User Image"
                                                            className="avatar-img rounded-circle"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="media-body flex-grow-1">
                                                    <div>
                                                        <div className="user-name">Travis Trimmble</div>
                                                        <div className="user-last-chat">
                                                            Give me a full explain...
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="last-chat-time block">2 min</div>
                                                        <div className="badge badge-success rounded-pill">
                                                            15
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                            <Link to="#" className="media d-flex">
                                                <div className="media-img-wrap flex-shrink-0">
                                                    <div className="avatar avatar-away">
                                                        <img
                                                            src={ProfileAvatar03}
                                                            alt="User Image"
                                                            className="avatar-img rounded-circle"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="media-body flex-grow-1">
                                                    <div>
                                                        <div className="user-name">Marvin Dorway</div>
                                                        <div className="user-last-chat">Hey, How are you?</div>
                                                    </div>
                                                    <div>
                                                        <div className="last-chat-time block">2 min</div>
                                                        <div className="badge badge-success rounded-pill">
                                                            15
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                            <Link to="#" className="media d-flex">
                                                <div className="media-img-wrap flex-shrink-0">
                                                    <div className="avatar avatar-offline">
                                                        <img
                                                            src={ProfileAvatar04}
                                                            alt="User Image"
                                                            className="avatar-img rounded-circle"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="media-body flex-grow-1">
                                                    <div>
                                                        <div className="user-name">Charlene Reed</div>
                                                        <div className="user-last-chat">
                                                            I'll Call you later
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="last-chat-time block">2 min</div>
                                                    </div>
                                                </div>
                                            </Link>
                                            <Link to="#" className="media d-flex">
                                                <div className="media-img-wrap flex-shrink-0">
                                                    <div className="avatar avatar-online">
                                                        <img
                                                            src={ProfileAvatar05}
                                                            alt="User Image"
                                                            className="avatar-img rounded-circle"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="media-body flex-grow-1">
                                                    <div>
                                                        <div className="user-name">Travis Trimmble</div>
                                                        <div className="user-last-chat">
                                                            Give me a full explain...
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="last-chat-time block">2 min</div>
                                                        <div className="badge badge-success rounded-pill">
                                                            15
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                            <Link to="#" className="media d-flex">
                                                <div className="media-img-wrap flex-shrink-0">
                                                    <div className="avatar avatar-offline">
                                                        <img
                                                            src={ProfileAvatar04}
                                                            alt="User Image"
                                                            className="avatar-img rounded-circle"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="media-body flex-grow-1">
                                                    <div>
                                                        <div className="user-name">Charlene Reed</div>
                                                        <div className="user-last-chat">
                                                            I'll Call you later
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="last-chat-time block">2 min</div>
                                                    </div>
                                                </div>
                                            </Link>
                                            <Link to="#" className="media d-flex">
                                                <div className="media-img-wrap flex-shrink-0">
                                                    <div className="avatar avatar-online">
                                                        <img
                                                            src={ProfileAvatar05}
                                                            alt="User Image"
                                                            className="avatar-img rounded-circle"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="media-body flex-grow-1">
                                                    <div>
                                                        <div className="user-name">Travis Trimmble</div>
                                                        <div className="user-last-chat">
                                                            Give me a full explain...
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="last-chat-time block">2 min</div>
                                                        <div className="badge badge-success rounded-pill">
                                                            15
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="chat-cont-right">
                                    <div className="chat-header">
                                        <Link
                                            id="back_user_list"
                                            to="javascript:void(0)"
                                            className="back-user-list"
                                        >
                                            <i className="fa-solid fa-chevron-left" />
                                        </Link>
                                        <div className="media d-flex align-items-center">
                                            <div className="media-img-wrap flex-shrink-0">
                                                <div className="avatar avatar-online">
                                                    <img
                                                        src={ProfileAvatar03}
                                                        alt="User Image"
                                                        className="avatar-img rounded-circle"
                                                    />
                                                </div>
                                            </div>
                                            <div className="media-body flex-grow-1">
                                                <div className="user-name">Marvin Downey</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="chat-body">
                                        <div className="chat-scroll">
                                            <ul className="list-unstyled">
                                                <li className="media d-flex received">
                                                    <div className="avatar flex-shrink-0">
                                                        <img
                                                            src={ProfileAvatar03}
                                                            alt="User Image"
                                                            className="avatar-img rounded-circle"
                                                        />
                                                    </div>
                                                    <div className="media-body flex-grow-1">
                                                        <div className="msg-box">
                                                            <div>
                                                                <p>I'm just looking around.</p>
                                                                <p>Will you tell me something about yourself?</p>
                                                                <ul className="chat-msg-info">
                                                                    <li>
                                                                        <div className="chat-time">
                                                                            <span>8:35 AM</span>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="msg-box">
                                                            <div>
                                                                <p>Are you there? That time!</p>
                                                                <ul className="chat-msg-info">
                                                                    <li>
                                                                        <div className="chat-time">
                                                                            <span>8:40 AM</span>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="msg-box">
                                                            <div>
                                                                <div className="chat-msg-attachments">
                                                                    <div className="chat-attachment">
                                                                        <img
                                                                            src={chat_attachment}
                                                                            alt="Attachment"
                                                                        />
                                                                        <Link
                                                                            to="javascript:void(0)"
                                                                            className="chat-attach-download"
                                                                        >
                                                                            <i className="feather-download" />
                                                                        </Link>
                                                                    </div>
                                                                    <div className="chat-attachment">
                                                                        <img
                                                                            src={chat_attachment}
                                                                            alt="Attachment"
                                                                        />
                                                                        <Link
                                                                            to="javascript:void(0)"
                                                                            className="chat-attach-download"
                                                                        >
                                                                            <i className="feather-download" />
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                                <ul className="chat-msg-info">
                                                                    <li>
                                                                        <div className="chat-time">
                                                                            <span>8:41 AM</span>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="media d-flex sent">
                                                    <div className="media-body flex-grow-1">
                                                        <div className="msg-box">
                                                            <div>
                                                                <p>Hello. What can I do for you?</p>
                                                                <ul className="chat-msg-info">
                                                                    <li>
                                                                        <div className="chat-time">
                                                                            <span>8:30 AM</span>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="msg-box">
                                                            <div>
                                                                <p>
                                                                    OK, my name is Limingqiang. I like singing,
                                                                    playing basketballand so on.
                                                                </p>
                                                                <ul className="chat-msg-info">
                                                                    <li>
                                                                        <div className="chat-time">
                                                                            <span>9:45 AM</span>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="msg-box">
                                                            <div>
                                                                <div className="chat-msg-attachments">
                                                                    <div className="chat-attachment">
                                                                        <img
                                                                            src={chat_attachment}
                                                                            alt="Attachment"
                                                                        />
                                                                        <Link
                                                                            to="javascript:void(0)"
                                                                            className="chat-attach-download"
                                                                        >
                                                                            <i className="feather-download" />
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                                <ul className="chat-msg-info">
                                                                    <li>
                                                                        <div className="chat-time">
                                                                            <span>8:41 AM</span>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="chat-footer">
                                        <div className="input-group">
                                            <div className="attach-btn">
                                                <input
                                                    type="text"
                                                    className="input-msg-send form-control"
                                                    placeholder="Type something"
                                                />
                                                <div className="btn-file btn">
                                                    <i className="fa fa-paperclip" />
                                                    <input type="file" />
                                                </div>
                                            </div>
                                            <button type="button" className="btn msg-send-btn">
                                                <i className="fas fa-paper-plane" />
                                            </button>
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
export default Message;