import React, { useEffect } from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import iconPhone from "../../../assets/images/phone.png";
import iconMail from "../../../assets/images/mail.png";
import iconFacebook from "../../../assets/images/facebook.svg";
import iconTwitter from "../../../assets/images/twitter.svg";
import iconIn from "../../../assets/images/in.svg";
import iconInsta from "../../../assets/images/insta.svg";
import iconRightArrow from "../../../assets/images/right-arrow.png";
import iconCopyright from "../../../assets/images/copyright.png";
import iconLocation from "../../../assets/images/location.png";
import iconPyramidLogo from "../../../assets/images/pyramid-logo-white.png";
import { GetContactPageDetails } from "../../../shared/redux/contactReducer/contact-thunk";
import { GetFooterData } from "../../../shared/redux/globalReducer/global-thunk";
import './AppFooter.scss';
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "shared/redux/store";
import { PATH_BLOGS, PATH_CONTACTS, PATH_EVENTS, PATH_PRODUCTS, PATH_TRAININGS } from "../RouteConstants";
import { useNavigate } from "react-router-dom";
import AppLoading from "../../../Components/AppLoading/AppLoading";
import { getSrcImgs } from '../../../screens/helper';
import moment from "moment";

const AppFooter: React.FC = () => {

    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const { lstContactBanner, loadingContactBanner }: any = useSelector((state: RootState) => state.contactSlice);
    const { lstProductBanner, loadingProductBanner } = useSelector((state: RootState) => state.productSlice);
    const { lstFooterDetails, loadingFooterBanner }: any = useSelector((state: RootState) => state.globalSlice);

    useEffect(() => {
        dispatch(GetContactPageDetails());
        dispatch(GetFooterData())
    }, []);
    const footerData = lstFooterDetails.at(0);

    return (
        <>
            <div className="footer ">
                <div className="container">
                    <div className="footer-input-div">
                        <span className="footer-subscribe">Subscribe For Newsletter
                        </span>&nbsp; &nbsp;
                        <InputGroup className="mb-4 footer-input-group">
                            <Form.Control
                                placeholder="Enter your email here..."
                                aria-label="small"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                            <button type="button" id="basic-addon2" className="btn btn-light input-group-text">Subscribe Now..</button>
                        </InputGroup>
                    </div>
                    <hr className="mt-1" style={{ color: 'rgb(83 166 253)' }} />
                    <div className="footer-body-center">
                        <div className="row" style={{ textAlign: 'left' }}>
                            <div className="col-lg-4 col-md-5 col-sm-12 logo-center">
                                <img src={getSrcImgs(footerData?.footer_logo)} className="footer-pyramid-logo" />
                                <p className="pyramid-text font-12-300">{footerData?.tag_line}
                                </p>
                                <div style={{ marginTop: '25px', display: 'flex', gap: '8px' }}>
                                    <a target="_blank" href={footerData?.facebook_link}>
                                        <img src={iconFacebook} width={20} />
                                    </a>
                                    <a target="_blank" href={footerData?.twitter_link}>
                                        <img src={iconTwitter} width={25} />
                                    </a>
                                    <a target="_blank" href={footerData?.linkdin_link}>
                                        <img src={iconIn} width={25} />
                                    </a>
                                    <a target="_blank" href={footerData?.instagram_link}>
                                        <img src={iconInsta} width={25} />
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-2 col-md-3 col-sm-12">
                                <div className="footer-main-div">
                                    <p className="footer-col-2-3">Links</p>
                                </div>
                                <div className="link-div">
                                    <ul>
                                        <li
                                            onClick={() => {
                                                navigate(`${PATH_EVENTS}`);
                                                window.scrollTo({ top: 0, behavior: 'smooth' });
                                            }}
                                        ><img src={iconRightArrow} width={10} /> Event</li>
                                        <li
                                            onClick={() => {
                                                navigate(`${PATH_TRAININGS}`);
                                                window.scrollTo({ top: 0, behavior: 'smooth' });
                                            }}
                                        ><img src={iconRightArrow} width={10} /> Training</li>
                                        <li
                                            onClick={() => {
                                                navigate(`${PATH_BLOGS}`);
                                                window.scrollTo({ top: 0, behavior: 'smooth' });
                                            }}
                                        ><img src={iconRightArrow} width={10} /> Blog</li>
                                        <li
                                            onClick={() => {
                                                navigate(`${PATH_CONTACTS}`);
                                                window.scrollTo({ top: 0, behavior: 'smooth' });
                                            }}
                                        ><img src={iconRightArrow} width={10} /> Contact</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-12">
                                <div className="footer-main-div">
                                    <p className="footer-col-2-3">Products</p>
                                </div>
                                <div className="link-div">
                                    <ul>
                                        {lstProductBanner?.map((item: any) => (
                                            <li onClick={() => {
                                                navigate(`${PATH_PRODUCTS}/${item?.product_slug}`);
                                                window.scrollTo({ top: 0, behavior: 'smooth' });
                                            }}><img src={iconRightArrow} width={10} height={10} />
                                                {item?.product_name}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-1 col-md-1 col-sm-12">
                                <div className="vertical"></div>
                            </div>
                            <div className="col-lg-3 col-sm-12">
                                <div className="footer-main-div">
                                    <p className="footer-col-2-3">Locations</p>
                                </div>
                                <div className="address-line" style={{ display: 'flex' }}>
                                    <div className="footer-address">
                                        <span>
                                            <img src={iconLocation} height={18} />
                                        </span>
                                        <p className="font-16-300">
                                            {lstContactBanner?.contact_info?.at(0)?.address} <br />
                                        </p>
                                    </div>
                                    <div className="footer-mobile">
                                        <span>
                                            <img src={iconPhone} width={18} />
                                        </span>
                                        <div className="mobile-footer font-16-300">
                                            +{lstContactBanner?.contact_info?.at(0)?.mobile_number}
                                        </div>
                                    </div>
                                    <div className="footer-email">
                                        <span>
                                            <img src={iconMail} width={18} />
                                        </span>
                                        <a href={`mailto:${lstContactBanner?.contact_info?.at(0)?.email}`}>
                                            <div className="email-footer font-16-300 text-white" style={{ marginTop: "5px" }}>
                                                {lstContactBanner?.contact_info?.at(0)?.email}
                                            </div>
                                        </a>
                                    </div>
                                    {/* </div> */}

                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <hr className="mt-1 mb-1" style={{ color: 'rgb(83 166 253)' }} />
                    </div>
                    <div className="footer-copyright">
                        <span className="font-16-300">
                            <img src={iconCopyright} width={15} style={{marginRight:"3px", marginTop:"-1px"}}/>{moment()?.format("YYYY")} All Right Reserved, Pyramid Healthcare.
                        </span>
                    </div>
                </div>
            </div>
            {(loadingContactBanner || loadingProductBanner) && <AppLoading isShow={loadingContactBanner && loadingProductBanner} />}
        </>
    )
};

export default AppFooter;
