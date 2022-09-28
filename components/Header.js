import React, { useState } from 'react'
import { IoIosSearch, IoCloseOutline } from "react-icons/io"
import { BsFillMicFill, BsKeyboardFill, BsBell } from "react-icons/bs"
import { AiOutlineVideoCameraAdd } from "react-icons/ai"
import { CgSoftwareUpload } from "react-icons/cg"
import { VscMenu } from "react-icons/vsc"
import  styles from '../styles/Header.module.css'
import Popup from 'reactjs-popup';

const Header = () => {
  const [isSearchMouseOver, setIsSearchMouseOver] = useState(false);
  const [isMicMouseOver, setIsMicMouseOver] = useState(false);
  const [isMakeMouseOver, setIsMakeMouseOver] = useState(false);
  const [isInformMouseOver, setIsInformMouseOver] = useState(false);
  const [kColor, setKColor] = useState('gray');
  const [modalOpened, setModalOpened] = useState(false);


  return (
    <div className={styles.Header_container}>
      <div className={styles.Header_logo_box}>
        <VscMenu className={styles.Header_menu} color='black' size='20'/>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlarhI6h34FuayM6pl2zHnEySeUy-uR5GCbQ&usqp=CAU' />
      </div>
      <div className={styles.Header_search_box}>
        <div className={styles.Keyboard_in_search}>
          <BsKeyboardFill 
          onMouseOver={() => {setKColor('black')}}
          onMouseLeave={() => {setKColor('gray')}}
          className={styles.Keyboard_icon} color={kColor} size='20' />
        </div>
        <input className={styles.Header_input} type='text' placeholder='검색'/>
        <div 
          onMouseOver={() => {setIsSearchMouseOver(true)}}
          onMouseLeave={() => {setIsSearchMouseOver(false)}}
          className={styles.Header_submit}
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
            <div className={styles.Popup_top_box}>
              <span>동영상 업로드</span>
              {/* <IoCloseOutline /> */}
            </div>
            <div className={styles.Popup_middle_box}>
              <div className={styles.Drag_and_Drop}>
                <CgSoftwareUpload color='grey' size={120} />
              </div>
              <p>동영상 파일을 드래그 앤 드롭하여 업로드</p>
              <span>동영상을 게시하기 전에는 비공개로 설정됩니다.</span>
              <label for='input_file'>파일 선택</label>
              <input id='input_file' style={{display: "none"}} type="file"/>
            </div>
            <div className={styles.Popup_bottom_box}>
              <p>YouTube에 동영상을 제출하면 YouTube 서비스 약관 및 커뮤니티 가이드에 동의하게 됩니다.</p>
              <p>불법촬영물 게재시 삭제 조치되고 관련 법에 따라 처벌 받을 수 있습니다. 타인의 저작권 또는 개인정보 보호 권한을 침해해서는 안 됩니다.</p>
            </div>
          </div>
        </Popup>
        <img src='https://yt3.ggpht.com/ytc/AMLnZu9Jzp859A5IesAX3WqVFY0ocYhG3_oFkYuLlNlH1KPJhA=s88-c-k-c0x00ffffff-no-rj-mo'/>
      </div>
      { isSearchMouseOver && <div className={styles.Search_popup_box}>검색</div> }
      { isMicMouseOver && <div className={styles.Mic_popup_box}>음성으로 검색</div> }
      { isMakeMouseOver && <div className={styles.Make_popup_box}>만들기</div> }
      { isInformMouseOver && <div className={styles.Inform_popup_box}>알림</div> }
    </div>
  )
}

export default Header