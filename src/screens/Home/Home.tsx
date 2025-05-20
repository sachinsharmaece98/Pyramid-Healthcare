import React, { useEffect } from 'react';
import './home.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Home: React.FC = () => {
    useEffect(() => {
        window.history.scrollRestoration = 'manual';

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        gsap.to('#triangleImg', {
            // rotation: 360,
            repeat: -1,
            duration: 50,
            ease: "linear",
        },)

        const t1 = gsap.timeline({
            scrollTrigger: {
                trigger: ".image-container2",
                start: "top 40%",
                end: "50% 40%",
                scrub: 1,
                // markers: true
            }
        });

        t1.to("#triangleImg", {
            x: "-250%",
            y: "160%",
            scale: 1,
            rotation: 110,
        }, 'rount11');

        const t2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".image-container3",
                start: "top 40%",
                end: "50% 40%",
                scrub: 1,
                // markers: true
            }
        });

        t2.to("#triangleImg", {
            x: "0%",
            y: "300%",
            scale: 1,
            rotation: 170,
        }, 'rount22');

        const t3 = gsap.timeline({
            scrollTrigger: {
                trigger: ".image-container4",
                start: "top 40%",
                end: "50% 40%",
                scrub: 1,
                // markers: true
            }
        });

        t3.to("#triangleImg", {
            x: "-260%",
            y: "430%",
            scale: 1,
            rotation: 250,
        }, 'rount33');

        const t4 = gsap.timeline({
            scrollTrigger: {
                trigger: ".image-container5",
                start: "top 40%",
                end: "50% 40%",
                scrub: 1,
                // markers: true
            }
        });

        t4.to("#triangleImg", {
            x: "0%",
            y: "550%",
            scale: 1,
            rotation: 320,
        }, 'rount44');

    }, []);

    return (
        <>
            <div className='home-container'>
                <div className="image-container1">
                       <img id='triangleImg' className='triangleImg' src="/triangle.png" alt="triangle" />
                    <img id='image1' src="/image1.png" alt="Scrolling Image" className="scroll-image" />
                    <img id='sub_image1' src="/sub_image1.jpg" alt="Scrolling Image" className="sub-scroll-image" />
                </div>
                <div className="image-container2">
                    <img id='image2' src="/image2.png" alt="Scrolling Image" className="scroll-image" />
                    <img id='sub_image2' src="/sub_image2.jpg" alt="Scrolling Image" className="sub-scroll-image" />
                </div>
                <div className="image-container3">
                    <img id='sub_image3' src="/sub_image3.jpg" alt="Scrolling Image" className="sub-scroll-image" />
                    <img id='image3' src="/image3.png" alt="Scrolling Image" className="scroll-image" />
                </div>
                <div className="image-container4">
                    <img id='image4' src="/image2.png" alt="Scrolling Image" className="scroll-image" />
                    <img id='sub_image2' src="/sub_image2.jpg" alt="Scrolling Image" className="sub-scroll-image" />
                </div>
                <div className="image-container5">
                    <img id='sub_image3' src="/sub_image3.jpg" alt="Scrolling Image" className="sub-scroll-image" />
                    <img id='image5' src="/image3.png" alt="Scrolling Image" className="scroll-image" />
                </div>
                <div className="image-container6">
                </div>
            </div>
        </>
    );
};

export default Home;
