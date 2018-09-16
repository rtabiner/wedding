import React, { PureComponent, Fragment } from 'react';
import Header from '../Shared/PageElements/Header';

class HeadedSection extends PureComponent {
  render() {
    const { header, anchor } = this.props;
    return (
      <Fragment>
        <a name={anchor} />
          <Header>{header}</Header>
          {this.props.children}
      </Fragment>
    );
  }
}

export default HeadedSection;
