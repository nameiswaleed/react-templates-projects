import React from "react";
import "photoswipe/dist/photoswipe.css";
// import "photoswipe/dist/default-skin/default-skin.css";

import { Gallery, Item } from "react-photoswipe-gallery";
import { Link } from "react-router-dom";
import { gallery_1_jpg, gallery_2_jpg, gallery_3_jpg, gallery_4_jpg } from "../../imagepath";

const Rooms = () => {
    return (
        <Gallery>
            <div className="gallery-widget">
            <Item
                        original={gallery_1_jpg}
                        thumbnail={gallery_1_jpg}
                        width="1024"
                        height="768"
                    >
                        
                        {({ ref, open }) => (
                            <Link onClick={open}>
                            <img
                                ref={ref}
                                className="img-fluid"
                                src={gallery_1_jpg}
                            />
                            </Link>
                        )}
                        
                    </Item>
            {/* <Link
              // to={gallery_1_jpg}
              data-fancybox="gallery1"
            >
              <img
                className="img-fluid"
                alt="Image"
                src={gallery_1_jpg}
              />
            </Link> */}
          </div>
          
          <div className="gallery-widget">
          <Item
                        original={gallery_2_jpg}
                        thumbnail={gallery_2_jpg}
                        width="1024"
                        height="768"
                    >
                        
                        {({ ref, open }) => (
                            <Link onClick={open}>
                            <img
                                ref={ref}
                                className="img-fluid"
                                src={gallery_2_jpg}
                            />
                            </Link>
                        )}
                        
                    </Item>
            {/* <Link
              // to={gallery_2_jpg}
              data-fancybox="gallery1"
            >
              <img
                className="img-fluid"
                alt="Image"
                src={gallery_2_jpg}
              />
            </Link> */}
          </div>
          <div className="gallery-widget">
          <Item
                        original={gallery_3_jpg}
                        thumbnail={gallery_3_jpg}
                        width="1024"
                        height="768"
                    >
                        
                        {({ ref, open }) => (
                            <Link onClick={open}>
                            <img
                                ref={ref}
                                className="img-fluid"
                                src={gallery_3_jpg}
                            />
                            </Link>
                        )}
                        
                    </Item>
            {/* <Link
              to={gallery_3_jpg}
              data-fancybox="gallery1"
            >
              <img
                className="img-fluid"
                alt="Image"
                src={gallery_3_jpg}
              />
            </Link> */}
          </div>
          <div className="gallery-widget">
          <Item
                        original={gallery_4_jpg}
                        thumbnail={gallery_4_jpg}
                        width="1024"
                        height="768"
                    >
                        
                        {({ ref, open }) => (
                            <Link onClick={open}>
                            <img
                                ref={ref}
                                className="img-fluid"
                                src={gallery_4_jpg}
                            />
                            </Link>
                        )}
                        
                    </Item>
            {/* <Link
              to={gallery_4_jpg}
              data-fancybox="gallery1"
            >
              <img
                className="img-fluid"
                alt="Image"
                src={gallery_4_jpg}
              />
            </Link> */}
          </div>
          
          
        </Gallery>
    );
}

export default Rooms;