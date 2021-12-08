import React from "react"
import Styles from "./boton.module.css"

import { Helmet } from "react-helmet"

export default function Boton({ back }) {
  return (
    <>
      <Helmet>
        <link
          href="https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css"
          rel="stylesheet"
        />
      </Helmet>
      <button className={Styles.boton} onClick={() => back()}>
        <i className={`${Styles.icon} ${"bx bx-left-arrow-alt"}`}></i>
      </button>
    </>
  )
}
