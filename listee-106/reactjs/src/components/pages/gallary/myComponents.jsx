import React from "react";
import "photoswipe/dist/photoswipe.css";
// import "photoswipe/dist/default-skin/default-skin.css";

import { Gallery, Item } from "react-photoswipe-gallery";
import { galleryimage_1, galleryimage_10, galleryimage_12, galleryimage_2, galleryimage_3, galleryimage_4, galleryimage_5, galleryimage_6, galleryimage_7, galleryimage_8, galleryimage_9, gallerypop_1, gallerypop_10, gallerypop_12, gallerypop_2, gallerypop_3, gallerypop_4, gallerypop_5, gallerypop_6, gallerypop_7, gallerypop_8, gallerypop_9 } from "../../imagepath";
import { Link } from "react-router-dom";

const Apps = () => {
    return (
        <Gallery>
            <div className="col-lg-3 col-md-3 col-sm-3">
                <div className="gallery-widget">
                
                    <Item
                        original={gallerypop_1}
                        thumbnail={gallerypop_1}
                        width="1024"
                        height="768"
                    >
                        
                        {({ ref, open }) => (
                            <Link onClick={open}>
                            <img
                                ref={ref}
                                className="img-fluid"
                                src={galleryimage_1}
                            />
                            </Link>
                        )}
                        
                    </Item>
                    
                </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3">
                <div className="gallery-widget">
                    <Item
                        original={gallerypop_2}
                        thumbnail={gallerypop_2}
                        width="1024"
                        height="768"
                    >
                        {({ ref, open }) => (
                            <Link onClick={open}>
                            <img
                                ref={ref}
                                className="img-fluid"
                                src={galleryimage_2}
                            />
                            </Link>
                        )}
                    </Item>
                </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3">
                <div className="gallery-widget">
                    <Item
                        original={gallerypop_3}
                        thumbnail={gallerypop_2}
                        width="1024"
                        height="768"
                    >
                        {({ ref, open }) => (
                            <Link onClick={open}>
                            <img
                                ref={ref}
                                className="img-fluid"
                                src={galleryimage_3}
                            />
                            </Link>
                        )}
                    </Item>
                </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3">
                <div className="gallery-widget">
                    <Item
                        original={gallerypop_4}
                        thumbnail={gallerypop_2}
                        width="1024"
                        height="768"
                    >
                        {({ ref, open }) => (
                            <Link onClick={open}>
                            <img
                                ref={ref}
                                className="img-fluid"
                                src={galleryimage_4}
                            />
                            </Link>
                        )}
                    </Item>
                </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3">
                <div className="gallery-widget">
                    <Item
                        original={gallerypop_5}
                        thumbnail={gallerypop_2}
                        width="1024"
                        height="768"
                    >
                        {({ ref, open }) => (
                            <Link onClick={open}>
                            <img
                                ref={ref}
                                className="img-fluid"
                                src={galleryimage_5}
                            />
                            </Link>
                        )}
                    </Item>
                </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3">
                <div className="gallery-widget">
                    <Item
                        original={gallerypop_6}
                        thumbnail={gallerypop_2}
                        width="1024"
                        height="768"
                    >
                        {({ ref, open }) => (
                            <Link onClick={open}>
                            <img
                                ref={ref}
                                
                                src={galleryimage_6}
                                className="img-fluid"
                            />
                            </Link>
                        )}
                    </Item>
                </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3">
                <div className="gallery-widget">
                    <Item
                        original={gallerypop_7}
                        thumbnail={gallerypop_2}
                        width="1024"
                        height="768"
                    >
                        {({ ref, open }) => (
                            <Link onClick={open}>
                            <img
                                ref={ref}
                               
                                className="img-fluid"
                                src={galleryimage_7}
                            />
                            </Link>
                        )}
                    </Item>
                </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3">
                <div className="gallery-widget">
                    <Item
                        original={gallerypop_8}
                        thumbnail={gallerypop_2}
                        width="1024"
                        height="768"
                    >
                        {({ ref, open }) => (
                            <Link onClick={open}>
                            <img
                                ref={ref}
                                
                                className="img-fluid"
                                src={galleryimage_8}
                            />
                            </Link>
                        )}
                    </Item>
                </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3">
                <div className="gallery-widget">
                    <Item
                        original={gallerypop_9}
                        thumbnail={gallerypop_2}
                        width="1024"
                        height="768"
                    >
                        {({ ref, open }) => (
                            <Link onClick={open}>
                            <img
                                ref={ref}
                                
                                className="img-fluid"
                                src={galleryimage_9}
                            />
                            </Link>
                        )}
                    </Item>
                </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3">
                <div className="gallery-widget">
                    <Item
                        original={gallerypop_10}
                        thumbnail={gallerypop_2}
                        width="1024"
                        height="768"
                    >
                        {({ ref, open }) => (
                            <Link onClick={open}>
                            <img
                                ref={ref}
                                
                                className="img-fluid"
                                src={galleryimage_10}
                            />
                            </Link>
                        )}
                    </Item>
                </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3">
                <div className="gallery-widget">
                    <Item
                        original={gallerypop_12}
                        thumbnail={gallerypop_2}
                        width="1024"
                        height="768"
                    >
                        {({ ref, open }) => (
                            <Link onClick={open}>
                            <img
                                ref={ref}
                               
                                className="img-fluid"
                                src={galleryimage_12}
                            />
                            </Link>
                        )}
                    </Item>
                </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3">
                <div className="gallery-widget">
                    <Item
                        original={gallerypop_3}
                        thumbnail={gallerypop_2}
                        width="1024"
                        height="768"
                    >
                        {({ ref, open }) => (
                            <Link onClick={open}>
                            <img
                                ref={ref}
                                onClick={open}
                                className="img-fluid"
                                src={galleryimage_3}
                            />
                            </Link>
                        )}
                    </Item>
                </div>
            </div>
        </Gallery>
    );
}

export default Apps;