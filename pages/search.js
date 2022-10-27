
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useRecoilState } from "recoil"
import OpenedSideBar from "../components/OpenedSideBar"
import SideBar from "../components/SideBar"
import { openState } from "../components/states"
import axios from "axios"
import SearchVideos from "../components/\bSearchVideos"

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
              <SearchVideos data={data} />
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
        `}</style>
        </>
      )
}

export default Search