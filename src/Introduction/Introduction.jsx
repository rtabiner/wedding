import React, { PureComponent } from 'react';
import * as emailjs from 'emailjs-com';
import { Formik } from 'formik';
import { compose } from 'recompose';
import Button from '@material-ui/core/Button';
import { withStyles, withTheme, TextField,FormControlLabel, Checkbox } from '@material-ui/core';
import styles from './Introduction.styles';
import PropTypes from 'prop-types';
import intro1 from '../Images/hi_res_bg.jpg' 

class Introduction extends PureComponent {

render() {
    const { classes } = this.props;
    return (
      <div>
        <h1>Intro..</h1>
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
    );
}
}

Introduction.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default compose(withStyles(styles), withTheme())(Introduction);
