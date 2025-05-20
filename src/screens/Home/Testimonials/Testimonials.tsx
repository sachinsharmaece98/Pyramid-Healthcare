import React from "react";
import highPeakPower from "../../../assets/images/high-peak-power.svg";
import quotes from "../../../assets/images/quotes.png";
import "./Testimonials.scss";
import { getDefaultImg, getSrcImgs } from '../../helper';
import Carousel from 'react-multi-carousel';

const Testimonials: React.FC<any> = (props) => {
  function getStars(rating: number) {
    const stars: any = [];
    for (let i = 0; i < 5; i++) {
      if (rating - 1 < i) {
        stars.push(<span>☆</span>);
      } else {
        stars.push(<span>★</span>);
      }
    }
    return stars;
  }

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
    <div className="testimonials-main">
      {props?.banner6 &&
        <div className="title">
          <span className="gradients-title testimonials-title">{props?.banner6.title}</span>
          <span className="question testimonials-title">{props?.banner6.sub_title}</span>
        </div>
      }
      <div className="testimonials-list">
        {props?.banner6_sub?.length > 0 && (
          <Carousel
            responsive={responsive}
            autoPlay={false}
            swipeable={true}
            draggable={true}
            showDots={true}
            infinite={true}
            // partialVisible={false}
            removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
          // dotListClass="custom-dot-list-style"
          >
            {props?.banner6_sub?.map((product: any) => {
              return (
                <div className="testimonials-product">
                  <div className="review-main">
                    <img src={getSrcImgs(product?.banner_name)} className="img-user" onError={getDefaultImg} />
                    <div>
                      <div className="review">
                        <span className="stars">{getStars(product?.rating_point)}</span>
                        <img src={quotes} className="quotes" />
                      </div>
                      <p className="desc">{product?.description}</p>
                      <div className="name-skill">
                        <span>
                          {product.user_name}, &nbsp;
                          <span className="skill">{product?.user_profession}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Carousel>
        )}
      </div>
      <div className="testimonial-animation productImage-testimonial productImage-treatment"></div>
    </div>
  );
};

export default Testimonials;
