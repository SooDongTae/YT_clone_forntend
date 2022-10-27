import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import styles from '../styles/Home.module.css'
import { openState } from '../components/states';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Videos from '../components/Videos';
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
        return (
          <Videos data={data} />
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
    .main_container{
      margin-top: 113px;
      margin-left: 72px;
      width: 95%;
    }
    .main_container.show{
      margin-left: 240px;
      width: 83%;
    }
    

    `}</style>
    </>
  )
}