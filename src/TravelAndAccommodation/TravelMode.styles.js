const styles = theme => ({
    root: {
        minWidth: '100%',
        border: '1px #94b8af solid',
        height: '100%',
        borderRadius: 5,
        paddingTop: 20,
        marginBottom: 10,
        '&:hover': {
            background: '#94b8af1a'
        },
    },
    cardContent: {
        textAlign: 'center',
        padding: 10,
    },
    icon: {
        fill: '#94b8af', 
        width: 60,
        height: 60,
        marginBottom: 10,
    }        
});    

export default styles;