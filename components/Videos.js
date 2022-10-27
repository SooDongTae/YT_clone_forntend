import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { openState } from '../components/states';
import axios from 'axios';
import { useRouter } from 'next/router';
const Videos = ( {data} ) => {
    const [isOpened, setIsOpened] = useRecoilState(openState);
    const [videos, setVideos] = useState([]);
    const [user, setUser] = useState([]);
    const [username, setUsername] = useState('');
    const [profile, setProfile] = useState('');
    const router = useRouter();
    useEffect(() => {
        axios.get(`http://10.150.151.12:8000/getprofile?id=${data.owner}`)
            .then(res=>{
              setUsername(res.data.data[0].username);
              setProfile(res.data.data[0].profile);
            })
    }, []);
    return (
        <>
        <div className={`video ${isOpened ? "show" : ""}`} onClick={() => {
            router.push({pathname: 'watch', query: {id: data.video_id}});
          }}>
            <div className='Thumbnail_box'>
              <img src={data.thumbnail} className="Thumbnail" />
            </div>
            <div className="user_profile_box">
              <img src={profile} className="user_profile" />
              <div className="title_box">
                <span className="title">
                  {data.title}
                </span>
              </div>
            </div>
            <div className='user_name_box'>
                <span className='user_name'>{username}</span>
              </div>
            <div className="createdAt_box">
              <span className="numAndCreatedAt">조회수 {data.views} • {data.create_at}</span>
            </div>
          </div>
          <style jsx>{`
            .user_profile_box{
            display: flex;
            margin-left: 18px;
            }
            .user_profile{
            width: 36px;
            height: 36px;
            border-radius: 50%;
            }
            .title_box{
            margin-left: 15px;
            margin-top: 3px;
            }
            .user_name_box{
            margin-left: 70px;
            }
            .createdAt_box{
            margin-left: 70px;
            margin-top: 2px;
            }
            .Thumbnail_box{
            width: 90%;
            height: 60%;
            margin-left: auto;
            margin-right: auto;
            margin-top: 10%;
            }
            .Thumbnail{
            width: 100%;
            height: 100%;
            }
            .numAndCreatedAt, .user_name{
            font-size: 14px;
            color: #606060;
            }
            .video.show{
            height: 18vw;
            }
            .video{
            height: 20.5vw;
            }
          `}</style>
          </>
    )
}

export default Videos;