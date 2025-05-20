// @ts-nocheck
import React, { useEffect } from "react";
import roundFrame from "../../assets/images/round-frame.png";
// import hairCell from "../../assets/images/hair-cell.png";
import hairCell from "../../assets/images/pyd-logo.png";
import "./Products.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GNLS from "../Home/GNLS/GNLS";
import {
  Card,
  CardBody,
  CardSubtitle,
  CardTitle,
  Table,
} from "react-bootstrap";
import BeforeAfterImage from "../../Components/BeforAfterImage";
import Silder from "./Slider/Slider";
import ScrollTop from "../../Components/ScrollTop";
import ProductVideo from "./ProductVideo/ProductVideo";
import { GetProductAllData } from "../../shared/redux/productReducer/product-thunk";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "shared/redux/store";
import { getSrcImgs } from "../../screens/helper";
import AppLoading from "../../Components/AppLoading/AppLoading";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";

gsap.registerPlugin(ScrollTrigger);

interface IProducts {
  isMobile: any;
}

const Products: React.FC<IProducts> = (props: IProducts) => {
  const { isMobile } = props;
  const slug = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { productData, lstProductBanner, loadingProductBanner } = useSelector(
    (state: RootState) => state.productSlice
  );

  const responsive: any = {
    desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  useEffect(() => {
    if ((lstProductBanner?.length ?? 0) > 0) {
      const checkslug = lstProductBanner?.some(
        (item: any) => item?.product_slug == slug?.slug
      );
      if (checkslug) {
        dispatch(GetProductAllData(slug?.slug));
      } else {
        navigate("/");
      }
    }
  }, [slug, lstProductBanner]);

  useEffect(() => {
    const tl = gsap.timeline();
    console.log('data');

    gsap.from("#headImg1", {
      x: "-100%",
      duration: 2,
    });

    gsap.from("#headImg2", {
      x: "100%",
      duration: 2,
      opacity: 0,
    });
    gsap.from("#fdaCe", {
      y: "50px",
      opacity: 0,
      duration: 0.5,
      stagger: 0.2,
    });

    gsap.from("#penImg", {
      x: "100%",
      duration: 2,
      opacity: 0,
      scrollTrigger: {
        trigger: "#penImg",
        // markers: true,
        start: "top 20%",
      },
    });

    gsap.from("#beamImg", {
      x: "150%",
      duration: 2,
      opacity: 0,
      scrollTrigger: {
        trigger: "#beamImg",
        // markers: true,
        start: "top 20%",
      },
    });

    gsap.from(".beamImgBox", {
      scale: 0.8,
      opacity: 0,
      scrollTrigger: {
        trigger: "#beamImg",
        // markers: true,
        start: "top 20%",
      },
      stagger: 0.1,
    });

    gsap.from(".bannerTxt", {
      y: "50px",
      opacity: 0,
      duration: 0.5,
      stagger: 0.2,
    });

    gsap.from("#coolingFanImg", {
      x: "150%",
      duration: 2,
      opacity: 0,
      scrollTrigger: {
        trigger: "#coolingFanImg",
        // markers: true,
        start: "top 20%",
      },
    });
  }, [slug?.slug]);

  const First = () => {
    const productData1 = productData?.Banner_1?.at(0);

    return (
      <div className="product-main-banner">
        <div
          className={`d-flex ${
            isMobile ? "justify-content-between" : ""
          } position-relative`}
        >
          {!isMobile && (
            <img
              id="headImg1"
              src={roundFrame}
              alt=""
              className="round-frame"
            />
          )}
          <img
            id="headImg1"
            src={getSrcImgs(productData1?.banner_name_1)}
            alt=""
            className="first-machine"
          />

          <div
            className="text-white d-flex flex-column text-details"
            style={{ marginTop: "4%", width: "40%" }}
          >
            <span className="bannerTxt fw-bold title-1">
              {productData1?.title}
            </span>
            <span className={`bannerTxt fw-light subTitle`}>
              {productData1?.sub_title}
            </span>
            <span
              className="bannerTxt fw-light"
              style={{
                height: "40px",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                overflow: "hidden",
              }}
            >
              {productData1?.description}
            </span>
            <img
              id="fdaCe"
              src={getSrcImgs(productData1?.icon)}
              alt=""
              height={isMobile ? 30 : 50}
              width={isMobile ? 30 : 50}
              style={{ marginBottom: isMobile ? "0" : "15px" }}
            />
            <span className={`bannerTxt subTitle`}>
              {productData1?.bottom_title}
            </span>
            <span className="bannerTxt fw-light">
              {productData1?.bottom_sub_title}
            </span>
          </div>
          {!isMobile && (
            <img
              id="headImg2"
              src={getSrcImgs(productData1?.banner_name_2)}
              alt=""
            />
          )}
        </div>
      </div>
    );
  };

  const Second = () => {
    const productData2 = productData?.Banner_2?.at(0);
    const productSubData = productData?.Banner_2_sub_section;
    return (
      <div className="product-second-banner" style={{ background: "#E1E7E7" }}>
        <div className="d-flex">
          <div
            className={`${
              isMobile ? "m-auto pt-3" : "ms-5"
            } p-5 container overflow-x-hidden`}
          >
            <p className="gradients-text">{productData2?.heading}</p>
            <h1
              className={"text-start"}
              style={{ fontSize: isMobile ? "1.3rem" : "3vw" }}
            >
              {productData2?.title}
            </h1>
            <div className="iris-details">
              {productSubData?.map((sub: any, index) => (
                <div>
                  <Card
                    className={`${
                      index <= 2 ? "bg-transparent z-[1] iris-card" : "bg-white iris-card"
                    } h-100 rounded-4 z-[1] iris-card`}
                    style={{
                      width: isMobile ? "140px" : "185px",
                      minHeight: "90px",
                      maxHeight: productSubData?.length > 3 ? "" : "200px",
                      borderColor: index <= 2 ? "#0d66a2" : "",
                    }}
                  >
                    <CardBody>
                      <CardTitle>
                        <img
                          src={getSrcImgs(sub?.banner_name)}
                          alt=""
                          width={isMobile ? 37 : 60}
                        />
                      </CardTitle>
                      <CardSubtitle
                        className="card-subtitle fw-bold item-title"
                        style={{ color: index <= 2 ? "#0d66a2" : "" }}
                      >
                        {sub?.title}
                      </CardSubtitle>
                    </CardBody>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          {/* {!isMobile && ( */}
          <img
            id="penImg"
            src={getSrcImgs(productData2?.banner_name_1)}
            alt=""
            className="img-pen"
          />
          {/* )} */}
        </div>
      </div>
    );
  };

  const Third = () => {
    const productData3 = productData?.Banner_3?.at(0);
    const productSubData = productData?.Banner_3_sub_section;
    return (
      <div
        className={`bg-black text-white d-flex ${
          isMobile ? "flex-column" : "justify-content-between"
        } position-relative  product-third-banner`}
      >
        <div
          className={`${isMobile ? "p-3" : "p-5"} container overflow-x-hidden`}
        >
          <h1 className={isMobile ? "text-left" : " w-75 text-left ms-5 "} style={{ textAlign: 'left' }}>
            {productData3?.title}
          </h1>
          <p
            className={`fs-5 ${
              isMobile ? "text-left" : "w-75 fs-5 ms-5 text-left"
            }`}
          >
            {productData3?.sub_title}
          </p>
          <div
            className=""
            style={{ marginBottom: "15px", verticalAlign: "middle" }}
          >
            <div
              className="position-relative beam-details"
              style={{ zIndex: 1 }}
            >{productSubData?.length > 0 && (

              <Carousel
                responsive={responsive}
                autoPlay={false}
                swipeable={true}
                draggable={true}
                showDots={true}
                infinite={true}
                removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
              >
                {productSubData?.map((item: any) => {
                  return (
                    <div className="item-img">
                      <p> {item?.title} </p>
                      <img
                        src={getSrcImgs(item?.banner_name)}
                        width={100}
                        height={100}
                        alt=""
                        className=""
                      />
                    </div>
                  );
                })}
              </Carousel>
            )}
            </div>
          </div>
        </div>
        <img
          src={getSrcImgs(productData3?.banner_name)}
          id={"beamImg"}
          className={`${isMobile ? "" : "me-5"} img-sideMachine`}
          style={{ marginTop: isMobile ? "" : "-2.5rem" }}
        />
      </div>
    );
  };

  const Fourth = () => {
    const productData4 = productData?.Banner_4?.at(0);
    const productSubData = productData?.Banner_4_sub_section_1;
    const productSubData2 = productData?.Banner_4_sub_section_2;
    console.log("---pr", productSubData2);
    return (
      <div style={{ background: "#F2F3F5" }}>
        <div className={isMobile ? "pt-3" : "p-4 container"}>
          <h1 className={isMobile ? "text-center" : "text-start"}>
            {productData4?.title}
          </h1>
          <p className={`${isMobile ? "text-center fs-6" : "w-75 fs-5"} `}>
            {productData4?.sub_title}
          </p>
        </div>
        <div className="d-flex product-third-banner">
          <div
            className={`${isMobile ? "p2" : "p-4"} container overflow-x-hidden`}
            style={{ marginLeft: !isMobile ? "3rem" : "" }}
          >
            <div
              className="overflow-y-auto mt-5"
              style={{ marginBottom: "15px", scrollbarWidth: "none" }}
            >
              <div
                style={{
                  display: "grid",
                  width: "100%",
                }}
              >
                <div className="machine-sub-details">
                  {productSubData?.map((item: any, index) => (
                    <div>
                      <div className={`d-flex ${isMobile ? "gap-2" : "gap-4"}`}>
                        <h1 className="fw-bold system-no">{index + 1}</h1>
                        <span className={!isMobile ? "mt-3" : ""}>
                          <span className="fw-bold system-title">
                            {item?.title}
                          </span>
                          <br />
                          <span className="system-subTitle">
                            {item?.sub_title}
                          </span>
                        </span>
                        <img
                          src={getSrcImgs(item?.banner_name)}
                          alt=""
                          height={isMobile ? 45 : 68}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="machine-sub-details">
                  {productSubData2?.map((item: any) => (
                    <div className="d-flex gap-3 mt-5">
                      <p className={`${isMobile ? "fs-5" : "fs-1"} fw-bold`}>
                        {item?.title}
                      </p>
                      <img
                        src={getSrcImgs(item?.banner_name)}
                        alt=""
                        className="system-graph"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <img
            id="coolingFanImg"
            src={getSrcImgs(productData4?.banner_name)}
            className={"img-sideFan"}
          />
        </div>
      </div>
    );
  };

  const Fifth = () => {
    const productData5 = productData?.Banner_5?.at(0);
    return (
      <div>
        <div className={`${isMobile ? "" : "p-5"} container overflow-x-hidden`}>
          <div className={`${isMobile ? "mobile-revese" : ""} machine-details`}>
            <div className={isMobile ? "" : "w-100"}>
              <div
                className={
                  isMobile
                    ? "d-flex align-items-center flex-column"
                    : "d-flex gap-3 position-relative"
                }
              >
                <img
                  src={getSrcImgs(productData5?.banner_name_1)}
                  alt=""
                  width={250}
                />
                <p
                  className="fs-2"
                  style={isMobile ? {} : { marginTop: "5rem" }}
                >
                  {productData5?.banner_name_1_title}
                </p>
              </div>
              <div
                className={
                  isMobile
                    ? "d-flex align-items-center flex-column"
                    : "d-flex gap-3 position-static"
                }
                style={{ marginTop: "-2.6rem" }}
              >
                <p
                  className="fs-2"
                  style={
                    isMobile ? { marginTop: "2rem" } : { marginTop: "120px" }
                  }
                >
                  {productData5?.banner_name_2_title}
                </p>
                <img
                  src={getSrcImgs(productData5?.banner_name_2)}
                  alt=""
                  width={250}
                  height={200}
                />
              </div>
            </div>
            <div className={`${isMobile ? "pt-3" : ""}`}>
              <h1 className={isMobile ? "text-center" : "text-start"}>
                {productData5?.title}
              </h1>
              <p className={`${isMobile ? "text-center" : ""} fs-5`}>
                {productData5?.sub_title}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const Sixth = () => {
    const productData6 = productData?.Banner_6?.at(0);
    return (
      <div style={{ background: "#F2F3F5" }}>
        <div
          className={`${
            isMobile ? "pt-3" : "p-5"
          } container overflow-x-hidden m-auto`}
        >
          <div className="machine-details">
            <div>
              <h1 className={isMobile ? "text-center" : "text-start"}>
                {productData6?.title}
              </h1>
              <p className={`${isMobile ? "text-center" : ""} fs-5`}>
                {productData6?.sub_title}
              </p>
            </div>
            <div className={isMobile ? "" : "w-100"}>
              <div
                className={`d-flex align-items-center ${
                  isMobile ? "flex-column" : "gap-3 position-relative"
                }`}
              >
                <img
                  src={getSrcImgs(productData6?.banner_name_1)}
                  alt=""
                  style={{ width: "50%", height: "50%" }}
                />
                <p
                  className="fs-2"
                  style={isMobile ? {} : { marginTop: "50px" }}
                >
                  {productData6?.banner_name_1_title}
                </p>
              </div>
              <div
                className={`d-flex align-items-center ${
                  isMobile ? "flex-column" : "gap-3 position-static"
                }`}
                style={{ marginTop: "-2.6rem" }}
              >
                <p
                  className="fs-2"
                  style={
                    isMobile ? { marginTop: "2rem" } : { marginTop: "100px" }
                  }
                >
                  {productData6?.banner_name_2_title}
                </p>
                <img
                  src={getSrcImgs(productData6?.banner_name_2)}
                  alt=""
                  style={{ width: "50%", height: "50%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const Seventh = () => {
    const productData7 = productData?.Banner_7?.at(0);
    return (
      <div>
        <div
          className={`${
            isMobile ? "" : "p-5"
          } container overflow-x-hidden m-auto`}
        >
          <div className={`${isMobile ? "mobile-revese" : ""} machine-details`}>
            <div className={isMobile ? "" : "w-100"}>
              <div
                className={
                  isMobile
                    ? "d-flex align-items-center flex-column"
                    : "d-flex gap-3 position-relative"
                }
              >
                <img
                  src={getSrcImgs(productData7?.banner_name_1)}
                  alt=""
                  style={{ width: "50%", height: "50%" }}
                />
                <p
                  className="fs-2"
                  style={isMobile ? {} : { marginTop: "5rem" }}
                >
                  {productData7?.banner_name_1_title}
                </p>
              </div>
              <div
                className={
                  isMobile
                    ? "d-flex align-items-center flex-column"
                    : "d-flex gap-3 position-static"
                }
                style={{ marginTop: "-2.6rem" }}
              >
                <p
                  className="fs-2"
                  style={
                    isMobile ? { marginTop: "2rem" } : { marginTop: "120px" }
                  }
                >
                  {productData7?.banner_name_2_title}
                </p>
                <img
                  src={getSrcImgs(productData7?.banner_name_2)}
                  alt=""
                  style={{ width: "50%", height: "50%" }}
                />
              </div>
            </div>
            <div className={`${isMobile ? "pt-3" : ""}`}>
              <h1 className={isMobile ? "text-center" : "text-start"}>
                {productData7?.title}
              </h1>
              <p className={`${isMobile ? "text-center" : ""} fs-5`}>
                {productData7?.sub_title}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const Nineth = () => {
    const productData9 = productData?.Banner_9?.at(0);
    return (
      <div>
        <div
          className={`${
            isMobile ? "pt-3" : "p-5 ms-5"
          } overflow-x-hidden text-center`}
        >
          <h1>{productData9?.title}</h1>
          <p>{productData9?.sub_title}</p>
          <p>{productData9?.description}</p>
          <div
            className="d-inline-block overflow-y-auto"
            style={{ marginBottom: "15px" }}
          >
            <img
              className="banner9-img"
              src={getSrcImgs(productData9?.banner_name_1)}
              alt=""
            />
            <img
              className="banner9-img"
              src={getSrcImgs(productData9?.banner_name_2)}
              alt=""
            />
          </div>
        </div>
      </div>
    );
  };

  const Tenth = () => {
    const productData10 = productData?.Banner_10?.at(0);
    return (
      <div>
        <div className={` ${isMobile ? "flex-column" : ""} d-flex`}>
          <img
            src={getSrcImgs(productData10?.banner_name_1)}
            alt=""
            style={{ width: isMobile ? "100%" : "60%" }}
          />
          <div className="bg-black w-100 d-flex overflow-hidden">
            <div className="container ms-3 mt-5 text-white text-start">
              <h2>{productData10?.title}</h2>
              <p>{productData10?.sub_title}</p>
            </div>
            <img
              src={getSrcImgs(productData10?.banner_name_2)}
              alt=""
              style={{ width: "50%", height: "80%", marginTop: "4.5rem" }}
            />
          </div>
        </div>
      </div>
    );
  };

  const Eleventh = () => {
    const productData11 = productData?.Banner_11?.at(0);
    const productSubData = productData?.Banner_11_sub_section;
    return (
      <div className="text-center w-100">
        <div className="container p-5 pt-3">
          <h1>{productData11?.title}</h1>
          <p>{productData11?.sub_title}</p>
          <div className="monitoring-system">
            {productSubData?.map((item: any) => (
              <div>
                <img src={getSrcImgs(item?.banner_name)} alt="" />
                <p>{item?.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const customDataTable1 = () => {
    const productData13 = productData?.Banner_13?.at(0);
    const maxLeangth = productData13?.table_data?.map(
      (row) => row?.table_vals?.length
    );
    let largestLength = 0;
    if (maxLeangth?.length) {
      for (let i = 0; i < maxLeangth.length; i++) {
        if (maxLeangth[i] > largestLength) {
          largestLength = maxLeangth[i];
        }
      }
    }
    return (
      <div className="w-100 mt-5 mb-2">
        <div className="d-flex justify-content-center">
          <p className="gradients-text">{productData13?.heading}</p>
        </div>
        <h1>{productData13?.section_name}</h1>
        <div className={isMobile ? "" : "d-flex"} style={{ overflow: "auto" }}>
          {!isMobile && <img src={hairCell} alt="" className="hair-cell" />}
          <div
            style={{ width: isMobile ? "100vh" : "70%" }}
            className={isMobile ? "ps-2 overflow-auto" : ""}
          >
            <div className="data-table">
              {productData13?.table_data?.map((item: any, index: number) => {
                return (
                  <div
                    className="data-table-row"
                    style={{
                      borderRight:
                        index === productData13?.table_data.length - 1 ||
                        index === 0
                          ? "none"
                          : "1px solid #dee2e6",
                    }}
                  >
                    <div
                      className={
                        index === productData13?.table_data.length - 1
                          ? "data-table-header data-table-header-border "
                          : index === 0
                          ? "data-table-header data-table-header-top-border"
                          : "data-table-header "
                      }
                    >
                      {item?.header}
                    </div>
                    <div
                      className={
                        index === productData13?.table_data.length - 1
                          ? "table-body data-table-body-bottom-border"
                          : index === 0
                          ? "table-body data-table-body-top-border"
                          : "table-body"
                      }
                    >
                      {item?.table_vals?.map((data: any, index1: number) => {
                        return (
                          <div
                            className={"data-table-body"}
                            style={{
                              borderBottom:
                                index ===
                                  productData13?.table_data.length - 1 &&
                                "none",
                              borderLeft:
                                index1 !== 0
                                  ? "1px solid  rgb(14, 122, 193)"
                                  : "none",
                              fontWeight: data?.isBold ? "bold" : "normal",
                            }}
                          >
                            {data?.field}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const RealTimeEffect = () => {
    const productData12 = productData?.Banner_12?.at(0);
    return (
      <>
        <h1>{productData12?.title}</h1>
        <div className={!isMobile ? "d-flex gap-5" : "d-flex flex-column"}>
          <BeforeAfterImage
            beforeImage={getSrcImgs(productData12?.banner_name_1_before)}
            afterImage={getSrcImgs(productData12?.banner_name_1_after)}
          />
          <BeforeAfterImage
            beforeImage={getSrcImgs(productData12?.banner_name_2_before)}
            afterImage={getSrcImgs(productData12?.banner_name_2_after)}
          />
        </div>
      </>
    );
  };

  return (
    <>
      {productData?.Banner_1?.length > 0 ? First() : ""}
      {productData?.Banner_2?.length > 0 ? Second() : ""}
      {productData?.Banner_3?.length > 0 ? Third() : ""}
      {productData?.Banner_4?.length > 0 ? Fourth() : ""}
      {productData?.Banner_5?.length > 0 ? Fifth() : ""}
      {productData?.Banner_6?.length > 0 ? Sixth() : ""}
      {productData?.Banner_7?.length > 0 ? Seventh() : ""}
      {productData?.Banner_8?.length > 0 ? (
        <div className="handpieces">
          <Silder productData8={productData?.Banner_8} />
        </div>
      ) : (
        ""
      )}
      {productData?.Banner_9?.length > 0 ? Nineth() : ""}
      {productData?.Banner_10?.length > 0 ? Tenth() : ""}
      {productData?.Banner_11?.length > 0 ? Eleventh() : ""}
      {productData?.Banner_12?.length > 0 ? RealTimeEffect() : ""}
      {productData?.Banner_13?.length > 0 ? customDataTable1() : ""}
      {productData?.Banner_14?.length > 0 ? (
        <ProductVideo productData14={productData?.Banner_14?.at(0)} />
      ) : (
        ""
      )}
      <GNLS />
      <ScrollTop />
      {loadingProductBanner && <AppLoading isShow={loadingProductBanner} />}
    </>
  );
};

export default Products;
