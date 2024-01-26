import React from "react";
import { Polygon, ProfileAvatar12, ProfileAvatar13, ProfileAvatar14 } from "../../imagepath";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';



const Testimonials = () => {
    const settings = {
        // autoWidth: true,
        items: 2,
        margin: 25,
        dots: true,
        nav: false,
        navText: [
            '<i class="fa-solid fa-angle-left"></i>',
            '<i class="fa-solid fa-angle-right"></i>',
        ],

        loop: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1170: {
                items: 3,
            },
        },
    };
    return (
        <>
            <div >
                <OwlCarousel {...settings} className="client-testimonial-slider owl-carousel owl-theme">
                    <div className="car-client-item">
                        <div className="car-client-review">
                            <img src={Polygon} alt="" />
                            <h3>Daniela Fransis</h3>
                            <h5>Customer</h5>
                            <p className="m-0">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua reader will be
                                distracted by the readable content
                            </p>
                            <div className="car-client-rating">
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                            </div>
                        </div>
                        <div className="car-client-user">
                            <img src={ProfileAvatar12} alt="" />
                        </div>
                    </div>
                    <div className="car-client-item">
                        <div className="car-client-review">
                            <img src={Polygon} alt="" />
                            <h3>Alexander Rebel</h3>
                            <h5>Customer</h5>
                            <p className="m-0">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua reader will be
                                distracted by the readable content
                            </p>
                            <div className="car-client-rating">
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                            </div>
                        </div>
                        <div className="car-client-user">
                            <img src={ProfileAvatar13} alt="" />
                        </div>
                    </div>
                    <div className="car-client-item">
                        <div className="car-client-review">
                            <img src={Polygon} alt="" />
                            <h3>Mark Antonio</h3>
                            <h5>Customer</h5>
                            <p className="m-0">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua reader will be
                                distracted by the readable content
                            </p>
                            <div className="car-client-rating">
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                            </div>
                        </div>
                        <div className="car-client-user">
                            <img src={ProfileAvatar14} alt="" />
                        </div>
                    </div>
                    <div className="car-client-item">
                        <div className="car-client-review">
                            <img src={Polygon} alt="" />
                            <h3>Daniela Fransis</h3>
                            <h5>Customer</h5>
                            <p className="m-0">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua reader will be
                                distracted by the readable content
                            </p>
                            <div className="car-client-rating">
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                            </div>
                        </div>
                        <div className="car-client-user">
                            <img src={ProfileAvatar12} alt="" />
                        </div>
                    </div>
                </OwlCarousel>
            </div>

        </>

    );
}
export default Testimonials;