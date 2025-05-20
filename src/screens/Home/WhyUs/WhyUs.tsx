import React, { useEffect } from 'react';
import highPeakPower from '../../../assets/images/high-peak-power.svg';
import './WhyUs.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { getDefaultImg, getSrcImgs } from '../../helper';

gsap.registerPlugin(ScrollTrigger);

const WhyUs: React.FC<any> = (props) => {

  return (
    <div className='why-us-main'>
      {props.banner4 && (
        <div className='title'>
          <span className='gradients-title whyus-title'>{props.banner4.head_line}</span>
          <span className='question whyus-title'>{props.banner4.tag_line}</span>
          <span className=' whyus-title'>{props.banner4.title}</span>
        </div>
      )}

      <div className='why-us-products'>
        {props.banner4_sub &&
          props.banner4_sub?.map((product: any) => {
            return (
              <div className='why-us-product'>
                <div className='img-title'>
                  <img src={getSrcImgs(product.banner_name)} onError={getDefaultImg}/>
                  <span>{product.title}</span>
                </div>
                <p className='desc'>{product.description}</p>
              </div>
            );
          })}
      </div>
      <div className='productImage-why-us productImage-why-us-2 why-us-animation'></div>
      <div className='why-us-animation-2'></div>
      <div className='why-us-animation-1'></div>
    </div>
  );
};

export default WhyUs;
