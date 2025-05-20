import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../../assets/images/small_logo.png";
import { PATH_ABOUT_US, PATH_BLOGS, PATH_CONTACTS, PATH_HOME, PATH_PRODUCTS, PATH_TEAM, PATH_EVENTS, PATH_TRAININGS } from "../RouteConstants";
import { Alert, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { GetProductList } from "../../../shared/redux/productReducer/product-thunk";
import { GetTreatmentData } from "../../../shared/redux/treatmentReducer/treatment-thunk";
import "./AppHeader.scss";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "shared/redux/store";
import AppLoading from "../../../Components/AppLoading/AppLoading";

interface IAppHeader {
  width: any;
}

const AppHeader: React.FC<IAppHeader> = (props: IAppHeader) => {
  const { width } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [showDevice, setShowDevice] = useState(false);
  const [showAboutUs, setShowAboutUs] = useState(false);
  const [showSubTreatment, setShowSubTreatment] = useState({});
  const [showBluecareProducts, setShowBluecareProducts] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const { lstProductBanner, loadingProductBanner, error } = useSelector((state: RootState) => state.productSlice);
  const { lstBanner, loadingTreatmentBanner } = useSelector((state: RootState) => state?.treatmentSlice);
  const isAbsolute = window.location.pathname == PATH_HOME;

  function toggleNav() {
    setNavOpen(!navOpen);
  }

  useEffect(() => {
    dispatch(GetProductList());
    dispatch(GetTreatmentData())
  }, []);

  console.log('showSubTreatment', showSubTreatment)

  return (
    <>
      <Container className={`header-main`}>
        <Navbar expand="lg">
          <div className="">
            <img className="logo" style={{ cursor: "pointer" }} src={Logo} width={150} alt="" onClick={() => navigate(PATH_HOME)}/>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleNav} />
          <div className={`header-bar fw-bold ${(isAbsolute && (width <= 991)) ? 'bg-white p-3' : ''} ${navOpen ? "collapse navbar-collapse show" : "collapse navbar-collapse"}`}>
            <Nav className="container justify-content-end me-auto">
              <Navbar.Brand
                role="button"
                className="btn-header me-2"
                onClick={() => { navigate(PATH_HOME); toggleNav() }}
              >
                Home
              </Navbar.Brand>
              <NavDropdown
                title="About Us"
                id="basic-nav-dropdown"
                style={{ marginTop: "-3px" }}
                className="btn-header"
                show={showAboutUs}
                onClick={() => setShowAboutUs(!showAboutUs)}
                onMouseEnter={() => setShowAboutUs(true)}
                onMouseLeave={() => setShowAboutUs(false)}
              >
                <NavDropdown.Item
                  role="button"
                  onClick={() => { navigate(`${PATH_ABOUT_US}`); toggleNav() }}
                >
                  About Us
                </NavDropdown.Item>
                <NavDropdown.Item
                  role="button"
                  onClick={() => { navigate(`${PATH_TEAM}`); toggleNav() }}
                >
                  Team
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Treatment"
                id="basic-nav-dropdown"
                style={{ marginTop: "-3px" }}
                className="btn-header"
                show={showDevice}
                onClick={() => setShowDevice(!showDevice)}
                onMouseEnter={() => setShowDevice(true)}
                onMouseLeave={() => setShowDevice(false)}
              >
                {lstBanner?.map((item: any) => (

                  item?.product_list?.length > 0 ? (
                    <NavDropdown
                      title={item?.device_name}
                      id={`${item?.device_name}-dropdown`}
                      style={{ marginTop: "-3px" }}
                      className="btn-header"
                      drop={"end"}
                      show={showSubTreatment[item?.device_name] || false}
                      onClick={() => {
                        setShowDevice(true);
                        setShowBluecareProducts(false);
                        setShowSubTreatment((prev) => ({ [item?.device_name]: true }))
                      }}
                      onMouseEnter={() => {
                        setShowSubTreatment((prev) => ({ ...prev, [item?.device_name]: true }))
                      }}
                      onMouseLeave={() => {
                        setShowSubTreatment((prev) => ({ ...prev, [item?.device_name]: false }))
                      }}
                    >
                      {item?.product_list?.map((product: any) => (
                        <NavDropdown.Item
                          onClick={() => {
                            navigate(`${PATH_PRODUCTS}/${product?.product_slug}`); toggleNav()
                          }}
                        >
                          {product?.product_name}
                        </NavDropdown.Item>
                      ))}
                    </NavDropdown>
                  ) : (
                    <NavDropdown.Item
                      role="button"
                      onClick={() => { navigate(`${PATH_PRODUCTS}/${item?.product_slug}`); toggleNav() }}
                    >
                      {item?.device_name}
                    </NavDropdown.Item>
                  )
                ))}
              </NavDropdown>
              <NavDropdown
                title="Products"
                id="basic-nav-dropdown"
                style={{ marginTop: "-3px" }}
                className="btn-header me-2"
                show={showBluecareProducts}
                onClick={() => setShowBluecareProducts(!showBluecareProducts)}
                onMouseEnter={() => setShowBluecareProducts(true)}
                onMouseLeave={() => setShowBluecareProducts(false)}
              >
                {lstProductBanner?.map((item: any) => (
                  <NavDropdown.Item
                    role="button"
                    onClick={() => { navigate(`${PATH_PRODUCTS}/${item?.product_slug}`); toggleNav() }}
                  >
                    {item?.product_name}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
              <Navbar.Brand
                title="Event"
                role="button"
                className="btn-header"
                onClick={() => { navigate(PATH_EVENTS); toggleNav() }}
              >
                Event
              </Navbar.Brand>
              <Navbar.Brand
                title="Training"
                role="button"
                className="btn-header"
                onClick={() => { navigate(PATH_TRAININGS); toggleNav() }}
              >
                Training
              </Navbar.Brand>
              <Navbar.Brand
                title="Blog"
                role="button"
                className="btn-header"
                onClick={() => { navigate(PATH_BLOGS); toggleNav() }}
              >
                Blog
              </Navbar.Brand>
              <Navbar.Brand
                role="button"
                className="btn-header"
                onClick={() => { navigate(PATH_CONTACTS); toggleNav() }}
              >
                Contact
              </Navbar.Brand>
              {/* <Navbar.Brand
              role="button"
              className="btn-header"
              onClick={() => {navigate(PATH_BLOGS); toggleNav() }}
            >
              Blogs
            </Navbar.Brand> */}
            </Nav>
          </div>
        </Navbar>
      </Container >
      {(loadingProductBanner || loadingTreatmentBanner) && <AppLoading isShow={loadingProductBanner && loadingTreatmentBanner} />}
    </>
  );
};

export default AppHeader;
