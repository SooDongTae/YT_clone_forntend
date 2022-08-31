import React, { useState } from 'react'
import { IoIosSearch } from "react-icons/io"
import { BsFillMicFill, BsKeyboardFill, BsBell } from "react-icons/bs"
import { AiOutlineVideoCameraAdd } from "react-icons/ai"
import { VscMenu } from "react-icons/vsc"
import  styles from '../styles/Header.module.css'
const Header = () => {
  const [kColor, setkColor] = useState('gray');
  return (
    <div className={styles.Header_container}>
      <div className={styles.Header_logo_box}>
        <VscMenu className={styles.Header_menu} color='black' size='20'/>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlarhI6h34FuayM6pl2zHnEySeUy-uR5GCbQ&usqp=CAU' />
      </div>
      <div className={styles.Header_search_box}>
        <div className={styles.Keyboard_in_search}>
          <BsKeyboardFill 
          onMouseOver={() => {setkColor('black')}}
          onMouseLeave={() => {setkColor('gray')}}
          className={styles.Keyboard_icon} color={kColor} size='20' />
        </div>
        <input className={styles.Header_input} type='text' placeholder='검색'/>
        <div className={styles.Header_submit}>
            <IoIosSearch color='gray' size='25'/>
        </div>
        <div className={styles.Header_mic_box}>
          <BsFillMicFill color='black' size='18'/>
        </div>
      </div>
      <div className={styles.Header_right_part}>
        <AiOutlineVideoCameraAdd className={styles.Header_icons} color='black' size='22'/>
        <BsBell className={styles.Header_icons} color='black' size='20'/>
        <img src='https://yt3.ggpht.com/ytc/AMLnZu9Jzp859A5IesAX3WqVFY0ocYhG3_oFkYuLlNlH1KPJhA=s88-c-k-c0x00ffffff-no-rj-mo'/>
      </div>
    </div>
  )
}

export default Header