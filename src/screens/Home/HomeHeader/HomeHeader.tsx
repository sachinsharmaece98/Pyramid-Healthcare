import React from 'react';
import imgLeftBanner from '../../../assets/images/contact-left-banner.png';
import imgBannner from '../../../assets/images/main-banner.jpg';
import DefaultImage from '../../../assets/images/defaultImg.jpg'
import './HomeHeader.scss';
import { getDefaultImg, getSrcImgs } from '../../helper';
import { Carousel } from 'react-bootstrap';

const HomeHeader: React.FC<any> = (props) => {

  return (
    <div className='hh-main'>
      {props?.banner1?.length > 0 && (
        <Carousel>
          {props?.banner1?.map((item: any) => (
            <Carousel.Item>
              <img src={getSrcImgs(item?.banner_name)} className='home-banner-img' alt='no_image' onError={(e) => getDefaultImg(e)} />
              <img src={imgLeftBanner} className='img-left' onError={getDefaultImg} />
              <div className='hh-main-view'>
                <div className='text-1'>{item?.headline}</div>
                <div className='text-2'>{item?.subTitle}</div>
                <a target="_blank" style={{width:"150px", height: '40px'}} href={item?.explore_link}>
                  <button className='btn-expore-more'>
                    Explore More
                  </button>
                </a>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      )}
    </div>
  );
};

export default HomeHeader;