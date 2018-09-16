import React, { PureComponent } from 'react';
import { compose } from 'recompose';
import {
  withStyles,
  withTheme,
  Typography,
} from '@material-ui/core';
import styles from './PageElements.styles';

class Header extends PureComponent {
  render() {
    const { classes, children } = this.props;
    return (
      <Typography variant="headline" className={classes.header}>{children}</Typography>
    );
  }
}

export default compose(withStyles(styles), withTheme())(Header);
