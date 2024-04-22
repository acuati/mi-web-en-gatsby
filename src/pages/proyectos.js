import *as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const Proyectos = () => (
    <Layout>
      {/* <div className={styles.textCenter}> */}
        <StaticImage
          src="../images/imagen-principal-web-gatsby.jpg"
          loading="eager"
          height={500}
          width={900}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt=""
          style={{ marginBottom: `var(--space-3)` }}
        />
        <h1>
        ¡Hola! <b> Soy MR. Teclas 2.0</b>
        </h1>
        <p>Desde esta página, podrás acceder a mi blog (en todos los enlaces <a href="https://abdel.tandempatrimonionacional.eu/">WEB</a> que veas en esta página) sobre proyectos como desarollador web orientado a resultados, que crea y administra sitios web y aplicaciones web que conducen al éxito del producto general </p>

    </Layout>

)
export const Head = () => <Seo title="Proyectos" />

export default Proyectos