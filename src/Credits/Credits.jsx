import React from 'react';
import { compose } from 'recompose';
import {
  withStyles,
  withTheme,
  Fade,
} from '@material-ui/core';
import styles from './Credits.styles';
import Header from '../Shared/PageElements/Header';
import Text from '../Shared/PageElements/Text';

const Credits = () => (
  <Fade in timeout={800}>
    <div>
      <Header>Credits</Header>
      <Text marginBottom={20}>
            Website designed and created by the groom himself.
        <br />
        <br />
            Icons made by
        {' '}
        <a href="https://www.flaticon.com/authors/anatoly" title="Anatoly" rel="noopener noreferrer" target="_blank">Anatoly</a>
        {' and '}
        <a href="http://www.freepik.com" title="Freepik" rel="noopener noreferrer" target="_blank">Freepik</a>
        {' '}
            from
        {' '}
        <a href="https://www.flaticon.com/" title="Flaticon" rel="noopener noreferrer" target="_blank">www.flaticon.com</a>
        {' '}
            are licensed by
        {' '}
        <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" rel="noopener noreferrer" target="_blank">CC 3.0 BY</a>
            .
      </Text>
    </div>
  </Fade>
);

export default compose(
  withStyles(styles),
  withTheme(),
)(Credits);
