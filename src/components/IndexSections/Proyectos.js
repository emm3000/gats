import React from "react"
import Styles from './proyecto.module.css'

export default function Proyectos() {
  return (
    <section className={Styles.backgroundContainer} id="galeria">
      <div className={Styles.background}>
        <div className={Styles.galeria}>
          <h1 className={Styles.title}>Nuestros productos</h1>
          <div className={Styles.divider}></div>
          <p>
            Brindamos soluciones integrales e innovadoras, a través de sus
            diferentes líneas de productos y servicios
          </p>
        </div>
        <div className={Styles.galeriaContenedor}>
          <img
            src="https://metalicasperona.es/wp-content/uploads/2015/10/estructurametalica.jpg"
            alt=""
            className={Styles.imgGaleria}
          />
          <img
            src="https://metalicasperona.es/wp-content/uploads/2015/10/estructurametalica.jpg"
            alt=""
            className={Styles.imgGaleria}
          />
          <img
            src="https://metalicasperona.es/wp-content/uploads/2015/10/estructurametalica.jpg"
            alt=""
            className={Styles.imgGaleria}
          />
          <img
            src="https://metalicasperona.es/wp-content/uploads/2015/10/estructurametalica.jpg"
            alt=""
            className={Styles.imgGaleria}
          />
          <img
            src="https://metalicasperona.es/wp-content/uploads/2015/10/estructurametalica.jpg"
            alt=""
            className={Styles.imgGaleria}
          />
          <img
            src="https://metalicasperona.es/wp-content/uploads/2015/10/estructurametalica.jpg"
            alt=""
            className={Styles.imgGaleria}
          />
        </div>
      </div>
    </section>
  )
}
