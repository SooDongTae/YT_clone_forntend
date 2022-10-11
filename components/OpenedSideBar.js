import {MdHomeFilled} from 'react-icons/md';
import {FaRegCompass} from 'react-icons/fa';
import {MdOutlinePlaylistPlay} from 'react-icons/md';
import {MdOutlineSubscriptions} from 'react-icons/md';
import {ImTrophy} from 'react-icons/im'
import {BsMusicNoteBeamed} from 'react-icons/bs';
import {ImFilePlay} from 'react-icons/im';
import {GiGamepad} from 'react-icons/gi';
import {BsArrowCounterclockwise} from 'react-icons/bs';
import {IoIosBulb} from 'react-icons/io';
import {AiOutlineClockCircle} from 'react-icons/ai';
import {FiThumbsUp} from 'react-icons/fi';

export default function OpenedSideBar(){
    return(
        <>
            <div className="sidebar">
            <ul className='topUl'>
                    <li>
                        <div className='icon'>
                        <MdHomeFilled color='black' size='23'  />
                        </div>
                        <div className="text">홈</div>
                    </li>
                    <li>
                        <div className='icon'>
                        <FaRegCompass size='23' className='icon'/>
                        </div>
                        <div className="text">탐색</div>
                    </li>
                    <li>
                        <div className='icon'>
                        <MdOutlinePlaylistPlay size='23'className='icon' />
                        </div>
                        <div className="text">Shorts</div>
                    </li>
                    <li>
                        <div className='icon'>
                        <MdOutlineSubscriptions size='23' className='icon'/>
                        </div>
                        <div className="text">구독</div>
                    </li>
                </ul>
                <ul className='topUl'>
                    <li>
                        <div className='icon'>
                        <ImFilePlay size='23' className='icon'/>
                        </div>
                        <div className="text">보관함</div>
                    </li>
                    <li>
                        <div className='icon'>
                        <BsArrowCounterclockwise size='23' />
                        </div>
                        <div className='text'>시청 기록</div>
                    </li>
                    <li>
                        <div className='icon'>
                        <AiOutlineClockCircle size='23' />
                        </div>
                        <div className='text'>나중에 볼 동영상</div>
                    </li>
                    <li>
                        <div className='icon'>
                        <FiThumbsUp size='23' />
                        </div>
                        <div className='text'>좋아요 표시한 동영상</div>
                    </li>
                </ul>
                <ul>
                    <li>
                        <div className='icon'>구독</div>
                    </li>
                    <li>
                        <div className='icon'>
                        <BsMusicNoteBeamed size='23' />
                        </div>
                        <div className='text'>음악</div>
                    </li>
                    <li>
                        <div className='icon'>
                        <ImTrophy size='23' />
                        </div>
                        <div className='text'>스포츠</div>
                    </li>
                    <li>
                        <div className='icon'>
                        <GiGamepad size='23' />
                        </div>
                        <div className='text'>게임</div>
                    </li>
                    <li>
                        <div className='icon'>
                        <IoIosBulb size='23' />
                        </div>
                        <div className='text'>학습</div>
                    </li>
                </ul>
            </div>
            <style jsx>{`
                .sidebar{
                    position: fixed;
                    left: 0;
                    top: 54px;
                    background-color: #fff;
                    width: 240px;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    height: 100%;
                    align-items: flex-start;
                }
                ul{
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: flex-start;
                    width: 100%;
                    margin-top: 11.5px;
                    padding-left: 0;
                    height: ;
                }
                li{
                    height: 40px;
                    width: 95%;
                    font-size: 15px;
                    color: black;
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-start;
                    align-items: center;
                }
                li:hover{
                    background-color: lightgray;
                    cursor: pointer;
                }
                .icon{
                    margin-left: 24.5px;
                }
                .text{
                    margin-left: 20px;
                }
                .topUl{
                    border-bottom: solid 1px #ccc;
                    margin-bottom: 0;
                    padding-bottom: 15px;
                }
            `}</style>
        </>
    )
}
