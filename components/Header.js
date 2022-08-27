import React from 'react'
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/Ai"
import { FaKeyboard, FaYoutube } from "react-icons/Fa"
import { VscMenu } from "react-icons/vsc"
import  styles from '../styles/Header.module.css'
const Header = () => {
  return (
    <div className={styles.Header_container}>
      <div className={styles.Header_logo_box}>
        <VscMenu className={styles.Header_menu} color='black'/>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlarhI6h34FuayM6pl2zHnEySeUy-uR5GCbQ&usqp=CAU' />
      </div>
        <div className={styles.Header_search_box}>
            
            <input className={styles.Header_input} type='text' placeholder='검색'/>
            <div className={styles.Header_submit}>
                <AiOutlineSearch color='black' size='30'/>
            </div>
        </div>
    </div>
  )
}

export default Header