// @ts-nocheck
import React, { useEffect, useState } from "react";
import { Card, CardBody, CardSubtitle, CardTitle } from "react-bootstrap";
import iconUser from "../../../../assets/images/icon-user.png";
import imgBlogDemo from "../../../../assets/images/blog-demo-img.png";
import iconCalender from "../../../../assets/images/calendar.png";
import iconLeftArrow from "../../../../assets/images/double-left-white.png";
import iconMenu from "../../../../assets/images/icon-menu.png";
import iconRightArrowBlack from "../../../../assets/images/right-arrow-black.png";
import imgBlog from "../../../../assets/images/defaultImg.jpg";
import iconSP from "../../../../assets/images/high-peak-power.svg";
// import { } from "../../../../shared/redux/BlogReducer/blog-thunk";
import BlogDetails from "./BlogDetails";
import "./BlogList.scss";
import { getSrcImgs } from "../../../../screens/helper";
import moment from "moment";
import { GetBlogViaId } from "../../../../shared/redux/BlogReducer/blog-thunk";
import { useDispatch } from "react-redux";
import { AppDispatch } from "shared/redux/store";
import { Link, useNavigate } from "react-router-dom";
import { PATH_BLOGS } from "../../../../screens/AppLayout/RouteConstants";

interface IBlogList {
  listBlogData?: any;
  id: any;
}

const BlogList: React.FC<IBlogList> = (props: IBlogList) => {
  const { listBlogData, id } = props;
  const [isBlogDetails, setIsBlogDetails] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      setIsBlogDetails(true);
    } else {
      setIsBlogDetails(false);
    }
  }, [id])

  const renderBlogs = (blog: any) => {
    return (
      <div className="item-blog" onClick={() => { navigate(`${PATH_BLOGS}/${blog?.blog_id}`); }}>
        <img src={getSrcImgs(blog?.blog_image)} className="img-blog-product" />
        <div className="item-name">
          <div className="text-start fs-3" style={{ fontWeight: "600" }}>{blog?.title}</div>
          <div className="item-desc">
            <p dangerouslySetInnerHTML={{ __html: `${blog?.description?.slice(0, 200)}...` }} />
            <Link style={{textDecoration:"none", fontWeight:"bold"}}>Read More</Link>
          </div>
          <div className="item-devider" />
          <div className="item-date">
            <i className="bi bi-person" />
            <span className="td-p-title">{blog?.author}</span>
          </div>
          <div className="item-date">
            <i className="bi bi-calendar2-check" />
            <span className="td-p-title">{moment(blog?.created_date)?.format("Do MMM YYYY")}</span>
          </div>
        </div>
      </div >
    );
  };

  const renderBlogCardList = () => {
    return (
      <>
        <div className="list-blog">
          {listBlogData?.length > 0 ? (
            <>
              {listBlogData?.map((blog: any) => {
                return renderBlogs(blog);
              })}

            </>
          ) : <h1>No Blogs...</h1>}
        </div>
      </>
    );
  };

  return (
    <div className={isBlogDetails ? 'w-100' : ''}>
      {isBlogDetails && (
        <div className="blog-title" style={{cursor:"pointer"}} onClick={() => { setIsBlogDetails(false); navigate(PATH_BLOGS); }}>
          <span className="gradients-title">
            <img src={iconLeftArrow} height={20} width={20} />
            Blogs{" "}
          </span>
        </div>
      )}
      <div>{isBlogDetails ? <BlogDetails id={id} /> : renderBlogCardList()}</div>
    </div>
  );
};

export default BlogList;
