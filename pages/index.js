import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import styles from '../styles/Home.module.css'
import { openState } from '../components/states';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
export default function Home () {
  const [isOpened, setIsOpened] = useRecoilState(openState);
  const [videos, setVideos] = useState([]);
  const [user, setUser] = useState([]);
  const router = useRouter();
  useEffect(() => {
    axios.get("http://10.150.151.12:8000/getallvideo")
    .then(res => {
      setVideos(res.data.data);
      console.log(res.data.data);
    })
    .catch(err => {
      console.log(err);
    })
  }, []);
  useEffect(() => {
    console.log(user);
  }, [user]);
  // const videos = [
  //   {
  //     img: "/thumb.jpeg",
  //     title: "titlesadkhajjdsa",
  //     user_name: "user",
  //     user_profile: "/profile.png",
  //     num: "152",
  //     created_at: "2022.09.29"
  //   },
  //   {
  //     img: "/thumb.jpeg",
  //     title: "title",
  //     user_name: "user",
  //     user_profile: "/profile.png",
  //     num: "152",
  //     created_at: "2022.09.29"
  //   },
  //   {
  //     img: "/thumb.jpeg",
  //     title: "title",
  //     user_name: "user",
  //     user_profile: "/profile.png",
  //     num: "152",
  //     created_at: "2022.09.29"
  //   },
  //   {
  //     img: "/thumb.jpeg",
  //     title: "title",
  //     user_name: "user",
  //     user_profile: "/profile.png",
  //     num: "152",
  //     created_at: "2022.09.29"
  //   },
  //   {
  //     img: "/thumb.jpeg",
  //     title: "title",
  //     user_name: "user",
  //     user_profile: "/profile.png",
  //     num: "152",
  //     created_at: "2022.09.29"
  //   },
  //   {
  //     img: "/thumb.jpeg",
  //     title: "title",
  //     user_name: "user",
  //     user_profile: "/profile.png",
  //     num: "152",
  //     created_at: "2022.09.29"
  //   },
  //   {
  //     img: "/thumb.jpeg",
  //     title: "title",
  //     user_name: "user",
  //     user_profile: "/profile.png",
  //     num: "152",
  //     created_at: "2022.09.29"
  //   },
  //   {
  //     img: "/thumb.jpeg",
  //     title: "title",
  //     user_name: "user",
  //     user_profile: "/profile.png",
  //     num: "152",
  //     created_at: "2022.09.29"
  //   },
  //   {
  //     img: "/thumb.jpeg",
  //     title: "title",
  //     user_name: "user",
  //     user_profile: "/profile.png",
  //     num: "152",
  //     created_at: "2022.09.29"
  //   }
  // ]
  return (
    <>
    <div className={`main_container ${isOpened ? "show" : ""}`}>
      <div className="main_box">
        {videos.map((data, index) => {
          var username = "";
          var profile = "";
          async function getUser(){
            axios.get(`http://10.150.151.12:8000/getprofile?id=${data.owner}`)
            .then(res=>{
              username = res.data.data[0].username;
              profile = res.data.data[0].profile;
            })
          }
          getUser();
        return (
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
        )
        })}
      </div>
    </div>
    <style jsx>{`
    .container{
      background-color: #f9f9f9;
    }
    .main_box{
      
      width: 100%;
      height: 100%;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(25%, auto));
    }
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
    .main_container{
      margin-top: 113px;
      margin-left: 72px;
      width: 95%;
    }
    .main_container.show{
      margin-left: 240px;
      width: 83%;
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