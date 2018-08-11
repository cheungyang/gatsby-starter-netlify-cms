import React from "react"
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"

import MaterialHeader from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";

const Header = ({ data, ...props }) => (
  <>
    <Helmet titleTemplate={`%s | ${data.site.siteMetadata.title}`}
        defaultTitle={data.site.siteMetadata.title} />
    <MaterialHeader
        color="transparent"
        brand={data.site.siteMetadata.title}
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        {...props} />
  </>
)

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => <Header data={data} {...props} />}
  />
)

Header.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
}
