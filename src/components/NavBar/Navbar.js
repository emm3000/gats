import React from "react"
import Styles from "./styles.module.css"
import { Link } from "gatsby"
import useScroll from './Hooks/useScroll'

export default function Navbar({ dark = false, fixed }) {
  const navBar = `${Styles.nav} ${Styles.colorNav}`
  const change = useScroll()

  return (
    <nav className={`${change ? navBar : ''}`}>
      <ul className={`${dark ? Styles.dark : Styles.light} ${Styles.ul}`}>
        <li className={`${Styles.logo} ${Styles.li}`}>
          <Link to="/">METALCORD</Link>
        </li>
        <li className={Styles.li}>
          <a href="#galeria">PROYECTOS</a>
        </li>
        <li className={Styles.li}>
          <Link to="/inicio">INICIO</Link>
        </li>
        <li className={Styles.li}>
          <Link to="/empresa">EMPRESA</Link>
        </li>
        <li className={`${Styles.desple} ${Styles.li}`}>
          <Link to="/404">LÍNEAS DE PRODUCTOS</Link>
          <ul className={Styles.menu}>
            <li className={Styles.lista}>ESTRUCTURAS METALICAS</li>
            <li className={Styles.lista}>PUERTAS LEVADIZAS</li>
            <li className={Styles.lista}>SISTEMA DE SEGURIDAD</li>
          </ul>
        </li>
        <li className={Styles.li}>
          <Link to="/404">NUESTROS PROYECTOS</Link>
        </li>
        <li className={Styles.li}>
          <Link to="/404">CONTÁCTENOS</Link>
        </li>
      </ul>
    </nav>
  )
}
