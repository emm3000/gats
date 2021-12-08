import React, { useState, useCallback } from "react"
import Proyectos from "../components/IndexSections/Proyectos"
import { Footer } from "../components/Footer"
import Floating from "../components/FloatingButton"
import Helmet from "react-helmet"
import useTest from "../components/Hooks/useTest"
import Navbar from "../components/NavBar"
import { BotonRight, BotonLeft } from "../components/Boton"

export default function Home() {
  const [number, setNumber] = useState(2)
  const Component = useTest(number)

  const next = useCallback(() => {
    if (number > 0 && number !== 3) setNumber(number + 1)
    else setNumber(1)
  }, [number]) //Not working useCallback()

  const back = useCallback(() => {
    if (number > 0 && number !== 1) setNumber(number - 1)
    else setNumber(3)
  }, [number]) //Not working useCallback()


  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css"
        />
      </Helmet>
      <Navbar />
      <BotonRight next={next}/>
      <BotonLeft back={back}/>
      <Component/>
      <Proyectos />
      <Floating />
      <Footer />
    </>
  )
}
