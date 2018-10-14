import React, { Fragment } from 'react';
import {
  Hidden,
} from '@material-ui/core';
import Gallery from 'react-photo-gallery';
import PropTypes from 'prop-types';

const GallerySegment = (props) => {
  const { photoSet } = props;
  return (
    <Fragment>
      <Hidden xsDown>
        <Gallery columns={4} photos={photoSet} />
      </Hidden>
      <Hidden smUp>
        <Gallery columns={2} photos={photoSet} />
      </Hidden>
    </Fragment>);
};

GallerySegment.propTypes = {
  photoSet: PropTypes.array.isRequired,
};

export default GallerySegment;
