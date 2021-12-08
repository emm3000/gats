import React from "react"
import Styles from "./sectionone.module.css"

export default function SectionOne() {
  return (
    <header
      style={{
        backgroundImage: `linear-gradient(
          to top,
          rgba(1, 1, 2, 0.5) 0%,
          rgba(5, 5, 5, 0.5) 100%
        ),
        url("https://hdwallpaperim.com/wp-content/uploads/2017/08/22/158305-K-pop-Asian-Choa-AOA.jpg")`,
      }}
      className="animate__animated animate__fadeIn animate__slow"
    >
      <section className={Styles.section}>
        <h1 className={`${Styles.h1}`}>
          Estructuras metalicas1
        </h1>
        <p className={Styles.p}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A atque
          eligendi aperiam recusandae ut tenetur, corporis cum ea neque commodi
          numquam iste dolor pariatur totam, veniam assumenda officia. Quidem,
          dolorem.
        </p>
        <a href="#galeria" className={Styles.a}>
          VER PROYECTOS
        </a>
      </section>
    </header>
  )
}
