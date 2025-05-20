// @ts-nocheck
import React, { useEffect } from "react";
import imgProduct from "../../assets/images/defaultImg.jpg";
import imgLeftBanner from "../../assets/images/main-banner.jpg";
import imgBanner from "../../assets/images/banner-cs.png";
import banner from "../../assets/images/contact-left-banner.png";
import iconSP from "../../assets/images/high-peak-power.svg";
import GNLS from "../Home/GNLS/GNLS";
import "./Events.scss";
import { useDispatch, useSelector } from "react-redux";
import { GetEventDetails } from "../../shared/redux/eventReducer/event-thunk";
import { RootState } from "shared/redux/store";
import { AppDispatch } from "shared/redux/store";
import Carousel from 'react-multi-carousel';
import { getDefaultImg, getSrcImgs } from '../helper';
import AppLoading from "../../Components/AppLoading/AppLoading";
import ScrollToTop from "../../Components/ScrollTop";

const Events: React.FC<any> = (props) => {
  const { lstEventDetails, loadingEventBanner } = useSelector(
    (state: RootState) => state.eventSlice
  );

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(GetEventDetails());
  }, []);

  const responsive: any = {
    desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  const eventBannerDetails = lstEventDetails?.Banner_1?.at(0);
  const eventDetails = lstEventDetails?.events_details;
  const renderEvent = (events: any) => {
    return (
      <>
        <div className="item-events">
          {events?.event_images?.length > 0 && (
            <Carousel
              responsive={responsive}
              autoPlay={false}
              swipeable={true}
              draggable={true}
              showDots={true}
              infinite={true}
              partialVisible={false}
              removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
            // dotListClass="custom-dot-list-style"
            >
              {events?.event_images?.map((item: any) => (
                <img className="img-events-product" src={getSrcImgs(item)} alt='no_image' onError={(e) => getDefaultImg(e)} />
              ))}
            </Carousel>
          )}
          {/* <Carousel>
            {events?.event_images?.map((item: any) => (
              <Carousel.Item>
              </Carousel.Item>
            ))}
          </Carousel> */}
          <div className="item-name">
            <p className="text-start fs-2" style={{ fontWeight: "600", margin: 0 }}>{events?.event_title}</p>
            <div className="item-date">
              <i className="bi bi-calendar2-check" />
              <span className="td-p-title">{events?.event_time}</span>
              <div className="date-divider" />
              <i class="bi bi-geo-alt-fill"></i>
              <span className="td-p-title">{events?.event_location}</span>
            </div>
            <div className="item-devider" />
            <div className="item-desc">
              <span>{events?.event_description}</span>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="event-main">
        {/* <HomeHeader/> */}
        <img src={getSrcImgs(eventBannerDetails?.banner_name)} className="main-img" />
        <div className="event-main-view">
          <h1 className="heading-1 text-start">{eventBannerDetails?.title_line}</h1>
          <h1 className="heading-2">{eventBannerDetails?.title}</h1>
        </div>
      </div>
      <div className="list-events" style={{ width: "100%" }}>
        {eventDetails?.map((events: any) => {
          return renderEvent(events);
        })}
      </div>
      <GNLS />
      {loadingEventBanner && <AppLoading isShow={loadingEventBanner} />}
      <ScrollToTop />
    </>
  );
};

export default Events;
