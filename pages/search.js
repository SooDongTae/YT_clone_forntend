import { useRouter } from "next/router"
import { useEffect } from "react"
import { useRecoilState } from "recoil"
import { openState } from "../components/states"

const Search = () => {
    const router = useRouter()
    const {keyword} = router.query
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
      return (
        <>
        <div className={`main_container ${isOpened ? "show" : ""}`}>
            {keyword}
        </div>
        <style jsx>{`
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

export default Search