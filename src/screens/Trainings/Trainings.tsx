import React, { useEffect, useState } from "react";
import GNLS from "../Home/GNLS/GNLS";
import imgProduct from "../../assets/images/front-view.png";
import banner from "../../assets/images/contact-left-banner.png";
import "./Trainings.scss";
import TrainingsDetails from "./TrainingsDetails";
import TrainingsHeader from "./TrainingsHeader";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "shared/redux/store";
import { useNavigate, useParams } from 'react-router-dom';
import { GetTrainingData, GetTrainingPageData } from "../../shared/redux/trainingReducer/training-thunk";
import { getSrcImgs } from "../../screens/helper";
import AppLoading from "../../Components/AppLoading/AppLoading";
import { PATH_TRAININGS_DETAILS } from "../../screens/AppLayout/RouteConstants";
import ScrollToTop from "../../Components/ScrollTop";

const Trainings: React.FC<any> = (props) => {
  const { isMobile } = props;
  const [showDetails, setShowDetails] = useState(false);
  const [trainingId, setTrainingId] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { trainingDetailsData, trainingPageDetailsData, loadingTrainingBanner }: any = useSelector((state: RootState) => state.trainingSlice);

  useEffect(() => {
    dispatch(GetTrainingData());
  }, []);

  const renderProduct = (product: any) => {
    return (
      <div className="item-trainings" onClick={() => {
        setTrainingId(product?.id);
        navigate(`${PATH_TRAININGS_DETAILS}/${product?.id}`);
        }}>
        <img src={getSrcImgs(product?.banner_name)} className="img-trainings-product" />
        <div className="item-name">
          <img
            src={banner}
            style={{ objectFit: "contain", opacity: "0.2" }}
            width={150}
          />
          <div className="name-text">{product?.title}</div>
        </div>
        <div className="item-footer">{product?.treatment_line}</div>
      </div>
    );
  };

  return (
    <>
      {/* {showDetails ? (
        <TrainingsDetails setShowDetails={setShowDetails} isMobile={isMobile} trainingId={trainingId} />
      ) : ( */}
        <>
          <TrainingsHeader trainingData={trainingDetailsData?.training_banner} />
          <div className="list-trainings" style={{ width: "100%" }}>
            {trainingDetailsData?.training_list?.map((product: any) => {
              return renderProduct(product);
            })}
          </div>
        </>
      <GNLS />
      {loadingTrainingBanner && <AppLoading isShow={loadingTrainingBanner}/>}
      <ScrollToTop />
    </>
  );
};

export default Trainings;
