import React, { PureComponent, Fragment } from "react";
import { compose } from "recompose";
import {
  withStyles,
  withTheme,
  Fade,
  Divider,
  Grid,
  Hidden
} from "@material-ui/core";
import PropTypes from "prop-types";
import styles from "./Introduction.styles";
import Header from "../Shared/PageElements/Header";
import Text from "../Shared/PageElements/Text";
import Gallery from "react-photo-gallery";
import Sleep from "../Images/slumber.svg";
import Couple from "../Images/wedding-couple.svg";
import Cheers from "../Images/cheers.svg";
import Wink from "../Images/wink-face-square.svg";
import Dancer from "../Images/dancer-with-music.svg";

class Introduction extends PureComponent {
  dividerLine() {
    return (
      <Grid item xs={12}>
        <Divider />
      </Grid>
    );
  }

  scheduleBlock(time, location, summary) {
    const { classes } = this.props;
    return (
      <Fragment>
        {this.dividerLine()}
        <Grid item xs={12} sm={12} md={2}>
          <p className={classes.scheduleTime}>{time}</p>
        </Grid>
        <Grid item xs={12} sm={12} md={2} className={classes.locationWrapper}>
          <img className={classes.scheduleIcon} src={location} />
        </Grid>
        <Grid item xs={12} sm={12} md={8}>
          {summary}
        </Grid>
      </Fragment>
    );
  }

  render() {
    const { classes } = this.props;
    const PHOTO_SET = [
      {
        src:
          "https://lh3.googleusercontent.com/qehWttHp_bD-Y8HP1detzOnU7_Lf7hjBGQAGKpa574Oeml9TBNBG2cqb-ucgM_mPbIVN3PiYoWURXQH2ktqNFd3OmzRFFqAbXQnCqOuMI2PjnJOEaSQjA1hE1tckyO2NUpkCYLlSwh-ENgxsMTDzTRNxX8LhwD4cqjPx5H6d_N_RkxgLY2Bx73_VLKvJcSI-MpaF1gcJ-s2kWrGNKb4FZKX8jfVnryMz9mQGPmRxqu9yH__TElZMhDEn6SQ69kpeuCwQZwoPNyRcQI7uWwZDbdFM9b9Wk6DMIV7m3Bf-ernHn1rW8Q7rtgkcIqvCcW9uphYzinQJbz-tcXOtiIfn5KFB7IyOZSha30Lt6SgvGX58tjEoWKbChLIcMO3g5NjaAi5ARAWOq_TVqPGFqVPXKBw2-GRgO6JGcp5X6w1eQq900IiDKheOE8OsJ1vqXPZLT0Q2zBZ9nf9F7T-yMizwYl5-mksat_ZKba_wPE_UKlzp9p6LpjaaYgsgrdQpzh5Ub4oa8jwW8pc4ZEOAdPUGm_860wzILFprFEnt9LSaPkDLrBMoVnF7Uo-6fBlRb4FyH2RrMyn4Kc1qYkXTuBl83MQP7JLIUk8SuEYBz_vCBfU9sFVyR6QWtBqAe8e3mj4NL2bs7xHRXTNf9TxlX4tCea8yRi897n9qUK-MWeH5mjrEx39H9JED0blk=w960-h1280-no",
        width: 3,
        height: 4
      },
      {
        src:
          "https://lh3.googleusercontent.com/uAZzHnlpYtlOjFH6OnV6Rg6kqWMe7PPljEiwOp0X2UN8gkTlNNt590z98WFNgmWUekaijija17l6dSkx1lWJOfSkqcnDCTkRmKhAA2WcZ-TcvFd690SIEKO3jqGXPHkh8XtrZlZItCAikECwNTAeKhM_dd0SCJZYHs4tQqx7Ef8stYGBTPDD-c2UR7eCSzsJvZw3lidFtnT4soomD3nugPq_-aZwx_-ZWUzmfiMUnZVfucRiCV-oDKJbryrPeQzSdVmaoiQGOt3YnUGcjhc9sriJwkX-NGvtcZuEBIt_Y1zUoDfR0wpyJufyUilKBlDpZqpsobpSaJ8yo81apFlQZn0Wn0oUcgHeEj12J1WlOeQBWobW4m-Bwmw1ZFlYGQDgZ28CGpfPwvSnGs5QburJ80nZz_fykZ3zZur3C0kePisepvOPdO2Spv7GTf_e1nG_Hk1xbic__6NTfqKAil-F5pYbS269tZFHpBO7Uo4GI6hf5EF89RDBbSNnOnDjfVbS2VjLs8dApgpCxgo95VOQICm7T6iEara8rULQKw1LMv42kv3u-QrGjmtBCCa3zZMtk4ODKJnuZ0WXFpcp4kQbvIVS6gsP93IVJsw1dKUwwNe7mo2J7ad-iKi4QhDtocpJetMWNtl8C4l2aO04G_ow-FlwDNeAh4lK6B0wHqhISN-sgnHdrWxltrkt=w960-h1280-no",
        width: 3,
        height: 4
      },
      {
        src:
          "https://lh3.googleusercontent.com/IvKuDCCzc2heCWysmjIk6El4qfCkxWqt58s1sZ0Gs5a_syF6z2sXh23FIwm4ub9N8wV0LeTTEmGD-b5nnXTnP8BpOuvSWy-p0gsRMosUsz2e0JNEd6gs-HFY-SrR_kOGJTidZxhkfF9C89OVcVaCEcfw2HvpayoaE1Bqu2QDbZNZbS4pvSbXFgZNnuQITnolkeSclxD4tn0HoEAYx8kYt_3cVaIBIWIcIKglkgKC7nbMD8BnTtKnPGIdGwD3i3k-fZ4UDtUZ_aDdjUcB5YhVwqDFe4HDSGmXc5krtN5QGpUaan5FPN4tF0muh3CbsX3eYCCZtF9yzNIbW80qAXYkX6wEO9A3ZwZX_9hvLYrkL5KOSycrzfQtPyOaAKAlzewu21S6oCB2ukxdQOTY6LKpGfeJmr6GXLiPLzWI3pAUQ5Dck1wnx-z7XF5Lx5s_rtafWvszL-giMd8lvNOsFl9ZCVIRkRAO1k2gvXr8-NkU5KQxOdqQWES9csgRZ1dNlNgbfZ_Wn2xCb0ja_xK7fKEHnMZlgS72wvwwpieQH3iJ6tDxbaA-pf6m0ydAJqTcBoJEXoCe2IYCOeqR-Vd0O-K8kk8IQxwDBCXqejG7s_HmioB40tXFJzhBhzCJnIY4Jen5af928oV5n-JlLgL-fNYmS9_nhM1jm8N5pTsMWnKGYO2Bm6y4E8HbG2P2=w1082-h1446-no",
        width: 3,
        height: 4
      },
      {
        src:
          "https://lh3.googleusercontent.com/BYeSkUM_Dz5EmGfGIf-P4t2X0Np94tLbNPxaLC04Bq5pYiyiHNliclDBY2Vg9x3GXMW0Nv56oOPMfKpYl25y2antFwKBlg0aWqZ3JYN3pXg4VV31bjIkbaEbUsjoAK_sq8oojShEsv-gXY6MrhI_mCdL2ko3jFb8oY83MOtQX_uRBgZwMWxTZoImHmFXeNgSwsH_nw5BJ0eNQ_lxTc-I8OkPPgiSHPYIKsuL5Z_vXgPsB7Kp0VP1JLMb-x6HMaiXqhjuEi85crCqgFW75gaCZvayKagNxXi2q7L3Q4t6OEuJDurgzs4kQWZCgN6ikr2P3Rj1bOyuF3r0x2gvGth72SNNY2ue6pIK8e5NpfsJYXgfKdKw4I9-18VxBxqIqJp-8Lj4KV0fiAg8D312kiS4DICRR3EdMzmTAebjrsLM7xaOhUdzKGvpNgDLAJIEhh9bmPxqMLHszcDzujyfwe61eFvc8TD7Ks7XWgaF2QI8cZKZ1_fB5AuqpcL76E99-lC1nuNtg2wXYdgtL59hibwocsbtIzHsQL0toK7H-ihNKM-NM16WBGvaKtyI5yePWrnGWcp2TPhQQ-jebTEpyXL4mRAoPwnTnjIyq_XmJr9nfGFS4F0BO2qIgscPHehQ5qPIrEBKtQEVhrt0vJPB90Vx9qFZtNDn-aRpthXoP8XDbUlXPP98uo1CfGPp=w1082-h1446-no",
        width: 3,
        height: 4
      }
    ];

    return (
      <Fade timeout={800} in>
        <div>
          <div className={classes.intro}>
            <Header>Welcome</Header>
            <Text marginBottom={10}>
              We&apos;re super excited to welcome you to our wedding in
              Áine&apos;s home town, Kilkenny. Located in Ireland&apos;s
              &apos;sunny&apos; south east, the &apos;Marble City&apos; is a
              great spot to spend a few days soaking up Irish culture.
            </Text>
            <Text marginBottom={10}>
              After the wedding ceremony in Kilkenny, we will head to Durrow, to
              kick start our married life with our nearest and dearest in this
              special village.
            </Text>
            <Text marginBottom={10}>
              On these pages, you can find details of the wedding, as well as
              details on the local area. We&apos;re also happy to help answer
              any further questions over email by contacting us at:&nbsp;
              <a href="mailto:rob@tabiner.net">rob@tabiner.net</a>.
            </Text>
            <Text>
              We can't wait to welcome you to this lovely part of the world to
              celebrate our special day.
            </Text>
          </div>
          <Hidden xsDown>
            <Gallery columns={4} photos={PHOTO_SET} />
          </Hidden>
          <Hidden smUp>
            <Gallery columns={2} photos={PHOTO_SET} />
          </Hidden>
          <div className={classes.schedule}>
            <Header showDivider={false}>Schedule</Header>
            <Grid container spacing={24}>
              {this.scheduleBlock(
                "1pm",
                Couple,
                <Text marginBottom={0}>
                  Please join us for our Wedding Ceremony at St. Canice's
                  Church, Kilkenny. St. Canice's is Áine's local church. Please
                  arrive at 12.30pm for a 1pm start, you don't want to be later
                  than the Bride (and Áine is never late)! For those travelling
                  from Durrow, we will provide a bus, which will be leaving at
                  12 (please let us know on the RSVP if you would like to take
                  advantage of this).
                </Text>
              )}
              {this.scheduleBlock(
                "3pm",
                Cheers,
                <Text marginBottom={0}>
                  Whoooooo we are married (hopefully). The reception begins at
                  3pm at Catle Durrow, a place that is very special to us both!
                  At this point you will have earned your pint of Guinness -
                  enjoy!
                </Text>
              )}
              {this.scheduleBlock(
                "9pm",
                Dancer,
                <Text marginBottom={0}>Time to show us your best moves.</Text>
              )}
              {this.scheduleBlock(
                "2am",
                Sleep,
                <Text marginBottom={0}>
                  Unfortunately, all good things must come to an end (unless
                  you're heading to the residents bar{" "}
                  <img src={Wink} className={classes.winkFace} />
                  ).
                </Text>
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
  classes: PropTypes.object.isRequired // eslint-disable-line
};

export default compose(
  withStyles(styles),
  withTheme()
)(Introduction);
