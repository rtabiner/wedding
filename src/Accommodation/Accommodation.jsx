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

class Accommodation extends PureComponent {
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
              Durrow is a small village with a few pubs blaaaha..
            </Text>
            <Grid container spacing={24}>
              <Grid item md={4} sm={12} xs={12}>
                <div className={classes.root}>
                  <Typography className={classes.cardContent}>
                    <a
                      href="https://goo.gl/maps/EQvFY9RkUAN2"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={classes.hotelName}
                    >
                  Castle Durrow
                    </a>
                    <br />
                  Durrow
                    <br />
                  Co. Laois
                    <br />
                    <span className={classes.hotelPhone}>
                      <a href="tel:+353 (0)57 8736555">+353 (0)57 8736555</a>
                    </span>
                  </Typography>
                </div>
              </Grid>
              <Grid item md={4} sm={12} xs={12}>
                <div className={classes.root}>
                  <Typography className={classes.cardContent}>
                    <a
                      href="https://goo.gl/maps/BHQidjzCs9P2"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={classes.hotelName}
                    >
                  Castle Arms Hotel
                    </a>
                    <br />
                  Durrow
                    <br />
                  Co. Laois
                    <br />
                    <span className={classes.hotelPhone}>
                      <a href="tel:+353 (0)57 8736117">+353 (0)57 8736117</a>
                    </span>
                  </Typography>
                </div>
              </Grid>
              <Grid item md={4} sm={12} xs={12}>
                <div className={classes.root}>
                  <Typography className={classes.cardContent}>
                    <a
                      href="https://goo.gl/maps/sHnhLndgLbx"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={classes.hotelName}
                    >
                  Durrow House B&#38;B
                    </a>
                    <br />
                  Durrow
                    <br />
                  Co. Laois
                    <br />
                    <span className={classes.hotelPhone}>
                      <a href="tel:+353 (0)57 8736544">+353 (0)57 8736544</a>
                    </span>
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </div>
          <div className={classes.accomSection}>
            <SubHeader>Kilkenny</SubHeader>
            <Text>
              Kilkenny is a vibrant small city, and has a lot going on..
            </Text>
            <Grid container spacing={24}>
              <Grid item md={4} sm={12} xs={12}>
                <div className={classes.root}>
                  <Typography className={classes.cardContent}>
                    <a
                      href="https://goo.gl/maps/uhRpRaQTTJT2"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={classes.hotelName}
                    >
                  Newpark Hotel
                    </a>
                    <br />
                  Kilkenny
                    <br />
                  Co. Kilkenny
                    <br />
                    <span className={classes.hotelPhone}>
                      <a href="tel:+353 (0)56 7760500">+353 (0)56 7760500</a>
                    </span>
                  </Typography>
                </div>
              </Grid>
              <Grid item md={4} sm={12} xs={12}>
                <div className={classes.root}>
                  <Typography className={classes.cardContent}>
                    <a
                      href="https://goo.gl/maps/62ZA2GF3wiN2"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={classes.hotelName}
                    >
                  Hibernian Hotel
                    </a>
                    <br />
                    Kilkenny
                    <br />
                  Co. Kilkenny
                    <br />
                    <span className={classes.hotelPhone}>
                      <a href="tel:+353 (0)56 7771888">+353 (0)56 7771888</a>
                    </span>
                  </Typography>
                </div>
              </Grid>
              <Grid item md={4} sm={12} xs={12}>
                <div className={classes.root}>
                  <Typography className={classes.cardContent}>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={classes.hotelName}
                    >
                  Somewhere else
                    </a>
                    <br />
                    Kilkenny
                    <br />
                  Co. Kilkenny
                    <br />
                    <span className={classes.hotelPhone}>
                      <a href="tel:+353 (0)56 num">+353 (0)56 num</a>
                    </span>
                  </Typography>
                </div>
              </Grid>
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
