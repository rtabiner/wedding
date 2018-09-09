import React, { PureComponent, Fragment } from 'react';
import * as emailjs from 'emailjs-com';
import { Formik } from 'formik';
import { compose } from 'recompose';
import { withStyles, withTheme, TextField,FormControlLabel, Checkbox, Fade, Button, Collapse, Divider, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import styles from './Rspv.styles';
import PropTypes from 'prop-types';

class Rsvp extends PureComponent {
constructor(props){
  super(props);
this.state = {
  formSubmitted: false,
}
}
    sendEmail(formData) {

  console.log(formData);

//   emailjs.send('mailgun', 'template_SqaqZ51v', formData, 'xxxxxxx')
//   .then(function(response) {
//     console.log('SUCCESS!', response.status, response.text);
//  }, function(error) {
//     console.log('FAILED...', error);
//  });

this.setState({formSubmitted: true});

}

render() {
    const { classes } = this.props;
    return (
        <div>
        <h1>RSVP</h1>

{this.state.formSubmitted &&
        <Fade timeout={1000} in={this.state.formSubmitted}> 
        <div className={classes.form}>
        <p>Thanks or submitting your response!</p>
        </div>
    </Fade>
}
{!this.state.formSubmitted &&

    <Fade timeout={800} in={!this.state.formSubmitted}>  
    <div className={classes.form}>

    <p>Please use the form below to let us know if you are able to join us celbrate our special day.</p>
    <br />
    <Divider />
    <p><b>Please note:</b> we would love to give all our guests the opportunity to let their hair down and have a good time without having to worry about little eyes and ears so we politely request no children other than immediate family.</p>
    <Divider />
    <br />
    <Formik
      initialValues={{
        senderName: '',
        attending: false,
        numberAttending: 0,
        hasDietryRequirements: false,
        extraInformation: '',
      }}
      onSubmit={(
        values,
        { setSubmitting }
      ) => {
        this.sendEmail(values);
      }}
      render={({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form className={classes.container}>
                <p className={classes.formLabel}>Your name(s):</p>
        <TextField
        name="senderName"
        id="senderName"
        onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          className={classes.textField}
          margin="normal"
        />
          <br />
          <br />

          <FormControlLabel
        control={
          <Checkbox name="attending" id="attending"
          onChange={handleChange}
          classes={{
              root: classes.checkboxRoot
            }}
          onBlur={handleBlur} />
        }
        label="Yes, we are able to make it!"
      /> 

          <Collapse in={values.attending}>
          
          <div>
          <br />

          <p>Number Attending:</p>

            <Select
            value={values.numberAttending}
            onChange={handleChange}
            className={classes.selectList}
            inputProps={{
              name: 'numberAttending',
              id: 'numberAttending',
            }}
          >
            <MenuItem value="">Please select</MenuItem>
            <MenuItem value={1}>One</MenuItem>
            <MenuItem value={2}>Two</MenuItem>
            <MenuItem value={3}>Three</MenuItem>
          </Select>
         
        <br />
          <br />

          <FormControlLabel
          control={
            <Checkbox name="hasDietryRequirements" id="hasDietryRequirements"
            onChange={handleChange}
            classes={{
                root: classes.checkboxRoot
              }}
            onBlur={handleBlur} />
          }
          label="Dietry requirements?"
        />
          <br />
          <Collapse in={values.hasDietryRequirements}>
          <p>Please provide any dietry requirements below.</p>          
          </Collapse>
        </div>
        </Collapse>
        <p>Additional Information:</p>

          <textarea
          id="extraInformation"
          name="extraInformation"
          onChange={handleChange}
            onBlur={handleBlur}
            value={values.extraInformation}
          className={classes.textAreaField}
          margin="normal"
        />
        <br />
        <Button variant="contained" color="secondary" disabled={isSubmitting}> className={classes.button} onClick={handleSubmit}>
          Submit
          </Button>
        </form>
      )}
    />
    </div>
    </Fade>}
    </div>
    );
}
}

Rsvp.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default compose(withStyles(styles), withTheme())(Rsvp);
