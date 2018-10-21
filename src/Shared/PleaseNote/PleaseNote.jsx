import React, { PureComponent } from 'react';
import { compose } from 'recompose';
import {
  withStyles,
  withTheme,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import Text from '../PageElements/Text';
import styles from './PleaseNote.styles';

class PleaseNote extends PureComponent {
  render() {
    const { classes, header, children } = this.props;
    return (
      <div className={classes.pleaseNote}>
        <Text marginBottom={0}>
          <b>
            {header}
            :
          </b>
          {' '}
          {children}
        </Text>
      </div>
    );
  }
}

PleaseNote.defaultProps = {
  header: 'Please note',
};

PleaseNote.propTypes = {
  header: PropTypes.string,
};

export default compose(withStyles(styles), withTheme())(PleaseNote);
