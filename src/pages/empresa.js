import React from "react"
import Layout from "../components/Layout"
import Styles from "../styles/empresa.module.css"

export default function Empresa() {
  return (
    <Layout>
      <div className={Styles.wrapper}>
        <div className={Styles.text}>
          <h1 className={Styles.titulo}><span className={Styles.name}>Metalcord</span>Peru</h1>
          <div className={Styles.divider}></div>
          <p className={Styles.primerParrafo}>
            Brindamos soluciones integrales e innovadoras, a través de sus
            diferentes líneas de productos y servicios, Para los sectores
            industriales, construcción, minería, eventos, entre otros,
            cumpliendo con la normativa europea para la comercialización de
            nuestros productos, con el objetivo de maximizar la seguridad y la
            eficiencia, con la finalidad de convertirse en socio estratégico
            para todos sus clientes.
          </p>
          <h2 className={Styles.subtitulo}>LÍNEAS DE PRODUCTOS Y SERVICIOS</h2>
          <div>
            <ul className={Styles.lista}>
              <li>Estructuras Metalicas</li>
              <li>
                Venta y alquiler de andamios Multidireccionales con
                certificacion europea
              </li>
              <li>Puertas de Garaje</li>
              <li>Andamios Convenciones con certificacion</li>
              <li>Asesoramiento de montaje de andamios</li>
              <li>Carpiteria metalica</li>
              <li>Sistemas de seguridad</li>
            </ul>
          </div>
          <h2 className={Styles.subtitulo}>Misión</h2>
          <p className={Styles.primerParrafo}>
            Satisfacer a nuestros clientes a través de soluciones integrales,
            con la más alta tecnología y mejora continua, basado en la
            innovación y en un excelente servicio post-venta.
          </p>
          <h2 className={Styles.subtitulo}>VisiÓn</h2>
          <p className={Styles.primerParrafo}>
            Ser una empresa peruana reconocida en fabricación y comercialización
            de estructuras metálicas y andamiaje, ofrecer soluciones integrales
            de seguridad para las diferentes industrias.
          </p>
        </div>
        <div className={Styles.imagenWrapper}>
          <img
            src="https://i.ytimg.com/vi/9PnRRNwAyIE/maxresdefault.jpg"
            alt=""
            className={Styles.imagen}
          />
          <img
            src="https://wallpapercave.com/wp/wp2524349.jpg"
            alt=""
            className={Styles.imagen}
          />
        </div>
      </div>
    </Layout>
  )
}
