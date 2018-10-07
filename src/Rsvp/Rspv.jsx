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

    // Option 1
    setTimeout(() => {
      stateThis.setState({
        attending: formData.attending,
        emailSuccess: true,
        emailResponded: true,
      });
    }, 1000);
    console.log(formData);
    // End Option 1

    // // Option 2
    // emailjs.send('mailgun', 'template_SqaqZ51v', formData, 'xxx')
    //   .then(() => {
    //     stateThis.setState({
    //       attending: formData.attending,
    //       emailSuccess: true,
    //       emailResponded: true,
    //     });
    //   }, () => {
    //     stateThis.setState({
    //       attending: formData.attending,
    //       emailSuccess: false,
    //       emailResponded: true,
    //     });
    //   });
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
              <img
                alt="thanks"
                className={classes.submitImage}
                src="https://lh3.googleusercontent.com/NwtCqWd9hHXHRMeZ5BS-e7LOUGrEHtA63dohngoQ2IMrjH-icqJjGbbOL-2lnr7iladY9eAL6d45yi4ZRfqRE47IbCg1fDPExDSFIje_uFpI4TxyzG6L7alGbclDd9aLTeUa4gIVaGpZh7O10fDExXCF09zUlhxXwIN72XWalwcdqngFN1o9TObPduA1EqtW84oTncTeZQp5vMnnfyBDIH5l5j6vYBZ0eW3VWJTMs_dVgFRMrSl3mO4-Iufk9500iU-SWPvCj8g2Srx6YFCud93rsIDPBpaa7FEFiYIYIzAlpSvKB1R93yNSFly40a7rZHbNT-LuAWeuwDw8Z3i9VsgOe--3Z1L47p843t0_YS0xuOOWcy3_fz3YBWw4t-3DryYqsiNPEVKCJR2rEcd1BGzUGSJOjhe2Ml_SgAJLJBHVv4jc1LyD611m4AhEcbN0Y347emj9OuYGpfl2c3vkrOCq7NKSRcWvhVc4sCqrnDsaeZrQKQsqC9Bq5vJPoC1RUu_SHFBeMK6GoIrA0FgDbbTfSjra3kyQ_u3y2NpKmeIlVqMO57xZPAsM_RGS3861TdTOnHVuBNn8aksFnFO1mKNTPIzkEPynhBcCBBhns62BeCyRToZ5ZRUbxOP8SJCegSaRTTuD16bGqbWQUGiCZ-LwfZcqwwPQv51vuHF00y0DmoNPlKgD7pKd=w960-h1280-no"
              />
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
              <img
                alt="thanks"
                className={classes.submitImage}
                src="https://lh3.googleusercontent.com/Fxwk-q4loq75yj-fSEujyszJt1O0zmyolnEqxOUPYfbOZ4tyvH3oH68S7R-Dvh47zGu98ZjvolFvRyVPr7tycN3zXB6FYZr91HSBlqqWCpPtWP8sUjGXW73hBykAvpIVxJ2djoG6v0sBwrl8_yiGVxogOHQQZ3E5dR4RIB2BAtxiC697Pl0nkednvlkMPNB06hdH4jAhWNR8Fl_uouYOslDqU4fNSo6rIbIXZ-5AGrjW5raqBFm6jQvWmgnPk4MVEE81KuhUSIjGWTst7MT-ICk7lPKkBP_HePTeuyiIAbEsyRBM4VtTJ_4PjUeMyFRjy8EKBZuNSnwKmvgIjVK3uSHfF5TmJnOrafa1aGGuoPIZoM3fQav8RENq-iuMg6PADWHNf2H0YFjneQdzA2ZNvUvgTDE9LJa2Yt6ByfH9eR2o0qqtoqlSSccbmIC5Vf3Np_fyR9JSG2BYXvA-YMV0z2tP3wPqZzqgZr7tP2Xtytg2zlfqJwbya1qUwt44s9f1fy5aIUGE-S_veQFa2jVzkaKrBLg1nIFq0SUtmjY5I0-GMb89k4pKyz0RBouXVKHu1ffOw0v8hEip04lP6QiM2abQFfRe-fme5eLtFs-CsBwKz_9CmQxjxIppi-DUpE_-J_mO7JtdSJZRdN_0XSwZUG0-7SBA2AChToTpuxBJgBBkZM3FQN3RpFBc=w1192-h1446-no"
              />
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
              <div className={classes.pleaseNote}>
                <Text marginBottom={0}>
                  <b>Please note:</b>
                  {' '}
                  we would love to give all our guests the
                  opportunity to let their hair down and have a good time
                  without having to worry about little eyes and ears so we
                  politely request no children other than immediate family.
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
                          label="Do you have any dietry requirements?"
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
