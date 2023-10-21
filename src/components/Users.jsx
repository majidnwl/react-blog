import React, { useEffect, useState } from "react";
import { getUsersAction } from "../actions";

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsersAction().then((res) => {
            setUsers(res.data.users);
        });
    }, []);

    return (
        <div className="wdiget widget_catagory">
            <h4 className="widget-title">Users</h4>
            <ul className=" list-item space-y-4">
                {users.map((user) => (
                    <li key={user.id} className=" block">
                        <a
                            href="#"
                            className=" flex justify-between bg-[#F8F8F8] py-[17px] px-5 rounded hover:bg-primary hover:text-white transition-all
                  duration-150"
                        >
                            <span>{user.first_name + ' ' + user.last_name}  ({user.gender == 'male' ? 'M' : 'F'})</span>
                            <span className=" text-2xl">
                                <iconify-icon icon="heroicons:chevron-right-20-solid" />
                            </span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Users;
