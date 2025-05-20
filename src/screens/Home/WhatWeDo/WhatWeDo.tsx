import React, { useEffect, useRef } from "react";
import "./WhatWeDo.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { GetProductList } from "../../../shared/redux/productReducer/product-thunk";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "shared/redux/store";
import { getSrcImgs } from "../../helper";
import { useNavigate } from "react-router-dom";
import { PATH_PRODUCTS } from "../../../screens/AppLayout/RouteConstants";
import tringle from "../../../assets/images/triangle.png";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const WhatWeDo: React.FC = () => {
  const svgRef = useRef(null); // Ref for the SVG container
  const navigate = useNavigate();
  const { lstProductBanner, error } = useSelector(
    (state: RootState) => state.productSlice
  );

//   const drawLines = () => {
//     const svg = svgRef.current;
//     svg.innerHTML = ""; // Clear existing lines
//     const divs = document.querySelectorAll('.productImage');

//     // Loop through each pair of elements
//     for (let i = 0; i < divs.length - 1; i++) {
//       const b1 = divs[i]?.getBoundingClientRect();
//       const b2 = divs[i + 1]?.getBoundingClientRect();

//       // Create SVG line element
//       const newLine = document.createElementNS(
//         "http://www.w3.org/2000/svg",
//         "line"
//       );
//       newLine.setAttribute("x1", b1.left + b1.width / 2);
//       newLine.setAttribute("y1", b1.top + b1.height / 2);
//       newLine.setAttribute("x2", b2.left + b2.width / 2);
//       newLine.setAttribute("y2", b2.top + b2.height / 2);
//       newLine.setAttribute("style", "stroke: black; stroke-width: 2;");
//       svg?.appendChild(newLine); // Append line to the SVG container
//     }
//   };
  // const drawLines = () => {
  //   const svg = svgRef.current;
  //   svg.innerHTML = ""; // Clear existing lines
  //   const divs = document.querySelectorAll('.productImage');

  //   // Initialize the path string with the move command
  //   let pathString = "";

  //   // Loop through each pair of elements
  //   for (let i = 0; i < divs.length - 1; i++) {
  //     const b1 = divs[i].getBoundingClientRect();
  //     const b2 = divs[i + 1].getBoundingClientRect();

  //     const x1 = b1.left + b1.width / 2;
  //     const y1 = b1.top + b1.height / 2;
  //     const x2 = b2.left + b2.width / 2;
  //     const y2 = b2.top + b2.height / 2;

  //     if (i === 0) {
  //       // Start the path at the first point
  //       pathString = `M${x1},${y1}`;
  //     }

  //     // Add a line to the next point
  //     pathString += ` L${x2},${y2}`;
  //   }

  //   // Create the path element and set its d attribute
  //   const newPath = document.createElementNS(
  //     "http://www.w3.org/2000/svg",
  //     "path"
  //   );
  //   newPath.setAttribute("d", pathString);
  //   newPath.setAttribute("class", "theLine");
  //   newPath.setAttribute(
  //     "style",
  //     "stroke: transparent; stroke-width: 1; fill: transparent;"
  //   );

  //   // Append the path to the SVG container
  //   svg.appendChild(newPath);
  // };
  // useEffect(() => {
  //   drawLines(); // Draw initial lines
  //   window.addEventListener("resize", drawLines); // Redraw lines on resize
  // }, [lstProductBanner?.length]);


  // const gsapDynamicAnimation = () => {
  //   const floatingImage = document.querySelector("#triangleImg");
  //   const imageContainers = document.querySelectorAll(".commom_image_container");
  
  //   if (!floatingImage || imageContainers.length === 0) return;
  
    
  //   const main = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".test",
  //       scrub: true,
  //       markers: true,
  //     //   start: '50% 70%',
  //     // end: '180% 70%',
  //       start: "top -10%",
  //       end: "bottom 10%"
  //     }
  //   })
  //   .to("#ball", {autoAlpha:1, duration:0.05, scale: 1})
  //   .to("#ball", {motionPath:{
  //     path:".theLine",
  //     align:".theLine",
  //     alignOrigin:[0.5, 0.5],
  //     autoRotate: true,
  //   }, duration:4}, 0)
  // };

  // useEffect(() => {
  //   // if (svgRef.current) {
  //   setTimeout(() => {
  //       gsapDynamicAnimation()
  //       console.log('calll')
  //   }, 3000);
  //   // }
  // }, [svgRef.current, lstProductBanner?.length]);


  return (
    < div style={{
        position: "relative"
    }}>
      <div className="what-we-do-container">
        <div className="title-container container">
          <div className="title">
            <span className="gradients-title">What we do</span>
            <span className="question">Our Extensive Portfolio</span>
          </div>
        </div>
      </div>
      <div className="test">
      {lstProductBanner?.map((item: any, index) => (
        <div className={`commom_image_container image-container${index + 1} image-container`}>
          {(index + 1) % 2 !== 0 && (
            <div className="title-container containerOdd">
              <div className="title">
                <span className="machine-title">{item.product_name}</span>
                <span className="question">{item.prduct_subline}</span>
                <span className="description">{item.product_description}</span>
                <button
                  type="button"
                  className="btn_view_detail mt-2 btn btn-outline-light"
                  onClick={() =>
                    navigate(`${PATH_PRODUCTS}/${item?.product_slug}`)
                  }
                >
                  View Details <i className="bi bi-plus"></i>
                </button>
              </div>
            </div>
          )}
          <img
            id={`image${index + 1}`}
            src={getSrcImgs(item.product_image)}
            alt="Scrolling Image"
            className={
              (index + 1) % 2 === 0
                ? index === 0 ? "scroll-image imgEven productImage productImage-about-us" : index === lstProductBanner?.length - 1 ? "scroll-image imgEven productImage productImage-why-us" :"scroll-image imgEven productImage"
                :  index === 0 ? "scroll-image imgOdd productImage productImage-about-us" : index === lstProductBanner?.length - 1 ? "scroll-image imgOdd productImage productImage-why-us" :"scroll-image imgOdd productImage"
            }
            style={{ height: "100%" }}
          />
          {/* <img id={`sub_image${index+1}`}  src="/sub_image1.jpg" alt="Scrolling Image" className="sub-scroll-image" /> */}
          {(index + 1) % 2 === 0 && (
            <div className="title-container containerEven">
              <div className="title">
                <span className="machine-title">{item.product_name}</span>
                <span className="question">{item.prduct_subline}</span>
                <span className="description">{item.product_description}</span>
                <button
                  type="button"
                  className="btn_view_detail btn btn-outline-light"
                  onClick={() =>
                    navigate(`${PATH_PRODUCTS}/${item?.product_slug}`)
                  }
                >
                  View Details <i className="bi bi-plus"></i>
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
      </div>
      {/* <svg
        ref={svgRef}
        className="svg"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />
      <img style={{ position: "absolute", visibility: 'hidden' }} id="ball" src={tringle} /> */}
    </div>
  );
};

export default WhatWeDo;
