// @ts-nocheck
import React, { useEffect, useState } from "react";
import iconLeftArrow from "../../../../assets/images/double-left-white.png";
import iconUser from "../../../../assets/images/icon-user.png";
import imgBlogDemo from "../../../../assets/images/blog-demo-img.png";
import iconCalender from "../../../../assets/images/calendar.png";
import iconRightArrowBlack from "../../../../assets/images/right-arrow-black.png";
import "./BlogDetails.scss"
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "shared/redux/store";
import moment from "moment";
import { getSrcImgs } from "../../../../screens/helper";
import { GetBlogViaId } from "../../../../shared/redux/BlogReducer/blog-thunk";

interface IBlogDetails {
    id: any;
}

const BlogDetails: React.FC<IBlogDetails> = (props: IBlogDetails) => {
    const { id } = props;
    const { blogViaIdData } = useSelector((state: RootState) => state?.blogSlice);
    const dataDisplay: any = blogViaIdData?.at(0);
    const dispatch = useDispatch<AppDispatch>();
    
    useEffect(() => {
        dispatch(GetBlogViaId(id));
    }, [])

    const renderBlogDetails = () => {
        return (
            <div>
                <div className='blog-details-main'>
                    <div className="blog-header">
                        <div>
                            <span>{dataDisplay?.title}</span>
                        </div>
                        <hr className="hr" style={{ color: '#3374C1', width: '60px', marginTop: '-2px' }} />
                        <div>
                            <div style={{ marginTop: '-14px', marginBottom: "15px" }}>
                                <i className="bi bi-person" style={{ fontSize: "16px" }} />
                                <span className="blog-contact"> {dataDisplay?.author}| <img src={iconCalender} height={15} width={15} /> {moment(dataDisplay?.created_date?.slice(0, 10))?.format("Do MMM YYYY")}</span>
                            </div>
                            <div>
                                <span><img src={getSrcImgs(dataDisplay?.blog_image)} width="100%" height={350} style={{ objectFit: "contain" }} /></span>
                            </div>
                        </div>
                        <div style={{ marginTop: '20px' }}>
                            <p dangerouslySetInnerHTML={{ __html: dataDisplay?.description }} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        renderBlogDetails()
    )
}

export default BlogDetails;