import "./slider.scss";
// 
import leftArrow from "../../../assets/images/leftArrow.png";
import rightArrow from "../../../assets/images/rightArrow.png";
import see_Details from "../../../assets/images/see_details.png";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import { useState } from "react";
import { getSrcImgs } from "../../../screens/helper";

interface ISilder {
    productData8: any;
}
const Silder: React.FC<ISilder> = (props: ISilder) => {
    const { productData8 } = props;
    const [offsetRadius, setOffsetRadius] = useState(2)
    const [data, setData] = useState({
        goToSlide: 0,
        showNavigation: false,
    } as any);
    const [current, setCurrent] = useState(0);
    const seeDetails = <img src={see_Details} className="d-block m-auto" />
    const tm = productData8?.map((item: any, index) => {
        return {
            key: index,
            content: <div className="item" style={{ background: current == index ? "#E4BCA3" : "" }}>
                <img src={getSrcImgs(item?.banner_name)} alt="1" width={300} height={300} />
                <div className="text-center d-grid" style={{ color: current == index ? "black" : "white" }}>
                    <span className="fw-bold fs-5">{item?.title}</span>
                    {/* <span className="mt-1 mb-3">{seeDetails}</span> */}
                </div>
            </div>,
            onClick: () => {setCurrent(index); setData({ goToSlide: index, }) }
        }
    });

    return (
        <div className="bg-img position-relative">
            <div className="container p-5">
                <h1 className="text-white">Handpieces</h1>
                <div style={{ width: "30%", height: "400px", margin: "0 auto" }}>
                    {productData8 && (
                        <Carousel
                            slides={tm}
                            goToSlide={data.goToSlide}
                            offsetRadius={offsetRadius}
                            showNavigation={false}
                            animationConfig={config.slow}
                        />
                    )}
                </div>
                <div
                    style={{
                        margin: "0 auto",
                        marginTop: "2rem",
                        width: "50%",
                        display: "flex",
                        justifyContent: "space-around"
                    }}
                >
                    <div className="arrow-btn-slider">
                        <button
                        className="arrow-btn-img"
                            style={{ background: "white", borderRadius: "25px", height: "50px", width: "50px" }}
                            onClick={() => {
                                    setCurrent( current === 0 ?  productData8.length  - 1 :  current -1 );
                                    setData({ goToSlide: current === 0 ?  productData8.length  - 1 :  current -1 });
                            }}

                        >
                            <img src={leftArrow} alt="" />
                        </button>
                        &nbsp; &nbsp; &nbsp; &nbsp;
                        <button
                            style={{ background: "white", borderRadius: "25px", height: "50px", width: "50px" }}
                            onClick={() => {
                                    setCurrent(current === productData8.length  - 1 ?  0 :  current + 1 );
                                    setData({ goToSlide: current === productData8.length  - 1 ?  0 :  current + 1 });
                            }}
                        >
                            <img src={rightArrow} alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default Silder;