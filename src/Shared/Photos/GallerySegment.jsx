import React, { Fragment, PureComponent } from 'react';
import {
  Hidden,
} from '@material-ui/core';
import Gallery from 'react-photo-gallery';
import PropTypes from 'prop-types';

class GallerySegment extends PureComponent {
  render() {
    const { photoSet } = this.props;
    return (
      <Fragment>
        <Hidden xsDown>
          <Gallery columns={4} photos={photoSet} />
        </Hidden>
        <Hidden smUp>
          <Gallery columns={2} photos={photoSet} />
        </Hidden>
      </Fragment>);
  }
}

GallerySegment.propTypes = {
  photoSet: PropTypes.array.isRequired,
};

export default GallerySegment;
