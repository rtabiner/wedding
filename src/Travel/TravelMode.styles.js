const styles = theme => ({
  root: {
    minWidth: '100%',
    border: '1px #94b8af solid',
    height: '100%',
    borderRadius: 5,
    marginBottom: 10,
    '&:hover': {
      background: '#94b8af1a',
    },
    cursor: 'pointer',
  },
  cardContent: {
    textAlign: 'center',
  },
  icon: {
    fill: '#94b8af',
    width: 60,
    height: 60,
    marginBottom: 10,
    marginTop: 15,
  },
});

export default styles;
