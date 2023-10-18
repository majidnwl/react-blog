import React, { useEffect, useState } from "react";
import { formatDate } from "../helper";
import axios from "axios";

const BlogItem = ({ post }) => {
    const [user, setUser] = useState({});

    useEffect(() => {
        axios
            .get(
                `https://api.slingacademy.com/v1/sample-data/users/${post.user_id}`
            )
            .then((res) => {
                const { first_name } = res.data.user;
                setUser(first_name);
            });
    }, []);

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
                    <a
                        className=" flex items-center space-x-2"
                        href="blog-single.html"
                    >
                        <img src="/images/svg/admin.svg" alt="" />
                        <span>{user}</span>
                    </a>
                    <a
                        className=" flex items-center space-x-2"
                        href="blog-single.html"
                    >
                        <img src="/images/svg/calender.svg" alt="" />
                        <span>{formatDate(post.updated_at)}</span>
                    </a>
                </div>
                <h4 className=" text-xl mb-5 font-bold">
                    <a
                        href="blog-single.html"
                        className=" hover:text-primary transition duration-150"
                    >
                        {post.title}
                    </a>
                </h4>
                <a
                    href="blog-single.html"
                    className=" text-black font-semibold hover:underline transition duration-150"
                >
                    {post.description}
                </a>
            </div>
        </div>
    );
};

export default BlogItem;
