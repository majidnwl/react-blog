import React from "react";
import { Link } from "react-router-dom";

const BreadCrumb = ({title, content}) => {
    return (
        <div className="breadcrumbs section-padding bg-[url('/images/all-img/bred.html')] bg-cover bg-center bg-no-repeat">
            <div className="container text-center">
                <h2>{title}</h2>
                <nav>
                    <ol className="flex items-center justify-center space-x-3">
                        <li className="breadcrumb-item">
                            <Link to="/">Home </Link>
                        </li>
                        <li className="breadcrumb-item">-</li>
                        <li className="text-primary">
                            {content}
                        </li>
                    </ol>
                </nav>
            </div>
        </div>
    );
};

export default BreadCrumb;
