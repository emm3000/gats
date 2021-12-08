import { useState, useEffect, useRef } from "react"

export default function useScroll() {
  const [change, setChange] = useState(false)
  const ref = useRef(typeof window !== `undefined` ? window : "")

  const scrollHandle = e => {
    console.log(ref.current.scrollY)
    if (ref.current.scrollY !== 0) setChange(true)
    else setChange(false)
  }

  useEffect(() => {
    document.addEventListener("scroll", scrollHandle)
    return () => {
      document.removeEventListener("scroll", scrollHandle)
    }
  }, [])

  return change
}
