import React from "react";
import { Link } from "react-router-dom";
import { StaticQuery, graphql } from "gatsby"

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { Subject } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function HeaderLinks({ data, ...props }) {
  const { classes } = props;
  const menuItems = data.allMarkdownRemark.edges
  const menuLinks = menuItems.map(menuItem => (
    <Link to={'/' + menuItem.node.fields.slug} className={classes.dropdownLink}>
      {menuItem.node.frontmatter.title}
    </Link>
  ))
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="目録"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Subject}
          dropdownList={menuLinks}
        />
      </ListItem>
    </List>
  );
}

const HeaderLinksStyled = withStyles(headerLinksStyle)(HeaderLinks);

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(limit: 20,
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
              }
            }
          }
        }
      }
    `}
    render={data => <HeaderLinksStyled data={data} {...props} />}
  />
)
