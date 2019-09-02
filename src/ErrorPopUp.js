//Importing CSS file
import './ErrorCSS.css'

//Importing react libraries
import React from 'react'

//Function that returns a centererd icon with text regarding geolocation error
const ErrorPopUp = (props) =>{
    return(
        <div className = "error-page">
            <i className = "error-symbol massive exclamation circle icon"/>
            <h1 className = "error-text">Error: {props.message}<br/>Please make sure you allow location services</h1>
        </div>
    );
}

//Exporting the function
export default ErrorPopUp;