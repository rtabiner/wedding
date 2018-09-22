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
      <Text>{time}</Text>
    </Grid>
    <Grid item xs={4} sm={4}>
    <Text>{location}</Text>
    </Grid>
    <Grid item xs={6} sm={6}>
    <Text>{summary}</Text>
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
                "Please join us for our Wedding Ceremony at St. Canice's Church, Kilkenny. St. Canice's is Áine's local church. Please arrive at 12.30pm for a 1pm start, you don't want to be later than the Bride (and Áine is never late)! For those travelling from Durrow, we will provide a bus, which will be leaving at 12 (please let us know on the RSVP if you would like to take advantage of this)."
              )}
              {this.scheduleBlock(
                '3pm',
                "Castle Durrow",
                "Whoooooo we are married (hopefully). The reception begins at 3pm at Catle Durrow, a place that is very special to us both! At this point you will have earned your pint of Guinness - enjoy!"
              )}
              {this.scheduleBlock(
                '9pm',
                "Dancefloor",
                'Time to show us your best moves.'
              )}
                 {this.scheduleBlock(
                '2am',
                "Hometime",
                "All good things must come to an end (unless you're heading to the residents bar winky face)"
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
