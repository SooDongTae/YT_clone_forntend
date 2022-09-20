import React from 'react'
import { FiThumbsDown, FiThumbsUp } from 'react-icons/fi'
import styles from "../styles/Comment.module.css"


const Comment = (props) => {
  return (
    <div className={styles.Comment_box}>
        <img src={props.comment.imgSrc} />
        <div>
            <div className={styles.Comment_info}>
                <p>{props.comment.userName}</p>
                <span>{props.comment.date}</span>
            </div>
            <p>{props.comment.comment}</p>
            <div className={styles.Comment_good_bad}>
                <FiThumbsUp size={15} />
                <span>{props.comment.good}</span>
                <FiThumbsDown size={15} />
            </div>
        </div>
    </div>
  )
}

export default Comment