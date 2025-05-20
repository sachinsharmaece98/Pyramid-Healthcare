// @ts-nocheck
import React from "react";
import iconPlaynow from "../../../assets/images/icon-playnow.png"
import iconMachine from "../../../assets/images/front-view.png";
import "../ProductVideo/ProductVideo.scss";

interface IProductVideo {
    productData14: any
}

const ProductVideo: React.FC<IProductVideo> = (props: IProductVideo) => {
    const { productData14 } = props;
    return (
        <div className="productVideo-main">
            {productData14 && (
                <iframe width="100%" height="100%" src={productData14?.video_file} title="IRIS - PTP Bluetoning Q-switched Nd:YAG Laser" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
            )}
            {/* <div className="productVideo-text">
                <span>Watch Latest Video</span>
                <p><img src={iconPlaynow}/> Play Now!</p>
            </div>
            <div className="productVideo-img">
                <div className="video-img-left"> 
                    <img src={iconMachine} alt="" height={285} />       
                </div>
                <   div className="video-img-right">
                    <div className="video-gradients-title">
                        <span className="">&nbsp; Plentiful Treatment Energy</span>
                    </div>
                    <div className="video-vertical-line d-flex flex-column">
                        <span>&nbsp;Biggest Nd : YAG Rod : 9Ø</span>
                        <span>&nbsp;Super Hive Flat Lens : Top-hat Mode</span>
                        <span>&nbsp;Max Energy Output : ~3000mJ</span>
                    </div>
                </div>
            </div>       */}
        </div>
    );
};

export default ProductVideo;
