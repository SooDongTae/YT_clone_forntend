import React from 'react'
import styles from "../styles/User.module.css"
import Header from "../components//Header.js"
// import { useLocation } from "react-router"

const user = () => {
  // const location = useLocation();
  // console.log(location)
  return (
    <div className={styles.container}>
      <Header />

    </div>
  )
}

export default user