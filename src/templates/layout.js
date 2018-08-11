import React from 'react'
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";

import Parallax from "components/Parallax/Parallax.jsx";

import Header from "templates/header.js";

import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";

class Layout extends React.Component {
  render() {
    const { children, classes } = this.props;
    return (
      <>
        <Header/>
        <Parallax small filter image={require("assets/img/slide2.jpg")} />
        <div className={classNames(classes.main, classes.mainRaised)}>
            <div>
            <div className={classes.container}>
                {children}
            </div>
            </div>
        </div>
      </>
    )
  }
}

export default withStyles(profilePageStyle)(Layout);
