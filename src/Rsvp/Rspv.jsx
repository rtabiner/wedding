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
                <img className={classes.submitImage} src="https://lh3.googleusercontent.com/e70B8-iPwVUJ_WGdFJfUJfY7s9wO0MHOpEX9ltUAAUssrLWgX2WSl_YvNTrulAZGApKwKimtyPrtKExUZH-8hnN-Dw3i5jIhtAZtu6KhN5NK_whbcucB6WWzrNEAP8SsUtV5K5p6dCYtZ5mpNZyb_tLPETfTruwiPSlJ8mZLMmyFvzE1TOOnKX70x9gvnoZ7b0k0Vymo_-zDmFmsIbGx0rs7UC9LYSm_lXywxxPWGvtpyF5lAh9GZrTX6Dh9-WjeN96v1pnKSHT-GykIrMOtYgfS1g3hBr05Iwe5KOE97r2sXShlikjQXOqbDXlclfbXtoqGY7eL1a3QH86e8NlJzR4IHKMkO1kP3bjabFZAGZ_acA8TuFN19a1zMc1X81SxbfCvtSsRX_4AyYvWJ3q0T3H-X7eiwpth31TOioXC5xzo6cqHaSyadcZnJ8NOpu48KGXy9YWqxD5l7Oq1Qha24ZoLxmFKWkpEgtmJVPZznWjQyMSo4i7ThSAPOfhDnQPeYVuWissgaXPR_rGkXJB1DxA8wRga5lfDsBZ3wwmpoa0bqNn_RdZrsrtNg0gq_NCSkWTnfED_a77ya0ZE3CABU_wlkCrJnXeEC50U8utAkzEj3bPlGonLSfYk6GRfv0b3fKdZftYiI9uZtgI4CIUfoEKI_MgvNhfoQv5wgikFfYjUR1kIMT83TwXu=w2049-h1537-no" />
                <br /><br />
                <h3>Thanks or submitting your response.</h3>
                {attending && (
                  <div>
                    <Typography paragraph className={classes.successSummary}>
                      We&apos;re looking forward to celebrating our day with you!
                    </Typography>
                  </div>
                )}
                {!attending
                  && (
                    <Typography paragraph className={classes.successSummary}>
                      We&apos;re sorry you can&apos;t make it.
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
                <div className={classes.pleaseNote}>
                <Text marginBottom={0}>
                  <b>Please note:</b>
                  {' '}
                  we would love to give all our guests the opportunity to let their
                  hair down and have a good time without having to worry about little
                  eyes and ears so we politely request no children other than immediate family.
                </Text>
                </div>
                <br />
                <Formik
                  initialValues={{
                    senderName: '',
                    attending: true,
                    numberAttending: 0,
                    hasDietryRequirements: false,
                    requiresTransport: false,
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
                            label="Yes, of course we're coming!"
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
                            label="Sorry, we won't be able to make it."
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
                                  name="requiresTransport"
                                  id="requiresTransport"
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
                              label="Do you require transport from Durrow to the church?"
                            />
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
                              label="Do you have any dietry requirements?"
                            />
                            <br />
                            <Collapse in={values.hasDietryRequirements}>
                              <Text marginBottom={5}>Please provide any dietry requirements below.</Text>
                            </Collapse>
                          </div>
                        </Collapse>

                        <div className={classes.additonalInfoSection}>
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
