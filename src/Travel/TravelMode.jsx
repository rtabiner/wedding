import React, { PureComponent } from 'react';
import { compose } from 'recompose';
import { withStyles, withTheme, Typography } from '@material-ui/core';
import { Link } from 'react-scroll';
//import TrainIcon from '@material-ui/icons/Train';
//import FlightIcon from '@material-ui/icons/FlightTakeoff';
//import BusIcon from '@material-ui/icons/DirectionsBus';
//import CarIcon from '@material-ui/icons/DirectionsCar';
import styles from './TravelMode.styles';

class TravelMode extends PureComponent {
  getTransportIcon(transportMode) {
    // switch (transportMode) {
    //   case 'car':
    //     return <CarIcon className={this.props.classes.icon} />;
    //   case 'bus':
    //     return <BusIcon className={this.props.classes.icon} />;
    //   case 'train':
    //     return <TrainIcon className={this.props.classes.icon} />;
    //   case 'air':
    //     return <FlightIcon className={this.props.classes.icon} />;
    // }
    return(<span>hi</span>);
  }

  render() {
    const { classes, transportMode, cardText } = this.props;
    return (
      <Link to={transportMode} spy smooth offset={-20} duration={700} className="plain-link">
        <div className={classes.root}>
          {this.getTransportIcon(transportMode)}
          <Typography className={classes.cardContent}>
            {cardText}
          </Typography>
        </div>
      </Link>

    );
  }
}

export default compose(withStyles(styles), withTheme())(TravelMode);
