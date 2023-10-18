import React from "react";
import { NAV_LINKS } from "../constants";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header className="site-header  header-normal top-0 bg-white z-[9] rt-sticky">
            <div className="main-header py-8">
                <div className="container">
                    <div className=" flex items-center justify-between flex-wrap">
                        <a
                            href="index-2.html"
                            className="brand-logo flex-none lg:mr-10 md:w-auto max-w-[120px] "
                        >
                            <img src="/images/logo/logo.svg" alt="" />
                        </a>
                        <div className="flex items-center flex-1">
                            <div className="flex-1 main-menu  lg:relative xl:mr-[74px] mr-6">
                                <ul className="menu-active-classes">
                                    {NAV_LINKS.map((nav, i) => (
                                        <li
                                            key={i}
                                            className="menu-item-has-children"
                                        >
                                            <Link to={nav.link}>
                                                {nav.label}
                                            </Link>
                                            {/* <ul class="sub-menu">
                                                {nav?.children?.map((subNav, i) => (
                                                <li key={i}>
                                                    <Link to={subNav.link}>
                                                        {subNav.label}
                                                    </Link>
                                                </li>))}
                                            </ul> */}
                                        </li>
                                    ))}
                                </ul>
                                <div className="lg:block hidden">
                                    <div className="border border-gray rounded-md  h-[46px] modal-search">
                                        <input
                                            type="text"
                                            className=" block w-full rounded-md  h-full border-none ring-0 focus:outline-none  focus:ring-0"
                                            placeholder="Search.."
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex-none flex space-x-[18px]">
                                <button
                                    type="button"
                                    className=" md:w-[56px] md:h-[56px] h-10 w-10 rounded bg-[#F8F8F8] flex flex-col items-center justify-center modal-trigger"
                                >
                                    <img src="/images/svg/search.svg" alt="" />
                                </button>
                                <div className=" block   lg:hidden">
                                    <button
                                        type="button"
                                        className=" text-3xl md:w-[56px] h-10 w-10 md:h-[56px] rounded bg-[#F8F8F8] flex flex-col items-center justify-center
                                          menu-click"
                                    >
                                        <iconify-icon
                                            icon="cil:hamburger-menu"
                                            rotate="180deg"
                                        />
                                    </button>
                                </div>
                                <div className=" hidden lg:block">
                                    <a
                                        href="#"
                                        className="btn btn-primary py-[15px] px-8 "
                                    >
                                        Start Free Trial
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:hidden block mt-4">
                        <div className="border border-gray rounded-md  h-[46px] modal-search">
                            <input
                                type="text"
                                className=" block w-full rounded-md  h-full border-none ring-0 focus:outline-none  focus:ring-0"
                                placeholder="Search.."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
