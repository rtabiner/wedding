import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import {
  withStyles,
  withTheme,
  Typography,
} from '@material-ui/core';
import styles from './PageElements.styles';

class Text extends PureComponent {
  render() {
    const { classes, children, marginBottom } = this.props;
    return (
      <Typography variant="body1" className={classes.text} style={{ marginBottom }}>{children}</Typography>
    );
  }
}

Text.defaultProps = {
  marginBottom: 20,
};

Text.propTypes = {
  marginBottom: PropTypes.number.isRequired,
};

export default compose(withStyles(styles), withTheme())(Text);
