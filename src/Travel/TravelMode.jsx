import React, { PureComponent } from 'react';
import { compose } from 'recompose';
import { withStyles, withTheme, Typography } from '@material-ui/core';
import { Link } from 'react-scroll';
import Train from '../Images/train.svg';
import Car from '../Images/car.svg';
import Bus from '../Images/bus.svg';
import Air from '../Images/air.svg';
import styles from './TravelMode.styles';

/* eslint-disable default-case */
class TravelMode extends PureComponent {
  getTransportIcon(transportMode) {
    const className = this.props.classes.icon;
    switch (transportMode) {
      case 'car':
        return <img alt="car" src={Car} className={className} />;
      case 'bus':
        return <img alt="bus" src={Bus} className={className} />;
      case 'train':
        return <img alt="train" src={Train} className={className} />;
      case 'air':
        return <img alt="air" src={Air} className={className} />;
    }
  }

  render() {
    const { classes, transportMode, cardText } = this.props;
    return (
      <Link to={transportMode} spy smooth offset={20} duration={700} className="plain-link">
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
