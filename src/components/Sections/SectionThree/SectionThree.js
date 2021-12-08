import React from "react"
import Styles from "../SectionOne/sectionone.module.css"


export default function SectionThree() {
  return (
    <>
      <header
        style={{
          backgroundImage: `linear-gradient(
          to top,
          rgba(1, 1, 2, 0.5) 0%,
          rgba(5, 5, 5, 0.5) 100%
        ),
        url("/img/background.jpg")`,
        }}
        className="animate__animated animate__fadeIn animate__slow"
      >
        {/* <Navbar dark={true} /> */}
        <section className={Styles.section}>
          <h1 className={Styles.h1}>Estructuras metalicas3</h1>
          <p className={Styles.p}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A atque
            eligendi aperiam recusandae ut tenetur, corporis cum ea neque
            commodi numquam iste dolor pariatur totam, veniam assumenda officia.
            Quidem, dolorem.
          </p>
          <a href="#galeria" className={Styles.a}>
            VER PROYECTOS
          </a>
        </section>
      </header>
    </>
  )
}
