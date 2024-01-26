import React from "react";
import "photoswipe/dist/photoswipe.css";
// import "photoswipe/dist/default-skin/default-skin.css";

import { Gallery, Item } from "react-photoswipe-gallery";
import { Link } from "react-router-dom";
import { GalleryImg1, GalleryImg2, GalleryImg3, GalleryImg9, gallery_09, gallery_5_jpg, gallery_6_jpg, gallery_8_jpg } from "../../imagepath";

const RoomsProfile = () => {
    return (
        <Gallery>
            <div className="col-lg-3  col-md-3 col-sm-3">
                <div className="review-gallery">
                <Item
                        original={gallery_6_jpg}
                        thumbnail={gallery_6_jpg}
                        width="1024"
                        height="768"
                    >
                        
                        {({ ref, open }) => (
                            <Link onClick={open}>
                            <img
                                ref={ref}
                                className="img-fluid"
                                src={GalleryImg1}
                            />
                            </Link>
                        )}
                        
                    </Item>
                    
                </div>
            </div>
            <div className="col-lg-3  col-md-3 col-sm-3">
                <div className="review-gallery">
                <Item
                        original={gallery_5_jpg}
                        thumbnail={gallery_5_jpg}
                        width="1024"
                        height="768"
                    >
                        
                        {({ ref, open }) => (
                            <Link onClick={open}>
                            <img
                                ref={ref}
                                className="img-fluid"
                                src={GalleryImg2}
                            />
                            </Link>
                        )}
                        
                    </Item>
                    
                </div>
            </div>
            <div className="col-lg-3  col-md-3 col-sm-3">
                <div className="review-gallery">
                <Item
                        original={gallery_8_jpg}
                        thumbnail={gallery_8_jpg}
                        width="1024"
                        height="768"
                    >
                        
                        {({ ref, open }) => (
                            <Link onClick={open}>
                            <img
                                ref={ref}
                                className="img-fluid"
                                src={GalleryImg3}
                            />
                            </Link>
                        )}
                        
                    </Item>
                    
                </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3">
                <div className="review-gallery">
                <Item
                        original={gallery_09}
                        thumbnail={gallery_09}
                        width="1024"
                        height="768"
                    >
                        
                        {({ ref, open }) => (
                            <Link onClick={open}>
                            <img
                                ref={ref}
                                className="img-fluid"
                                src={GalleryImg9}
                            />
                            </Link>
                        )}
                        
                    </Item>
                    
                </div>
            </div>


        </Gallery>
    );
}

export default RoomsProfile;