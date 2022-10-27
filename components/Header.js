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
export const UploadStatus = React.createContext({
  fileTypes: [],
  file: null, 
});


const Header = () => {
  const [isSearchMouseOver, setIsSearchMouseOver] = useState(false);
  const [isMicMouseOver, setIsMicMouseOver] = useState(false);
  const [isMakeMouseOver, setIsMakeMouseOver] = useState(false);
  const [isInformMouseOver, setIsInformMouseOver] = useState(false);
  const [kColor, setKColor] = useState('gray');
  const [modalOpened, setModalOpened] = useState(false);
  const [status, setStatus] = useState(UploadStatus);
  const [isOpened, setIsOpened] = useRecoilState(openState);
  const [search, setSearch] = useState("");
  const [color, setColor] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  const [userprofile, setUser] = useState('');
  const router = useRouter();
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
  console.log(userprofile);
  return (
    <>
    <div className={styles.Header}>
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
              value={status}
            >
              {
                status.file !== null ?
                <FileInput /> :
                <TitleInput />
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
    <div className={`container`}>
        <div className="category">
              <div className={`detail ${color === 1 ? "active" : ""}`} onClick={()=> {setColor(1)}}>전체</div>
              <div className={`detail ${color === 2 ? "active" : ""}`} onClick={()=> {setColor(2)}}>게임</div>
              <div className={`detail ${color === 3 ? "active" : ""}`} onClick={()=> {setColor(3)}}>음악</div>
              <div className={`detail ${color === 4 ? "active" : ""}`} onClick={()=> {setColor(4)}}>요리</div>
              <div className={`detail ${color === 5 ? "active" : ""}`} onClick={()=> {setColor(5)}}>축구</div>
        </div>
      </div>
    </div>
    {isOpened ? <>
    <OpenedSideBar />
    </> : <><SideBar /></>}
    <style jsx>{`
    .container{
      padding-top: 55px;
      margin-left: 72px;
    }
    .container.show{
      margin-left: 240px;
    }
    .category{
        height: 58px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 0.2s ease-in-out;
      }
      .detail{
        cursor: pointer;
        width: auto;
        height: 32px;
        line-height: 32px;
        background-color: #f2f2f2;
        min-width: 4%;
        text-align: center;
        margin-right: 1%;
        border-radius: 20px;
        border: 1px solid rgba(0, 0, 0, 0.1);
      }
      .active{
        background-color: black;
        color: white;
        transition: 0.2s ease-in-out;
      }
    `}</style>
    </>
  )
}

export default Header