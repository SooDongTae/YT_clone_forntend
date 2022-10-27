import axios from 'axios';
import Link from 'next/link'
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { Router } from 'react-router';
import styles from "../styles/Register.module.css"

const Register = () => {

  const [name, setName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");
  const [checkPwd, setCheckPwd] = useState("");
  const router = useRouter();
  const register = (e) => {
    e.preventDefault()
    setName(firstName + lastName);
    if(firstName === "" || lastName === "") {
      alert("성과 이름을 입력해주세요.")
      return
    }
    if(id === "" || pwd === "" || checkPwd === "") {
      alert("아이디와 비밀번호를 확인해주세요.")
      return
    }
    if(pwd !== checkPwd) {
      alert("비밀번호를 다시 확인해주세요.")
      return
    }
    axios.post(
      "http://10.150.151.12:8000/register",
      {
        username: id,
        password: pwd,
        nickname: name,
      }
    ).then((response) => {
      console.log(response.data)
      router.push('/login');
    }).catch((err)=>{
      console.log("err")
    })
    // window.location.replace('/login')
  }

  return (
    <div className={styles.container}>
      <div className={styles.register_box}>
        <form 
          onSubmit={register} 
          className={styles.register_form}
        >
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs3nsHSnFymOzHhM5y6_fyoySDut9-vmgI3w&usqp=CAU'/>
          <p>Youtube 계정 만들기</p>
          <span>Youtube로 이동</span>
          <div className={styles.id_box}>
            <input 
              onChange={(e) => {setFirstName(e.target.value)}}
              placeholder='성' 
              type="text"
            />
            <input 
              onChange={(e) => {setLastName(e.target.value)}}
              placeholder='이름' 
              type="text"
            />
          </div>
          <input 
            onChange={(e) => {setId(e.target.value)}}
            placeholder='아이디' 
            type="text"
          />
          <div className={styles.password_box}>
            <input 
              onChange={(e) => {setPwd(e.target.value)}}
              placeholder='비밀번호' 
              type="password"
            />
            <input 
              onChange={(e) => {setCheckPwd(e.target.value)}}
              placeholder='확인' 
              type="password"/>
          </div>
          <div className={styles.submit_box}>  
            <Link href={'/login'}>로그인하기</Link>
            <input 
              value="회원가입" 
              type="submit"
            />
          </div>
        </form>
        <div className={styles.right_img}>
          <img src='https://ssl.gstatic.com/accounts/signup/glif/account.svg'  />
          <p>하나의 계정으로 유튜브의 모든 서비스를 이용할 수 있습니다.</p>
        </div>
      </div>
    </div>
  )
}

export default Register