import React, { PureComponent, Fragment } from 'react';
import { compose } from 'recompose';
import {
  withStyles,
  withTheme,
  Fade,
  Divider,
  Grid,
  Hidden,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import styles from './Introduction.styles';
import Header from '../Shared/PageElements/Header';
import SubHeader from '../Shared/PageElements/SubHeader';
import Text from '../Shared/PageElements/Text';
import Sleep from '../Images/slumber.svg';
import Couple from '../Images/wedding-couple.svg';
import Cheers from '../Images/cheers.svg';
import Wink from '../Images/wink-face-square.svg';
import Beer from '../Images/beer.svg';
import Dancer from '../Images/dancer-with-music.svg';
import { introPhotoSet } from '../Shared/Photos/Photos';
import GallerySegment from '../Shared/Photos/GallerySegment';
import PleaseNote from '../Shared/PleaseNote/PleaseNote';

/* eslint-disable class-methods-use-this */
class Introduction extends PureComponent {
  dividerLine() {
    return (
      <Grid item xs={12}>
        <Divider />
      </Grid>
    );
  }

  scheduleBlock(time, location, summary, hideDivider) {
    const { classes } = this.props;
    return (
      <Fragment>
        {!hideDivider && this.dividerLine()}
        <Grid item xs={12} sm={12} md={2}>
          <div className={classes.scheduleTime}>
            {time}
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={2}>
          <Hidden smDown>
            <div className={classes.locationWrapperMd}>
              <img alt="icon" className={classes.scheduleIcon} src={location} />
            </div>
          </Hidden>
          <Hidden mdUp>
            <div className={classes.locationWrapperSm}>
              <img alt="icon" className={classes.scheduleIcon} src={location} />
            </div>
          </Hidden>
        </Grid>
        <Grid item xs={12} sm={12} md={8}>
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
          <div className={classes.intro}>
            <Header>Welcome</Header>
            <Text marginBottom={10}>
              We&apos;re super excited to welcome you to our wedding in
              Áine&apos;s home town, Kilkenny on the 24th August 2019. Located
              in Ireland&apos;s sunny south east, the &apos;Marble City&apos;
              is a great spot to spend a few days soaking up Irish culture.
            </Text>
            <Text marginBottom={10}>
              After the wedding ceremony in Kilkenny, we will head to Durrow, to
              kick start our married life with our nearest and dearest.
            </Text>
            <Text marginBottom={10}>
              On these pages, you can find details of the wedding, as well as
              details on the local area. We&apos;re also happy to help answer
              any further questions by contacting us
              {' '}
              <a href="mailto:aineandrob@tabiner.net">via email</a>
              .
            </Text>
            <Text>
              We can&apos;t wait to welcome you to this lovely part of the world to
              celebrate our special day.
            </Text>
          </div>
          <GallerySegment photoSet={introPhotoSet} />
          <div className={classes.schedule}>
            <Header showDivider={false}>Schedule</Header>
            <SubHeader>Saturday 24th August 2019</SubHeader>
            <Grid container spacing={24}>
              {this.scheduleBlock(
                <p className={classes.scheduleTime}>
                  1pm @
                  {' '}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://goo.gl/maps/y8eXuZCwmT82"
                  >
                    Kilkenny
                  </a>
                </p>,
                Couple,
                <Text marginBottom={0}>
                  Please join us for our Wedding Ceremony at St. Canice&apos;s
                  Church, Kilkenny. St. Canice&apos;s is Áine&apos;s local church. Please
                  arrive no later than 12.30pm for a 1pm start, you don&apos;t want to be later
                  than the Bride (and Áine is never late)! For those travelling
                  from Durrow, we will provide a bus, which will be leaving at
                  12pm (please let us know on the RSVP if you would like to take
                  advantage of this).
                </Text>,
                true,
              )}
              {this.scheduleBlock(
                <p className={classes.scheduleTime}>
                3pm @
                  {' '}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://goo.gl/maps/nHEVm6Gk3PE2"
                  >
                  Durrow
                  </a>
                </p>,
                Cheers,
                <Text marginBottom={0}>
                  Whoooooo we are married (hopefully). The reception begins at
                  3pm at Castle Durrow, a place that is very special to us both!
                  At this point you will have earned your pint of Guinness -
                  enjoy!
                </Text>,
              )}
              {this.scheduleBlock(
                <p className={classes.scheduleTime}>9pm</p>,
                Dancer,
                <Text marginBottom={0}>Time to show us your best moves.</Text>,
              )}
              {this.scheduleBlock(
                <p className={classes.scheduleTime}>2am</p>,
                Sleep,
                <Text marginBottom={40}>
                  Unfortunately, all good things must come to an end (unless
                  you&apos;re heading to the residents bar
                  {' '}
                  <img alt="wink" src={Wink} className={classes.winkFace} />
                  ).
                </Text>,
              )}
            </Grid>
            <SubHeader>Sunday 25th August 2019</SubHeader>
            <Grid container spacing={24}>
              {this.scheduleBlock(
                <p className={classes.scheduleTime}>
                  6pm @
                  {' '}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://goo.gl/maps/w557jJZf4u82"
                  >
                    Kilkenny
                  </a>
                </p>,
                Beer,
                <Text marginBottom={0}>
                  For those of you making a full weekend of it, we will be in
                  {' '}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://goo.gl/maps/w557jJZf4u82"
                  >
                    Langton&apos;s
                  </a>
                  {' '}
                  from 6pm. It will be great to see you and catch
                  up on the previous day&apos;s shenanigans over several pints of Guinness.
                </Text>,
                true,
              )}
              {this.dividerLine()}
            </Grid>
          </div>
          <div className={classes.gifts}>
            <PleaseNote header="Gifts">
              <span>
                The most important gift for us is your company on our special
                day. However, for those of you who
                insist, a small contribution towards our honeymoon would be
                greatly received.
              </span>
            </PleaseNote>
          </div>
          <br />
        </div>
      </Fade>
    );
  }
}

Introduction.propTypes = {
  classes: PropTypes.object.isRequired // eslint-disable-line
};

export default compose(
  withStyles(styles),
  withTheme(),
)(Introduction);
