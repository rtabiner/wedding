import React, { PureComponent } from 'react';
import { compose } from 'recompose';
import {
  withStyles,
  withTheme,
  Fade,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import styles from './Introduction.styles';

class Introduction extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <Fade timeout={800} in>
        <div>
          <h1>Intro..</h1>
          <p>hi</p>
          <p>hi</p>
        </div>
      </Fade>
    );
  }
}

Introduction.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default compose(withStyles(styles), withTheme())(Introduction);
