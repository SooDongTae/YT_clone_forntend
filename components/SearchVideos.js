import { useEffect, useState } from "react"
import axios from "axios"
import { useRouter } from "next/router";

const SearchVideos = ( {data} ) => {
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
    return(
        <>
        <div className="video_box" onClick={() => {
                router.push({pathname: 'watch', query: {id: data.video_id}});
              }}>
                <div className="Thumbnail_box">
                  <img src={data.thumbnail} className="Thumbnail" />
                </div>
                <div className="other_Box">
                  <div className="title_box">
                    {data.title}
                  </div>
                  <div className="createdAt_box">
                    <span className="numAndCreatedAt">조회수 {data.views} • {data.create_at}</span>
                  </div>
                  <div className="user_profile_box">
                    <img src={profile} className="user_profile" />
                    <span className="user_name">{username}</span>
                  </div>
                  <div className="explain_box">
                    {data.content}
                  </div>
                </div>
              </div>
              <style jsx>{`
                .Thumbnail_box{
                width: 40%;
                height: 100%;

                }
                .Thumbnail{
                width: 100%;
                height: 100%;
                }
                .video_box{
                display: flex;
                margin-top: 2%;
                height: 300px; 
                }
                .other_Box{
                margin-left: 10px;
                display: flex;
                flex-direction: column;
                height: 100%;
                width: 55%;
                }
                .title_box{
                font-size: 130%;
                }
                .numAndCreatedAt{
                font-size:75%;
                color: #606060;
                }
                .user_profile{
                width: 24px;
                height: 24px;
                border-radius: 50%;
                }
                .user_profile_box{
                display: flex;
                align-items: center;
                margin-top: 50px;
                height: 22px;
                }
                .user_name{
                font-size: 16px;
                margin-left: 5px;
                color: #606060;
                }
                .explain_box{
                color: #606060;
                font-size: 14px;
                margin-top: 40px;
                }

              `}</style>
        </>
    )
}

export default SearchVideos;