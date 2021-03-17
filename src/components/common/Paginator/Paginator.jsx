import React from 'react';
import styles from "./Paginator.module.css";
import userPhoto from "../../../assets/images/user.png";
import {NavLink} from "react-router-dom";

let Paginator = ( {currentPage, onPageChanged, totalUsersCount, pageSize}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return <div>
        {pages.map(p => {
            return <span className={currentPage === p && styles.selectedPage}
                         onClick={(e) => {
                             onPageChanged(p);
                         }}>{p}</span>
        })}
    </div>
};

export default Paginator;