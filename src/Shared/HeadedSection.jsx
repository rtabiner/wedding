import React, { PureComponent, Fragment } from 'react';
import { Element } from 'react-scroll';
import { compose } from 'recompose';
import {
  withStyles,
  withTheme,
  Divider } from '@material-ui/core';
import Header from '../Shared/PageElements/Header';
import styles from '../Shared/HeadedSection.styles';

class HeadedSection extends PureComponent {
  render() {
    const { header, anchor, classes } = this.props;
    return (      
        <Element name={anchor} className={classes.section}>
          <Divider className={classes.divider} />
          <Header>{header}</Header>
          {this.props.children}
        </Element>
    );
  }
}

export default compose(withStyles(styles), withTheme())(HeadedSection);
