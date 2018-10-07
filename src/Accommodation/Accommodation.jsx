import React, { PureComponent } from "react";
import { compose } from "recompose";
import {
  withStyles,
  withTheme,
  Fade,
  Grid,
  Typography
} from "@material-ui/core";
import PropTypes from "prop-types";
import styles from "./Accommodation.styles";
import Header from "../Shared/PageElements/Header";
import Text from "../Shared/PageElements/Text";

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
            and Durrow House B+B. Both are less than a five minute walk from the
            venue. Rooms are held until 24th January. To book a room please use
            the contact details below and let them know that you belong to our
            wedding party.
          </Text>
          <Text marginBottom={20}>
            If you are planning on staying elsewhere, or are looking to extend
            your trip, feel free to{" "}
            <a href="mailto:rob@tabiner.net">get in touch</a> and Áine can
            provide some tips on the local area and places to stay!
          </Text>
          <Grid container spacing={24}>
            <Grid item md={4} sm={12}>
              <div className={classes.root}>
                <Typography className={classes.cardContent}>
                  <span className={classes.hotelName}>Castle Durrow</span>
                  <br />
                  <span className={classes.hotelPhone}>dfsdfd</span>
                </Typography>
              </div>
            </Grid>
            <Grid item md={4} sm={12}>
              <div className={classes.root}>
                <Typography className={classes.cardContent}>
                  <span className={classes.hotelName}>Castle Arms Hotel</span>
                  <br />
                  Durrow
                  <br />
                  Co. Laois
                  <br />
                  <span className={classes.hotelPhone}>
                    +353 (057) 87 36117
                  </span>
                </Typography>
              </div>
            </Grid>
            <Grid item md={4} sm={12}>
              <div className={classes.root}>
                <Typography className={classes.cardContent}>
                  <span className={classes.hotelName}>Castle View B and B</span>
                  <br />
                  Durrow
                  <br />
                  Co. Laois
                  <br />
                  <span className={classes.hotelPhone}>
                    +353 (057) 87 36544
                  </span>
                </Typography>
              </div>
            </Grid>
          </Grid>
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
  withTheme()
)(Accommodation);
