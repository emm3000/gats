import React from "react"
import Navbar from "../NavBar"
import { Footer } from "../Footer"
import Floating from "../FloatingButton"
import Styles from './Layout.module.css'

export default function Layout({ children }) {
  return (
    <>
      <main>
        <Navbar />
        <div className={Styles.wrapper}>{children ? children : null}</div>
        
         {/* {children} */}
        <Floating />
        {/* <div className={Styles.overlay}>
          <img src="https://wallpaperaccess.com/full/1100671.jpg" alt=""/>
        </div> */}
        <Footer />
      </main>
    </>
  )
}
