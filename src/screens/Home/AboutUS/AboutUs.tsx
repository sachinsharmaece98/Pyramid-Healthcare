// @ts-nocheck
import React, { useState } from 'react';
import './AboutUS.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import bannerImg from '../../../assets/images/banner-cs.png';
import leftArrow from "../../../assets/images/leftArrow.png";
import rightArrow from "../../../assets/images/rightArrow.png";
import tringle from "../../../assets/images/triangle.png";

import "react-multi-carousel/lib/styles.css";
import { getDefaultImg, getSrcImgs } from '../../helper';
import { config } from "react-spring";
import Carousel from 'react-multi-carousel';

gsap.registerPlugin(ScrollTrigger);

const AboutUs: React.FC<any> = (props) => {

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
    <>
      <div className='row service-cards mt-5' style={{ marginLeft: '10vw', marginRight: '10vw' }}>
        {props?.banner2_sub?.length > 0 && (
          <Carousel
            responsive={responsive}
            autoPlay={false}
            swipeable={true}
            draggable={true}
            showDots={true}
            infinite={true}
            // partialVisible={false}
            removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
          >
            {props?.banner2_sub?.map((item: any, index: number) => (
              <div className='service-card text-center' style={{ background: index == 0 ? "#E6FDF3" : index == 1 ? "#E3F4FE" : "#EFF3FE" }} key={index}>
                <div className='px-4 service-title'>
                  <img className='m-1' style={{ display: 'inline' }} src={getSrcImgs(item.banner_name)} width={30} alt='' onError={getDefaultImg} />
                  <p className='m-1 service-header' style={{ display: 'inline' }}>
                    {item.title}
                  </p>
                </div>
                <div className='px-4'>
                  <span>{item.description}</span>
                </div>
              </div>
            ))}
          </Carousel>
        )}
      </div>
      <img id='triangleImg' className='triangleImg' src={tringle} alt='triangle' onError={getDefaultImg} />
      {props.banner2 && (
        <div className='row about-us-contents'>
          <div className='about-us-content'>
            <img className='banner-image productImage-about-us' src={getSrcImgs(props.banner2.banner_name)} onError={getDefaultImg} />
          </div>
          <div className='about-us-content'>
            <div className='title container'>
              <span className='gradients-title'>{props.banner2.title}</span>
              <span className='question'>{props.banner2.subTitle}</span>
              <p>{props.banner2.description1}</p>
              <div className='d-flex gap-3'>
                <div className='bg-white shadow text-center' style={{ paddingInline: "14px", height: "162px" }}>
                  <p className='fw-bold m-0' style={{ color: "#086fb6", fontSize: "4rem" }}>{props?.banner2?.yearCount}+</p>
                  <p className='fw-semibold' style={{ color: "#626262" }}>Years Of Experience</p>
                </div>
                <p>{props?.banner2?.description2}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AboutUs;
