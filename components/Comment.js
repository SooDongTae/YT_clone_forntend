import React, { useEffect, useRef, useState } from 'react'
import { IoMdThumbsDown, IoMdThumbsUp } from 'react-icons/io'
import { BsThreeDotsVertical } from 'react-icons/bs'
import styles from "../styles/Comment.module.css"
import Link from 'next/link'
import axios from 'axios'
// import Link from 'next/link'

const Comment = (props) => {

  const [isGood, setIsGood] = useState(false)
  const [isBad, setIsBad] = useState(false)
  const [menuOn, setMenuOn] = useState(false);
  const [user, setUser] = useState({});
  useEffect(() => {
    axios.get(`http://10.150.151.12:8000/getprofile?id=${props.comment.owner}`)
    .then(res=>{
      console.log(res.data.data[0]);
      setUser(res.data.data[0]);
    })
  }, []);
  return (
    <div onMouseOver={() => setMenuOn(true)} onMouseLeave={() => setMenuOn(false)} className={styles.Comment_box}>
      <Link href={{
        pathname: '/user',
      }}>
        <img src={user.profile} />
      </Link>
      <div>
          <div className={styles.Comment_info}>
            <p>{user.username}</p>
            <span>{props.comment.date}</span>
          </div>
          <p>{props.comment.content}</p>
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
      {menuOn && <BsThreeDotsVertical className={styles.Comment_menu} />} 
    </div>
  )
}

export default Comment