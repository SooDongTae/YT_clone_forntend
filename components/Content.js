import React, { useState } from 'react'
import styles from "../styles/Content.module.css"
import NextVideo from './NextVideo';
import VideoPart from './VideoPart';

const Content = () => {
    const [cateColor, setCateColor] = useState(0);
    return (
        <>
        <div className={styles.Content_container}>
            <div className={styles.Video_part}>
                <VideoPart />
            </div>
            <div className={styles.Other_video_part}>
                <div>
                    <div onClick={()=>{setCateColor(1)}} className={`Video_cate ${cateColor === 1 ? "active" : ""} `} ><a>모두</a></div>
                    <div onClick={()=>{setCateColor(2)}} className={`Video_cate ${cateColor === 2 ? "active" : ""} `}><a>관련 콘텐츠</a></div>
                    <div onClick={()=>{setCateColor(3)}} className={`Video_cate ${cateColor === 3 ? "active" : ""} `}><a>실시간</a></div>
                    <div onClick={()=>{setCateColor(4)}} className={`Video_cate ${cateColor === 4 ? "active" : ""} `}><a>최근에 업로드된</a></div>
                </div>
                <div className={styles.Video_box}>
                    <NextVideo />
                    <NextVideo />
                    <NextVideo />
                    <NextVideo />
                    <NextVideo />
                    <NextVideo />
                    <NextVideo />
                    <NextVideo />
                    <NextVideo />
                    <NextVideo />
                    <NextVideo />
                    <NextVideo />
                    <NextVideo />
                    <NextVideo />
                    <NextVideo />
                    <NextVideo />
                    <NextVideo />
                </div>
            </div>
            
        </div>
        <style jsx>{`
        .Video_cate {
            display: inline-block;
            width: auto;
            height: 33px;
            background-color: rgb(237, 237, 237);
            border-radius: 30px;
            border: 1px solid #ccc;
            margin: 3.5px;
            margin-top: 32px;
            line-height: 30px;
            cursor: pointer;
            transition: 0.3s;
        }
        .Video_cate a {
            margin: 10px;
            font-size: 15px;
        }
        .active {
            color: white;
            background-color: black;
            border: 1px solid black;
            transition: 0.3s;
        }
        `}</style>
        </>
    )
}

export default Content