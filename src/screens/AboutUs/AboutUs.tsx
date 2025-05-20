// @ts-nocheck
import React, { useEffect, useRef, useState } from "react";
import imgLeftBanner from "../../assets/images/main-banner.jpg";
import imgBanner from "../../assets/images/banner-cs.png";
import vision from "../../assets/images/vision.png";
import "./aboutUs.scss";
import { Card, CardBody, CardTitle } from "react-bootstrap";
import { GetAboutData } from "../../shared/redux/aboutReducer/about-thunk";
import { GetHomeAllBanners } from "../../shared/redux/homeReducer/home-thunk";
import CustomerSatisfaction from "../../screens/Home/CustomerSatisfaction/CustomerSatisfaction";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "shared/redux/store";
import GNLS from "../../screens/Home/GNLS/GNLS";
import { getSrcImgs } from "../../screens/helper";
import AppLoading from "../../Components/AppLoading/AppLoading";
import ScrollToTop from "../../Components/ScrollTop";

const AboutUs: React.FC<any> = (props) => {
  const {
    loadingAboutBanner,
    aboutlstBanner,
    error
  } = useSelector((state: RootState) => state.aboutSlice);
  const { lstBanner, loadingHomeBanner } = useSelector((state: RootState) => state.homeslice);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(GetAboutData());
    dispatch(GetHomeAllBanners())
  }, [])

  const render = (item: any, position: "left" | "right", isHide: boolean) => {

    if (isHide) {
      return <div style={{ width: "340px" }} /> // TODO: py-s-item-detail + py-s-item-vertical
    }

    return (
      <div className="flex-center">
        {position == "right" && <div className="py-s-item-vertical" />}
        <div className={`py-s-item-detail ${position}`}>
          <img src={vision} />
          <div className="detail">
            <span className="title">{item?.title}</span>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error consequatur dolorem voluptatum, aperiam ad doloremque soluta sint quae nulla commodi dignissimos officiis corrupti saepe at nobis hic dolorum omnis sequi alias esse deleniti nostrum, necessitatibus ipsum. Dolores eaque nisi necessitatibus, minima laboriosam cum iusto in atque corrupti fuga rerum? Vitae.</span>
            {/* <span>{item?.description}</span> */}
          </div>
        </div>
        {position == "left" && <div className="py-s-item-vertical" />}
      </div>
    );
  };

  const renderPyramidOfSuccess = () => {
    const bannerTimeLine = aboutlstBanner?.banner_timeline;
    return (
      <div className="py-success">
        <span className="py-s-title">The Pyramid of our Success</span>
        {bannerTimeLine?.map((item: any, index: number) => {
          return (
            <div className="py-s-item">
              {render(item, "left", index % 2 !== 0)}
              <div className="flex-direction-center">
                <div className={`py-s-item-horizontal ${index == 0 ? " hide" : ""}`} />
                <div className="py-s-item-year">{item?.year}</div>
                <div className={`py-s-item-horizontal ${index == (bannerTimeLine?.length - 1) ? " hide" : ""}`} />
              </div>
              {render(item, "right", index % 2 == 0)}
            </div>
          );
        })}
      </div>
    );
  };

  const renderTime = () => {
    const bannerTimeLine = aboutlstBanner?.banner_timeline;
    return (
      <div className="timeline">
        {bannerTimeLine?.map((item: any, index: number) => {
          const year: any = { '--year': item?.year ?? "" };
          return (
            <div className={`time-container ${index % 2 == 0 ? 'left' : "right"}`} id={item?.year}>
              <div className={`line ${index % 2 == 0 ? 'left-line' : "right-line"}`} />
              <div className="content">
                <img src={vision} style={{ border: "1px solid #3374C1", borderRadius: "50%", background: "#E3F4FE" }} width={40} height={40} />&nbsp;&nbsp;
                <span className="title">{item?.title}</span><br />
                <span>{item?.description}</span>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  const banner1Data = aboutlstBanner?.Banner_1?.at(0);
  const banner2Data = aboutlstBanner?.Banner_2?.at(0);
  const banner3Data = aboutlstBanner?.Banner_3
  return (
    <>
      <div className="about-main">
        {/* <HomeHeader/> */}
        <img src={getSrcImgs(banner1Data?.banner_name)} className="main-img" />
        <div className="about-main-view">
          <h1 className="heading-1">{banner1Data?.title_line}</h1>
          <h1 className="heading-2">{banner1Data?.title}</h1>
        </div>
      </div>
      <div className="about-2">
        <div style={{ width: "100%", minWidth: "300px" }}>
          <span className="gradients-title">{banner2Data?.title}</span>
          <h1 className="text-start">{banner2Data?.title_line}</h1>
          <p style={{ whiteSpace: "pre-wrap", fontSize: "15px", textAlign: "justify" }} dangerouslySetInnerHTML={{ __html: `${banner2Data?.paragraph}` }}>
            {/* {banner2Data?.paragraph} */}
          </p>
        </div>
        <img src={getSrcImgs(banner2Data?.banner_name)} className="img-2" />
      </div>
      <div className="pb-5">
        <div className="about-3 d-flex">
          {banner3Data?.map((item: any) => (
            <Card className="vision-card m-auto">
              <img src={getSrcImgs(item?.banner_name)} alt="" className="vision-img" />
              <CardTitle className="text-center">{item?.title}</CardTitle>
              <CardBody className="text-center">
                {item?.description}
              </CardBody>
            </Card>
          ))}
        </div>
      </ div>
      <div>
        <CustomerSatisfaction banner5={lstBanner?.Banner_5?.at(0)} banner5_sub={lstBanner?.Banner_5_sub_section} />
      </div>
      {/* {renderPyramidOfSuccess()} */}
      <h2 className="py-s-title">The Pyramid of our Success</h2>
      <div >
        {renderTime()}
      </div>
      <GNLS />
      {(loadingAboutBanner || loadingHomeBanner) && <AppLoading isShow={loadingAboutBanner && loadingHomeBanner} />}
      <ScrollToTop />
    </>
  );
};

export default AboutUs;
