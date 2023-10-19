import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import "./BlogSingle.css";
import { getUserAction } from "../actions";
import Loader from "./Loader";

const BlogSingle = ({ setTitle, setDescription }) => {
    const { blogId } = useParams();
    const [post, setPost] = useState({});
    const [firstName, setFirstName] = useState("");
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        if (post.user_id) {
            getUserAction(post.user_id).then((res) => {
                setFirstName(res.data.user.first_name);
            });
            setTitle(post.title);
            setDescription(post.description);
        }
    }, [post]);

    useEffect(() => {
        setLoader(true);
        axios
            .get(
                `https://api.slingacademy.com/v1/sample-data/blog-posts/${blogId}`
            )
            .then((res) => {
                setPost(res.data.blog);
            })
            .finally(() => {
                setLoader(false);
            });
    }, [blogId]);

    return (
        <div className="nav-tab-wrapper tabs  section-padding">
            <div className="container">
                <div className="grid grid-cols-12 gap-[30px]">
                    <div className="lg:col-span-8 col-span-12">
                        {loader ? (
                            <Loader />
                        ) : (
                            <div className="bg-[#F8F8F8] rounded-md">
                                <img
                                    src={post.photo_url}
                                    alt
                                    className=" rounded-t-md mb-10"
                                />
                                <div className="px-10 pb-10">
                                    <div className="flex  flex-wrap  xl:space-x-10 space-x-5 mt-6 mb-6">
                                        <a
                                            className=" flex items-center space-x-2"
                                            href="#"
                                        >
                                            <img
                                                src="/images/svg/user3.svg"
                                                alt
                                            />
                                            <span>{firstName}</span>
                                        </a>
                                        <a
                                            className=" flex items-center space-x-2"
                                            href="#"
                                        >
                                            <img
                                                src="/images/svg/calender.svg"
                                                alt
                                            />
                                            <span>3 21 Feb, 22</span>
                                        </a>
                                        <a
                                            className=" flex items-center space-x-2"
                                            href="#"
                                        >
                                            <img
                                                src="/images/icon/clock.svg"
                                                alt
                                            />
                                            <span>3 Min Read</span>
                                        </a>
                                        <a
                                            className=" flex items-center space-x-2"
                                            href="#"
                                        >
                                            <img
                                                src="/images/svg/comments.svg"
                                                alt
                                            />
                                            <span>02 Comments</span>
                                        </a>
                                    </div>
                                    <h3>{post.title}</h3>
                                    <p className="mt-6">
                                        {post.content_html &&
                                            parse(post.content_html)}
                                    </p>

                                    <div className="grid xl:grid-cols-2 grid-cols-1  gap-5 md:mt-14 mt-8 ">
                                        <ul className="flex items-center space-x-3 ">
                                            <li className=" text-black font-semibold">
                                                Tags:
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className=" px-3 py-1  bg-white rounded hover:text-primary"
                                                >
                                                    Business
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className=" px-3 py-1  bg-white rounded hover:text-primary"
                                                >
                                                    Education
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className=" px-3 py-1  bg-white rounded hover:text-primary"
                                                >
                                                    Design
                                                </a>
                                            </li>
                                        </ul>
                                        <ul className="flex space-x-3 xl:justify-end items-center  ">
                                            <li className=" text-black font-semibold">
                                                Share On:
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="flex h-8 w-8"
                                                >
                                                    <img
                                                        src="/images/icon/fb.svg"
                                                        alt
                                                    />
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="flex h-8 w-8"
                                                >
                                                    <img
                                                        src="/images/icon/tw.svg"
                                                        alt
                                                    />
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="flex h-8 w-8"
                                                >
                                                    <img
                                                        src="/images/icon/pn.svg"
                                                        alt
                                                    />
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="flex h-8 w-8"
                                                >
                                                    <img
                                                        src="/images/icon/ins.svg"
                                                        alt
                                                    />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* related post  */}
                                    <div className="grid xl:grid-cols-2 grid-cols-1  gap-[30px] md:mt-14 mt-8">
                                        <a
                                            className=" flex space-x-4 shadow-box7 rounded p-5 bg-white"
                                            href="#"
                                        >
                                            <div className="flex-none ">
                                                <div className="h-20 w-20  rounded">
                                                    <img
                                                        src="/images/all-img/rc-1.png"
                                                        alt
                                                        className=" w-full h-full object-cover rounded"
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex-1 ">
                                                <span className=" text-primary  text-base mb-1">
                                                    Prev Post
                                                </span>
                                                <div className="mb-1 font-semibold text-black">
                                                    How Technology Can Help You
                                                    Stay Healthy
                                                </div>
                                            </div>
                                        </a>
                                        {/* end single */}
                                        <a
                                            className=" flex  flex-row-reverse shadow-box7 bg-white rounded p-5"
                                            href="#"
                                        >
                                            <div className="flex-none ">
                                                <div className="h-20 w-20  rounded ml-4">
                                                    <img
                                                        src="/images/all-img/rc-3.png"
                                                        alt
                                                        className=" w-full h-full object-cover rounded"
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex-1 text-right ">
                                                <span className=" text-primary  text-base mb-1">
                                                    Next Post
                                                </span>
                                                <div className="mb-1 font-semibold text-black">
                                                    How Technology Can Help You
                                                    Stay Healthy
                                                </div>
                                            </div>
                                        </a>
                                        {/* end single */}
                                    </div>
                                </div>
                            </div>
                        )}
                        {/* comments start */}
                        <div className=" mt-14">
                            <h3 className=" mb-6">3 Comments</h3>
                            <ul className="comments space-y-4">
                                <li className="block border-b border-[#ECECEC] pb-6 mt-6 last:border-0 last:pb-0">
                                    <div className="flex">
                                        <div className="flex-none">
                                            <div className="h-[72px] w-[72px] rounded-full mr-6">
                                                <img
                                                    src="../../..//images/all-img/ins-1.png"
                                                    alt
                                                    className="w-full block h-full object-contain rounded-full"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex flex-wrap justify-between mb-2">
                                                <div>
                                                    <span className="text-xl  font-semibold text-black block mb-1">
                                                        Ferira Watson
                                                    </span>
                                                    <span className=" block">
                                                        Oct 09, 2021
                                                    </span>
                                                </div>
                                                <a
                                                    href="#"
                                                    className=" inline-flex px-3 py-1 rounded text-secondary bg-[#E3F9F6] hover:text-white hover:bg-secondary h-[35px]
                      items-center space-x-2 leading-[1]"
                                                >
                                                    <span className=" text-xl leading-[1] top-[3px] relative">
                                                        <iconify-icon
                                                            icon="charm:forward"
                                                            rotate="180deg"
                                                        />
                                                    </span>
                                                    <span className=" leading-[1]">
                                                        Reply
                                                    </span>
                                                </a>
                                            </div>
                                            <p>
                                                There are many variations of
                                                passages of Lorem Ipsum
                                                available, but the majority have
                                                suffered alteration in some form
                                            </p>
                                        </div>
                                    </div>
                                    <ul className="comments mt-6 space-y-4 ml-14 border-t border-[#ECECEC]">
                                        <li className="block border-b border-[#ECECEC] pb-6 mt-6 last:border-0 last:pb-0">
                                            <div className="flex">
                                                <div className="flex-none">
                                                    <div className="h-[72px] w-[72px] rounded-full mr-6">
                                                        <img
                                                            src="../../..//images/all-img/ins-3.png"
                                                            alt
                                                            className="w-full block h-full object-contain rounded-full"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex flex-wrap justify-between mb-2">
                                                        <div>
                                                            <span className="text-xl  font-semibold text-black block mb-1">
                                                                Ferira Watson
                                                            </span>
                                                            <span className=" block">
                                                                Oct 09, 2021
                                                            </span>
                                                        </div>
                                                        <a
                                                            href="#"
                                                            className=" inline-flex px-3 py-1 rounded text-secondary bg-[#E3F9F6] hover:text-white hover:bg-secondary h-[35px]
                              items-center space-x-2 leading-[1]"
                                                        >
                                                            <span className=" text-xl leading-[1] top-[3px] relative">
                                                                <iconify-icon
                                                                    icon="charm:forward"
                                                                    rotate="180deg"
                                                                />
                                                            </span>
                                                            <span className=" leading-[1]">
                                                                Reply
                                                            </span>
                                                        </a>
                                                    </div>
                                                    <p>
                                                        There are many
                                                        variations of passages
                                                        of Lorem Ipsum
                                                        available, but the
                                                        majority have suffered
                                                        alteration in some form
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li className="block">
                                    <div className="flex">
                                        <div className="flex-none">
                                            <div className="h-[72px] w-[72px] rounded-full mr-6">
                                                <img
                                                    src="../../..//images/all-img/ins-2.png"
                                                    alt
                                                    className="w-full block h-full object-contain rounded-full"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex flex-wrap justify-between mb-2">
                                                <div>
                                                    <span className="text-xl  font-semibold text-black block mb-1">
                                                        Ferira Watson
                                                    </span>
                                                    <span className=" block">
                                                        Oct 09, 2021
                                                    </span>
                                                </div>
                                                <a
                                                    href="#"
                                                    className=" inline-flex px-3 py-1 rounded text-secondary bg-[#E3F9F6] hover:text-white hover:bg-secondary h-[35px]
                      items-center space-x-2 leading-[1]"
                                                >
                                                    <span className=" text-xl leading-[1] top-[3px] relative">
                                                        <iconify-icon
                                                            icon="charm:forward"
                                                            rotate="180deg"
                                                        />
                                                    </span>
                                                    <span className=" leading-[1]">
                                                        Reply
                                                    </span>
                                                </a>
                                            </div>
                                            <p>
                                                There are many variations of
                                                passages of Lorem Ipsum
                                                available, but the majority have
                                                suffered alteration in some form
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        {/* Reply start */}
                        <div className=" mt-14">
                            <h3 className=" mb-4">Leave A Reply</h3>
                            <div>
                                Your email address will not be published.
                                Requires fields are marked*
                            </div>
                            <div className=" md:grid-cols-2 grid grid-cols-1 gap-[30px] mt-6 ">
                                <div>
                                    <input
                                        type="text"
                                        className=" from-control"
                                        placeholder="Name*"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        className=" from-control"
                                        placeholder="Email*"
                                    />
                                </div>
                                <div className="md:col-span-2 col-span-1">
                                    <input
                                        type="url"
                                        className=" from-control"
                                        placeholder="Website Address"
                                    />
                                </div>
                                <div className="md:col-span-2 col-span-1">
                                    <textarea
                                        className=" from-control"
                                        placeholder="Your Message*"
                                        rows={5}
                                        defaultValue={""}
                                    />
                                </div>
                            </div>
                            <button className="btn btn-primary mt-[30px]">
                                Post Comment
                            </button>
                        </div>
                    </div>
                    <div className="lg:col-span-4 col-span-12">
                        <div className="sidebarWrapper space-y-[30px]">
                            <div className="wdiget widget_search">
                                <div className="bg-[#F8F8F8] flex  rounded-md shadow-e1 items-center  py-[4px] pl-3  relative">
                                    <div className="flex-1">
                                        <input
                                            type="text"
                                            placeholder="Search keyword..."
                                            className="border-none focus:ring-0 bg-transparent"
                                        />
                                    </div>
                                    <div className="flex-none">
                                        <button className="btn btn-primary">
                                            <img
                                                src="/images/icon/search.svg"
                                                alt
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="wdiget widget_catagory">
                                <h4 className="widget-title">Categories</h4>
                                <ul className=" list-item space-y-4">
                                    <li className=" block">
                                        <a
                                            href="#"
                                            className=" flex justify-between bg-[#F8F8F8] py-[17px] px-5 rounded hover:bg-primary hover:text-white transition-all
                  duration-150"
                                        >
                                            <span>Development (23)</span>
                                            <span className=" text-2xl">
                                                <iconify-icon icon="heroicons:chevron-right-20-solid" />
                                            </span>
                                        </a>
                                    </li>
                                    <li className=" block">
                                        <a
                                            href="#"
                                            className=" flex justify-between bg-[#F8F8F8] py-[17px] px-5 rounded hover:bg-primary hover:text-white transition-all
                  duration-150"
                                        >
                                            <span>Art &amp; Design (45)</span>
                                            <span className=" text-2xl">
                                                <iconify-icon icon="heroicons:chevron-right-20-solid" />
                                            </span>
                                        </a>
                                    </li>
                                    <li className=" block">
                                        <a
                                            href="#"
                                            className=" flex justify-between bg-[#F8F8F8] py-[17px] px-5 rounded hover:bg-primary hover:text-white transition-all
                  duration-150"
                                        >
                                            <span>Data Science (14)</span>
                                            <span className=" text-2xl">
                                                <iconify-icon icon="heroicons:chevron-right-20-solid" />
                                            </span>
                                        </a>
                                    </li>
                                    <li className=" block">
                                        <a
                                            href="#"
                                            className=" flex justify-between bg-[#F8F8F8] py-[17px] px-5 rounded hover:bg-primary hover:text-white transition-all
                  duration-150"
                                        >
                                            <span>Data Science (14)</span>
                                            <span className=" text-2xl">
                                                <iconify-icon icon="heroicons:chevron-right-20-solid" />
                                            </span>
                                        </a>
                                    </li>
                                    <li className=" block">
                                        <a
                                            href="#"
                                            className=" flex justify-between bg-[#F8F8F8] py-[17px] px-5 rounded hover:bg-primary hover:text-white transition-all
                  duration-150"
                                        >
                                            <span>Technology (28)</span>
                                            <span className=" text-2xl">
                                                <iconify-icon icon="heroicons:chevron-right-20-solid" />
                                            </span>
                                        </a>
                                    </li>
                                    <li className=" block">
                                        <a
                                            href="#"
                                            className=" flex justify-between bg-[#F8F8F8] py-[17px] px-5 rounded hover:bg-primary hover:text-white transition-all
                  duration-150"
                                        >
                                            <span>It Management (34)</span>
                                            <span className=" text-2xl">
                                                <iconify-icon icon="heroicons:chevron-right-20-solid" />
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="wdiget widget-recent-post">
                                <h4 className=" widget-title">
                                    Related Courses
                                </h4>
                                <ul className="list">
                                    <li className=" flex space-x-4 border-[#ECECEC] pb-6 mb-6 last:pb-0 last:mb-0 last:border-0 border-b">
                                        <div className="flex-none ">
                                            <div className="h-20 w-20  rounded">
                                                <img
                                                    src="/images/all-img/rc-1.png"
                                                    alt
                                                    className=" w-full h-full object-cover rounded"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex-1 ">
                                            <div className="mb-1 font-semibold text-black">
                                                How to Manage Ads For Clients
                                                The Right Way
                                            </div>
                                            <a
                                                className=" text-secondary font-semibold"
                                                href="#"
                                            >
                                                Read More
                                            </a>
                                        </div>
                                    </li>
                                    <li className=" flex space-x-4 border-[#ECECEC] pb-6 mb-6 last:pb-0 last:mb-0 last:border-0 border-b">
                                        <div className="flex-none ">
                                            <div className="h-20 w-20  rounded">
                                                <img
                                                    src="/images/all-img/rc-2.png"
                                                    alt
                                                    className=" w-full h-full object-cover rounded"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex-1 ">
                                            <div className="mb-1 font-semibold text-black">
                                                How to Manage Ads For Clients
                                                The Right Way
                                            </div>
                                            <a
                                                className=" text-secondary font-semibold"
                                                href="#"
                                            >
                                                Read More
                                            </a>
                                        </div>
                                    </li>
                                    <li className=" flex space-x-4 border-[#ECECEC] pb-6 mb-6 last:pb-0 last:mb-0 last:border-0 border-b">
                                        <div className="flex-none ">
                                            <div className="h-20 w-20  rounded">
                                                <img
                                                    src="/images/all-img/rc-3.png"
                                                    alt
                                                    className=" w-full h-full object-cover rounded"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex-1 ">
                                            <div className="mb-1 font-semibold text-black">
                                                How to Manage Ads For Clients
                                                The Right Way
                                            </div>
                                            <a
                                                className=" text-secondary font-semibold"
                                                href="#"
                                            >
                                                Read More
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="wdiget">
                                <h4 className="widget-title">Popular Tags</h4>
                                <ul className="flex flex-wrap">
                                    <li className="mr-2 mb-2">
                                        <a
                                            href="#"
                                            className="bg-[#F8F8F8] px-3 py-1 rounded text-base  transition-all  duration-150 hover:bg-primary hover:text-white"
                                        >
                                            Business
                                        </a>
                                    </li>
                                    <li className="mr-2 mb-2">
                                        <a
                                            href="#"
                                            className="bg-[#F8F8F8] px-3 py-1 rounded text-base  transition-all  duration-150 hover:bg-primary hover:text-white"
                                        >
                                            Education
                                        </a>
                                    </li>
                                    <li className="mr-2 mb-2">
                                        <a
                                            href="#"
                                            className="bg-[#F8F8F8] px-3 py-1 rounded text-base  transition-all  duration-150 hover:bg-primary hover:text-white"
                                        >
                                            Design
                                        </a>
                                    </li>
                                    <li className="mr-2 mb-2">
                                        <a
                                            href="#"
                                            className="bg-[#F8F8F8] px-3 py-1 rounded text-base  transition-all  duration-150 hover:bg-primary hover:text-white"
                                        >
                                            Students
                                        </a>
                                    </li>
                                    <li className="mr-2 mb-2">
                                        <a
                                            href="#"
                                            className="bg-[#F8F8F8] px-3 py-1 rounded text-base  transition-all  duration-150 hover:bg-primary hover:text-white"
                                        >
                                            Teachers
                                        </a>
                                    </li>
                                    <li className="mr-2 mb-2">
                                        <a
                                            href="#"
                                            className="bg-[#F8F8F8] px-3 py-1 rounded text-base  transition-all  duration-150 hover:bg-primary hover:text-white"
                                        >
                                            Classroom
                                        </a>
                                    </li>
                                    <li className="mr-2 mb-2">
                                        <a
                                            href="#"
                                            className="bg-[#F8F8F8] px-3 py-1 rounded text-base  transition-all  duration-150 hover:bg-primary hover:text-white"
                                        >
                                            Online
                                        </a>
                                    </li>
                                    <li className="mr-2 mb-2">
                                        <a
                                            href="#"
                                            className="bg-[#F8F8F8] px-3 py-1 rounded text-base  transition-all  duration-150 hover:bg-primary hover:text-white"
                                        >
                                            e-Learning
                                        </a>
                                    </li>
                                    <li className="mr-2 mb-2">
                                        <a
                                            href="#"
                                            className="bg-[#F8F8F8] px-3 py-1 rounded text-base  transition-all  duration-150 hover:bg-primary hover:text-white"
                                        >
                                            Book
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="wdiget">
                                <h4 className="widget-title">Instagram Feed</h4>
                                <div className="grid grid-cols-3 gap-4">
                                    <div>
                                        <a
                                            href="#"
                                            className="group relative block h-20 w-full rounded"
                                        >
                                            <img
                                                src="/images/all-img/ins-1.png"
                                                alt
                                                className="block h-full w-full rounded object-cover"
                                            />
                                            <div
                                                className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center rounded bg-black bg-opacity-40
                                              text-3xl text-white opacity-0 transition-all duration-150 group-hover:opacity-100"
                                            >
                                                <span className="scale-0 transition-all duration-150 group-hover:scale-100">
                                                    <iconify-icon icon="akar-icons:instagram-fill" />
                                                </span>
                                            </div>
                                        </a>
                                    </div>
                                    <div>
                                        <a
                                            href="#"
                                            className="group relative block h-20 w-full rounded"
                                        >
                                            <img
                                                src="/images/all-img/ins-2.png"
                                                alt
                                                className="block h-full w-full rounded object-cover"
                                            />
                                            <div
                                                className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center rounded bg-black bg-opacity-40
                                              text-3xl text-white opacity-0 transition-all duration-150 group-hover:opacity-100"
                                            >
                                                <span className="scale-0 transition-all duration-150 group-hover:scale-100">
                                                    <iconify-icon icon="akar-icons:instagram-fill" />
                                                </span>
                                            </div>
                                        </a>
                                    </div>
                                    <div>
                                        <a
                                            href="#"
                                            className="group relative block h-20 w-full rounded"
                                        >
                                            <img
                                                src="/images/all-img/ins-3.png"
                                                alt
                                                className="block h-full w-full rounded object-cover"
                                            />
                                            <div
                                                className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center rounded bg-black bg-opacity-40
                                              text-3xl text-white opacity-0 transition-all duration-150 group-hover:opacity-100"
                                            >
                                                <span className="scale-0 transition-all duration-150 group-hover:scale-100">
                                                    <iconify-icon icon="akar-icons:instagram-fill" />
                                                </span>
                                            </div>
                                        </a>
                                    </div>
                                    <div>
                                        <a
                                            href="#"
                                            className="group relative block h-20 w-full rounded"
                                        >
                                            <img
                                                src="/images/all-img/ins-4.png"
                                                alt
                                                className="block h-full w-full rounded object-cover"
                                            />
                                            <div
                                                className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center rounded bg-black bg-opacity-40
                                              text-3xl text-white opacity-0 transition-all duration-150 group-hover:opacity-100"
                                            >
                                                <span className="scale-0 transition-all duration-150 group-hover:scale-100">
                                                    <iconify-icon icon="akar-icons:instagram-fill" />
                                                </span>
                                            </div>
                                        </a>
                                    </div>
                                    <div>
                                        <a
                                            href="#"
                                            className="group relative block h-20 w-full rounded"
                                        >
                                            <img
                                                src="/images/all-img/ins-5.png"
                                                alt
                                                className="block h-full w-full rounded object-cover"
                                            />
                                            <div
                                                className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center rounded bg-black bg-opacity-40
                                              text-3xl text-white opacity-0 transition-all duration-150 group-hover:opacity-100"
                                            >
                                                <span className="scale-0 transition-all duration-150 group-hover:scale-100">
                                                    <iconify-icon icon="akar-icons:instagram-fill" />
                                                </span>
                                            </div>
                                        </a>
                                    </div>
                                    <div>
                                        <a
                                            href="#"
                                            className="group relative block h-20 w-full rounded"
                                        >
                                            <img
                                                src="/images/all-img/ins-6.png"
                                                alt
                                                className="block h-full w-full rounded object-cover"
                                            />
                                            <div
                                                className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center rounded bg-black bg-opacity-40
                                              text-3xl text-white opacity-0 transition-all duration-150 group-hover:opacity-100"
                                            >
                                                <span className="scale-0 transition-all duration-150 group-hover:scale-100">
                                                    <iconify-icon icon="akar-icons:instagram-fill" />
                                                </span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogSingle;
