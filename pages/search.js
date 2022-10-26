
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useRecoilState } from "recoil"
import OpenedSideBar from "../components/OpenedSideBar"
import SideBar from "../components/SideBar"
import { openState } from "../components/states"
import axios from "axios"

const Search = () => {
    const router = useRouter()
    const {keyword} = router.query;
    const [isOpened, setIsOpened] = useRecoilState(openState);
    // const videos = [
    //     {
    //       img: "/thumb.jpeg",
    //       title: "titlesadkhajjdsa",
    //       user_name: "user",
    //       user_profile: "/profile.png",
    //       num: "152",
    //       created_at: "2022.09.29",
    //       explain: "youtube_clone_coding"
    //     },
    //     {
    //       img: "/thumb.jpeg",
    //       title: "title",
    //       user_name: "user",
    //       user_profile: "/profile.png",
    //       num: "152",
    //       created_at: "2022.09.29",
    //       explain: "youtube_clone_coding"
    //     },
    //     {
    //       img: "/thumb.jpeg",
    //       title: "title",
    //       user_name: "user",
    //       user_profile: "/profile.png",
    //       num: "152",
    //       created_at: "2022.09.29",
    //       explain: "youtube_clone_coding"
    //     },
    //     {
    //       img: "/thumb.jpeg",
    //       title: "title",
    //       user_name: "user",
    //       user_profile: "/profile.png",
    //       num: "152",
    //       created_at: "2022.09.29"
    //     },
    //     {
    //       img: "/thumb.jpeg",
    //       title: "title",
    //       user_name: "user",
    //       user_profile: "/profile.png",
    //       num: "152",
    //       created_at: "2022.09.29"
    //     },
    //     {
    //       img: "/thumb.jpeg",
    //       title: "title",
    //       user_name: "user",
    //       user_profile: "/profile.png",
    //       num: "152",
    //       created_at: "2022.09.29",
    //       explain: "youtube_clone_coding"
    //     },
    //     {
    //       img: "/thumb.jpeg",
    //       title: "title",
    //       user_name: "user",
    //       user_profile: "/profile.png",
    //       num: "152",
    //       created_at: "2022.09.29",
    //       explain: "youtube_clone_coding"
    //     },
    //     {
    //       img: "/thumb.jpeg",
    //       title: "title",
    //       user_name: "user",
    //       user_profile: "/profile.png",
    //       num: "152",
    //       created_at: "2022.09.29",
    //       explain: "youtube_clone_coding"
    //     },
    //     {
    //       img: "/thumb.jpeg",
    //       title: "title",
    //       user_name: "user",
    //       user_profile: "/profile.png",
    //       num: "152",
    //       created_at: "2022.09.29",
    //       explain: "youtube_clone_coding"
    //     }
    //   ]
    const [videos, setVideos] = useState([]);
    useEffect(() => {
      axios.get(`http://10.150.151.12:8000/searchbyname?name=${keyword}`)
      .then(res => {
        setVideos(res.data.data);
      })
    }, [keyword, []]);
      return (
        <>
        {isOpened ? <>
        <OpenedSideBar />
        </> : <><SideBar /></>}
        <div className={`main_container ${isOpened ? "show" : ""}`}>
            
            <div className="mainBox">
            {videos.map((data, index) => (
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
                    <img src={data.user_profile} className="user_profile" />
                    <span className="user_name">{data.user_name}</span>
                  </div>
                  <div className="explain_box">
                    {data.content}
                  </div>
                </div>
              </div>
            ))}
            </div>
        </div>
        <style jsx>{`
            .main_container{
                margin-top: 55px;
                margin-left: 72px;
                width: 95%;
                min-height: calc(100vh - 55px);
                height: auto;
                padding-left: auto;
                padding-right: auto;
                background-color: #f9f9f9;
                position: absolute;
            }
            .main_container.show{
                margin-left: 240px;
                width: 83%;
            }
            .mainBox{
              border-top: 1px solid #e0e0e0;
              margin-top: 60px;
              margin-left: auto;
              margin-right: auto;
              width: 90%;
              height: auto;
            }
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
              margin-top: 20%;
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
              margin-top: 20%;
            }
        `}</style>
        </>
      )
}

export default Search