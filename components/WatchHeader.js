import React, { useState, useContext, createContext, useEffect } from 'react'
import { IoIosSearch, IoCloseOutline } from "react-icons/io"
import { BsFillMicFill, BsKeyboardFill, BsBell } from "react-icons/bs"
import { AiOutlineVideoCameraAdd } from "react-icons/ai"
import { CgSoftwareUpload } from "react-icons/cg"
import { VscMenu } from "react-icons/vsc"
import  styles from '../styles/Header.module.css'
import Popup from 'reactjs-popup';
import FileInput from './FileInput'
import TitleInput from './TitleInput'
import { useRecoilState } from 'recoil'
import { openState } from './states'
import OpenedSideBar from './OpenedSideBar'
import SideBar from './SideBar'
import Link from 'next/link'
import { useRouter } from 'next/router'
import axios from 'axios'
export const UploadStatus = React.createContext();


const WatchHeader = () => {
  const [isSearchMouseOver, setIsSearchMouseOver] = useState(false);
  const [isMicMouseOver, setIsMicMouseOver] = useState(false);
  const [isMakeMouseOver, setIsMakeMouseOver] = useState(false);
  const [isInformMouseOver, setIsInformMouseOver] = useState(false);
  const [kColor, setKColor] = useState('gray');
  const [modalOpened, setModalOpened] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [isOpened, setIsOpened] = useRecoilState(openState);
  const router = useRouter();
  const [isLogged, setIsLogged] = useState(false);
  const [userprofile, setUser] = useState('');
  useEffect(() => {
    if(localStorage.getItem('token') !== null){
      setIsLogged(true);
      axios.get(`http://10.150.151.12:8000/getprofile1?token=${localStorage.getItem('token')}`)
            .then(res=>{
              setUser(res.data.data[0].profile);
              console.log(res.data.data[0].profile);
            })
    }
  }, []);
  return (
    <>
    <div className={styles.Header_container}>
      <div className={styles.Header_logo_box}>
        <VscMenu className={styles.Header_menu} color='black' size='20' onClick={() => {setIsOpened(prev => (!prev))}} />
        <Link href={"/"}>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlarhI6h34FuayM6pl2zHnEySeUy-uR5GCbQ&usqp=CAU' />
        </Link>
      </div>
      <div className={styles.Header_search_box}>
        <div className={styles.Keyboard_in_search}>
          <BsKeyboardFill 
          onMouseOver={() => {setKColor('black')}}
          onMouseLeave={() => {setKColor('gray')}}
          className={styles.Keyboard_icon} color={kColor} size='20' />
        </div>
        <input className={styles.Header_input} type='text' placeholder='검색'
                onChange={(e) => {setSearchText(e.target.value)}}
                onKeyPress={(e) => {
                  if(e.key === 'Enter'){
                    if(searchText !== ''){
                      router.push({pathname: 'search', query: {keyword: searchText}})
                    }
                  }
                }}
        />
        <div 
          onMouseOver={() => {setIsSearchMouseOver(true)}}
          onMouseLeave={() => {setIsSearchMouseOver(false)}}
          className={styles.Header_submit}
          onClick={() => {
            if(searchText !== '') {
            router.push({pathname: 'search', query: {keyword: searchText}})
            }
          }}
        >
            <IoIosSearch color='gray' size='25'/>
        </div>
        
        <div 
          onMouseOver={() => {setIsMicMouseOver(true)}}
          onMouseLeave={() => {setIsMicMouseOver(false)}}
          className={styles.Header_mic_box}
        >
          <BsFillMicFill color='black' size='18'/>
        </div>
      </div>
      <div className={styles.Header_right_part}>
        <AiOutlineVideoCameraAdd 
          className={styles.Header_icons} 
          color='black' 
          size='22'
          onMouseOver={() => {setIsMakeMouseOver(true)}}
          onMouseLeave={() => {setIsMakeMouseOver(false)}}
          onClick={()=> setModalOpened(true)}
        />
        <BsBell 
          className={styles.Header_icons} 
          color='black' 
          size='20'
          onMouseOver={() => {setIsInformMouseOver(true)}}
          onMouseLeave={() => {setIsInformMouseOver(false)}}
        />
        <Popup 
          open={modalOpened}
          onClose={() => {
            setModalOpened(false)
          }}
        >
          <div className={styles.Video_add_popup}>
            <UploadStatus.Provider 
              value={
                {
                  fileTypes: ["png", "jpeg", "jpg","mp4"],
                  file: null
                }
              }
            >
              {
                <FileInput />
              }
            </UploadStatus.Provider>
          </div>
        </Popup>
        {isLogged ? <img src={userprofile}/> : <Link href="/login"><div>로그인</div></Link>}
      </div>
      { isSearchMouseOver && <div className={styles.Search_popup_box}>검색</div> }
      { isMicMouseOver && <div className={styles.Mic_popup_box}>음성으로 검색</div> }
      { isMakeMouseOver && <div className={styles.Make_popup_box}>만들기</div> }
      { isInformMouseOver && <div className={styles.Inform_popup_box}>알림</div> }
    </div>
    </>
  )
}

export default WatchHeader