const styles = theme => ({
  form: {
    textAlign: 'left',
    // maxWidth: 700,
    margin: '0 auto',
  },
  formSuccess: {
    textAlign: 'center',
    // maxWidth: 700,
    minHeight: 'calc(100vh - 310px)',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  successSummary: {
    textAlign: 'center',
  },
  formLabel: {
    marginBottom: 0,
  },
  textField: {
    marginTop: 5,
    width: '100%',
  },
  textAreaField: {
    color: '#5b5f5b',
    width: '100%',
    height: 100,
    fontSize: 15,
    fontFamily: 'Poiret One',
    padding: 10,
    border: '1px #5b5f5b solid',
  },
  checkboxRoot: {
    color: '#94b8af',
  },
  selectList: {
    width: '100%',
    color: theme.palette.colors.darkGrey,
  },
  textArea: {
    paddingRight: 22,
  },
  formButtons: {
    textAlign: 'right',
  },
  button: {
    color: '#5b5f5b !important',
    borderColor: '#94b8af',
  },
  disabledButton: {
    color: '#5b5f5b !important',
    borderColor: '#5b5f5b',
    cursor: 'not-allowed !important',
    pointerEvents: 'all !important',
  },
  dietryRequirements: {
    marginBottom: 6,
  },
  additonalInfoSection: {
    marginTop: 12,
  },
  submitImage: {
    maxHeight: 300,
  },
});

export default styles;
