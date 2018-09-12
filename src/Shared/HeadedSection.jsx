import React, { PureComponent, Fragment } from 'react';

class HeadedSection extends PureComponent {
  render() {
    const { header, anchor } = this.props;
    return (
      <Fragment>
        <a name={anchor} />
        <h2>{header}</h2>
        {this.props.children}
      </Fragment>
    );
  }
}

export default HeadedSection;
