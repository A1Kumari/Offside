import React from "react"
import {AiOutlineArrowDown} from 'react-icons/ai';
import styles from "./DropDown.module.css";

const Dropdown =()=>{
    return(
        <>
        <div className={styles.circle}>
        <h1 id="text"><AiOutlineArrowDown/></h1>
        </div>
        </>
    )
}

export default Dropdown;