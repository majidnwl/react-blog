import React from "react";
import { BreadCrumb, ListBlogs } from "../components";

const Blogs = () => {
    return (
        <>
            <BreadCrumb />
            <div className="nav-tab-wrapper tabs  section-padding">
                <div className="container">
                    <div className="grid grid-cols-12 gap-[30px]">
                        <ListBlogs />
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
                                                    alt=""
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
                                                <span>
                                                    Art &amp; Design (45)
                                                </span>
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
                                                        alt=""
                                                        className=" w-full h-full object-cover rounded"
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex-1 ">
                                                <div className="mb-1 font-semibold text-black">
                                                    How to Manage Ads For
                                                    Clients The Right Way
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
                                                        alt=""
                                                        className=" w-full h-full object-cover rounded"
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex-1 ">
                                                <div className="mb-1 font-semibold text-black">
                                                    How to Manage Ads For
                                                    Clients The Right Way
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
                                                        alt=""
                                                        className=" w-full h-full object-cover rounded"
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex-1 ">
                                                <div className="mb-1 font-semibold text-black">
                                                    How to Manage Ads For
                                                    Clients The Right Way
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
                                    <h4 className="widget-title">
                                        Popular Tags
                                    </h4>
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
                                    <h4 className="widget-title">
                                        Instagram Feed
                                    </h4>
                                    <div className="grid grid-cols-3 gap-4">
                                        <div>
                                            <a
                                                href="#"
                                                className="group relative block h-20 w-full rounded"
                                            >
                                                <img
                                                    src="/images/all-img/ins-1.png"
                                                    alt=""
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
                                                    alt=""
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
                                                    alt=""
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
                                                    alt=""
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
                                                    alt=""
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
                                                    alt=""
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
        </>
    );
};

export default Blogs;
