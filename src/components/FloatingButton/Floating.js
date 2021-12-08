import React from "react"
import Styles from "./floating.module.css"
import { Link } from "gatsby"

export default function Floating() {
  return (
    <>
      <Link className={Styles.button} to="#">
        <img src="/img/wasap.png" alt="AEA" />
      </Link>
    </>
  )
}
