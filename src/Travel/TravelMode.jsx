import React, { PureComponent } from 'react';
import { compose } from 'recompose';
import { withStyles, withTheme, Typography } from '@material-ui/core';
import { Link } from 'react-scroll';
import Train from '../Images/train.svg';
import Car from '../Images/car.svg';
import Bus from '../Images/bus.svg';
import Air from '../Images/air.svg';
import styles from './TravelMode.styles';

class TravelMode extends PureComponent {
  getTransportIcon(transportMode) {
     switch (transportMode) {
       case 'car':
       return <img src={Car} className={this.props.classes.icon} />;
       case 'bus':
       return <img src={Bus} className={this.props.classes.icon} />;
       case 'train':
         return <img src={Train} className={this.props.classes.icon} />;
       case 'air':
       return <img src={Air} className={this.props.classes.icon} />;
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
