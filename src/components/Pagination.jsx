import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { getBlogsAction } from "../actions";

const Pagination = ({ setPosts, setLoader }) => {
    const count = 1000;
    const itemsPerPage = 10;
    const pageCount = Math.ceil(count / itemsPerPage);

    const handlePageClick = (event) => {
        setLoader(true);
        getBlogsAction(event.selected * itemsPerPage, itemsPerPage)
            .then((res) => {
                setPosts(res.data.blogs);
            })
            .finally(() => {
                setLoader(false);
            });
    };

    return (
        <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
            containerClassName="pagination flex justify-center space-x-3"
            pageClassName="page-item inline-flex"
            pageLinkClassName="page-link flex w-12 h-12 flex-col items-center bg-[#ECECEC] justify-center rounded font-semibold"
            activeClassName="active"
            nextClassName="inline-flex"
            activeLinkClassName="!bg-primary text-white"
            nextLinkClassName="flex w-12 h-12 flex-col items-center justify-center bg-[#ECECEC] rounded font-semiboldpage-link"
            previousClassName="inlline-flex"
            previousLinkClassName="flex w-12 h-12 flex-col items-center justify-center bg-[#ECECEC] rounded font-semibold"
        />
    );
};

export default Pagination;
