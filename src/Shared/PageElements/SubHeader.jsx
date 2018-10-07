import React, { PureComponent, Fragment } from 'react';
import { compose } from 'recompose';
import {
  withStyles,
  withTheme,
  Typography,
} from '@material-ui/core';
import styles from './PageElements.styles';

class SubHeader extends PureComponent {
  render() {
    const { classes, children, showDivider } = this.props;
    return (
      <Fragment>
        <Typography variant="title" className={classes.subHeader}>{children}</Typography>
      </Fragment>
    );
  }
}

export default compose(withStyles(styles), withTheme())(SubHeader);
