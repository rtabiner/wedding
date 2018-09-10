import React, { PureComponent, Fragment } from 'react';
import { withStyles, withTheme } from '@material-ui/core';

class HeadedSection extends PureComponent {
    render() {
        const { header, anchor } = this.props;        
        return(
            <Fragment>
        <a name={anchor}></a> 
        <h2>{header}</h2>
        {this.props.children}
        </Fragment>
        );
    }
}

    export default HeadedSection;
    