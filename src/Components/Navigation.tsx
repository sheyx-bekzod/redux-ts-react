import React from 'react';
import {Link} from "react-router-dom";

function Navigation(props: any) {
    return (
        <div className="flex justify-between items-center h-[50px] px-5 shadow-md bg-gray-500 text-white">
            <h3>Git hub search</h3>
            <ul>
                <li>
                    <Link to="/" className={"mr-5"}>Home</Link>
                    <Link to="/">Favourite</Link>
                </li>
                <li></li>
            </ul>
        </div>
    );
}

export default Navigation;