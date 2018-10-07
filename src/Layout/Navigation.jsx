import React, { PureComponent, Fragment } from "react";
import { compose } from "recompose";
import { withStyles, withTheme, Hidden } from "@material-ui/core";
import styles from "./Navigation.styles";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

class Navigation extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      value: 0
    };
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes, location } = this.props;
    return (
      <div className={classes.navigationSection}>
        <div className={classes.navigationTabs}>
          <Link className="plain-link" to="/">
            <span
              className={
                location.pathname == "/"
                  ? classes.activeTabLabel
                  : classes.tabLabel
              }
            >
              The Day
            </span>
          </Link>
          &nbsp; &middot; &nbsp;
          <Link className="plain-link" to="/Travel">
            <Fragment>
              <Hidden smUp>
                <span
                  className={
                    location.pathname == "/Travel"
                      ? classes.activeTabLabel
                      : classes.tabLabel
                  }
                >
                  Travel
                </span>
              </Hidden>
              <Hidden xsDown>
                <span
                  className={
                    location.pathname == "/Travel"
                      ? classes.activeTabLabel
                      : classes.tabLabel
                  }
                >
                  Travel
                </span>
              </Hidden>
            </Fragment>
          </Link>
          &nbsp; &middot; &nbsp;
          <Link className="plain-link" to="/Accommodation">
            <span
              className={
                location.pathname == "/Accommodation"
                  ? classes.activeTabLabel
                  : classes.tabLabel
              }
            >
              Accommodation
            </span>
          </Link>
          &nbsp; &middot; &nbsp;
          <Link className="plain-link" to="/RSVP">
            <span
              className={
                location.pathname == "/RSVP"
                  ? classes.activeTabLabel
                  : classes.tabLabel
              }
            >
              RSVP
            </span>
          </Link>
        </div>
      </div>
    );
  }
}

Navigation.propTypes = {
  classes: PropTypes.object.isRequired // eslint-disable-line
};

export default compose(
  withStyles(styles),
  withTheme(),
  withRouter
)(Navigation);
