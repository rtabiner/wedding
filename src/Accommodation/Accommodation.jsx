import React, { PureComponent } from 'react';
import { compose } from 'recompose';
import {
  withStyles,
  withTheme,
  Fade,
  Grid,
  Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import styles from './Accommodation.styles';
import Header from '../Shared/PageElements/Header';
import SubHeader from '../Shared/PageElements/SubHeader';
import Text from '../Shared/PageElements/Text';

/* eslint-disable class-methods-use-this */
class Accommodation extends PureComponent {
  hotelCard(hotelName, hotelLink, city, county, phone) {
    const { classes } = this.props;
    return (
      <Grid item md={4} sm={12} xs={12}>
        <div className={classes.hotelCardName}>
          <a
            href={hotelLink}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.hotelCardNameLink}
          >
            {hotelName}
          </a>
        </div>
        <Typography className={classes.hotelCardContent}>
          {city}
          <br />
          {county}
          <br />
          <span className={classes.hotelPhone}>
            <a href={`tel:${phone}}`}>{phone}</a>
          </span>
        </Typography>
      </Grid>
    );
  }

  render() {
    const { classes } = this.props;
    return (
      <Fade in timeout={800}>
        <div>
          <Header>Accommodation</Header>
          <Text marginBottom={20}>
            Unfortunately due to the size of our wedding party, Castle Durrow is
            unable to accommodate everyone on the night of our wedding. We have
            set aside a number of rooms for our guests in the Castle Arms Hotel
            and Durrow House B&#38;B. Both are less than a five minute walk from the
            venue. Rooms are held until 24th January. To book a room please use
            the contact details below and let them know that you belong to our
            wedding party.
          </Text>
          <div className={classes.accomSection}>
            <SubHeader>Durrow</SubHeader>
            <Text>
              Durrow is a quintessential Irish town on the borders between Co. Kilkenny and Co. Laois.
              If you are staying in Durrow on the Friday night, make sure to take a trip to Bob&apos;s
              Bar for a top pint and even better craic!
            </Text>
            <Grid container spacing={24}>
              {this.hotelCard(
                'Castle Durrow',
                'https://goo.gl/maps/EQvFY9RkUAN2',
                'Durrow',
                'Co. Laois',
                '+353 (0)57 8736555',
              )}
              {this.hotelCard(
                'Castle Arms Hotel',
                'https://goo.gl/maps/BHQidjzCs9P2',
                'Durrow',
                'Co. Laois',
                '+353 (0)57 8736117',
              )}
              {this.hotelCard(
                'Durrow House B&B',
                'https://goo.gl/maps/sHnhLndgLbx',
                'Durrow',
                'Co. Laois',
                '+353 (0)57 8736544',
              )}
            </Grid>
          </div>
          <div className={classes.accomSection}>
            <SubHeader>Kilkenny</SubHeader>
            <Text>
              Kilkenny is one of Ireland&apos;s biggest tourist draws because of it&apos;s
              medieval architecture and vibrant scene. If you&apos;re planning on extending
              your trip, we highly recommend a night or two to experience what Kilkenny
              has to offer. There are plenty of restaurants and more watering holes than
              you can shake a stick at.
            </Text>
            <Text>
              We are having a some post-wedding drinks in Kilkenny on the Sunday evening
              (see the schedule for more information).
            </Text>
            <Grid container spacing={24}>
              {this.hotelCard(
                'Newpark Hotel',
                'https://goo.gl/maps/uhRpRaQTTJT2',
                'Kilkenny',
                'Co. Kilkenny',
                '+353 (0)56 7760500',
              )}
              {this.hotelCard(
                'Hibernian Hotel',
                'https://goo.gl/maps/62ZA2GF3wiN2',
                'Kilkenny',
                'Co. Kilkenny',
                '+353 (0)56 7771888',
              )}
              {this.hotelCard(
                'Kilkenny Inn',
                'https://goo.gl/maps/ZqFjk85CZHy',
                'Kilkenny',
                'Co. Kilkenny',
                '+353 (0)56 7761902',
              )}
            </Grid>
            <br />
            <br />
            <Text marginBottom={20}>
            If you are planning on staying elsewhere, or need more information
            on anything at all,
              {' '}
              <a href="mailto:aineandrob@tabiner.net">get in touch</a>
              {' '}
            and Áine will try her best to help answer any questions!
            </Text>
          </div>
          <br />
        </div>
      </Fade>
    );
  }
}

Accommodation.propTypes = {
  classes: PropTypes.object.isRequired // eslint-disable-line
};

export default compose(
  withStyles(styles),
  withTheme(),
)(Accommodation);
