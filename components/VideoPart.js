import React, { useState } from 'react'
import styles from "../styles/VideoPart.module.css"
import { FiThumbsUp, FiThumbsDown } from "react-icons/fi"
import { RiShareForwardLine, RiScissorsLine, RiPlayListAddLine } from "react-icons/ri"
import { HiDownload, HiOutlineDotsHorizontal } from "react-icons/hi"

const VideoPart = () => {
    const [isLikeMouseOver, setIsLikeMouseOver] = useState(false);
    const [isUnlikeMouseOver, setIsUnlikeMouseOver] = useState(false);
    const [isShareMouseOver, setIsShareMouseOver] = useState(false);
    const [isDownloadMouseOver, setIsDownloadMouseOver] = useState(false);
    return (
        <>
            <div className={styles.Video}></div>
            <div className={styles.Video_info_box}>
                <div className={styles.Video_title_box}>
                    <span>#SeeYouAgain</span>
                    <p>Wiz Khalifa - See You Again ft. Charlie Puth [Official Video] Furious 7 Soundtrack</p>
                </div>
                <div className={styles.Video_option}>
                    <div className={styles.Uploader_info_box}>
                        <div className={styles.Uploader_info}>
                            <img src='https://yt3.ggpht.com/ytc/AMLnZu9I_o5dok5_ZSuZQPzS5__4R2g6IqYpNAncmQee=s88-c-k-c0x00ffffff-no-rj' />
                            <div>
                                <span>essential;</span>
                                <p>구독자 100만명</p>
                            </div>
                        </div>
                        <div className={styles.Subscribe_button}>구독</div>
                    </div>
                    <div className={styles.Box_in_option}>
                        <div className={styles.OptionBox_container}>
                            <div 
                                onMouseOver={() => {setIsLikeMouseOver(true)}}
                                onMouseLeave={() => {setIsLikeMouseOver(false)}}
                            >
                                <FiThumbsUp size={22} />
                                <span>4.2천</span>
                            </div>
                            <div 
                                onMouseOver={() => {setIsUnlikeMouseOver(true)}}
                                onMouseLeave={() => {setIsUnlikeMouseOver(false)}}
                            >
                                <FiThumbsDown size={22} />
                                <span>싫어요</span>
                            </div>
                            <div 
                                onMouseOver={() => {setIsShareMouseOver(true)}}
                                onMouseLeave={() => {setIsShareMouseOver(false)}}
                            >
                                <RiShareForwardLine size={22} />
                                <span>공유</span>
                            </div>
                            <div 
                                onMouseOver={() => {setIsDownloadMouseOver(true)}}
                                onMouseLeave={() => {setIsDownloadMouseOver(false)}}
                            >
                                <HiDownload size={22} />
                                <span>오프라인저장</span>
                            </div>
                            <div>
                                <HiOutlineDotsHorizontal size={22} />
                            </div>
                        </div>
                    </div>
                </div>
                <hr className={styles.Line_under_option} />
                <div className={styles.Video_explanation_box}>
                    { isLikeMouseOver && <div className={styles.Like_popup_box}>이 동영상이 마음에 듭니다.</div> }
                    { isUnlikeMouseOver  && <div className={styles.Unlike_popup_box}>이 동영상이 마음에 들지 않습니다.</div> }
                    { isShareMouseOver && <div className={styles.Share_popup_box}>공유</div> }
                    { isDownloadMouseOver && <div className={styles.Download_popup_box}>오프라인저장</div> }
                </div>
            </div>
        </>
    )
}

export default VideoPart