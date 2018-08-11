import React from 'react'
import { StaticQuery, graphql } from "gatsby"

import Chat from "@material-ui/icons/Chat";
import withStyles from "@material-ui/core/styles/withStyles";

import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";
import Layout from 'templates/layout.js'

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

const IndexPageStyled = withStyles(productStyle)(IndexPage);

function IndexPage({ data, ...props }) {
  const { classes } = props;
  const menuItems = data.allMarkdownRemark.edges
  const infoAreas = menuItems.map(menuItem => (
    <GridItem xs={12} sm={12} md={4}>
      <InfoArea
        title={menuItem.node.frontmatter.title}
        description={menuItem.node.frontmatter.description}
        icon={Chat}
        iconColor="info"
        slug={menuItem.node.fields.slug}
        vertical
      />
    </GridItem>
  ))
  return (
    <Layout>
      <div className={classes.section}>
        <GridContainer>
          {infoAreas}
        </GridContainer>
      </div>
    </Layout>
  );
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(limit: 100,
          filter: {
            frontmatter: {
              language: {eq: "zh"}
              tags: { in: "menu" }
            }}) {
          totalCount
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                language
                title
                description
              }
            }
          }
        }
      }
    `}
    render={data => <IndexPageStyled data={data} {...props} />}
  />
)