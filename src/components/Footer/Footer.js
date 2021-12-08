import React from "react"
import Styles from "./footer.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faWhatsapp, faYahoo } from "@fortawesome/free-brands-svg-icons"
import { Link } from "gatsby"

export default function Footer() {
  return (
    <footer className={Styles.colorBackground}>
      <div className={Styles.footerContainer}>
        <article className={Styles.articleFirst}>
          <h2>METALCORD</h2>
          <p>
            Metalconperu, Brindamos soluciones integrales e innovadoras, a
            través de sus diferentes líneas de productos y servicios
          </p>
          <Link to="#">MÁS INFORMACIÓN</Link>
        </article>

        <article className={Styles.articleSecond}>
          <h2>LÍNEAS DE PRODUCTOS</h2>
          <ul>
            <li>Estructuras Metálicas</li>
            <li>Puerta de Garaje</li>
            <li>Andamios</li>
            <li>Sistema de Seguridad</li>
          </ul>
        </article>

        <article className={Styles.articleThird}>
          <h2>DATOS DE CONTACTO</h2>
          <ul>
            <li>
              <FontAwesomeIcon icon={faFacebook}  className={Styles.icon}/>
              <span>Av:Guardia Civil Sur Mz B Lt 41-Segundo Piso - surco</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faYahoo} className={Styles.icon}/>
              <span>ventas@metalconperu.com</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faWhatsapp} className={Styles.icon} />
              <span>Cel. +(51) 936 834 122</span>
            </li>
          </ul>
        </article>
      </div>
    </footer>
  )
}
