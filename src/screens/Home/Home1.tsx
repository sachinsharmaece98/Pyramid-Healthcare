// @ts-nocheck
import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import SocialNetwork from "./SocialNetwork/SocialNetwork";
import Resourecs from "./Resourecs/Resourecs";
import WhyUs from "./WhyUs/WhyUs";
import Testimonials from "./Testimonials/Testimonials";
import DailyUpdate from "./DailyUpdate/DailyUpdate";
import Treatments from "./Treatments/Treatments";
import GNLS from "./GNLS/GNLS";
import CustomerSatisfaction from "./CustomerSatisfaction/CustomerSatisfaction";
import HomeHeader from "./HomeHeader/HomeHeader";
import AboutUs from "./AboutUS/AboutUs";
import WhatWeDo from "./WhatWeDo/WhatWeDo";
import ScrollTop from "../../Components/ScrollTop";
import {
  SCREEN_24,
  SCREEN_20,
  SCREEN_14,
  SCREEN_MOBILE_6_7,
  SCREEN_MOBILE_4_7,
  SCREEN_ARR,
  SCREEN_10,
  SCREEN_TAB,
} from "./HomeConstant";

import { GetHomeAllBanners } from "../../shared/redux/homeReducer/home-thunk";
import {
  GetBlogPageDetail,
  GetBlogHomePageDetail,
} from "../../shared/redux/BlogReducer/blog-thunk";
import { GetEventDetails } from "../../shared/redux/eventReducer/event-thunk";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../shared/redux/store";
import AppLoading from "../../Components/AppLoading/AppLoading";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
interface IHome1 {
  isMobile: any;
}

const Home1: React.FC<IHome1> = (props: IHome1) => {
  const {isMobile} = props;
  const dispatch = useDispatch<AppDispatch>();
  const { loadingSubmit, loadingHomeBanner, lstBanner } = useSelector(
    (state: RootState) => state.homeslice
  );
  const { blogHomeTitildata } = useSelector(
    (state: RootState) => state.blogSlice
  );
  const { lstEventDetails } = useSelector(
    (state: RootState) => state.eventSlice
  );
  const { lstProductBanner, error } = useSelector(
    (state: RootState) => state.productSlice
  );
  const [isWindowsLoaded, setIsWindowsLoaded] = useState(false);
  const svgRef = useRef(null); // Ref for the SVG container

  useEffect(() => {
    dispatch(GetHomeAllBanners());
    dispatch(GetBlogHomePageDetail());
    dispatch(GetEventDetails());
  }, [dispatch]);

  //#region -- dynamica animation ---
  const drawLines = () => {
    const svgs = document.querySelector(".svg-dynamic");
    const svg = svgs;
    svg.innerHTML = ""; // Clear existing lines
    const divs = document.querySelectorAll(".productImage");
    // svg.style.height = '100vh';

    // Initialize the path string with the move command
    let pathString = "";

    // Loop through each pair of elements
    for (let i = 0; i < divs.length - 1; i++) {
      const b1 = divs[i].getBoundingClientRect();
      const b2 = divs[i + 1].getBoundingClientRect();

      const x1 = b1.left + b1.width / 2;
      const y1 = b1.top + b1.height / 2;
      const x2 = b2.left + b2.width / 2;
      const y2 = b2.top + b2.height / 2;

      if (i === 0) {
        // Start the path at the first point
        pathString = `M${x1},${y1}`;
      }

      // Add a line to the next point
      pathString += ` L${x2},${y2}`;
    }

    // Create the path element and set its d attribute
    const newPath = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    newPath.setAttribute("d", pathString);
    newPath.setAttribute("class", "theLine");
    newPath.setAttribute(
      "style",
      "stroke: black; stroke-width: 1; fill: transparent;"
    );

    // Append the path to the SVG container
    svg.appendChild(newPath);
  };
  const drawLines1 = () => {
    const svgs = document.querySelector(".svg-dynamic");
    const svg = svgs;
    // svg.innerHTML = ""; // Clear existing lines
    const divs = document.querySelectorAll(".productImage-about-us");
    // svg.style.height = '100vh';

    // Initialize the path string with the move command
    let pathString = "";

    // Loop through each pair of elements
    for (let i = 0; i < divs.length - 1; i++) {
      const b1 = divs[i].getBoundingClientRect();
      const b2 = divs[i + 1].getBoundingClientRect();

      const x1 = b1.left + b1.width / 2;
      const y1 = b1.top + b1.height / 2;
      const x2 = b2.left + b2.width / 2;
      const y2 = b2.top + b2.height / 2;

      if (i === 0) {
        // Start the path at the first point
        pathString = `M${x1},${y1}`;
      }

      // Add a line to the next point
      pathString += ` L${x2},${y2}`;
    }

    // Create the path element and set its d attribute
    const newPath = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    newPath.setAttribute("d", pathString);
    newPath.setAttribute("class", "theLine1");
    newPath.setAttribute(
      "style",
      "stroke: blue; stroke-width: 1; fill: transparent;"
    );

    // Append the path to the SVG container
    svg.appendChild(newPath);
  };
  const drawLines2 = () => {
    const svgs = document.querySelector(".svg-dynamic");
    const svg = svgs;
    // svg.innerHTML = ""; // Clear existing lines
    const divs = document.querySelectorAll(".productImage-why-us");
    // svg.style.height = '100vh';

    // Initialize the path string with the move command
    let pathString = "";

    // Loop through each pair of elements
    for (let i = 0; i < divs.length - 1; i++) {
      const b1 = divs[i].getBoundingClientRect();
      const b2 = divs[i + 1].getBoundingClientRect();

      const x1 = b1.left + b1.width / 2;
      const y1 = b1.top + b1.height / 2;
      const x2 = b2.left + b2.width / 2;
      const y2 = b2.top + b2.height / 2;

      if (i === 0) {
        // Start the path at the first point
        pathString = `M${x1},${y1}`;
      }

      // Add a line to the next point
      pathString += ` L${x2},${y2}`;
    }

    // Create the path element and set its d attribute
    const newPath = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    newPath.setAttribute("d", pathString);
    newPath.setAttribute("class", "theLine2");
    newPath.setAttribute(
      "style",
      "stroke: red; stroke-width: 1; fill: transparent;"
    );

    // Append the path to the SVG container
    svg.appendChild(newPath);
  };
  // const drawLines3 = () => {
  //   const svgs = document.querySelector(".svg-dynamic");
  //   const svg = svgs;
  //   // svg.innerHTML = ""; // Clear existing lines
  //   const divs = document.querySelectorAll(".productImage-customer-statisfaction");
  //   // svg.style.height = '100vh';

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
  //   newPath.setAttribute("class", "theLine3");
  //   newPath.setAttribute(
  //     "style",
  //     "stroke: yellow; stroke-width: 1; fill: transparent;"
  //   );

  //   // Append the path to the SVG container
  //   svg.appendChild(newPath);
  // };
  const drawLines4 = () => {
    const svgs = document.querySelector(".svg-dynamic");
    const svg = svgs;
    // svg.innerHTML = ""; // Clear existing lines
    const divs = document.querySelectorAll(".productImage-testimonial");
    // svg.style.height = '100vh';

    // Initialize the path string with the move command
    let pathString = "";

    // Loop through each pair of elements
    for (let i = 0; i < divs.length - 1; i++) {
      const b1 = divs[i].getBoundingClientRect();
      const b2 = divs[i + 1].getBoundingClientRect();

      const x1 = b1.left + b1.width / 2;
      const y1 = b1.top + b1.height / 2;
      const x2 = b2.left + b2.width / 2;
      const y2 = b2.top + b2.height / 2;

      if (i === 0) {
        // Start the path at the first point
        pathString = `M${x1},${y1}`;
      }

      // Add a line to the next point
      pathString += ` L${x2},${y2}`;
    }

    // Create the path element and set its d attribute
    const newPath = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    newPath.setAttribute("d", pathString);
    newPath.setAttribute("class", "theLine4");
    newPath.setAttribute(
      "style",
      "stroke: green; stroke-width: 1; fill: transparent;"
    );

    // Append the path to the SVG container
    svg.appendChild(newPath);
  };
  const drawLines5 = () => {
    const svgs = document.querySelector(".svg-dynamic");
    const svg = svgs;
    // svg.innerHTML = ""; // Clear existing lines
    const divs = document.querySelectorAll(".productImage-treatment");
    // svg.style.height = '100vh';

    // Initialize the path string with the move command
    let pathString = "";

    // Loop through each pair of elements
    for (let i = 0; i < divs.length - 1; i++) {
      const b1 = divs[i].getBoundingClientRect();
      const b2 = divs[i + 1].getBoundingClientRect();

      const x1 = b1.left + b1.width / 2;
      const y1 = b1.top + b1.height / 2;
      const x2 = b2.left + b2.width / 2;
      const y2 = b2.top + b2.height / 2;

      if (i === 0) {
        // Start the path at the first point
        pathString = `M${x1},${y1}`;
      }

      // Add a line to the next point
      pathString += ` L${x2},${y2}`;
    }

    // Create the path element and set its d attribute
    const newPath = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    newPath.setAttribute("d", pathString);
    newPath.setAttribute("class", "theLine5");
    newPath.setAttribute(
      "style",
      "stroke: cyan; stroke-width: 1; fill: transparent;"
    );

    // Append the path to the SVG container
    svg.appendChild(newPath);
  };
  const drawLines6 = () => {
    const svgs = document.querySelector(".svg-dynamic");
    const svg = svgs;
    // svg.innerHTML = ""; // Clear existing lines
    const divs = document.querySelectorAll(".productImage-daily-update");
    // svg.style.height = '100vh';

    // Initialize the path string with the move command
    let pathString = "";

    // Loop through each pair of elements
    for (let i = 0; i < divs.length - 1; i++) {
      const b1 = divs[i].getBoundingClientRect();
      const b2 = divs[i + 1].getBoundingClientRect();

      const x1 = b1.left + b1.width / 2;
      const y1 = b1.top + b1.height / 2;
      const x2 = b2.left + b2.width / 2;
      const y2 = b2.top + b2.height / 2;

      if (i === 0) {
        // Start the path at the first point
        pathString = `M${x1},${y1}`;
      }

      // Add a line to the next point
      pathString += ` L${x2},${y2}`;
    }

    // Create the path element and set its d attribute
    const newPath = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    newPath.setAttribute("d", pathString);
    newPath.setAttribute("class", "theLine6");
    newPath.setAttribute(
      "style",
      "stroke: cyan; stroke-width: 1; fill: transparent;"
    );

    // Append the path to the SVG container
    svg.appendChild(newPath);
  };
  const drawLines7 = () => {
    const svgs = document.querySelector(".svg-dynamic");
    const svg = svgs;
    // svg.innerHTML = ""; // Clear existing lines
    const divs = document.querySelectorAll(".productImage-social");
    // svg.style.height = '100vh';

    // Initialize the path string with the move command
    let pathString = "";

    // Loop through each pair of elements
    for (let i = 0; i < divs.length - 1; i++) {
      const b1 = divs[i].getBoundingClientRect();
      const b2 = divs[i + 1].getBoundingClientRect();

      const x1 = b1.left + b1.width / 2;
      const y1 = b1.top + b1.height / 2;
      const x2 = b2.left + b2.width / 2;
      const y2 = b2.top + b2.height / 2;

      if (i === 0) {
        // Start the path at the first point
        pathString = `M${x1},${y1}`;
      }

      // Add a line to the next point
      pathString += ` L${x2},${y2}`;
    }

    // Create the path element and set its d attribute
    const newPath = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    newPath.setAttribute("d", pathString);
    newPath.setAttribute("class", "theLine7");
    newPath.setAttribute(
      "style",
      "stroke: cyan; stroke-width: 1; fill: transparent;"
    );

    // Append the path to the SVG container
    svg.appendChild(newPath);
  };
  const drawLines8 = () => {
    const svgs = document.querySelector(".svg-dynamic");
    const svg = svgs;
    // svg.innerHTML = ""; // Clear existing lines
    const divs = document.querySelectorAll(".productImage-articles");
    // svg.style.height = '100vh';

    // Initialize the path string with the move command
    let pathString = "";

    // Loop through each pair of elements
    for (let i = 0; i < divs.length - 1; i++) {
      const b1 = divs[i].getBoundingClientRect();
      const b2 = divs[i + 1].getBoundingClientRect();

      const x1 = b1.left + b1.width / 2;
      const y1 = b1.top + b1.height / 2;
      const x2 = b2.left + b2.width / 2;
      const y2 = b2.top + b2.height / 2;

      if (i === 0) {
        // Start the path at the first point
        pathString = `M${x1},${y1}`;
      }

      // Add a line to the next point
      pathString += ` L${x2},${y2}`;
    }

    // Create the path element and set its d attribute
    const newPath = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    newPath.setAttribute("d", pathString);
    newPath.setAttribute("class", "theLine8");
    newPath.setAttribute(
      "style",
      "stroke: cyan; stroke-width: 1; fill: transparent;"
    );

    // Append the path to the SVG container
    svg?.appendChild(newPath);
  };
  const drawLines9 = () => {
    const svgs = document.querySelector(".svg-dynamic");
    const svg = svgs;
    // svg.innerHTML = ""; // Clear existing lines
    const divs = document.querySelectorAll(".productImage-global");
    // svg.style.height = '100vh';

    // Initialize the path string with the move command
    let pathString = "";

    // Loop through each pair of elements
    for (let i = 0; i < divs.length - 1; i++) {
      const b1 = divs[i].getBoundingClientRect();
      const b2 = divs[i + 1].getBoundingClientRect();

      const x1 = b1.left + b1.width / 2;
      const y1 = b1.top + b1.height / 2;
      const x2 = b2.left + b2.width / 2;
      const y2 = b2.top + b2.height / 2;

      if (i === 0) {
        // Start the path at the first point
        pathString = `M${x1},${y1}`;
      }

      // Add a line to the next point
      pathString += ` L${x2},${y2}`;
    }

    // Create the path element and set its d attribute
    const newPath = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    newPath.setAttribute("d", pathString);
    newPath.setAttribute("class", "theLine9");
    newPath.setAttribute(
      "style",
      "stroke: cyan; stroke-width: 1; fill: transparent;"
    );

    // Append the path to the SVG container
    svg.appendChild(newPath);
  };
  const drawLines10 = () => {
    const svgs = document.querySelector(".svg-dynamic");
    const svg = svgs;
    // svg.innerHTML = ""; // Clear existing lines
    const divs = document.querySelectorAll(".productImage-why-us-2");
    // svg.style.height = '100vh';

    // Initialize the path string with the move command
    let pathString = "";

    // Loop through each pair of elements
    for (let i = 0; i < divs.length - 1; i++) {
      const b1 = divs[i].getBoundingClientRect();
      const b2 = divs[i + 1].getBoundingClientRect();

      const x1 = b1.left + b1.width / 2;
      const y1 = b1.top + b1.height / 2;
      const x2 = b2.left + b2.width / 2;
      const y2 = b2.top + b2.height / 2;

      if (i === 0) {
        // Start the path at the first point
        pathString = `M${x1},${y1}`;
      }

      // Add a line to the next point
      pathString += ` L${x2},${y2}`;
    }

    // Create the path element and set its d attribute
    const newPath = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    newPath.setAttribute("d", pathString);
    newPath.setAttribute("class", "theLine10");
    newPath.setAttribute(
      "style",
      "stroke: purple; stroke-width: 1; fill: transparent;"
    );

    // Append the path to the SVG container
    svg.appendChild(newPath);
  };
  useEffect(() => {
    setTimeout(() => {
      drawLines(); // Draw initial lines
      drawLines1(); // Draw initial lines
      drawLines2(); // Draw initial lines
      // drawLines3(); // Draw initial lines
      drawLines4(); // Draw initial lines
      drawLines5(); // Draw initial lines
      drawLines6(); // Draw initial lines
      drawLines7(); // Draw initial lines
      drawLines8(); // Draw initial lines
      drawLines9(); // Draw initial lines
      drawLines10(); // Draw initial lines
      window.addEventListener("resize", drawLines); // Redraw lines on resize
      window.addEventListener("resize", drawLines1); // Redraw lines on resize
      window.addEventListener("resize", drawLines2); // Redraw lines on resize
      // window.addEventListener("resize", drawLines3); // Redraw lines on resize
      window.addEventListener("resize", drawLines4); // Redraw lines on resize
      window.addEventListener("resize", drawLines5); // Redraw lines on resize
      window.addEventListener("resize", drawLines6); // Redraw lines on resize
      window.addEventListener("resize", drawLines7); // Redraw lines on resize
      window.addEventListener("resize", drawLines8); // Redraw lines on resize
      window.addEventListener("resize", drawLines9); // Redraw lines on resize
      window.addEventListener("resize", drawLines10); // Redraw lines on resize
    }, 2000);
  }, [lstBanner, loadingSubmit]);
  useEffect(() => {
    const intervals = setInterval(() => {
      setIsWindowsLoaded(document.readyState !== "complete");
      document.readyState === "complete"
        ? console.log("Loading complete")
        : console.log("Loading");
    }, 2000);
    if (isWindowsLoaded) {
      clearInterval(intervals);
    }
  }, [lstBanner, loadingSubmit]);

  const gsapDynamicAnimation = () => {
    ScrollTrigger.matchMedia({
      "(max-width: 800px)": function () {
        //#region -- timeline for desktop
        const main = gsap
          .timeline({
            scrollTrigger: {
              trigger: ".test",
              scrub: 1.5,
              // markers: true,
              //   start: '50% 70%',
              // end: '180% 70%',
              start: "top 20%",
              end: "bottom center",
            },
          })
          .to("#triangleImg", { autoAlpha: 1, duration: 0.05, scale: 1 })
          .to(
            "#triangleImg",
            {
              motionPath: {
                path: ".theLine",
                align: ".theLine",
                alignOrigin: [0.5, 0.5],
                autoRotate: true,
              },
              duration: 400,
              ease: "power1.out",
              rotation: "+=45",
            },
            0
          );
        // .to("#triangleImg", { autoAlpha: 0, duration: 0.05, scale: 1 });

        const mainAbout = gsap
          .timeline({
            scrollTrigger: {
              trigger: ".about-us-contents",
              scrub: 1.5,
              // markers: true,
              //   start: '50% 70%',
              // end: '180% 70%',
              start: "top 20%",
              end: "bottom center",
            },
          })
          .to("#triangleImg", { autoAlpha: 1, duration: 0.05, scale: 1 })
          .to(
            "#triangleImg",
            {
              motionPath: {
                path: ".theLine1",
                align: ".theLine1",
                alignOrigin: [0.5, 0.5],
              },
              duration: 400,
              ease: "power1.out",
              rotation: "+=45",
            },
            0
          );

        const mainWhyUS = gsap
          .timeline({
            scrollTrigger: {
              trigger: ".why-us-animation-1",
              scrub: 1.5,
              // markers: true,
              //   start: '50% 70%',
              // end: '180% 70%',
              start: "top 70%",
              end: "bottom center",
            },
          })
          .to("#triangleImg", { autoAlpha: 1, duration: 0.05, scale: 1 })
          .to(
            "#triangleImg",
            {
              motionPath: {
                path: ".theLine2",
                align: ".theLine2",
                alignOrigin: [0.5, 0.5],
                autoRotate: true,
              },
              duration: 400,
              ease: "power1.out",
              rotation: "+=45",
            },
            0
          );

        // const mainWhyCS = gsap
        // .timeline({
        //   scrollTrigger: {
        //     trigger: ".cs-all-main",
        //     scrub: 1.5,
        //     markers: true,
        //     //   start: '50% 70%',
        //     // end: '180% 70%',
        //     start: "top center",
        //     end: "bottom center",
        //   },
        // })
        // .to("#triangleImg", { autoAlpha: 1, duration: 0.05, scale: 1 })
        // .to(
        //   "#triangleImg",
        //   {
        //     motionPath: {
        //       path: ".theLine3",
        //       align: ".theLine3",
        //       alignOrigin: [0.5, 0.5],
        //       autoRotate: true,
        //     },
        //     duration: 400,
        //     ease: "power1.out",
        //     rotation: "+=45",

        //   },
        //   0
        // );

        const mainWhyTestMonials = gsap
          .timeline({
            scrollTrigger: {
              trigger: ".cs-test-animation",
              scrub: 1.5,
              // markers: true,
              //   start: '50% 70%',
              // end: '180% 70%',
              start: "top 60%",
              end: "bottom 90%",
            },
          })
          .to("#triangleImg", { autoAlpha: 1, duration: 0.05, scale: 1 })
          .to(
            "#triangleImg",
            {
              motionPath: {
                path: ".theLine4",
                align: ".theLine4",
                alignOrigin: [0.5, 0.5],
                autoRotate: true,
              },
              duration: 400,
              ease: "power1.out",
            },
            0
          );

        const mainWhyTreatments = gsap
          .timeline({
            scrollTrigger: {
              trigger: ".treatments-main",
              scrub: 1.5,
              // markers: true,
              //   start: '50% 70%',
              // end: '180% 70%',
              start: "top 60%",
              end: "bottom 90%",
            },
          })
          .to("#triangleImg", { autoAlpha: 1, duration: 0.05, scale: 1 })
          .to(
            "#triangleImg",
            {
              motionPath: {
                path: ".theLine5",
                align: ".theLine5",
                alignOrigin: [0.5, 0.5],
                autoRotate: true,
              },
              duration: 400,
              ease: "power1.out",
            },
            0
          );

        const mainWhyDailyUpdate = gsap
          .timeline({
            scrollTrigger: {
              trigger: ".daily-updates",
              scrub: 1.5,
              // markers: true,
              //   start: '50% 70%',
              // end: '180% 70%',
              start: "top 60%",
              end: "bottom 90%",
            },
          })
          .to("#triangleImg", { autoAlpha: 1, duration: 0.05, scale: 1 })
          .to(
            "#triangleImg",
            {
              motionPath: {
                path: ".theLine6",
                align: ".theLine6",
                alignOrigin: [0.5, 0.5],
                autoRotate: true,
              },
              duration: 400,
              ease: "power1.out",
            },
            0
          );
        const mainWhySocial = gsap
          .timeline({
            scrollTrigger: {
              trigger: ".social-network-main",
              scrub: 1.5,
              // markers: true,
              //   start: '50% 70%',
              // end: '180% 70%',
              start: "top 60%",
              end: "bottom 90%",
            },
          })
          .to("#triangleImg", { autoAlpha: 1, duration: 0.05, scale: 1 })
          .to(
            "#triangleImg",
            {
              motionPath: {
                path: ".theLine7",
                align: ".theLine7",
                alignOrigin: [0.5, 0.5],
                autoRotate: true,
              },
              duration: 400,
              ease: "power1.out",
            },
            0
          );
        const mainWhyArticle = gsap
          .timeline({
            scrollTrigger: {
              trigger: ".resourecs-main",
              scrub: 1.5,
              // markers: true,
              //   start: '50% 70%',
              // end: '180% 70%',
              start: "top 40%",
              end: "bottom 70%",
            },
          })
          .to("#triangleImg", { autoAlpha: 1, duration: 0.05, scale: 1 })
          .to(
            "#triangleImg",
            {
              motionPath: {
                path: ".theLine8",
                align: ".theLine8",
                alignOrigin: [0.5, 0.5],
                autoRotate: true,
              },
              duration: 400,
              ease: "power1.out",
            },
            0
          );

        const mainWhyGloabal = gsap
          .timeline({
            scrollTrigger: {
              trigger: ".gnls-main",
              scrub: 1.5,
              // markers: true,
              //   start: '50% 70%',
              // end: '180% 70%',
              start: "top 60%",
              end: "bottom center",
            },
          })
          .to("#triangleImg", { autoAlpha: 1, duration: 0.05, scale: 1 })
          .to(
            "#triangleImg",
            {
              motionPath: {
                path: ".theLine9",
                align: ".theLine9",
                alignOrigin: [0.5, 0.5],
                autoRotate: true,
              },
              duration: 400,
              ease: "power1.out",
            },
            0
          );

        const mainWhyUS2 = gsap
          .timeline({
            scrollTrigger: {
              trigger: ".why-us-animation-2",
              scrub: 1.5,
              // markers: true,
              //   start: '50% 70%',
              // end: '180% 70%',
              start: "top 40%",
              end: "bottom 70%",
            },
          })
          .to("#triangleImg", { autoAlpha: 1, duration: 0.05, scale: 1 })
          .to(
            "#triangleImg",
            {
              motionPath: {
                path: ".theLine10",
                align: ".theLine10",
                alignOrigin: [0.5, 0.5],
                autoRotate: true,
              },
              duration: 400,
              ease: "power1.out",
              rotation: "+=45",
            },
            0
          );
        //#endregion -- end timeline for desktop
        // .to("#triangleImg", {autoAlpha:0, duration:0.05, scale: 1})
      },
      "(min-width: 799px)": function () {
        //#region -- timeline for mobile
        const main = gsap
          .timeline({
            scrollTrigger: {
              trigger: ".test",
              scrub: 1.5,
              // markers: true,
              //   start: '50% 70%',
              // end: '180% 70%',
              start: "top 10%",
              end: "bottom center",
            },
          })
          .to("#triangleImg", { autoAlpha: 1, duration: 0.05, scale: 1 })
          .to(
            "#triangleImg",
            {
              motionPath: {
                path: ".theLine",
                align: ".theLine",
                alignOrigin: [0.5, 0.5],
                autoRotate: true,
              },
              duration: 400,
              ease: "power1.out",
              rotation: "+=45",
            },
            0
          );
        // .to("#triangleImg", { autoAlpha: 0, duration: 0.05, scale: 1 });

        const mainAbout = gsap
          .timeline({
            scrollTrigger: {
              trigger: ".about-us-contents",
              scrub: 1.5,
              // markers: true,
              //   start: '50% 70%',
              // end: '180% 70%',
              start: "top 20%",
              end: "bottom center",
            },
          })
          .to("#triangleImg", { autoAlpha: 1, duration: 0.05, scale: 1 })
          .to(
            "#triangleImg",
            {
              motionPath: {
                path: ".theLine1",
                align: ".theLine1",
                alignOrigin: [0.5, 0.5],
              },
              duration: 400,
              ease: "power1.out",
              rotation: "+=45",
            },
            0
          );

        const mainWhyUS = gsap
          .timeline({
            scrollTrigger: {
              trigger: ".why-us-animation-1",
              scrub: 1.5,
              // markers: true,
              //   start: '50% 70%',
              // end: '180% 70%',
              start: "top center",
              end: "bottom center",
            },
          })
          .to("#triangleImg", { autoAlpha: 1, duration: 0.05, scale: 1 })
          .to(
            "#triangleImg",
            {
              motionPath: {
                path: ".theLine2",
                align: ".theLine2",
                alignOrigin: [0.5, 0.5],
                autoRotate: true,
              },
              duration: 400,
              ease: "power1.out",
              rotation: "+=45",
            },
            0
          );

        // const mainWhyCS = gsap
        // .timeline({
        //   scrollTrigger: {
        //     trigger: ".cs-all-main",
        //     scrub: 1.5,
        //     markers: true,
        //     //   start: '50% 70%',
        //     // end: '180% 70%',
        //     start: "top center",
        //     end: "bottom center",
        //   },
        // })
        // .to("#triangleImg", { autoAlpha: 1, duration: 0.05, scale: 1 })
        // .to(
        //   "#triangleImg",
        //   {
        //     motionPath: {
        //       path: ".theLine3",
        //       align: ".theLine3",
        //       alignOrigin: [0.5, 0.5],
        //       autoRotate: true,
        //     },
        //     duration: 400,
        //     ease: "power1.out",
        //     rotation: "+=45",

        //   },
        //   0
        // );

        const mainWhyTestMonials = gsap
          .timeline({
            scrollTrigger: {
              trigger: ".cs-test-animation",
              scrub: 1.5,
              // markers: true,
              //   start: '50% 70%',
              // end: '180% 70%',
              start: "top center",
              end: "bottom 70%",
            },
          })
          .to("#triangleImg", { autoAlpha: 1, duration: 0.05, scale: 1 })
          .to(
            "#triangleImg",
            {
              motionPath: {
                path: ".theLine4",
                align: ".theLine4",
                alignOrigin: [0.5, 0.5],
                autoRotate: true,
              },
              duration: 400,
              ease: "power1.out",
            },
            0
          );

        const mainWhyTreatments = gsap
          .timeline({
            scrollTrigger: {
              trigger: ".treatments-main",
              scrub: 1.5,
              // markers: true,
              //   start: '50% 70%',
              // end: '180% 70%',
              start: "top center",
              end: "bottom center",
            },
          })
          .to("#triangleImg", { autoAlpha: 1, duration: 0.05, scale: 1 })
          .to(
            "#triangleImg",
            {
              motionPath: {
                path: ".theLine5",
                align: ".theLine5",
                alignOrigin: [0.5, 0.5],
                autoRotate: true,
              },
              duration: 400,
              ease: "power1.out",
            },
            0
          );

        const mainWhyDailyUpdate = gsap
          .timeline({
            scrollTrigger: {
              trigger: ".daily-updates",
              scrub: 1.5,
              // markers: true,
              //   start: '50% 70%',
              // end: '180% 70%',
              start: "top 20%",
              end: "bottom center",
            },
          })
          .to("#triangleImg", { autoAlpha: 1, duration: 0.05, scale: 1 })
          .to(
            "#triangleImg",
            {
              motionPath: {
                path: ".theLine6",
                align: ".theLine6",
                alignOrigin: [0.5, 0.5],
                autoRotate: true,
              },
              duration: 400,
              ease: "power1.out",
            },
            0
          );
        const mainWhySocial = gsap
          .timeline({
            scrollTrigger: {
              trigger: ".social-network-main",
              scrub: 1.5,
              // markers: true,
              //   start: '50% 70%',
              // end: '180% 70%',
              start: "top 60%",
              end: "bottom center",
            },
          })
          .to("#triangleImg", { autoAlpha: 1, duration: 0.05, scale: 1 })
          .to(
            "#triangleImg",
            {
              motionPath: {
                path: ".theLine7",
                align: ".theLine7",
                alignOrigin: [0.5, 0.5],
                autoRotate: true,
              },
              duration: 400,
              ease: "power1.out",
            },
            0
          );
        const mainWhyArticle = gsap
          .timeline({
            scrollTrigger: {
              trigger: ".resourecs-main",
              scrub: 1.5,
              // markers: true,
              //   start: '50% 70%',
              // end: '180% 70%',
              start: "top 60%",
              end: "bottom center",
            },
          })
          .to("#triangleImg", { autoAlpha: 1, duration: 0.05, scale: 1 })
          .to(
            "#triangleImg",
            {
              motionPath: {
                path: ".theLine8",
                align: ".theLine8",
                alignOrigin: [0.5, 0.5],
                autoRotate: true,
              },
              duration: 400,
              ease: "power1.out",
            },
            0
          );

        const mainWhyGloabal = gsap
          .timeline({
            scrollTrigger: {
              trigger: ".gnls-main",
              scrub: 1.5,
              // markers: true,
              //   start: '50% 70%',
              // end: '180% 70%',
              start: "top 60%",
              end: "bottom center",
            },
          })
          .to("#triangleImg", { autoAlpha: 1, duration: 0.05, scale: 1 })
          .to(
            "#triangleImg",
            {
              motionPath: {
                path: ".theLine9",
                align: ".theLine9",
                alignOrigin: [0.5, 0.5],
                autoRotate: true,
              },
              duration: 400,
              ease: "power1.out",
            },
            0
          );

        const mainWhyUS2 = gsap
          .timeline({
            scrollTrigger: {
              trigger: ".why-us-animation-2",
              scrub: 1.5,
              // markers: true,
              //   start: '50% 70%',
              // end: '180% 70%',
              start: "top 20%",
              end: "bottom center",
            },
          })
          .to("#triangleImg", { autoAlpha: 1, duration: 0.05, scale: 1 })
          .to(
            "#triangleImg",
            {
              motionPath: {
                path: ".theLine10",
                align: ".theLine10",
                alignOrigin: [0.5, 0.5],
                autoRotate: true,
              },
              duration: 400,
              ease: "power1.out",
              rotation: "+=45",
            },
            0
          );
        //#endregion -- end timeline for desktop
        // .to("#triangleImg", {autoAlpha:0, duration:0.05, scale: 1})
      },
    });
  };

  useEffect(() => {
    setTimeout(() => {
      gsapDynamicAnimation();
    }, 3000);
  }, [lstBanner, loadingSubmit]);

  //#endregion -- dynamica animation --- over ---
  window.history.scrollRestoration = "manual";
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  // useEffect(() => {
  //   setTimeout(() => {
  //     console.log(detectDeviceType());
  //   }, 2000);
  // }, [lstBanner, loadingSubmit]);

  return (
    <div>
      <div>
        {/* {detectDeviceType()} */}
        {lstBanner?.Banner_1 && <HomeHeader banner1={lstBanner.Banner_1} />}
        <div className="startpoint">
          {lstBanner?.Banner_2 && lstBanner?.Banner_2_sub_section && (
            <AboutUs
              banner2={lstBanner?.Banner_2?.at(0)}
              banner2_sub={lstBanner?.Banner_2_sub_section}
            />
          )}
          <WhatWeDo />
          {lstBanner?.Banner_4 && lstBanner?.Banner_4_sub_section && (
            <WhyUs
              banner4={lstBanner?.Banner_4?.at(0)}
              banner4_sub={lstBanner?.Banner_4_sub_section}
              productLength={lstProductBanner}
            />
          )}
          <div className="cs-test-animation">
            {lstBanner?.Banner_5 && lstBanner?.Banner_5_sub_section && (
              <CustomerSatisfaction
                banner5={lstBanner?.Banner_5?.at(0)}
                banner5_sub={lstBanner?.Banner_5_sub_section}
                productLength={lstProductBanner}
              />
            )}
            {lstBanner?.Banner_6 && lstBanner?.Banner_6_sub_section && (
              <Testimonials
                banner6={lstBanner?.Banner_6?.at(0)}
                banner6_sub={lstBanner?.Banner_6_sub_section}
                productLength={lstProductBanner}
              />
            )}
          </div>
          {lstBanner?.Banner_7 && lstBanner?.Banner_7_sub_section && (
            <Treatments
              banner7={lstBanner?.Banner_7?.at(0)}
              banner7_sub={lstBanner?.Banner_7_sub_section}
              productLength={lstProductBanner}
            />
          )}
          <DailyUpdate
            eventData={lstEventDetails?.events_details}
            productLength={lstProductBanner}
          />
          <SocialNetwork
            banner9={lstBanner?.Banner_9?.at(0)}
            Banner_9_sub_section={lstBanner?.Banner_9_sub_section}
            productLength={lstProductBanner}
          />
          <Resourecs
            isMobile={isMobile}
            blogData={blogHomeTitildata}
            banner10={lstBanner?.Banner_10?.at(0)}
            productLength={lstProductBanner}
          />
          <GNLS productLength={lstProductBanner} />
        </div>
        <ScrollTop />
      </div>
      {(loadingHomeBanner || isWindowsLoaded) && (
        <AppLoading isShow={loadingHomeBanner} />
      )}
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
      /> */}
    </div>
  );
};

export default Home1;
