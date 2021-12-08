import React, { useState } from "react"
import styles from "./lightbox.module.css"
import { Helmet } from "react-helmet"

const images = [
  "https://wallpaperaccess.com/full/1100671.jpg",
  "/img/background.jpg",
  "https://hdwallpaperim.com/wp-content/uploads/2017/08/22/158305-K-pop-Asian-Choa-AOA.jpg",
  "https://hdwallpaperim.com/wp-content/uploads/2017/08/22/158305-K-pop-Asian-Choa-AOA.jpg",
  "https://hdwallpaperim.com/wp-content/uploads/2017/08/22/158305-K-pop-Asian-Choa-AOA.jpg",
  "https://wallpaperaccess.com/full/1099649.jpg",
]

export default function Lightbox() {
  const [modalIsActive, setModalIsActive] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)

  const clickHandle = () => {
    setModalIsActive(true)
  }

  // const modalHandle = e => {
  //   if (e.target === e.currentTarget) setModalIsActive(false)
  // }

  const nextImage = () => {
    setCurrentImage(currentImage + 1)
    setTimeout(() => {
      console.log("nextImage", currentImage)
    }, 500)
  }

  const previousImage = () => {
    setCurrentImage(currentImage - 1)
    setTimeout(() => {
      console.log("previousImage", currentImage)
    }, 500)
  }

  return (
    <>
      <Helmet>
        <link
          href="https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css"
          rel="stylesheet"
        />
      </Helmet>
      <div className={styles.wrapper}>
        <div className={styles.caja}>
          {images.map(imagen => (
            <img
              src={imagen}
              alt=""
              className={styles.imagen}
              onClick={clickHandle}
              role="presentation"
            />
          ))}
        </div>
        <div
          className={`${styles.overlay} ${
            modalIsActive ? styles.showModal : ""
          }`}
          // onClick={modalHandle}
        >
          <button
            className={`${styles.boton} ${styles.solito}`}
            onClick={() => setModalIsActive(false)}
          >
            <i className="bx bx-x"></i>
          </button>
          <button
            className={styles.boton}
            onClick={previousImage}
            style={{
              visibility: `${currentImage === 0 ? "hidden" : "visible"}`,
            }}
          >
            <i className={`${"bx bx-left-arrow-alt"}`}></i>
          </button>
          <div className={styles.sliderContainer}>
            {images.map(imagen => (
              <img
                src={imagen}
                alt=""
                role="presentation"
                style={{ transform: `translateX(${-currentImage * 100}%)` }}
              />
            ))}
          </div>
          <button
            className={styles.boton}
            onClick={nextImage}
            style={{
              visibility: `${
                currentImage === images.length - 1 ? "hidden" : "visible"
              }`,
            }}
          >
            <i className={`${"bx bx-right-arrow-alt"}`}></i>
          </button>
        </div>
      </div>
    </>
  )
}
