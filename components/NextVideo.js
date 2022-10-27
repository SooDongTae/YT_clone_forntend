import React, { useEffect, useState } from 'react'
import styles from "../styles/NextVideo.module.css";
import { BiTimeFive, BiDotsVerticalRounded } from "react-icons/bi"
import { RiPlayList2Fill } from "react-icons/ri"
import axios from 'axios';
import { useRouter } from 'next/router';

const NextVideo = ( {data} ) => {
    const [isMouseOver, setIsMouseOver] = useState(false);
    const [username, setUsername] = useState('');
    const router = useRouter();
    useEffect(() => {
        axios.get(`http://10.150.151.12:8000/getprofile?id=${data.owner}`)
            .then(res=>{
              setUsername(res.data.data[0].username);
            })
    }, []);
    return (
        <div 
            onMouseOver={ () => {setIsMouseOver(true)} } 
            onMouseLeave={ () => {setIsMouseOver(false)} }
            className={styles.Next_video}
            onClick={() => {
                router.push({pathname: 'watch', query: {id: data.video_id}});
              }}
        >
            <div className={styles.Thumbnail_box}>
                <img src={data.thumbnail} />
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
                <p>{data.title}</p>
                <span>{username}</span>
                <span>조회수 {data.views}회 • {data.create_at}년전</span>
            </div>
            {
                isMouseOver && <BiDotsVerticalRounded size='20' className={styles.Next_video_menu}/>
            }
        </div>
    )
}

export default NextVideo