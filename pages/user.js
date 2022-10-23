import React, { useState } from 'react'
import styles from "../styles/User.module.css"
import Header from "../components//Header.js"
import "../styles/User.module.css"
import { useRecoilState } from 'recoil'
import OpenedSideBar from '../components/OpenedSideBar'
import SideBar from '../components/SideBar'
import { openState } from '../components/states'
import { AiOutlineBell } from 'react-icons/ai'
import NextVideo from '../components/NextVideo'
import UserVideo from '../components/UserVideo'

const user = () => {
  const [isOpened, setIsOpened] = useRecoilState(openState);
  const [isSub, setIsSub] = useState(false);
  return (
    <>
    {isOpened ? <>
    <OpenedSideBar />
    </> : <><SideBar /></>}
    <div className={styles.container}>
      <div id={styles.Profile} className={isOpened ? styles.user_info_part_show : styles.user_info_part}>
        <div className={styles.Top_profile}>
          <div className={styles.profile_fl_box}>
            <div className={styles.profile_box}>
              <img src='https://yt3.ggpht.com/ytc/AMLnZu8rQyE9zHBy5XB7Y3vmnHXHHHBFdisJb_FWhg6J=s176-c-k-c0x00ffffff-no-rj' alt='' />
              <div className={styles.name_fl_box}>
                <p>코딩애플</p>
                <span>구독자 10.4명</span>
              </div>
            </div>
            <div className={styles.sub_button_box}>
              {
                isSub ? <>
                  <div className={styles.sub_button_isSub} onClick={() => setIsSub(false)}>구독중</div>
                  <AiOutlineBell size={25} />
                </>
                : <div className={styles.sub_button} onClick={() => setIsSub(true)}>구독</div>
              }
            </div>
          </div>
        </div>
        <div className={styles.profile_taps}>
            <div className={styles.profile_taps_box}>홈</div>
            <div className={styles.profile_taps_box}>동영상</div>
            <div className={styles.profile_taps_box}>재생목록</div>
            <div className={styles.profile_taps_box}>커뮤니티</div>
            <div className={styles.profile_taps_box}>채널</div>
            <div className={styles.profile_taps_box}>정보</div>
        </div>
      </div>
      <div className={isOpened ? styles.video_show : styles.video}>
        <UserVideo />
      </div>
    </div>
    </>
  )
}

export default user