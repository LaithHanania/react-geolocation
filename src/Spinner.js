//Importing react libraries
import React from 'react';

//Loading spinner with grey icon and text from semantic ui
const Spinner = (props) =>{
    return(
        <div className = "ui active dimmer">
            <div className = "ui big text loader">
                Loading... <br/> {props.message}
            </div>
        </div>
    );
};

Spinner.defaultProps={ //this is a default  or alternate version of the props for Spinner incase no props.message exists
    message: 'Loading' //default value for message
};

//Exporting spinner functionality
export default Spinner;