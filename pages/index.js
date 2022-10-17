import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import styles from '../styles/Home.module.css'
import { openState } from '../components/states';
export default function Home() {
  const [isOpened, setIsOpened] = useRecoilState(openState);
  const videos = [
    {
      img: "/thumb.jpeg",
      title: "titlesadkhajjdsa",
      user_name: "user",
      user_profile: "/profile.png",
      num: "152",
      created_at: "2022.09.29"
    },
    {
      img: "/thumb.jpeg",
      title: "title",
      user_name: "user",
      user_profile: "/profile.png",
      num: "152",
      created_at: "2022.09.29"
    },
    {
      img: "/thumb.jpeg",
      title: "title",
      user_name: "user",
      user_profile: "/profile.png",
      num: "152",
      created_at: "2022.09.29"
    },
    {
      img: "/thumb.jpeg",
      title: "title",
      user_name: "user",
      user_profile: "/profile.png",
      num: "152",
      created_at: "2022.09.29"
    },
    {
      img: "/thumb.jpeg",
      title: "title",
      user_name: "user",
      user_profile: "/profile.png",
      num: "152",
      created_at: "2022.09.29"
    },
    {
      img: "/thumb.jpeg",
      title: "title",
      user_name: "user",
      user_profile: "/profile.png",
      num: "152",
      created_at: "2022.09.29"
    },
    {
      img: "/thumb.jpeg",
      title: "title",
      user_name: "user",
      user_profile: "/profile.png",
      num: "152",
      created_at: "2022.09.29"
    },
    {
      img: "/thumb.jpeg",
      title: "title",
      user_name: "user",
      user_profile: "/profile.png",
      num: "152",
      created_at: "2022.09.29"
    },
    {
      img: "/thumb.jpeg",
      title: "title",
      user_name: "user",
      user_profile: "/profile.png",
      num: "152",
      created_at: "2022.09.29"
    }
  ]
  useEffect(() => {
    console.log(isOpened);
  }, [isOpened]);
  return (
    <>
    <div className={`main_container ${isOpened ? "show" : ""}`}>
      <div className="main_box">
        {videos.map((data, index) => (
          <div className={`video ${isOpened ? "show" : ""}`}>
            <div className='Thumbnail_box'>
              <img src={data.img} className="Thumbnail" />
            </div>
            <div className="user_profile_box">
              <img src={data.user_profile} className="user_profile" />
              <div className="title_box">
                <span className="title">
                  {data.title}
                </span>
              </div>
            </div>
            <div className='user_name_box'>
                <span className='user_name'>{data.user_name}</span>
              </div>
            <div className="createdAt_box">
              <span className="numAndCreatedAt">조회수 {data.num} • {data.created_at}</span>
            </div>
          </div>
        ))}
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
