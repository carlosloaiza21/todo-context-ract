import React from 'react';
import AppBar from '@material-ui/core/AppBar';

const Header=(props)=>{
    
    const {title} = props;

    return(
        <AppBar
            color="primary"
            position="static">
            {title}
        </AppBar>
    );
}

export default Header;