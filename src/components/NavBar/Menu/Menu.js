import React from "react"
import Styles from './menu.module.css'

export default function Menu() {
  return (
    <ul className={Styles.menu}>
      <li className={Styles.lista}>ESTRUCTURAS METALICAS</li>
      <li className={Styles.lista}>PUERTAS LEVADIZAS</li>
      <li className={Styles.lista}>SISTEMA DE SEGURIDAD</li>
    </ul>
  )
}
