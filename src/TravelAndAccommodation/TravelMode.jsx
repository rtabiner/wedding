import React, { PureComponent } from 'react';
import { compose } from 'recompose';
import { withStyles, withTheme, Card, CardContent, CardActions, Button, Typography } from '@material-ui/core';
import styles from './TravelMode.styles';

class TravelMode extends PureComponent {
    
    render() {
        const { classes } = this.props;
        return(
<Card>
        <CardContent>
            {this.props.children}
            <Typography paragraph>
              stuff.  sdfijs jffj dsifo fiosdj fdsijiosdj fosdifoisdj fosidj foisdj foisdj oisdjfoisdj fosdfj
            </Typography>
        </CardContent>
        <CardActions classes={classes.cardActions}>
          <a href="#car">{this.props.cardText}</a>
        </CardActions>
      </Card>
        );
    }
    }

    export default compose(withStyles(styles), withTheme())(TravelMode);
    