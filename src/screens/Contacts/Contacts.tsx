// @ts-nocheck
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import imgContactLeftBanner from "../../assets/images/contact-left-banner.png";
import imgContactRightBannner from "../../assets/images/contacts-right-banner.jpg";
import iconLocation from "../../assets/images/location.png";
import iconPhone from "../../assets/images/phone.png";
import iconMail from "../../assets/images/mail.png";
import GNLS from "../Home/GNLS/GNLS";
import "./Contacts.scss";
import ScrollTop from "../../Components/ScrollTop";
import { useDispatch, useSelector } from "react-redux";
import {
  GetContactPageDetails,
  SubmitContactFormDetails,
} from "../../shared/redux/contactReducer/contact-thunk";
import { RootState } from "shared/redux/store";
import { AppDispatch } from "shared/redux/store";
import AppLoading from "../../Components/AppLoading/AppLoading";
import { getSrcImgs } from "../../screens/helper";

const Contacts: React.FC = () => {
  const [formData, setFormData] = useState({});
  const [validated, setValidated] = useState(false);
  const { lstContactBanner, loadingContactBanner } = useSelector(
    (state: RootState) => state.contactSlice
  );

  const dispatch = useDispatch<AppDispatch>();

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  useEffect(() => {
    dispatch(GetContactPageDetails());
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      // Form is valid, you can proceed with form submission
      const res = await dispatch(SubmitContactFormDetails(formData));
      if (res?.meta?.requestStatus === "fulfilled") {
        setFormData({
          name: "",
          email: "",
          mobile: "",
          subject: "",
          message: "",
        });
        toast.success("Inquiry Submitted successfully.", {
          position: "top-right",
        });
      }
    }

    setValidated(true);
  };

  const contactBannerDetails = lstContactBanner?.contact_banner?.at(0);
  const contactInfoDetails = lstContactBanner?.contact_info?.at(0);

  const renderMainHeaderImage = () => {
    return (
      <div className="contact-top-view">
        <div className="contact-left-view">
          <div className="contact-us-main">
            <div>
              <span className="contact-us-text-1">
                {contactBannerDetails?.sub_title}
              </span>
              <p className="contact-us-text-2">{contactBannerDetails?.title}</p>
            </div>
          </div>
          <img src={imgContactLeftBanner} />
        </div>
        <div className="contact-right-view">
          <img src={getSrcImgs(contactBannerDetails?.banner_name)} />
        </div>
        <div className="contact-info-view">{renderContactInformation()}</div>
      </div>
    );
  };

  const renderContactInformation = () => {
    return (
      <div className="card mb-1 card-header-div">
        <div className="contact-innner-main-div">
          <div className="contact-sideLine">
            <span style={{ marginTop: "-17px" }}>
              <img
                src={iconLocation}
                height={20}
                width={20}
                className="contact-side-icon-1"
              />
            </span>
            <span>
              <img
                src={iconPhone}
                height={18}
                width={18}
                className="contact-side-icon-2"
              />
            </span>
            <span>
              <img
                src={iconMail}
                height={18}
                width={18}
                className="contact-side-icon-3"
              />
            </span>
          </div>
          <div className="card-body">
            <h5 className="card-title" style={{ fontSize: "25px" }}>
              {contactInfoDetails?.title}
            </h5>
            <p className="card-text card-custom-text">
              {contactInfoDetails?.address}
            </p>
            <p className="card-custom-text">
              +{contactInfoDetails?.mobile_number}
            </p>
            <p className="card-custom-text">{contactInfoDetails?.email}</p>
          </div>
        </div>
      </div>
    );
  };
  const renderForm = () => {
    return (
      <>
        <div className="contect-form-heading">
          <div className="form-col-heading">
            Fill the contact Form and we will contact you shortly.
          </div>
          <div>
            If you have any question, please reach out to our team. We are
            always happy to help.
          </div>
        </div>
        <form
          noValidate
          className={"row g-3" + (validated ? " was-validated" : "")}
          onSubmit={handleSubmit}
        >
          <div className="col-md-6 form-label">
            <label className="form-label">Name*</label>
            <input
              type="text"
              id="name"
              value={formData?.name}
              className="form-control form-input-control"
              aria-describedby="name"
              required
              onChange={handleChange}
            />
            <div className="invalid-feedback">Please enter a name.</div>
          </div>
          <div className="col-md-6 form-label">
            <label className="form-label">Email*</label>
            <input
              type="email"
              id="email"
              value={formData?.email}
              pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
              className="form-control form-input-control"
              aria-describedby="email"
              required
              onChange={handleChange}
            />
            <div className="invalid-feedback">Please enter a valid email.</div>
          </div>
          <div className="col-md-6 form-label">
            <label className="form-label">Mobile*</label>
            <input
              type="text"
              id="mobile"
              value={formData?.mobile}
              pattern="[6789]\d{9}"
              className="form-control form-input-control"
              aria-describedby="mobile"
              required
              onChange={handleChange}
            />
            <div className="invalid-feedback">
              Please enter a valid mobile number.
            </div>
          </div>
          <div className="col-md-6 form-label">
            <label className="form-label">Subject</label>
            <input
              type="text"
              id="subject"
              value={formData?.subject}
              className="form-control form-input-control"
              aria-describedby="subject"
              onChange={handleChange}
            />
            <div className="invalid-feedback">Please enter a valid email.</div>
          </div>
          <div className="col-md-12 form-label">
            <label className="form-label">Message</label>
            <input
              type="text"
              id="message"
              value={formData?.message}
              className="form-control form-input-control"
              aria-describedby="message"
              onChange={handleChange}
            />
          </div>
          <p
            className="d-inline-flex gap-1"
            style={{ marginTop: "10px", marginLeft: "-16px" }}
          >
            <button type="submit" className="btn send-msgBtn  border-0">
              Send Message
            </button>
          </p>
        </form>
      </>
    );
  };

  const map_url = contactInfoDetails?.map_url;

  return (
    <>
      <div className="contact-main-div">
        {renderMainHeaderImage()}
        <div className="main-form-div">
          <div className="header-form">{renderForm()}</div>
        </div>
        <div className="map-div">
          <div className="map-inner-div">
            <iframe
              referrerpolicy="no-referrer-when-downgrade"
              style={{
                height: "100%",
                width: "100%",
                border: "1px dashed grey",
              }}
              src={map_url}
            ></iframe>
          </div>
        </div>
        <div className="">
          <GNLS />
          <ScrollTop />
        </div>
      </div>
      <ToastContainer autoClose={3000} draggable={false} />
      {loadingContactBanner && <AppLoading isShow={loadingContactBanner} />}
    </>
  );
};

export default Contacts;
