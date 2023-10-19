import axios from "axios";
import React, { useEffect, useState } from "react";
import BlogItem from "./BlogItem";
import Loader from "./Loader";

const ListBlogs = () => {
    const [posts, setPosts] = useState([]);
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        setLoader(true);
        axios
            .get("https://api.slingacademy.com/v1/sample-data/blog-posts")
            .then((res) => {
                setPosts(res.data.blogs);
            })
            .finally(() => {
                setLoader(false);
            });
    }, []);

    return (
        <div className="lg:col-span-8 col-span-12">
            {loader ? <Loader /> : (
                <div className="grid md:grid-cols-2 grid-cols-1 gap-[30px]">
                    {posts.map((post, i) => (
                        <BlogItem key={i} post={post} />
                    ))}
                </div>
            )}
            <div className="pagination mt-14">
                <ul className=" flex justify-center space-x-3">
                    <li className="inline-flex">
                        <a
                            href="#"
                            className="flex w-12 h-12 flex-col items-center justify-center bg-[#ECECEC] rounded font-semibold"
                        >
                            <iconify-icon
                                icon="heroicons:chevron-double-left-20-solid"
                                className=" text-2xl"
                            />
                        </a>
                    </li>
                    <li className="inline-flex">
                        <a
                            href="#"
                            className="flex w-12 h-12 flex-col items-center justify-center bg-primary text-white rounded font-semibold"
                        >
                            1
                        </a>
                    </li>
                    <li className="inline-flex">
                        <a
                            href="#"
                            className="flex w-12 h-12 flex-col items-center justify-center bg-[#ECECEC] rounded font-semibold"
                        >
                            2
                        </a>
                    </li>
                    <li className="inline-flex">
                        <a
                            href="#"
                            className="flex w-12 h-12 flex-col items-center justify-center bg-[#ECECEC] rounded font-semibold"
                        >
                            3
                        </a>
                    </li>
                    <li className="inline-flex">
                        <a
                            href="#"
                            className="flex w-12 h-12 flex-col items-center justify-center bg-[#ECECEC] rounded font-semibold"
                        >
                            4
                        </a>
                    </li>
                    <li className="inline-flex">
                        <a
                            href="#"
                            className="flex w-12 h-12 flex-col items-center justify-center bg-[#ECECEC] rounded font-semibold"
                        >
                            <iconify-icon
                                icon="heroicons:chevron-double-right-20-solid"
                                className=" text-2xl"
                            />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ListBlogs;
