const styles = theme => ({
  header: {
    marginTop: 20,
    marginBottom: 40,
    color: theme.palette.colors.darkGrey,
  },
  subHeader: {
    fontSize: 25,
    paddingTop: 14,
    paddingBottom: 14,
    borderTop: '1px solid rgba(0, 0, 0, 0.12)',
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    color: theme.palette.colors.darkGrey,
    backgroundColor: '#c4d7d21a',
    marginBottom: 20,
  },
  headerDivider: {
    marginBottom: 30,
  },
  text: {
    color: theme.palette.colors.darkGrey,
  },
});

export default styles;
