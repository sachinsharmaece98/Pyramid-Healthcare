import * as React from "react";
import { Navigate, Route, Routes, createBrowserRouter } from "react-router-dom";
import { PATH_ABOUT_US, PATH_BLOGS, PATH_CONTACTS, PATH_DEMO, PATH_EVENTS, PATH_HOME, PATH_PRODUCTS, PATH_TEAM, PATH_TRAININGS, PATH_TRAININGS_DETAILS } from "./RouteConstants";
import Home from "../Home/Home";
import Contacts from "../Contacts/Contacts";
import Products from "../Products/Products";
import Home1 from "../Home/Home1";
import AboutUs from "../AboutUs/AboutUs";
import Blogs from "../../screens/Products/Blogs/Blogs";
import Team from "../Team/Team";
import Events from "../Events/Events";
import Trainings from "../Trainings/Trainings";
import TrainingDetails from "../Trainings/TrainingsDetails";
import BlogList from "../../screens/Products/Blogs/BlogDetails/BlogList";

interface IAppRoutes {
  isMobile: any;
}

const AppRoutes: React.FunctionComponent<IAppRoutes> = (props: IAppRoutes) => {
  const { isMobile } = props;
  return (
    <Routes>
      <Route path={PATH_DEMO} element={<Home />} />
      <Route path={PATH_HOME} element={<Home1 isMobile={isMobile}/>} />
      <Route path={PATH_ABOUT_US} element={<AboutUs />} />
      <Route path={PATH_TEAM} element={<Team />} />
      <Route path={PATH_CONTACTS} element={<Contacts />} />
      <Route path={PATH_EVENTS} element={<Events />} />
      <Route path={PATH_TRAININGS} element={<Trainings isMobile={isMobile} />} />
      <Route path={`${PATH_PRODUCTS}/:slug`} element={<Products isMobile={isMobile} />} />
      <Route path={PATH_BLOGS} element={<Blogs />} />
      <Route path={`${PATH_BLOGS}/:id?`} element={<Blogs />} />
      <Route path={`${PATH_TRAININGS_DETAILS}/:trainingID`} element={<TrainingDetails isMobile={isMobile} />} />
      {/* <Route path="*" element={<Navigate to={PATH_HOME} />} /> */}
    </Routes>
  );
};

export default AppRoutes;
