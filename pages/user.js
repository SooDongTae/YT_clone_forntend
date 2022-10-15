import React from 'react'
import styles from "../styles/User.module.css"
import Header from "../components//Header.js"
import "../styles/User.module.css"
import { useRecoilState } from 'recoil'
import OpenedSideBar from '../components/OpenedSideBar'
import SideBar from '../components/SideBar'
import { openState } from '../components/states'

const user = () => {
  const [isOpened, setIsOpened] = useRecoilState(openState);
  return (
    <>
    {isOpened ? <>
    <OpenedSideBar />
    </> : <><SideBar /></>}
    <div className={styles.container}>
      <div id={styles.Profile} className={isOpened ? styles.user_info_part_show : styles.user_info_part}>
        <div>
          <div className={styles.profile_fl_box}>
            <div>
              <img src='https://yt3.ggpht.com/ytc/AMLnZu8rQyE9zHBy5XB7Y3vmnHXHHHBFdisJb_FWhg6J=s176-c-k-c0x00ffffff-no-rj' alt='' />
              <div className={styles.name_fl_box}>
                <p>코딩애플</p>
                <span>구독자 10.4명</span>
              </div>
            </div>
            <div className={styles.sub_button}>구독</div>

          </div>
          <div>

          </div>
        </div>
        <div>

        </div>
      </div>
      {/* <Header /> */}

    </div>
    </>
  )
}

export default user