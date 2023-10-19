import React, { useEffect, useState } from "react";
import { BlogSingle, BreadCrumb } from "../components";
import { useParams } from "react-router-dom";

const Blog = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    useEffect(() => {
        scrollTo(0, 0);
    }, []);
    return (
        <>
            <BreadCrumb title={title} content={description} />
            <BlogSingle setTitle={setTitle} setDescription={setDescription} />
        </>
    );
};

export default Blog;
