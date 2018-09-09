import React, { PureComponent } from 'react';
import { compose } from 'recompose';
import { withStyles, withTheme, Card, CardContent, CardActions, Button, Typography } from '@material-ui/core';
import TrainIcon from '@material-ui/icons/Train';
import FlightIcon from '@material-ui/icons/FlightTakeoff';
import BusIcon from '@material-ui/icons/DirectionsBus';
import CarIcon from '@material-ui/icons/DirectionsCar';
import styles from './TravelMode.styles';

class TravelMode extends PureComponent {
    
getTransportIcon(transportMode){
    switch(transportMode){
        case 'car':
            return <CarIcon className={this.props.classes.icon} />
        case 'bus':
            return <BusIcon className={this.props.classes.icon} />
        case 'train':
            return <TrainIcon className={this.props.classes.icon} />
        case 'flight':
            return <FlightIcon className={this.props.classes.icon} />
    }
}

    render() {
        const { classes, transportMode, summary } = this.props;
        return(
                        <a href={'#' + transportMode}>
        <Card className={classes.root}>
        <CardContent>
            {this.getTransportIcon(transportMode)}
            <Typography className={classes.cardContent} paragraph>
              {summary}
            </Typography>
           {this.props.cardText}
        </CardContent>
      </Card>
      </a>      

        );
    }
    }

    export default compose(withStyles(styles), withTheme())(TravelMode);
    