// @ts-nocheck
import React, { Children, useEffect, useState } from "react";
import imgUser from "../../assets/images/avtar.png";
import { Tree, TreeNode } from "react-organizational-chart";
import imgBannerCs from "../../assets/images/banner-cs.png";
import "./Team.scss";
import GNLS from "../Home/GNLS/GNLS";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "shared/redux/store";
import { GetTeamData } from "../../shared/redux/teamReducer/team-thunk";
import { getSrcImgs } from "../../screens/helper";
import AppLoading from "../../Components/AppLoading/AppLoading";
import { Button, Modal, Spinner } from "react-bootstrap";
import * as d3 from 'd3';
import OrganizationChart from "./OrganizationChart";
import ScrollToTop from "../../Components/ScrollTop";

const Team: React.FC<any> = (props) => {

  const dispatch = useDispatch<AppDispatch>();
  const { loadingTeamBanner, lstBanner } = useSelector((state: RootState) => state.teamSlice);

  const [data, setData] = useState();

  useEffect(() => {
    dispatch(GetTeamData())
  }, []);

  const hierarchyData = {
    emp_name: "Pyramid",
    emp_designation: "Owner",
    emp_avtar: imgUser,
    children: [
      {
        emp_name: "Pyramid",
        emp_designation: "Owner",
        emp_avtar: imgUser,
        children: [
          {
            emp_name: "Pyramid",
            emp_designation: "Owner",
            emp_avtar: imgUser,
            // children: null,
          },
          {
            emp_name: "Pyramid",
            emp_designation: "Owner",
            emp_avtar: imgUser,
            // children: null,
          },
          {
            emp_name: "Pyramid",
            emp_designation: "Owner",
            emp_avtar: imgUser,
            // children: null,
          },
          {
            emp_name: "Pyramid",
            emp_designation: "Owner",
            emp_avtar: imgUser,
            // children: null,
          },
        ],
      },
      {
        emp_name: "Pyramid",
        emp_designation: "Owner",
        emp_avtar: imgUser,
        children: [
          {
            emp_name: "Pyramid",
            emp_designation: "Owner",
            emp_avtar: imgUser,
            // children: null,
          },
          {
            emp_name: "Pyramid",
            emp_designation: "Owner",
            emp_avtar: imgUser,
            children: [
              {
                emp_name: "Pyramid",
                emp_designation: "Owner",
                emp_avtar: imgUser,
                // children: null,
              },
              {
                emp_name: "Pyramid",
                emp_designation: "Owner",
                emp_avtar: imgUser,
                // children: null,
              },
              {
                emp_name: "Pyramid",
                emp_designation: "Owner",
                emp_avtar: imgUser,
                // children: null,
              },
              {
                emp_name: "Pyramid",
                emp_designation: "Owner",
                emp_avtar: imgUser,
                // children: null,
              },
            ],
          },
        ],
      },
      {
        emp_name: "Pyramid",
        emp_designation: "Owner",
        emp_avtar: imgUser,
        children: [
          {
            emp_name: "Pyramid",
            emp_designation: "Owner",
            emp_avtar: imgUser,
            children: [
              {
                emp_name: "Pyramid",
                emp_designation: "Owner",
                emp_avtar: imgUser,
                // children: null,
              },
            ],
          },
          {
            emp_name: "Pyramid",
            emp_designation: "Owner",
            emp_avtar: imgUser,
            // children: null,
          },
        ],
      },
    ]
  }

  const treeData = [
    {
      emp_name: 'James ahuja',
      id: 1,
      emp_designation: 'Owner',
      parentId: '',
      reportedTo: null,
      emp_avtar: 'public/about_us/8319ae3e-dfaf-4aa4-b5ba-fbc1ffb3f016-avtar2.png'
    },
    {
      emp_name: 'James',
      id: 2,
      emp_designation: 'CEO',
      parentId: '1',
      reportedTo: 1,
      emp_avtar: 'https://picsum.photos/100/100'
    }
  ]

  const renderChar = (data) => {
    if (data?.length > 0) {
      return (
        <OrganizationChart data={JSON.parse(JSON.stringify(data))} />
      )
    }
  }

  const renderTeamMember = (item: any) => {
    return (
      <TreeNode label={
        <div>
          <div className="member-view">
            <img src={item?.emp_avtar} className="user" />
            <div className="name">
              <span>{item?.emp_name}</span>
              <span>~ {item?.emp_designation}</span>
            </div>
          </div>
        </div>
      }>
        {item?.children?.length > 0 &&
          item?.children?.map((data) => (
            <TreeNode label={<div>{renderTeamMember(data)}</div>} />
          ))
        }
      </TreeNode>
    );
  };

  useEffect(() => {
    d3.csv(
      'https://raw.githubusercontent.com/bumbeishvili/sample-data/main/org.csv'
    ).then((data) => {
      setData(data);
    });
  }, [true]);

  // const renderTeam = () => {
  //   // const banner3Data = lstBanner?.banner_timeline;
  //   return (
  //     <>
  //       <TreeNode label={<div>{renderTeamMember()}</div>}>
  //         <TreeNode label={<div>{renderTeamMember()}</div>} />
  //       </TreeNode>
  //     </>
  //   )
  // };
  const banner1Data = lstBanner?.Banner_1?.at(0);
  const banner2Data = lstBanner?.Banner_2?.at(-1);
  const banner_team_chart = lstBanner?.banner_team_graph ?? [];

  return (
    <>
      <div className="about-main">
        {/* <HomeHeader/> */}
        <img src={getSrcImgs(banner1Data?.banner_name)} className="main-img" />
        <div className="about-main-view">
          <h1 className="heading-1">{banner1Data?.title_line}</h1>
          <h1 className="heading-2">{banner1Data?.title}</h1>
        </div>
      </div>
      <div className="team-container">
        <div className="title-container container">
          <div className="title">
            <span className="gradients-title">{banner2Data?.title}</span>
            <span className="question">{banner2Data?.title_line}</span>
          </div>
        </div>
        <div class="square">
          <div>
            <img src={imgBannerCs} alt="banner" style={{ float: "right", margin: "5px", maxHeight: "300px", minWidth: "250px", width: "50%", objectFit: "contain" }} />
          </div>
          <p style={{ whiteSpace: "pre-wrap", fontSize: "15px", textAlign: "justify" }} dangerouslySetInnerHTML={{ __html: `${banner2Data?.paragraph}` }}></p>
        </div>
        {/* <div style={{ display: "flex", gap:"10px" }}>
          <div>
            <div className="title-container container">
              <div className="title">
                <span className="gradients-title">{banner2Data?.title}</span>
                <span className="question">{banner2Data?.title_line}</span>
              </div>
            </div>
            <div className="our-team-view" style={{ marginTop: "20px" }}>
              <p style={{ whiteSpace: "pre-wrap", fontSize: "15px", textAlign: "justify" }} dangerouslySetInnerHTML={{ __html: `${banner2Data?.paragraph}` }}></p>
            </div>
          </div>
          <img src={imgBannerCs} alt="banner" className="img-banner" />
        </div> */}
      </div >
      <div className="The-Pyramid-Team-view">
        <span className="team-title">The Pyramid Team</span>
        <div>
          {banner_team_chart ? renderChar(banner_team_chart) : ''}
        </div>
      </div>
      {loadingTeamBanner &&
        <AppLoading isShow={loadingTeamBanner} />
      }
      <GNLS />
      <ScrollToTop />
    </>
  );
};

export default Team;
