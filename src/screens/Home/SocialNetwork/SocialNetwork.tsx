import React from 'react';
import highPeakPower from '../../../assets/images/beam_3.jpg';
import './SocialNetwork.scss';
import { getDefaultImg, getSrcImgs } from '../../helper';
import Carousel from 'react-multi-carousel';

const SocialNetwork: React.FC<any> = (props) => {

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
      <div className='social-network-main'>
        {/* <img src={imgSocialMedias} className="img-social-medias" /> */}

        <div className='sub'>
          <div className='title'>
            <h1 className='question'>{props?.banner9?.title}</h1>
          </div>

          {props?.Banner_9_sub_section?.length > 0 && (
            <div className='social-network-products'>
              <Carousel
                responsive={responsive}
                autoPlay={false}
                swipeable={true}
                draggable={false}
                showDots={true}
                infinite={true}
                partialVisible={false}
                removeArrowOnDeviceType={[]}
              // dotListClass="custom-dot-list-style"
              >
                {props?.Banner_9_sub_section?.map((event: any) => {
                  return (
                    <div className='social-network-product'>
                      <iframe width="100%" height="300px" src={event?.iframe_link} title="IRIS - PTP Bluetoning Q-switched Nd:YAG Laser" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          )}
        </div>
        <div>
          <img src={getSrcImgs(props?.banner9?.banner_name)} className='img-social-medias' onError={getDefaultImg} />
        </div>
        <div className='social-network-animation productImage-social productImage-articles'></div>
      </div>
    </>
  );
};

export default SocialNetwork;
