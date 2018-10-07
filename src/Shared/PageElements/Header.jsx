import React, { PureComponent, Fragment } from 'react';
import { compose } from 'recompose';
import {
  withStyles,
  withTheme,
  Typography,
  Divider,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import styles from './PageElements.styles';

class Header extends PureComponent {
  render() {
    const { classes, children, showDivider } = this.props;
    return (
      <Fragment>
        <Typography variant="headline" className={classes.header}>{children}</Typography>
        {
          showDivider &&
          <Divider className={classes.headerDivider} />
        }
      </Fragment>
    );
  }
}

Header.defaultProps = {
  showDivider: true,
};
 Header.propTypes = {
  showDivider: PropTypes.bool.isRequired,
};

export default compose(withStyles(styles), withTheme())(Header);
