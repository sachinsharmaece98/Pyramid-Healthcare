import React from "react";
import iconWhiteEmail from "../../../assets/images/white-email.png";
import "./PyramidHealthCare.scss";


const PyramidHealthCare: React.FC = () => {

    const healthServices = [
        {
            image: "",
            name: "Services",
            bgColor: '#d0ffff',
            description:
                "We offers excellent pre and post sales services across the globe.Excellent services builds excellent relation and business.",
        },
        {
            image: "",
            bgColor: '#bfcdea',
            name: "Maintenance",
            description:
                "Timely Maintenance is one thing which makes us fall apart from others.With our approach & teamwork we never let u be on hold.",
        },
        {
            image: "",
            name: "Delivery",
            bgColor: '#dad0e5e6',
            description:
                "We deliver the machine and parts on dot time as commited with large network of engineers and team available across country.",
        },
    ]

    return (
        <div className="">
            <div>

            </div>
            <div className="healthcare-main">
                <div className="healthcare-service">
                    {healthServices.map((temp: any) => {
                        return (
                            <div className="healthcare-inner" style={{ backgroundColor: temp.bgColor ? temp.bgColor : '' }}>
                                <div className="healthcare-img">
                                    <img src='' />
                                    <span>{temp.name}</span>
                                </div>
                                <p className="desc">{temp.description}</p>
                            </div>
                        );
                    })}
                </div>
                <div className="healthcare-quick-msg">
                    <p style={{marginLeft:'30px'}}><img src={iconWhiteEmail}/></p>
                    <p style={{textAlign:'center'}}>Quick </p>

                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default PyramidHealthCare;
