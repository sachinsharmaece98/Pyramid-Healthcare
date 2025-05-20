import React from "react";
import highPeakPower from "../../../assets/images/high-peak-power.svg";
import iconCalendar from "../../../assets/images/calendar.svg";
import iconClock from "../../../assets/images/clock.svg";
import iconLocation from "../../../assets/images/location-gray.svg";
import "./DailyUpdate.scss";
import { getSrcImgs } from "../../../screens/helper";
import Carousel from 'react-multi-carousel';

const DailyUpdate: React.FC<any> = (props) => {

  const responsive: any = {
    desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  return (
    <div className="what-we-do-container daily-updates">
      <div className="title-container container">
        <div className="title">
          <span className="gradients-title">Daily Update</span>
          <span className="question">Events</span>
        </div>
      </div>
      {props?.eventData?.length > 0 && (
        <div className="daily-update-products">
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
            {props?.eventData?.map((event: any) => {
              return (
                <div className="daily-update-product daily-update-main">
                  <img src={getSrcImgs(event?.event_images?.at(0))} className="img-event" />
                  <div className="details">
                    <div className="date">
                      <img src={iconCalendar} className="icon" />
                      <span>{event?.event_time}</span>
                    </div>
                    <span>{event?.event_title}</span>
                    <div className="icon-text">
                      <img src={iconClock} className="icon" />
                      <div className="start-end-date">
                        <span>{event?.event_time}</span>
                        {/* <span>{event?.endDate}</span> */}
                      </div>
                    </div>
                    <div className="icon-text">
                      <img src={iconLocation} className="icon" />
                      <span>{event?.event_location}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
      )}
      <div className='what-we-do-animation productImage-daily-update productImage-social'></div>
    </div>
  );
};

export default DailyUpdate;
