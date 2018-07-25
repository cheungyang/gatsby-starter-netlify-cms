import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from "gatsby"

import Navbar from '../components/Navbar'
import './all.sass'

export default ({ children }) => (
   <StaticQuery
     query={graphql`
       query LayoutQuery {
         site {
           siteMetadata {
             title
           }
         }
       }
     `}
     render={data => (
       <>
         <Helmet titleTemplate={`%s | ${data.site.siteMetadata.title}`} defaultTitle={data.site.siteMetadata.title} />
         <Navbar />
         <div>
           {children}
         </div>
       </>
     )}
   />
 )