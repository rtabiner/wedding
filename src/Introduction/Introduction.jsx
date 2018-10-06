import React, { PureComponent, Fragment } from "react";
import { compose } from "recompose";
import { withStyles, withTheme, Fade, Divider, Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import styles from "./Introduction.styles";
import Header from "../Shared/PageElements/Header";
import Text from "../Shared/PageElements/Text";
import Gallery from 'react-photo-gallery';

class Introduction extends PureComponent {
  dividerLine() {
    return (
      <Grid item xs={12}>
        <Divider />
      </Grid>
    );
  }

  scheduleBlock(time, location, summary) {
    return (
      <Fragment>
        {this.dividerLine()}
        <Grid item xs={2} sm={2}>
        <Text marginBottom={0}>{time}</Text>
        </Grid>
        <Grid item xs={4} sm={4}>
        <Text marginBottom={0}>{location}</Text>
        </Grid>
        <Grid item xs={6} sm={6}>
        <Text marginBottom={0}>{summary}</Text>
        </Grid>
      </Fragment>
    );
  }

  render() {
    const { classes } = this.props;
    const PHOTO_SET = [
      {
        src: 'https://lh3.googleusercontent.com/oILs8p1_WE1VY8dQrvJot1IPxygv5KOGe0wYO3QV9-5e-2k3NGi3e2qMHzx_MgQHoHRA3yYnj-2cDnjZd59aLfUlCC5BYmAS3VHa_EyXr3XXM9f_i-A6rBAeT8Cup_FCd3BRJkv49LU8oGk6-COvcHSnm3vvrOJbHCIhnvlPAgpjfZ0W47cNd-ouwYh13C5XLeOZbl-A5vtUDjs7dFmOODGokx3dIdYLVbCP-V3byKGlByhob4faB15qAuiA6KaTo9MurvrVdNmVFcbz7uL9oh-zlctYb88OzmyjaUbstBFjK7lPNKC6fyWjSuYwYdnJHp6NVlaKKqBOIElt3EWEOFal_2ZvZa_N6L5X5syzSwXr_lAgwNxov2mqWrWtlFFT3Xsel7YROjG0vepog33l5mcFN3L3CbEU1qokF3uIQuyaC7ICdT3y3UTNRwYka9jRu9U-zezVoBLHost2pM5dVMhdnd9ePx14zAQUKHzwVDNyLxrj3NDA7eUQpPdl_OLVg6DvUV1SvvtJ2_AnhF82XVzBP-8YMNtRCZ-r7NUWEGfP7aQHDNWI6wAVDc3jmG-Ws9Y-vhYDN9DCxci44vw2Iyopdos2sB2bg8wM5hWW0hU4c1pKwxnWQO9G6AtwFAU_O2lW8YeWPBdtUqwYtkfQfBp68cYNq1bVHoRt4Sjl3damSARbS1twRCdS=w1082-h1446-no',
        width: 3,
        height: 4
      },
      {
        src: 'https://lh3.googleusercontent.com/IKnvl2cugEBJoMs0BjvlxTAI0k2ONGXWNm0W1rclmCpWeRDC5i6nVFsjMJV6fWDBdQvt8q2fHmjgk7lJYxnmlSQ0ZGVmxkZlI9d9AjkkFE2AwJjiTU0IxwaI_2nPqu4KvaEPZUuwveuNB3Qhk2S-EyOgmjq3GBnAGEl3SgT3Be8EbtOcrCeB5EfIbcbAOLWLCJuzISrIVDpuO1FUYASZLfdfUlkjaZ5a3aPgkXYNX5SLHFs64sTBmTotHdcX1AW4nJtXVT2O5KPMbP0_Vabuj9G9kLAkTzT0AcNYUDQHcOAtHfy-o1jqYOJ6grRs3WzMfoSboRILTZIFn1xAZQybqFBVOmcwPhAjinO7tFgdCmnuIU2x5XAGpNpQ4ZD5BYpfd5OmfQm-zvhXgFXKCRdOXxkE6L6YQ8Ezk22fzLEyVDZTlsSTqPQxr6BgMz5FNIV0U1CAhpn0HiPltGu2xMFzwOKKjgB7iqg10cbAM0rco02WzaWDsme6tZDTpEaD-pH6exdqiW563OGNXyPKcLrv_iRniwe5vP91Vhxd88XhEoeJjCbTHQB_JiIXTfqmxCT8dicR-MGcwANApdEuF25JVzq87LjkWSuJTCNW2s9ogU3Sf6Nu15Y_5kqYLnDD_8A=w1086-h1446-no',
        width: 3,
        height: 4
      },
      {
        src: 'https://lh3.googleusercontent.com/sYyxRuk45R5waISIERPhgMMEaB4v0dr8WveayEJPTfpufWUKSk32zRLrSdYJBDiL7FP3bOq3lDmqyK9TyWEtTeOGSaZt6hCqBg33p7fYu-YinYj2ZsRFhYGRFDl8vqQxRwFhBamscD4OLVw0PBHpcLmpJ-JF8hNKBO3aOOGCtXAgDHMWUPUxosXl3n7Xyz8oktyUyVKJnYrzcPj8v0APTcOTKzQgehqNQyOK-hTHjaOf5QBumixOETC-jST1EVXYKELt6SBKbW0GeWeJciXGV9nJX9uE082gnUOKfsMKZxH18NjGc-iWXLzo2Tcpl5rCj6jUYmkQTLmMIpaTvFYLD8IuMyeodoeu79w6MAfzP0wASqb21DYTfKauEqsTwP4OgO7B7Hs6LWcQ-7N7ZyOVnZ2Ht8UknJ3_GLsuFq7_zbVEXdmepzatxWw9hMDg0jhGZKmq3EcQmXMuXQc-TfwEqP9yxA_GGTAPmew5b_LvqT5PCX2wBtk4TZ4hFkF2AKyjUhmpPmW8TImBJZ5ExWS2_U8NnEExdTu03J9JzHqD0tS8D_b7p8alxc0bBvcExSGDiyApQGD3doUofdU7IsY7bWJG7jJqMBsVG6UWdQ0d67OiBBtz9UCn32OQx4v_yfEImqai5ZByGvP3-1H-FFw5OL6IRGyhWSx7HU72Al3HrMUPjModShXPxfs1=w960-h1280-no',
        width: 3,
        height: 4
      }, 
      {
        src: 'https://lh3.googleusercontent.com/cTl7BmGkJhPmjevdktMwLO5l4M_3UlV6VyIU9y5980s-6CocOpkVnNw5TbFGZQyhkgrRTP9uQ-0BCMnwlMXomUm3Fod63ZVJvvqRpgUlnwqoAULFynwEbhMGEpcVVZMWS2MxHK6v6kqoffZeFGxfWs8XCwV1F3HHbBgLAKsvGc_r088rk-2bvbc_2T2IOOuucPyj6yRhr8VbXP9Td-pBHWsZ9-tk-zhKQ-hDyEATkaMUWSIaNpWSymOyH3nruhsSK-ZWH5Ni4MhBFVhuHqIoc3snl8EHPSzHEUEeyK4K16FvTZ2yGoeAOaRHhJqFZ9wjfY8FETVh3YJNOkQmFC0VagdG8gNegFl1MGGk8OM7xmCcYQMWtcsda7tSzoos5zOihiS2kBugrAzEvFzc64tV48RUcdw61SXgoTZpTw--xIvCUfAU7bucULUN9x__DUl5lpoYZDYtwsL_lqoC9xoHfwRg1OUBmrIy0CBl14hLKjb5jmpAVCiw9rNU3J4O0ki-y5fFSICDaiuXRi0CU0oLFGGkdR9MdKVfjHYrJ5k9-t6igtyO5Oh9OS6e75DK1jbu_wSoBGDT6yEdSrs2xRIkfseYPxZAoYmsFOSjeU9o8bdeNRZrncQ_Y-PzIdtxJemJFDtaAaCfr1Ud0h4NTW9wfDuastoiVnqeKshqFNOwv6DBBEa_8A-rzHUJ=w1088-h1446-no',
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
              &apos;sunny&apos; south east, the &apos;Marble City&apos; is a great
              spot to spend a few days soaking up Irish culture.
            </Text>
            <Text marginBottom={10}>
              After the wedding ceremony in Kilkenny, we will head to Durrow, to
              kick start our married life with our nearest and dearest in this
              special village.
            </Text>
            <Text marginBottom={10}>
              On these pages, you can find details of the wedding, as well as
              details on the local area. We&apos;re also happy to help answer any
              further questions over email by contacting us at:&nbsp;
              <a href="mailto:rob@tabiner.net">rob@tabiner.net</a>.
            </Text>
            <Text>
              We can't wait to welcome you to this lovely part of the world to
              celebrate our special day.
            </Text>
          </div>
          <Gallery columns={4} photos={PHOTO_SET} />
          <div className={classes.schedule}>
            <Header showDivider={false}>Schedule</Header>
            <Grid container spacing={24}>
              {this.scheduleBlock(
                "1pm",
                "St. Canice's Church",
                "Please join us for our Wedding Ceremony at St. Canice's Church, Kilkenny. St. Canice's is Áine's local church. Please arrive at 12.30pm for a 1pm start, you don't want to be later than the Bride (and Áine is never late)! For those travelling from Durrow, we will provide a bus, which will be leaving at 12 (please let us know on the RSVP if you would like to take advantage of this)."
              )}
              {this.scheduleBlock(
                "3pm",
                "Castle Durrow",
                "Whoooooo we are married (hopefully). The reception begins at 3pm at Catle Durrow, a place that is very special to us both! At this point you will have earned your pint of Guinness - enjoy!"
              )}
              {this.scheduleBlock(
                "9pm",
                "Dancefloor",
                "Time to show us your best moves."
              )}
              {this.scheduleBlock(
                "2am",
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
  classes: PropTypes.object.isRequired // eslint-disable-line
};

export default compose(
  withStyles(styles),
  withTheme()
)(Introduction);
