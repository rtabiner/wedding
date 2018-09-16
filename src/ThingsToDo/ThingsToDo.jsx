import React, { PureComponent } from 'react';
import { compose } from 'recompose';
import { withStyles, withTheme, Fade } from '@material-ui/core';
import PropTypes from 'prop-types';
import styles from './ThingsToDo.styles';

class ThingsToDo extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <Fade timeout={800} in>
        <div>
         
        </div>
      </Fade>
    );
  }
}

ThingsToDo.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default compose(withStyles(styles), withTheme())(ThingsToDo);
