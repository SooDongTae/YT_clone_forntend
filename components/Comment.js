import React, { useState } from 'react'
import { IoMdThumbsDown, IoMdThumbsUp } from 'react-icons/io'
import { BsThreeDotsVertical } from 'react-icons/bs'
import styles from "../styles/Comment.module.css"


const Comment = (props) => {

  // const [list, setList] = useState(props.commentsSample)

  const [isGood, setIsGood] = useState(false)
  const [isBad, setIsBad] = useState(false)
  const [menuOn, setMenuOn] = useState(false);
  return (
    <div onMouseOver={() => setMenuOn(true)} onMouseLeave={() => setMenuOn(false)} className={styles.Comment_box}>
      {menuOn && <BsThreeDotsVertical className={styles.Comment_menu} />} 
        <img src={props.comment.imgSrc} />
        <div>
            <div className={styles.Comment_info}>
                <p>{props.comment.userName}</p>
                <span>{props.comment.date}</span>
            </div>
            <p>{props.comment.comment}</p>
            <div className={styles.Comment_good_bad}>
                <IoMdThumbsUp 
                  onClick={() => {
                    setIsGood(!isGood)
                    setIsBad(false)
                    if(!isGood)props.comment.good++
                    else props.comment.good--
                  }} 
                  color={isGood ? "rgb(0, 102, 255)" : "black"}
                  size={15} 
                />
                <span style={{width: "10px", textAlign: "center"}}>{props.comment.good}</span>
                <IoMdThumbsDown 
                  onClick={() => {
                    setIsBad(!isBad)
                    if(isGood) {
                      props.comment.good--
                      setIsGood(false)
                    }
                  }}
                  color={isBad ? "rgb(0, 102, 255)" : "black"}
                  size={15} 
                />
            </div>
        </div>
    </div>
  )
}

export default Comment