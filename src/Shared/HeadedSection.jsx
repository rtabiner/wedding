import React, { PureComponent, Fragment } from 'react';
import { Element } from 'react-scroll';
import Header from '../Shared/PageElements/Header';

class HeadedSection extends PureComponent {
  render() {
    const { header, anchor } = this.props;
    return (      
        <Element name={anchor}>
          <Header>{header}</Header>
          {this.props.children}
        </Element>
    );
  }
}

export default HeadedSection;
