import React, { PureComponent } from 'react';
// import * as emailjs from 'emailjs-com';
import { Formik } from 'formik';
import { compose } from 'recompose';
import {
  withStyles,
  withTheme,
  TextField,
  FormControlLabel,
  Checkbox,
  Fade,
  Button,
  Collapse,
  Divider,
  Radio,
  RadioGroup,
  Select,
  MenuItem,
  Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import styles from './Rspv.styles';
import Header from '../Shared/PageElements/Header';
import Text from '../Shared/PageElements/Text';

class Rsvp extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      formSubmitted: false,
      attending: false,
    };
  }

  sendEmail(formData) {
    console.log(formData);
    //   emailjs.send('mailgun', 'template_SqaqZ51v', formData, 'xxxxxxx')
    //   .then(function(response) {
    //     console.log('SUCCESS!', response.status, response.text);
    //  }, function(error) {
    //     console.log('FAILED...', error);
    //  });
    this.setState({
      formSubmitted: true,
      attending: formData.attending,
    });
  }

  render() {
    const { classes } = this.props;
    const { formSubmitted, attending } = this.state;
    return (
      <div>
        <Header>RSVP</Header>

        {formSubmitted
          && (
            <Fade timeout={1000} in={formSubmitted}>
              <div className={classes.formSuccess}>
                <h3>Thanks or submitting your response!</h3>
                {attending && (
                  <div>
                    <Typography paragraph className={classes.successSummary}>
                      We&apos;ve let Rob and Áine know that you&apos;re able to make it :)
                    </Typography>
                    <Typography paragraph className={classes.successSummary}>
                      Looking forward to seeing you soon!
                    </Typography>
                  </div>
                )}
                {!attending
                  && (
                  <Typography paragraph className={classes.successSummary}>
                        We&apos;ve let Rob and Áine know that unfortunately
                        you&apos;re not able to make it.
                  </Typography>)
                }
              </div>
            </Fade>
          )
        }
        {!formSubmitted

          && (
            <Fade timeout={800} in={!formSubmitted}>
              <div className={classes.form}>
                <Text>
                  Please use the form below to let us know if you are able to
                  celebrate our special day with us.
                </Text>
                <Divider className={classes.noteDivider} />
                <Text>
                  <b>Please note:</b>
                  {' '}
                  we would love to give all our guests the opportunity to let their
                  hair down and have a good time without having to worry about little
                  eyes and ears so we politely request no children other than immediate family.
                </Text>
                <Divider className={classes.noteDivider} />
                <br />
                <Formik
                  initialValues={{
                    senderName: '',
                    attending: true,
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
                    }),
                  })}
                  onSubmit={(
                    values,
                  ) => {
                    this.sendEmail(values);
                  }}
                  render={({
                    values,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isValid,
                    setFieldValue,
                  }) => (
                    <form className={classes.container}>
                      <Text marginBottom={0}>Your name(s):</Text>
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
                      <RadioGroup
                        name="attending"
                        id="attending"
                        className={classes.group}
                        value={values.attending.toString()}
                      >
                        <FormControlLabel
                          control={(
                            <Radio
                              checked={values.attending}
                              onChange={() => {
                                setFieldValue('attending', true);
                              }}
                            />
                            )}
                          label="Yes, we are able to make it!"
                        />
                        <FormControlLabel
                          control={(
                            <Radio
                              checked={!values.attending}
                              onChange={() => {
                                setFieldValue('attending', false);
                              }}
                            />
                            )}
                          label="Sorry, we won't be able to make it"
                        />
                      </RadioGroup>

                      <Collapse in={values.attending}>

                        <div>
                          <br />

                          <Text marginBottom={10}>Number Attending:</Text>

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
                            className={classes.dietryRequirements}
                            control={(
                              <Checkbox
                                name="hasDietryRequirements"
                                id="hasDietryRequirements"
                                onChange={handleChange}
                                classes={{
                                  root: classes.checkboxRoot,
                                  label: {
                                    textTransform: 'capitalize',
                                  },
                                }}
                                onBlur={handleBlur}
                              />
                              )}
                            label="Dietry requirements?"
                          />
                          <br />
                          <Collapse in={values.hasDietryRequirements}>
                            <Text>Please provide any dietry requirements below.</Text>
                          </Collapse>
                        </div>
                      </Collapse>
                      <Text marginBottom={10}>Additional Information:</Text>

                      <div className={classes.textArea}>
                        <textarea
                          id="extraInformation"
                          name="extraInformation"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.extraInformation}
                          className={classes.textAreaField}
                          margin="normal"
                        />
                      </div>
                      <br />
                      <div className={classes.formButtons}>
                        <Button variant="outlined" color="primary" disabled={!isValid} className={!isValid ? classes.disabledButton : classes.button} onClick={handleSubmit}>
                            Submit
                        </Button>
                      </div>
                    </form>
                  )}
                />
                <br />
              </div>
            </Fade>
          )}
      </div>
    );
  }
}

Rsvp.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default compose(withStyles(styles), withTheme())(Rsvp);
