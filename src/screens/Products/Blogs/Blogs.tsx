// @ts-nocheck
import React, { useEffect, useState } from "react";
import imgContactLeftBanner from "../../../assets/images/contact-left-banner.png";
import iconMenu from "../../../assets/images/icon-menu.png";
import BlogList from "./BlogDetails/BlogList";
import GNLS from "../../Home/GNLS/GNLS";
import "./Blogs.scss";
import { GetBlogPageDetail, GetBlogCategoryDetail, GetBlogTags, GetBlogViaId, GetBlogViaTags, GetBlogViaCategory, GetBlogTitleSearch } from "../../../shared/redux/BlogReducer/blog-thunk";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "shared/redux/store";
import { getSrcImgs } from "../../../screens/helper";
import { highLightCategory, hightLightTags } from "../../../shared/redux/BlogReducer/blogReducer";
import AppLoading from "../../../Components/AppLoading/AppLoading";
import { useNavigate, useParams } from "react-router-dom";
import { PATH_BLOGS } from "../../../screens/AppLayout/RouteConstants";
import ScrollToTop from "../../../Components/ScrollTop";

const Blogs: React.FC = () => {
  const [isCategoryData, setIsCategoryData] = useState(false);
  const [isTagsData, setIsTagsData] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const id = useParams();
  const {
    blogDetailsData,
    blogCategoryDetails,
    blogTagsData,
    blogViaCategoryData,
    blogViaTagsData,
    blogTitleSearchData,
    isSelectedCategory,
    isSelectedTag,
    loadingBlogBanner
  } = useSelector((state: RootState) => state.blogSlice);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(GetBlogPageDetail());
    dispatch(GetBlogCategoryDetail());
    dispatch(GetBlogTags());
  }, []);
  console.log('blo-------', id)

  const renderMainHeader = () => {
    const blogBanner = blogDetailsData?.blog_banner?.at(0)
    return (
      <>
        <div className="bl-main">
          <img
            src={getSrcImgs(blogBanner?.banner_name)}
            width={"100%"}
            height={"100%"}
            style={{ objectFit: "cover" }}
          />
          <img src={imgContactLeftBanner} className="img-left" />
          <div>
            <div className="bl-main-view">
              <h1 className="text-2">{blogBanner?.title_line}</h1>
              <h1 className="text-1">{blogBanner?.title}</h1>
            </div>
          </div>
        </div>
      </>
    );
  };

  const renderCategories = () => {
    const categoryList = blogCategoryDetails;
    return (
      <>
        <div style={{ marginTop: "30px" }}>
          <button className="btn btn-primary" style={{ background: "#3374C1" }}>
            <img src={iconMenu} />
          </button>{" "}
          &nbsp;{" "}
          <span style={{ fontWeight: "500", fontSize: "larger" }}>
            CATEGORIES
          </span>{" "}
          {isCategoryData && (

            <i
              style={{ cursor: "pointer" }}
              className="bi bi-x-circle float-end"
              onClick={() => {
                dispatch(highLightCategory(0));
                setIsCategoryData(false);
              }} />
          )}
          <hr
            className="mt-0 mb-3"
            style={{ color: "#3374C1", width: "100%" }}
          />
        </div>
        <div>
          <div className="categories-list">
            <ul>
              {categoryList?.map((category: any, index) => {
                return (
                  <li
                    key={index}
                    style={{
                      fontWeight: isSelectedCategory == category?.id ? "bold" : "380",
                      color: isSelectedCategory == category?.id ? '#3374c0' : "",
                    }}
                    onClick={() => {
                      dispatch(GetBlogViaCategory(category?.id));
                      dispatch(highLightCategory(category?.id));
                      navigate(PATH_BLOGS);
                      setSearchValue("");
                      setIsSearch(false);
                      setIsTagsData(false);
                      setIsCategoryData(true);
                    }}
                  >
                    <i className="bi bi-chevron-right"></i>&nbsp;
                    {category?.category_name}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </>
    );
  };

  const renderTags = () => {
    return (
      <>
        <div style={{ marginTop: "30px", width: "100%" }}>
          <button
            className="btn btn-primary"
            style={{ background: "#3374C1", marginLeft: "-0px" }}
          >
            <img src={iconMenu} />
          </button>{" "}
          &nbsp;{" "}
          <span style={{ fontWeight: "500", fontSize: "larger" }}>Tags</span>{" "}
          {isTagsData && (
            <i
              style={{ cursor: "pointer", float: "right" }}
              className="bi bi-x-circle"
              onClick={() => {
                dispatch(hightLightTags(0));
                setIsTagsData(false);
              }} />
          )}
          <hr
            className="mt-0 mb-3"
            style={{ color: "#3374C1", width: "100%", marginLeft: "-0px" }}
          />
        </div>
        <div style={{ marginLeft: "-0px", width: "100%" }}>
          {blogTagsData?.map((tag: any) => {
            return (
              <>
                <span
                  className="badge"
                  style={{ background: isSelectedTag == tag?.id ? "#3374c0" : "#efe8e8", color: isSelectedTag == tag?.id ? "white" : "gray", cursor: "pointer" }}
                  onClick={() => {
                    dispatch(GetBlogViaTags(tag?.id));
                    dispatch(hightLightTags(tag?.id));
                    navigate(PATH_BLOGS);
                    setSearchValue("");
                    setIsSearch(false);
                    setIsCategoryData(false);
                    setIsTagsData(true);
                  }}
                >
                  {tag?.tag_list}
                </span>{" "}
                &nbsp;
              </>
            );
          })}
        </div>
      </>
    );
  };

  const renderCategoriesPortion = () => {
    return (
      <div className="right-section">
        <div
          className="card"
          style={{
            borderColor: "#0d66a2",
            marginLeft: "-0px",
            width: "100%",
            background: "#bde9f7",
          }}
        >
          <div className="card-body">
            <div className="input-group">
              <input
                id="serach"
                name="search"
                value={searchValue}
                className="form-control input-xs"
                type="text"
                placeholder="Search..."
                onChange={(e) => {
                  if ((e?.target?.value?.length ?? 0) == 0) {
                    setIsSearch(false);
                  }
                  setSearchValue(e?.target?.value)
                }}
                onKeyDown={(e: any) => {
                  if (e?.key == "Enter") {
                    dispatch(GetBlogTitleSearch(e?.target?.value));
                    setIsSearch(true);
                  }
                }}
              />
              <span className="input-group-text">
                <button style={{ border: "none" }}
                  onClick={() => {
                    dispatch(GetBlogTitleSearch(searchValue));
                    setIsSearch(true);
                  }}
                >
                  <i className="bi bi-search"></i>
                </button>
              </span>
            </div>
          </div>
        </div>
        <div>
          {renderCategories()}
          {renderTags()}
        </div>
      </div >
    );
  };

  return (
    <>
      <div className="blog-main-div">
        <div>{renderMainHeader()}</div>
      </div>
      <div className="bloglist-view-main">
        <BlogList id={id?.id} listBlogData={isCategoryData ? blogViaCategoryData : isTagsData ? blogViaTagsData : isSearch ? blogTitleSearchData : blogDetailsData?.banner_details} />
        {renderCategoriesPortion()}
      </div>
      <GNLS />
      {loadingBlogBanner && <AppLoading isShow={loadingBlogBanner} />}
      <ScrollToTop />
    </>
  );
};

export default Blogs;
