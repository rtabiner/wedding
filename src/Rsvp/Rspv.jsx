import React, { PureComponent } from 'react';
import * as emailjs from 'emailjs-com';
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
import Photo from '../Images/wedding-invitation.svg';
import PleaseNote from '../Shared/PleaseNote/PleaseNote';
import { rsvpPhotoSet } from '../Shared/Photos/Photos';
import GallerySegment from '../Shared/Photos/GallerySegment';

class Rsvp extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      formSubmitted: false,
      emailSuccess: false,
      attending: false,
      emailResponded: false,
    };
  }

  async sendEmail(formData) {
    const stateThis = this;
    stateThis.setState({ formSubmitted: true });

    // // Option 1
    // setTimeout(() => {
    //   stateThis.setState({
    //     attending: formData.attending,
    //     emailSuccess: true,
    //     emailResponded: true,
    //   });
    // }, 1000);
    // // console.log(formData);
    // // End Option 1

    // Option 2
    emailjs.send('mailgun', 'template_SqaqZ51v', formData, 'xx')
      .then(() => {
        stateThis.setState({
          attending: formData.attending,
          emailSuccess: true,
          emailResponded: true,
        });
      }, () => {
        stateThis.setState({
          attending: formData.attending,
          emailSuccess: false,
          emailResponded: true,
        });
      });
  }

  render() {
    const { classes } = this.props;
    const {
      formSubmitted, attending, emailSuccess, emailResponded,
    } = this.state;
    return (
      <div>
        <Header>RSVP</Header>
        {formSubmitted && emailResponded && (
          <Fade timeout={1000} in={formSubmitted}>
            <div>
              { !emailSuccess
            && (
            <div className={classes.formSuccess}>
              <img src={Photo} alt="invitation" className={classes.rsvpIcon} />
              <br />
              <br />
              <h3>Oh dear.</h3>
              <div>
                <Typography paragraph className={classes.successSummary}>
                    Something went wrong, please try again.
                </Typography>
              </div>
            </div>
            )
          }
              { emailSuccess
            && (
            <div className={classes.formSuccess}>
              <img src={Photo} alt="invitation" className={classes.rsvpIcon} />
              <br />
              <br />
              <h3>Thanks for letting us know.</h3>
              {attending && (
              <div>
                <Typography paragraph className={classes.successSummary}>
                    We&apos;re looking forward to celebrating our day with you!
                </Typography>
              </div>
              )}
              {!attending && (
              <Typography paragraph className={classes.successSummary}>
                  We&apos;re sorry you can&apos;t make it.
              </Typography>
              )}
            </div>
            )
          }
            </div>
          </Fade>
        )}
        { !emailResponded && (
          <Fade timeout={800} in={!formSubmitted}>
            <div className={classes.form}>
              <Text>
                Please use the form below to let us know if you are able to
                celebrate our special day with us.
              </Text>
              <PleaseNote>
                <span>
                  we would love to give all our guests the
                  opportunity to let their hair down and have a good time
                  without having to worry about little eyes and ears so we
                  politely request no children other than immediate family.
                </span>
              </PleaseNote>
              <br />
              <br />
              <GallerySegment photoSet={rsvpPhotoSet} />
              <br />
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
                  senderName: Yup.string().required('Required'),
                  attending: Yup.bool(),
                  hasDietryRequirements: Yup.bool(),
                  numberAttending: Yup.number().when('attending', {
                    is: true,
                    then: Yup.number().moreThan(0),
                    otherwise: Yup.number(),
                  }),
                  extraInformation: Yup.string().when('hasDietryRequirements', {
                    is: true,
                    then: Yup.string().required('Required'),
                    otherwise: Yup.string(),
                  }),
                })}
                onSubmit={(values) => {
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
                          <MenuItem value={4}>Four</MenuItem>
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
                              }}
                              onBlur={handleBlur}
                            />
                          )}
                          label="Do you have any dietary requirements?"
                        />
                        <br />
                        <Collapse in={values.hasDietryRequirements}>
                          <Text marginBottom={5}>
                            Please provide any dietry requirements below.
                          </Text>
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
                      <Button
                        variant="outlined"
                        color="primary"
                        disabled={!isValid && !formSubmitted}
                        className={
                          !isValid ? classes.disabledButton : classes.button
                        }
                        onClick={handleSubmit}
                      >
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
  classes: PropTypes.object.isRequired // eslint-disable-line
};

export default compose(
  withStyles(styles),
  withTheme(),
)(Rsvp);
