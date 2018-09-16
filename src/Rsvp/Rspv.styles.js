const styles = theme => ({
  form: {
    textAlign: 'left',
    maxWidth: 700,
    margin: '0 auto',
  },
  formSuccess: {
    textAlign: 'center',
    maxWidth: 700,
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
    color: '#6a6f6a',
    width: '100%',
    height: 100,
    fontSize: 15,
    fontFamily: 'Poiret One',
    padding: 10,
    border: '1px #6a6f6a solid',
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
    color: '#6a6f6a !important',
    borderColor: '#94b8af',
  },
  disabledButton: {
    color: '#6a6f6a !important',
    borderColor: '#6a6f6a',
    cursor: 'not-allowed !important',
    pointerEvents: 'all !important',
  },
  noteDivider: {
    marginBottom: 20,
  },
  dietryRequirements: {
    marginBottom: 10,
  },
});

export default styles;
