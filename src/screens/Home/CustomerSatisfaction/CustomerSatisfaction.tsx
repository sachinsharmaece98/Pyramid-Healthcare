import React, { useEffect, useRef, useState } from 'react';
import imgCustomerSatisfaction from '../../../assets/images/customer-satisfaction.png';
import homeBg from '../../../assets/images/home-bg.png';
import imgBannerCs from '../../../assets/images/banner-cs.png';
import './CustomerSatisfaction.scss';
import { getDefaultImg, getSrcImgs } from '../../helper';

const CustomerSatisfaction: React.FC<any> = (props) => {
  const [imgHeight, setImgHeight] = useState(0 as any);
  const divRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    setImgHeight(divRef?.current?.offsetHeight);
    console.log('red', divRef?.current?.offsetHeight)
  }, [divRef && props?.banner5])

  return (
    <>
      <div ref={divRef} className='cs-all-main'>
        <div className='cs-main'>
          <img src={getSrcImgs(props?.banner5?.banner_name)} alt='Customer Satisfaction' className='img-cs' onError={getDefaultImg} style={{ height: `${imgHeight}px` }} />
          <div className='details'>
            {props.banner5 && (
              <div>
                <span className='title-1'>{props?.banner5.title}</span>
                <br />
                <span className='title-2'>{props?.banner5.sub_title}</span>
              </div>
            )}
            <div className='count-view-container d-flex flex-wrap'>
              {props.banner5_sub &&
                props.banner5_sub.length > 0 &&
                props.banner5_sub.map((item, index) => (
                  <div key={index} className='count-view' style={{ flex: '1 1 30%' }}>
                    <div className='count-view-content'>
                      <div className='count'>{item.title}</div>
                      <div>{item.sub_title}</div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className='cs-image-right-corner'>
          <img src={imgBannerCs} alt='Customer Satisfaction' className='img-banner-cs' onError={getDefaultImg} />
        </div>
        <div className='cs-all-animation productImage-why-us-2'></div>
        <div className='cs-all-animation productImage-testimonial'></div>
      </div>
    </>
  );
};

export default CustomerSatisfaction;
