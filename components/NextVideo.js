import React, { useState } from 'react'
import styles from "../styles/NextVideo.module.css";
import { BiTimeFive, BiDotsVerticalRounded } from "react-icons/bi"
import { RiPlayList2Fill } from "react-icons/ri"

const NextVideo = () => {
    const [isMouseOver, setIsMouseOver] = useState(false);
    const watch = 100
    const date = 7
    const name = 'Wiz Khalifa'
    return (
        <div 
            onMouseOver={ () => {setIsMouseOver(true)} } 
            onMouseLeave={ () => {setIsMouseOver(false)} }
            className={styles.Next_video}
        >
            <div className={styles.Thumbnail_box}>
                <img src='https://i.ytimg.com/vi/RgKAFK5djSk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBhwpRCeR0BhQArxzwQO_lgrLV3jQ' />
                <div className={styles.Thumbnail_icons}>
                    {
                        isMouseOver && <div className={styles.Thumbnail_icon}>
                            <BiTimeFive color='white' />
                        </div>
                    }
                    {
                        isMouseOver && <div className={styles.Thumbnail_icon}>
                            <RiPlayList2Fill color='white' />
                        </div>
                    }
                    { !isMouseOver && <span className={styles.Video_time}>3:48</span> }
                    { isMouseOver && <span className={styles.Video_time_action}>3:48</span> }
                </div>
            </div>
            <div className={styles.Video_info}>
                <p>Wiz Khalifa - See You Again ft. Charlie Puth [Official Video]</p>
                <span>{name}</span>
                <span>조회수 {watch}회 • {date}년전</span>
            </div>
            {
                isMouseOver && <BiDotsVerticalRounded size='20' className={styles.Next_video_menu}/>
            }
        </div>
    )
}

export default NextVideo