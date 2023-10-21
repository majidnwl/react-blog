import axios from "axios";
import React, { useEffect, useState } from "react";
import BlogItem from "./BlogItem";
import Loader from "./Loader";
import Pagination from "./Pagination";
import { getBlogsAction } from "../actions";

const ListBlogs = () => {
    const [posts, setPosts] = useState([]);
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        setLoader(true);
        getBlogsAction()
            .then((res) => {
                setPosts(res.data.blogs);
            })
            .finally(() => {
                setLoader(false);
            });
    }, []);

    return (
        <div className="lg:col-span-8 col-span-12">
            {loader ? (
                <Loader />
            ) : (
                <div className="grid md:grid-cols-2 grid-cols-1 gap-[30px]">
                    {posts.map((post, i) => (
                        <BlogItem key={i} post={post} />
                    ))}
                </div>
            )}
            <div className="pagination mt-14">
                <Pagination setPosts={setPosts} setLoader={setLoader}/>
            </div>
        </div>
    );
};

export default ListBlogs;
