import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from "gatsby"

export const Query = graphql`
  {
    allMarkdownRemark(limit: 1000) {
      edges {
        node {
          id
        }
      }
    }
  }  
`