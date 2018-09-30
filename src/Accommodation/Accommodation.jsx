import React, { PureComponent } from "react";
import { compose } from "recompose";
import { withStyles, withTheme, Fade } from "@material-ui/core";
import PropTypes from "prop-types";
import styles from "./Accommodation.styles";
import Header from "../Shared/PageElements/Header";
import Text from "../Shared/PageElements/Text";

class ThingsToDo extends PureComponent {
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
          <Text marginBottom={20}>
            Castle Arms Hotel Durrow Co Laois 057 87 36117
          </Text>
          <Text marginBottom={20}>
            Castle View B and B Durrow Co Laois 057 87 36544
          </Text>
        </div>
      </Fade>
    );
  }
}

ThingsToDo.propTypes = {
  classes: PropTypes.object.isRequired // eslint-disable-line
};

export default compose(
  withStyles(styles),
  withTheme()
)(ThingsToDo);
