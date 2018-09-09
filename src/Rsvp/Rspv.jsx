import React, { PureComponent, Fragment } from 'react';
import * as emailjs from 'emailjs-com';
import { Formik, FieldArray } from 'formik';
import { compose } from 'recompose';
import { withStyles, withTheme, TextField,FormControlLabel, Checkbox, Fade, Button, Collapse, Divider, Radio, RadioGroup, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import styles from './Rspv.styles';
import PropTypes from 'prop-types';
import * as Yup from 'yup';

class Rsvp extends PureComponent {
constructor(props){
  super(props);
this.state = {
  formSubmitted: false,
  attending: false,
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

handleChange = event => {
  this.setState({ attending: event.target.value });
};

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
      validationSchema={Yup.object().shape({
        senderName: Yup.string()
          .required('Required'),
        attending: Yup.bool(),
        hasDietryRequirements: Yup.bool(),
        numberAttending: Yup.number().when('attending', {
        is: true,
        then: Yup.number()
          .moreThan(0),
        otherwise: Yup.number(),
      }),
      extraInformation: Yup.string().when('hasDietryRequirements', {
          is: true,
          then: Yup.string()
          .required('Required'),
          otherwise: Yup.string(),
      })
    })}
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
        isValid,
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

          <FieldArray>
      <RadioGroup
            name="attending"
            id="attending"
            className={classes.group}
            onChange={handleChange}
            value={values.attending}
          >
            <FormControlLabel value={true} control={<Radio />} label="Yes, we are able to make it!" />
            <FormControlLabel value={false} control={<Radio />} label="Sorry, we won't be able to make it" />
          </RadioGroup>
</FieldArray>
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
            <MenuItem value={0}>Please select</MenuItem>
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
        <Button variant="contained" color="secondary" disabled={!isValid} className={classes.button} onClick={handleSubmit}>
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
