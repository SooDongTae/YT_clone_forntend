import axios from 'axios'
import Link from 'next/link'
import React from 'react'
import styles from "../styles/Login.module.css"



//최은결 왔다감
const Login = () => {
  function test(){
    axios.post("http://10.150.151.12:8000/login",{username : "dohi",password:"1234"})
    .then((res)=>{
      localStorage.setItem("token", res.data.token);
    }).catch((err)=>{
      console.log("err")
    })
  }
  return (
    <div className={styles.container}>
      <div className={styles.register_box}>
        <div className={styles.register_form}>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs3nsHSnFymOzHhM5y6_fyoySDut9-vmgI3w&usqp=CAU'/>
          <p>Youtube 로그인하기</p>
          <span>Youtube로 이동</span>
          <input placeholder='아이디' type="text"/>
          <input placeholder='비밀번호' type="password"/>
          <div className={styles.submit_box}>  
            <Link href={'/login'}>회원가입하기</Link>
            <input value="로그인" type="submit" onClick={test}/>
          </div>
        </div>
        <div className={styles.right_img}>
          <img src='https://ssl.gstatic.com/accounts/signup/glif/account.svg'  />
          <p>하나의 계정으로 유튜브의 모든 서비스를 이용할 수 있습니다.</p>
        </div>
      </div>
    </div>
  )
}

export default Login