import Link from 'next/link'
import React from 'react'
import styles from "../styles/Register.module.css"

const Register = () => {
  return (
    <div className={styles.container}>
      <div className={styles.register_box}>
        <div className={styles.register_form}>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs3nsHSnFymOzHhM5y6_fyoySDut9-vmgI3w&usqp=CAU'/>
          <p>Youtube 계정 만들기</p>
          <span>Youtube로 이동</span>
          <div className={styles.id_box}>
            <input placeholder='성' type="text"/>
            <input placeholder='이름' type="text"/>
          </div>
          <input placeholder='아이디' type="text"/>
          <div className={styles.password_box}>
            <input placeholder='비밀번호' type="password"/>
            <input placeholder='확인' type="password"/>
          </div>
          <div className={styles.submit_box}>  
            <Link href={'/login'}>로그인하기</Link>
            <input value="다음" type="submit"/>
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

export default Register