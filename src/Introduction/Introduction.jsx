import React, { PureComponent, Fragment } from 'react';
import { compose } from 'recompose';
import {
  withStyles,
  withTheme,
  Fade,
  Divider,
  Grid
} from '@material-ui/core';
import PropTypes from 'prop-types';
import styles from './Introduction.styles';
import Header from '../Shared/PageElements/Header';
import Text from '../Shared/PageElements/Text';

class Introduction extends PureComponent {
  dividerLine() {
    return(
      <Grid item xs={12}>
      <Divider />
    </Grid>
    );
  }

  scheduleBlock(time, location, summary) {
    return(
      <Fragment>
      {this.dividerLine()}
      <Grid item xs={2} sm={2}>
      {time}
    </Grid>
    <Grid item xs={4} sm={4}>
      {location}
    </Grid>
    <Grid item xs={6} sm={6}>
      {summary}
    </Grid>
    </Fragment>
      );
  }

  render() {
    const { classes } = this.props;
    return (
      <Fade timeout={800} in>
        <div>
          <Header>Welcome</Header>
          <Text>
            We&apos;re super excited to welcome you to our wedding in Áine&apos;s home town,
            Kilkenny. On these pages, you can find details of the wedding,
            as well as details on the local area. We&apos;re also happy to help answer any
            further questions over email by contacting us at:&nbsp;
            <a href="mailto:rob@tabiner.net">rob@tabiner.net</a>
            .
          </Text>
          <div className={classes.schedule}>
            <Divider className={classes.scheduleDivider} />
            <Header>Schedule</Header>
            
            <Grid container spacing={24}>
              {this.scheduleBlock(
                '1pm',
                "St. Canice's Church",
                "The day starts in Kilkenny in Áine's local church. The ceremony begins at 1pm, so please arrive by 12.30. For those travelling from Durrow, we will provide a bus, which will be leaving at 12."
              )}
              {this.scheduleBlock(
                '3pm',
                "Castle Durrow",
                'Join us for drinks, dinner and dancing at Castle Durrow.'
              )}
              {this.scheduleBlock(
                '2am',
                "Home",
                'Game over.'
              )}
              {this.dividerLine()}
            </Grid>

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
