// @ts-nocheck
import React, { useEffect } from "react";
import imgEarth from "../../../assets/images/earth.png";
import "./GNLS.scss";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "shared/redux/store";
import { GetGlobalDetails } from "../../../shared/redux/globalReducer/global-thunk";
import { getSrcImgs } from "../../../screens/helper";
import AppLoading from "../../../Components/AppLoading/AppLoading";

const GNLS: React.FC = () => {

  const dispatch = useDispatch<AppDispatch>();
  const { lstGlobalDetails, loadingGlobalBanner } = useSelector((state: RootState) => state.globalSlice);

  useEffect(() => {
    dispatch(GetGlobalDetails())
  }, []);

  return (
    <>
    <div className="gnls-main">
      <img src={getSrcImgs(lstGlobalDetails?.at(0)?.banner_name)} alt="earth" className="img-earth productImage-global" />
      <div className="title">
        <span className="question">{lstGlobalDetails?.at(0)?.title}</span>
        <span>
          {lstGlobalDetails?.at(0)?.sub_title}
        </span>
      </div>
    </div>
    {loadingGlobalBanner && <AppLoading isShow={loadingGlobalBanner}/>}
    </>
  );
};

export default GNLS;
