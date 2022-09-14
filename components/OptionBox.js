import React from 'react'
import { FiThumbsUp, FiThumbsDown } from "react-icons/fi"
import { RiShareForwardLine, RiScissorsLine, RiPlayListAddLine } from "react-icons/ri"
import { HiDownload, HiOutlineDotsHorizontal } from "react-icons/hi"
import styles from "../styles/OptionBox.module.css"

const OptionBox = () => {
  return (
    <div className={styles.OptionBox_container}>
        <div>
            <FiThumbsUp size={22} />
            <span>4.2천</span>
        </div>
        <div>
            <FiThumbsDown size={22} />
            <span>싫어요</span>
        </div>
        <div>
            <RiShareForwardLine size={22} />
            <span>공유</span>
        </div>
        <div>
            <HiDownload size={22} />
            <span>오프라인저장</span>
        </div>
        <div>
            <RiScissorsLine size={22} />
            <span>클립</span>
        </div>
        <div>
            <RiPlayListAddLine size={22} />
            <span>저장</span>
        </div>
        <div>
            <HiOutlineDotsHorizontal size={22} />
        </div>
    </div>
  )
}

export default OptionBox