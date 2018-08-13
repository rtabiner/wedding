import React, { PureComponent } from 'react';
import { compose } from 'recompose';
import { withStyles, withTheme, Tabs, Tab } from '@material-ui/core';
import styles from './Navigation.styles';
import PropTypes from 'prop-types';
import { Link}  from 'react-router-dom';

class Navigation extends PureComponent {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };
  
render() {
  const { classes } = this.props;
  return(
    <div className={classes.navigationSection}>
    <div className={classes.navigationTabs}>
          <Tabs          
          value={this.state.value}
          indicatorColor="primary"
          onChange={this.handleChange}
          centered
        >
        
        <Tab 
        className={classes.tab}
        disableTouchRipple
        component={Link}
        to='/'
          label={<span className={classes.tabLabel}>The Day</span>} />
         
        <Tab 
        className={classes.tab}
        disableTouchRipple
          disableFocusRipple
          component={Link}
          to='/TravelAndAccomodation'
          label={<span className={classes.tabLabel}>Travel + Accomodation</span>} />
         <Tab 
        className={classes.tab}
        disableTouchRipple
        component={Link}
        to='/ThingsToDo'
        label={<span className={classes.tabLabel}>Things To Do</span>} />
        <Tab        
        className={classes.tab}
        disableTouchRipple
        to='/RSVP'
        component={Link}
          label={<span className={classes.tabLabel}>RSVP</span>} />
          </Tabs>
        </div>
            </div>
  );
}
}

Navigation.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default compose(withStyles(styles), withTheme())(Navigation);
