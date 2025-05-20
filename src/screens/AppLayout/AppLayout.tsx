// import { Layout } from "antd";
import AppRoutes from "./AppRoutes";
import AppHeader from "./Header/AppHeader";
import AppFooter from "./Footer/AppFooter";
import iconPhone from "../../assets/images/phone.png";
import iconFacebook from "../../assets/images/facebook.svg";
import iconTwitter from "../../assets/images/twitter.svg";
import iconIn from "../../assets/images/in.svg";
import iconInsta from "../../assets/images/insta.svg";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { RootState } from "../../shared/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal, Spinner } from "react-bootstrap";
import { GetEventDetails } from "../../shared/redux/eventReducer/event-thunk";
import { AppDispatch } from "shared/redux/store";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { getSrcImgs } from "../../screens/helper";
import './appLayout.scss'

// const { Content } = Layout;

export default function AppLayout() {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const { lstEventDetails, loadingEventBanner, lstEventPopupData } =
    useSelector((state: RootState) => state.eventSlice);

  useEffect(() => {
    dispatch(GetEventDetails());
  }, []);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { lstFooterDetails }: any = useSelector(
    (state: RootState) => state.globalSlice
  );
  const footerLink = lstFooterDetails?.at(0);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    console.log("lstEventPopupData", lstEventPopupData);
    if (lstEventPopupData.length > 0) {
      handleShow();
    }
  }, [lstEventPopupData]);

  const isMobile = width <= 788;

  const responsive: any = {
    desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const sampleArray = ['data', 'data'];
  const renderBody = () => {
    return (
      <main style={{ flex: "1" }}>
        <AppRoutes isMobile={isMobile} />
      </main>
    );
  };

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      {!isMobile && (
        <div
          className=" mx-auto w-100"
          style={{ height: "54px", zIndex: 1, background: "#0D66A2" }}
        >
          <div
            className="d-flex justify-content-between"
            style={{ marginInline: "8rem", padding: "15px" }}
          >
            <div className="d-flex" style={{ gap: "24px" }}>
              <p className="icon-address font-16-300">
                <img
                  src={iconPhone}
                  width={12}
                  style={{ marginLeft: "-15px" }}
                />{" "}
                {footerLink?.mobile_no} &nbsp;&nbsp;<span>|</span>&nbsp;
              </p>
              <p className="icon-address font-16-300">
                <img
                  src={iconPhone}
                  width={12}
                  style={{ marginLeft: "-15px" }}
                />{" "}
                {footerLink?.mobile_no_secondary}
              </p>
            </div>
            <div className="d-flex mb-3" style={{ gap: "20px" }}>
              <a target="_blank" href={footerLink?.facebook_link}>
                <img src={iconFacebook} width={20} />
              </a>
              <a target="_blank" href={footerLink?.twitter_link}>
                <img src={iconTwitter} width={25} />
              </a>
              <a target="_blank" href={footerLink?.linkdin_link}>
                <img src={iconIn} width={25} />
              </a>
              <a target="_blank" href={footerLink?.instagram_link}>
                <img src={iconInsta} width={25} />
              </a>
            </div>
          </div>
        </div>
      )}
      <AppHeader width={width} />
      <svg
        className="svg-dynamic"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          // height: "1101vh",
          // background: '#E3F4FE'
        }}
      />
      {renderBody()}
      <AppFooter />
      <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        Upcoming Events
      </Modal.Header>
        <Modal.Body>
          <div className="popup-events position-relative">
            {lstEventPopupData?.length > 0 && (
            <Carousel
              responsive={responsive}
              autoPlay={false}
              swipeable={true}
              draggable={true}
              showDots={true}
              infinite={true}
            >
              {
                lstEventPopupData?.map((items: any, index: any) => {
                  console.log('::items', items);
                  return (
                    <div className="images" key={index}>
                      <img src={getSrcImgs(items)} width={500} height={300} alt="" className="das" />
                    </div>
                  );
                })}
            </Carousel>
            )}
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
