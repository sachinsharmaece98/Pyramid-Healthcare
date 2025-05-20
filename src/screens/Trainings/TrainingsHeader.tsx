import React from "react";
import imgLeftBanner from "../../assets/images/contact-left-banner.png";
import imgBannner from "../../assets/images/main-banner.jpg";
import "./TrainingsHeader.scss";
import { getSrcImgs } from "../../screens/helper";

interface ITrainingHeader {
  trainingData: any;
}

const TrainingsHeader: React.FC<ITrainingHeader> = (props: ITrainingHeader) => {
  const { trainingData } = props;

  return (
    <div className="th-main">
      <img
        src={getSrcImgs(trainingData?.at(0)?.banner_name)}
        width={"50%"}
        height={"100%"}
        style={{ float: "right" }}
      />
      <img src={imgLeftBanner} className="img-left" />
      <div>
        <div className="th-main-view">
          <h1 className="text-1">{trainingData?.at(0)?.title}</h1>
          <h1 className="text-2">{trainingData?.at(0)?.title_line}</h1>
          <p style={{ fontSize: "22px" }}>{trainingData?.at(0)?.sub_line}</p>
        </div>
      </div>
    </div>
  );
};

export default TrainingsHeader;
