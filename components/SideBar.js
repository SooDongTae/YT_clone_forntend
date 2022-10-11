import { useState } from "react"
import {MdHomeFilled} from 'react-icons/md';
import {FaRegCompass} from 'react-icons/fa';
import {MdOutlinePlaylistPlay} from 'react-icons/md';
import {MdOutlineSubscriptions} from 'react-icons/md';
import {BsPlayBtn} from 'react-icons/bs';
import {VscPlayCircle} from 'react-icons/vsc';
import {ImFilePlay} from 'react-icons/im';
import {BsArrowDown} from 'react-icons/bs';

export default function SideBar(){
    return(
        <>
            <div className="sidebar">
                <ul>
                    <li>
                        <MdHomeFilled color='black' size='23' />
                        <div className="text">홈</div>
                    </li>
                    <li>
                        <FaRegCompass size='23' />
                        <div className="text">탐색</div>
                    </li>
                    <li>
                        <MdOutlinePlaylistPlay size='23' />
                        <div className="text">Shorts</div>
                    </li>
                    <li>
                        <MdOutlineSubscriptions size='23' />
                        <div className="text">구독</div>
                    </li>
                    <li>
                        <ImFilePlay size='23' />
                        <div className="text">보관함</div>
                    </li>
                </ul>
            </div>
            
            <style jsx>{`
                .sidebar{
                    position: fixed;
                    left: 0;
                    top: 54px;
                    background-color: #fff;
                    width: 72px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: flex-start;
                    height: 70%;
                    overflow: hidden;
                    scroll-snap-type: none;
                }
                .open_btn{
                    width: 20px;
                    color: black;
                    margin-top: 20px;
                    margin-bottom: 30px;
                }
                ul{
                    margin: 0;
                    width: 100%;
                    padding: 0;
                    list-style: none;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
                li{
                    width: 100%;
                    height: 78px;
                    font-size: 10px;
                    color: black;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                li:hover{
                    background-color: lightgray;
                }
                .homePic{
                    width: 20px;
                    margin-bottom: 10px;
                }
                .text{
                    margin-top: 7px;
                }
            `}</style>
        </>
    )    
}