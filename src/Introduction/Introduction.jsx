import React, { PureComponent } from 'react';
import { compose } from 'recompose';
import {
  withStyles,
  withTheme,
  Fade,
  Divider,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import styles from './Introduction.styles';
import Header from '../Shared/PageElements/Header';
import Text from '../Shared/PageElements/Text';

class Introduction extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <Fade timeout={800} in>
        <div>
          <Header>Welcome</Header>
          <Text>
            We&apos;re super excited to welcome you to our wedding in Áine&apos;s home town,
            and wonderful corner of the world. On these pages, you can find details of the wedding,
            as well as details on the local area, but we&apos;re also happy to help if you have any
            other burning questions by contacting us at:&nbsp;
            <a href="mailto:rob@tabiner.net">rob@tabiner.net</a>
            .
          </Text>
          <div className={classes.schedule}>
            <Divider className={classes.scheduleDivider} />
            <Header>Schedule</Header>
            <Text>
              More text...
            </Text>
          </div>
        </div>
      </Fade>
    );
  }
}

Introduction.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default compose(withStyles(styles), withTheme())(Introduction);
