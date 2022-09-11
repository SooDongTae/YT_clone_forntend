import React from 'react'
import styles from "../styles/VideoPart.module.css"

const VideoPart = () => {
  return (
    <>
        <div className={styles.Video}></div>
        <div className={styles.Video_info_box}>
            <div>
                <span></span>
                <p></p>
            </div>
        </div>
    </>
  )
}

export default VideoPart