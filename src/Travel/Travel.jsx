import React, { PureComponent } from 'react';
import { compose } from 'recompose';
import {
  withStyles, withTheme, Fade, Grid,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import styles from './Travel.styles';
import TravelMode from './TravelMode';
import HeadedSection from '../Shared/HeadedSection';
import Header from '../Shared/PageElements/Header';
import Text from '../Shared/PageElements/Text';
import GallerySegment from '../Shared/Photos/GallerySegment';
import { introPhotoSet } from '../Shared/Photos/Photos';

class TravelAndAccommodation extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <Fade in timeout={800}>
        <div>
          <Header>Travel</Header>
          <Text>
            Here you can find out more information about getting to and from
            Kilkenny and Durrow, as well as some local accomodation. Use the
            buttons to help jump to the relevant sections.
          </Text>
          <div className={classes.pleaseNote}>
            <Text marginBottom={0}>
              <b>Please note:</b>
              {' '}
we will be putting on transport to and from
              the church from Durrow on the day of the wedding. Just let us know
              in the RSVP section if you would like to take advantage of this!
            </Text>
          </div>
          <div className={classes.transportButtons}>
            <Grid container spacing={24}>
              <Grid item sm={3} xs={12}>
                <TravelMode cardText="Air" transportMode="air" />
              </Grid>
              <Grid item sm={3} xs={12}>
                <TravelMode cardText="Car" transportMode="car" />
              </Grid>
              <Grid item sm={3} xs={12}>
                <TravelMode cardText="Train" transportMode="train" />
              </Grid>
              <Grid item sm={3} xs={12}>
                <TravelMode cardText="Bus" transportMode="bus" />
              </Grid>
            </Grid>
          </div>

          <HeadedSection header="Air" anchor="air">
            <div className={classes.transportSection}>
              <Text>
                Dublin Airport is by far the largest airport, and has regular
                flights all year round from all major airports. Naturally we
                would reccommend booking well in advance to ensure the best
                fare, but generally speaking flights shouldn&apos;t cost much
                more than £50.
              </Text>
              <Text>
                Alternatively, you could fly to Cork which is a similar distance
                from Kilkenny as Dublin.
              </Text>
            </div>
          </HeadedSection>

          <HeadedSection header="Car" anchor="car">
            <div className={classes.transportSection}>
              <Text>
                Travelling by car is by far the easiset and quickest way to get
                around, and we would certainly recommend driving or hiring a car
                if this is an option.
              </Text>
              <Text>
                St. Canice&apos;s Church has plenty of room for parking, as do
                all of the recommended places to stay in the accomodation page.
                The distance between St. Canice&apos;s Church and the reception
                at Castle Durrow is about a 25 minute drive (26km / 16 miles).
              </Text>
              <div className={classes.pleaseNote}>
                <Text marginBottom={0}>
                  <b>Car Hire</b>
                  <br />
                  If you are flying to Ireland and would like to hire a car, you
                  will find the widest range and the cheapest options at Dublin
                  Airport. We tend to use
                  {' '}
                  <a
                    href="https://www.skyscanner.net/carhire"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    SkyScanner
                  </a>
                  {' '}
                  (yes, they do car hire too!) to find the best deal, and book
                  well in advance to ensure the best price.
                </Text>
              </div>
            </div>
          </HeadedSection>

          <HeadedSection header="Train" anchor="train">
            <div className={classes.transportSection}>
              <Text>
                It is possible to travel by train to Kilkenny from Heuston
                Station in Dublin. Trains run every few hours and can be booked
                {' '}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://www.irishrail.ie/"
                >
                  here
                </a>
                .
              </Text>
              <Text>
                Unfortunately, Durrow is only a small village and is only
                supported by a local bus service, or by booking a taxi from
                Kilkenny.
              </Text>
            </div>
          </HeadedSection>

          <HeadedSection header="Bus" anchor="bus">
            <div className={classes.transportSection}>
              <Text>
                <b>Dublin to Kilkenny</b>
                <br />
                There is a regular bus service that runs between Dublin Airport
                / city centre and Kilkenny. You can book a ticket
                {' '}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://jjkavanagh.ie/"
                >
                  here
                </a>
                .
              </Text>
              <Text>
                <b>Dublin to Durrow</b>
                <br />
                Unfortunately getting to Durrow via bus is not as
                straight-forward. You will need to get a bus to Portlaoise and
                then jump on a local service to Durrow. You can book a ticket
                {' '}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.dublincoach.ie/"
                >
                  here
                </a>
                .
              </Text>
            </div>
          </HeadedSection>
          <GallerySegment photoSet={introPhotoSet} />
        </div>
      </Fade>
    );
  }
}

TravelAndAccommodation.propTypes = {
  classes: PropTypes.object.isRequired // eslint-disable-line
};

export default compose(
  withStyles(styles),
  withTheme(),
)(TravelAndAccommodation);
