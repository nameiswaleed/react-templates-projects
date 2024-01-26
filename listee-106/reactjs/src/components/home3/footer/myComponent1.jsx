import React from "react";
import "photoswipe/dist/photoswipe.css";
// import "photoswipe/dist/default-skin/default-skin.css";

import { Gallery, Item } from "react-photoswipe-gallery";
import { Link } from "react-router-dom";
import { GalleryImg1, GalleryImg10, GalleryImg2, GalleryImg9 } from "../../imagepath";

const FancyIndex3 = () => {
    return (
        <Gallery>
            <ul className="gallery-blk d-flex align-items-center">
                      <li>
                      <Item
                        original={GalleryImg1}
                        thumbnail={GalleryImg1}
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
                      </li>
                      <li>
                      <Item
                        original={GalleryImg2}
                        thumbnail={GalleryImg2}
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
                      </li>
                      <li>
                      <Item
                        original={GalleryImg9}
                        thumbnail={GalleryImg9}
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
                      </li>
                      <li>
                      <Item
                        original={GalleryImg10}
                        thumbnail={GalleryImg10}
                        width="1024"
                        height="768"
                    >
                        
                        {({ ref, open }) => (
                            <Link onClick={open}>
                            <img
                                ref={ref}
                                className="img-fluid"
                                src={GalleryImg10}
                            />
                            </Link>
                        )}
                        
                    </Item>
                      </li>
                    </ul>
            
        </Gallery>
    );
}

export default FancyIndex3;