import React, { useEffect, useState } from "react";
import { formatDate } from "../helper";
import axios from "axios";
import { Link } from "react-router-dom";
import { getUserAction } from "../actions";

const BlogItem = ({ post }) => {
    const [firstName, setFirstName] = useState("");

    useEffect(() => {
        if (post.user_id) {
            getUserAction(post.user_id)
            .then((res) => {
                setFirstName(res.data.user.first_name);
            });
        }
    }, [post]);

    return (
        <div className=" bg-white shadow-box12 rounded-[8px] transition duration-100 hover:shadow-box13">
            <div className="course-thumb h-[260px] rounded-t-[8px]  relative">
                <img
                    src={post.photo_url}
                    alt=""
                    className=" w-full h-full object-cover rounded-t-[8px]"
                />
                <span className="bg-secondary py-1 px-3 text-lg font-semibold rounded text-white absolute left-6 top-6">
                    {post.category}
                </span>
            </div>
            <div className="course-content p-8">
                <div className="flex   lg:space-x-10 space-x-5 mb-5">
                    <Link
                        className="flex items-center space-x-2"
                        to={`/blog/${post.id}`}
                    >
                        <img src="/images/svg/admin.svg" alt="" />
                        <span>{firstName}</span>
                    </Link>
                    <Link
                        className=" flex items-center space-x-2"
                        to={`/blog/${post.id}`}
                    >
                        <img src="/images/svg/calender.svg" alt="" />
                        <span>{formatDate(post.updated_at)}</span>
                    </Link>
                </div>
                <h4 className=" text-xl mb-5 font-bold">
                    <Link
                        to={`/blog/${post.id}`}
                        className=" hover:text-primary transition duration-150"
                    >
                        {post.title}
                    </Link>
                </h4>
                <Link
                    to={`/blog/${post.id}`}
                    className=" text-black font-semibold hover:underline transition duration-150"
                >
                    {post.description}
                </Link>
            </div>
        </div>
    );
};

export default BlogItem;
