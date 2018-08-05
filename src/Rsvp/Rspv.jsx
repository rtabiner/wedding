import React, { PureComponent } from 'react';
import * as emailjs from 'emailjs-com';
import { Formik } from 'formik';
import { compose } from 'recompose';
import Button from '@material-ui/core/Button';
import { withStyles, withTheme, TextField,FormControlLabel, Checkbox } from '@material-ui/core';
import styles from './Rspv.styles';
import PropTypes from 'prop-types';

class Rsvp extends PureComponent {

    sendEmail(formData) {

  console.log(formData);

//   emailjs.send('mailgun', 'template_SqaqZ51v', formData, 'xxxxxxx')
//   .then(function(response) {
//     console.log('SUCCESS!', response.status, response.text);
//  }, function(error) {
//     console.log('FAILED...', error);
//  });
}

render() {
    const { classes } = this.props;
    return (
        <div>
        <h1>RSVP</h1>
    <div className={classes.form}>
    <Formik
      initialValues={{
        senderName: '',
        attending: false,
        hasDietryRequirements: false,
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
        label="Full name"
          className={classes.textField}
          margin="normal"
        />
          <br />
          <br />

          <FormControlLabel
          control={
            <Checkbox name="attending" id="attending"
                        onChange={handleChange}
            onBlur={handleBlur}
            value={values.attending} />
          }
          label="Attending"
        />

          <br />
          <br />

          <FormControlLabel
          control={
            <Checkbox name="hasDietryRequirements" id="hasDietryRequirements"
                        onChange={handleChange}
            onBlur={handleBlur}
            value={values.hasDietryRequirements} />
          }
          label="Dietry requirements"
        />
          <br />
          <br />
          <Button variant="outlined" color="primary" className={classes.button} onClick={handleSubmit}>
          Submit
          </Button>
        </form>
      )}
    />
    </div>
    </div>
    );
}
}

Rsvp.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default compose(withStyles(styles), withTheme())(Rsvp);
