import React from 'react'
import Layout from '../components/Layout'
import styles from '../styles/inicio.module.css'
import Lightbox from '../components/Lightbox'

export default function Inicio() {
  return (
    <Layout>
      <div className={styles.wrapper}>
        <Lightbox />
      </div>
    </Layout>
  )
}