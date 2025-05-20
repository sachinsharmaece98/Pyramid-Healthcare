import React from "react";
import imgTreatmentLeft from "../../../assets/images/treatments-left.png";
import { getDefaultImg, getSrcImgs } from "../../helper";
import "./Treatments.scss";

const Treatments: React.FC<any> = (props) => {
  return (
    <>
      <div className="treatments-main">
        {props.banner7 && (
          <div className="title">
            <span className="gradients-title">{props.banner7.title}</span>
            <span className="question">{props.banner7.sub_title}</span>
          </div>
        )}

        <div className="treatments-products">
          {/* <div className="">
              <img src={imgTreatmentLeft} className="img-left-treatments" />
            </div> */}
          <div
            className="treatments-img"
            style={{
              display: "flex",
              position: "relative",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <div className="" style={{}}>
              {props.banner7_sub &&
                props.banner7_sub?.length > 0 &&
                props.banner7_sub?.map((item, i) => {
                  if (i % 2 == 0) {
                    return (
                      <div className="imgTreatment-view">
                        <img
                          src={getSrcImgs(item.banner_name)}
                          className="img-treatment"
                          width={400}
                          height={129}
                          onError={getDefaultImg}
                        />
                        <div className="text-view">
                          <span>{item.title}</span>
                        </div>
                      </div>
                    );
                  }
                })}
            </div>
            <div className="" style={{}}>
              {props.banner7_sub &&
                props.banner7_sub?.length > 0 &&
                props.banner7_sub?.map((item, i) => {
                  if (i % 2 == 1) {
                    return (
                      <div
                        className="imgTreatment-view"
                        style={i === 2 ? { marginTop: "30px" } : {}}
                      >
                        <img
                          src={getSrcImgs(item.banner_name)}
                          className="img-treatment"
                          width={400}
                          height={129}
                          onError={getDefaultImg}
                        />
                        <div className="text-view">
                          <span style={{wordBreak:"break-all"}}>{item.title}</span>
                        </div>
                      </div>
                    );
                  }
                })}
            </div>
            <img
              src={getSrcImgs(props.banner7.banner_name)}
              className="img-right-treatments position-absolute"
              style={{ right: 0 }}
              onError={getDefaultImg}
            />
          </div>
          <div className="" style={{ marginTop: "-200px" }}>
            <img src={imgTreatmentLeft} className="img-left-treatments" />
          </div>
        </div>
        <div className="treatments-animation productImage-treatment productImage-daily-update"></div>
      </div>
    </>
  );
};

export default Treatments;
