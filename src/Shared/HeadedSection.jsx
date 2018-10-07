import React, { PureComponent, Fragment } from 'react';
import { Element } from 'react-scroll';
import { compose } from 'recompose';
import {
  withStyles,
  withTheme,
  Divider } from '@material-ui/core';
import SubHeader from '../Shared/PageElements/SubHeader';
import styles from '../Shared/HeadedSection.styles';

class HeadedSection extends PureComponent {
  render() {
    const { header, anchor, classes } = this.props;
    return (      
        <Element name={anchor} className={classes.section}>
          <Divider className={classes.divider} />
          <SubHeader>{header}</SubHeader>
          {this.props.children}
        </Element>
    );
  }
}

export default compose(withStyles(styles), withTheme())(HeadedSection);
