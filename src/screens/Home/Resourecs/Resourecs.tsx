import React from "react";
import { getDefaultImg, getSrcImgs } from '../../helper';
import "./Resourecs.scss";
import { config } from "react-spring";
import Carousel from 'react-multi-carousel';
import { useNavigate } from "react-router-dom";
import { PATH_BLOGS } from "../../../screens/AppLayout/RouteConstants";

const Resourecs: React.FC<any> = (props) => {
  const navigate = useNavigate();
  console.log('>>> resource props', props);

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
    <div className="testimonials-main resourecs-main">
      <div className="title">
        <span className="gradients-title testimonials-title">{props?.banner10?.title}</span>
        <span className="question testimonials-title">{props?.banner10?.sub_title}</span>
        <span style={{ textAlign: "center", padding: "10px" }}>{props?.banner10?.tab_line}</span>
      </div>
      <div className={`resources ${props?.isMobile ? 'ms-0 me-0' : ''} mt-0`} style={{height:"450px"}}>
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
          {props?.blogData?.map((blog: any) => {
            return (
              <div className="daily-update-product daily-update-main">
                <img src={getSrcImgs(blog?.blog_image)} className="img-event px-3 bg-transparent" />
                <div className="details w-auto">
                  <p className="text-black fw-bold">{blog?.title?.length > 100 ? `${blog?.title?.slice(0, 100)}...` : blog?.title}</p>
                  <p className="text-black" dangerouslySetInnerHTML={{ __html: `${blog?.description?.slice(0, 150)}...` }} />
                  <button className="read-more" onClick={() => navigate(`${PATH_BLOGS}/${blog?.blog_id}`)}>{"Read More"}</button>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
      {/* <div className="resourecs-products">
        {props?.blogData?.length > 0 && (
          <Carousel
            responsive={responsive}
            autoPlay={false}
            swipeable={true}
            draggable={true}
            showDots={true}
            infinite={true}
            removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
          >
            {props?.blogData?.map((product: any) => {
              return (
                <div className="resourecs-product">
                  <img src={getSrcImgs(product?.blog_image)} onError={getDefaultImg} />
                  <p className="resources-desc" dangerouslySetInnerHTML={{ __html: `${product?.description?.slice(0, 200)}...` }} />
                  
                </div>
              );
            })}
          </Carousel>
        )}
      </div> */}
      <div className="resource-animation productImage-articles productImage-global"></div>
    </div>
  );
};

export default Resourecs;
