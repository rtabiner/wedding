import React, { PureComponent } from 'react';
import { compose } from 'recompose';
import {
  withStyles,
  withTheme,
  Fade,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import styles from './Credits.styles';
import Header from '../Shared/PageElements/Header';
import Text from '../Shared/PageElements/Text';

class Credits extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <Fade in timeout={800}>
        <div>
          <Header>Credits</Header>
          <Text marginBottom={20}>
            Website designed and created by the groom himself.
            <br />
            <br />
            Icons made by
            {' '}
            <a href="https://www.flaticon.com/authors/anatoly" title="Anatoly">Anatoly</a>
            {' and '}
            <a href="http://www.freepik.com" title="Freepik">Freepik</a>
            {' '}
            from
            {' '}
            <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
            {' '}
            is licensed by
            {' '}
            <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
            .
          </Text>
        </div>
      </Fade>
    );
  }
}

Credits.propTypes = {
  classes: PropTypes.object.isRequired // eslint-disable-line
};

export default compose(
  withStyles(styles),
  withTheme(),
)(Credits);
