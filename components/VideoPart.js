import React from 'react'
import styles from "../styles/VideoPart.module.css"
import OptionBox from './OptionBox'

const VideoPart = () => {
  return (
    <>
        <div className={styles.Video}></div>
        <div className={styles.Video_info_box}>
            <div className={styles.Video_title_box}>
                <span>#SeeYouAgain</span>
                <p>Wiz Khalifa - See You Again ft. Charlie Puth [Official Video] Furious 7 Soundtrack</p>
            </div>
            <div className={styles.Video_option}>
                <p>조회수 805675회 • 2022. 3. 25.</p>
                <div className={styles.Box_in_option}>
                    <OptionBox />
                </div>
            </div>
            <hr className={styles.Line_under_option} />
            <div></div>
        </div>
    </>
  )
}

export default VideoPart