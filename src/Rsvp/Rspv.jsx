import React, { PureComponent, Fragment } from 'react';
import * as emailjs from 'emailjs-com';
import { Formik } from 'formik';
import { compose } from 'recompose';
import { withStyles, withTheme, TextField,FormControlLabel, Checkbox, Fade, Button, Divider } from '@material-ui/core';
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
        <TextField
        name="senderName"
        id="senderName"
        onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
        label="Name(s)"
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
          <Fade timeout={800} in={values.hasDietryRequirements}>  
            <p>Please provide any dietry requirements below.</p>          
          </Fade>

          <TextField
          id="extraInformation"
          name="extraInformation"
          label="Additional information"
          multiline
          rowsMax="4"
          onChange={handleChange}
            onBlur={handleBlur}
            value={values.extraInformation}
          className={classes.textAreaField}
          margin="normal"
        />
          <br />
          <Button variant="contained" color="secondary" className={classes.button} onClick={handleSubmit}>
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
