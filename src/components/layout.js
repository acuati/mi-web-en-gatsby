/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText
} from './index.module.css'

import Header from "./header"
import "./layout.css"

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >
        <nav>
       <ul className={navLinks}>
         <li className={navLinkItem}><Link className={navLinkText} to="/index">Inicio</Link></li>
         
         <li className={navLinkItem}><Link className={navLinkText} to="/proyectos">Proyectos</Link></li>
        
         <li className={navLinkItem}><Link className={navLinkText} to="/contacto">Contacto</Link></li>       
       </ul>
     </nav>
        <main>
          <h1 className={heading}>{pageTitle}</h1>
          {children}
        <footer
          style={{
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
          }}
        >
          © {new Date().getFullYear()} &middot; MR.Teclas 2.0
          {` `}
          <a href="https://abdel.tandempatrimonionacional.eu/">WEB</a>
        </footer>
        </main> 
      </div>
    </>
  )
}

export default Layout
