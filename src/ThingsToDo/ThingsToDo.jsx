import React, { PureComponent } from 'react';
import { compose } from 'recompose';
import { withStyles, withTheme, Fade } from '@material-ui/core';
import PropTypes from 'prop-types';
import styles from './ThingsToDo.styles';
import intro1 from '../Images/hi_res_bg.jpg';

class ThingsToDo extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <Fade timeout={800} in>
        <div>
          <h1>Things to do..</h1>
          <img src={intro1} />
          <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
          <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
          <img src={intro1} />
          <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        </div>
      </Fade>
    );
  }
}

ThingsToDo.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default compose(withStyles(styles), withTheme())(ThingsToDo);
