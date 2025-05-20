import React, { useEffect, useState } from "react";
import downloadIcon from "../../assets/images/download-svg.svg";
import iconSP from "../../assets/images/high-peak-power.svg";
import iconPdf from "../../assets/images/pdf-icon.png";
import { GetTrainingPageData } from "../../shared/redux/trainingReducer/training-thunk";
import "./TrainingsDetails.scss";
import Carousel from "react-multi-carousel";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { AppDispatch, RootState } from "shared/redux/store";
import { getSrcImgs } from "../../screens/helper";
import TrainingsHeader from "./TrainingsHeader";
import AppLoading from "../../Components/AppLoading/AppLoading";
import { PATH_TRAININGS } from "../../screens/AppLayout/RouteConstants";
import ScrollToTop from "../../Components/ScrollTop";

interface ITrainingsDetails {
  isMobile: any;
}

const TrainingsDetails: React.FC<ITrainingsDetails> = (
  props: ITrainingsDetails
) => {
  const { isMobile } = props;
  const [currentFAQ, setCurrentFAQ] = useState();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { trainingPageDetailsData, loadingTrainingBanner }: any = useSelector(
    (state: RootState) => state.trainingSlice
  );
  const trainingPageIntro = trainingPageDetailsData?.training_page_intro?.at(0);
  const trainingID = useParams();

  useEffect(() => {
    console.log("trainingID", trainingID);
    if (trainingID?.trainingID) {
      // @ts-ignore
      dispatch(GetTrainingPageData(trainingID?.trainingID));
    }
  }, [trainingID]);

  const responsive: any = {
    desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const renderImportantNotes = () => {
    const importantNotesData =
      trainingPageDetailsData?.training_page_important_note;
    return (
      <div className="td-imp-nots">
        <div className="td-imp-nots-title">
          <img src={iconSP} height={40} width={50} />
          <span>Important Notes:</span>
        </div>
        {importantNotesData?.map((item: any) => {
          return <span>{item?.notes}</span>;
        })}
      </div>
    );
  };

  const renderFAQ = () => {
    const trainingFAQData = trainingPageDetailsData?.training_page_faq;
    return (
      <div className="td-faq">
        <span className="td-faq-title">Frquently Asked Questions (FAQs)</span>
        {trainingFAQData?.map((faq: any, index: any) => {
          return (
            <div className="td-faq-item">
              <div
                className="faq-que"
                onClick={() => {
                  if (currentFAQ == index) {
                    setCurrentFAQ(undefined);
                  } else {
                    setCurrentFAQ(index);
                  }
                }}
              >
                {faq?.questions}
                <span>+</span>
              </div>
              <span
                className="faq-ans"
                style={{ display: currentFAQ == index ? "" : "none" }}
              >
                {faq?.answers}
              </span>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <>
      <TrainingsHeader
        trainingData={trainingPageDetailsData?.training_page_banner}
      />
      <div className="td-main">
        <div
          className="gradients-title"
          onClick={() => navigate(PATH_TRAININGS)}
        >
          {"<< Trainings"}
        </div>
        <div className={`td-video `}>
          <div className="video-tu">
            <iframe
              width="100%"
              height="315"
              src={trainingPageIntro?.video_link}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              style={{ borderRadius: "10px" }}
            ></iframe>
          </div>
          <div className="catalog d-flex justify-content-center position-relative">
            <p className="position-absolute fw-bold mt-2">
              <img src={iconPdf} alt="" width={30} />
              &nbsp; Download E-Catalog
            </p>
            <a
              href={getSrcImgs(trainingPageIntro?.pdf_link)}
              download={true}
              target="_blank"
            >
              <img
                className="catlog"
                src={getSrcImgs(trainingPageIntro?.pdf_catelog)}
              />
            </a>
            <a
              href={getSrcImgs(trainingPageIntro?.pdf_link)}
              download={true}
              target="_blank"
            >
            <img
              src={downloadIcon}
              alt=""
              className="position-absolute bottom-0"
              style={{ right: 0 }}
              width={40}
            />
            </a>
          </div>
        </div>
        <div className="td-Introduction mt-5">
          <h1>Introduction</h1>
          <p>{trainingPageIntro?.description}</p>
        </div>
        {trainingPageDetailsData?.training_sections?.map((item: any) => (
          <>
            <div className="td-intro-items">
              <div className="td-intro-items-1">
                <img src={getSrcImgs(item?.icon_link)} />
                <p>{item?.title}</p>
              </div>
              <Carousel
                responsive={responsive}
                autoPlay={false}
                swipeable={true}
                draggable={true}
                showDots={true}
                infinite={true}
                removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
                // partialVisible={false}
                // dotListClass="custom-dot-list-style"
              >
                {item?.sectionList?.map((data: any, index) => {
                  return item?.identifier == "preparation" ? (
                    <div className="td-p">
                      <img src={getSrcImgs(data?.image_link)} />
                      <p className="td-p-title">{data?.title}</p>
                      <p>{data?.description}</p>
                    </div>
                  ) : item?.identifier == "saftyPrecautions" ? (
                    <div className="td-sp">
                      <img
                        src={getSrcImgs(data?.image_link)}
                        height={150}
                        width={150}
                      />
                      <p>{data?.description}</p>
                    </div>
                  ) : (
                    <div className="td-tp">
                      <p className="td-tp-number">{`${index + 1}.`}</p>
                      <p className="td-tp-title">{data?.title}</p>
                      <p>{data?.description}</p>
                    </div>
                  );
                })}
              </Carousel>
            </div>
            <div className="td-divider" />
          </>
        ))}
        <div style={{ marginTop: "3rem" }}>
          <img
            src={getSrcImgs(
              trainingPageDetailsData?.training_page_post_treatment?.at(0)
                ?.banner_name
            )}
            alt=""
            width={"100%"}
            style={{ borderRadius: "20px" }}
          />
        </div>
        {renderImportantNotes()}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingBlock: "20px",
          }}
        >
        </div>
      </div>
      {renderFAQ()}
      {loadingTrainingBanner && <AppLoading isShow={loadingTrainingBanner} />}
      <ScrollToTop />
    </>
  );
};

export default TrainingsDetails;
