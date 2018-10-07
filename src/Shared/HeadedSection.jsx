import React, { PureComponent } from 'react';
import { Element } from 'react-scroll';
import { compose } from 'recompose';
import PropTypes from 'prop-types';
import {
  withStyles,
  withTheme,
  Divider,
} from '@material-ui/core';
import SubHeader from './PageElements/SubHeader';
import styles from './HeadedSection.styles';

class HeadedSection extends PureComponent {
  render() {
    const {
      header, anchor, classes, children,
    } = this.props;
    return (
      <Element name={anchor} className={classes.section}>
        <Divider className={classes.divider} />
        <SubHeader>{header}</SubHeader>
        {children}
      </Element>
    );
  }
}

HeadedSection.propTypes = {
  header: PropTypes.string.isRequired,
  anchor: PropTypes.string.isRequired,
};

export default compose(withStyles(styles), withTheme())(HeadedSection);
