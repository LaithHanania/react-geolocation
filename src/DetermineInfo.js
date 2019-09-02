import './PageCSS.css'

import React from 'react'
import RetrieveDate from './RetrieveDate'

//Function to determine text if prop is null
const DetermineNumberText = (text) => {
    if(text == null){
        return ('Information not available.');
    }else{
        return(text);
    }
};

const getTimeOfDay = (hours) =>{
    return hours > 21 ? 'night':'day'; //this means if hours > 21 then its night, otherwise its day
};

//Function that returns the information to be displayed
const DetermineInfo = (props) =>{
    const currentHour = RetrieveDate().hour;

    return (<div className = 'full-page'>
        <div className = 'list'>
            <h1 className = 'page-title'>My Geolocation</h1><br/>
            <i className = "globe icon"/>Latitude: {DetermineNumberText(props.lat)} <br/>
            <i className = "globe icon"/>Longitude: {DetermineNumberText(props.lon)} <br/>
            <i className = "globe icon"/>Location Accuracy: {DetermineNumberText(props.accuracy)} <br/> <br/>
            <i className = "globe icon"/>Altitude: {DetermineNumberText(props.altitude)} <br/>
            <i className = "globe icon"/>Altitude Accuracy: {DetermineNumberText(props.altitudeAccuracy)} <br/> <br/>

            <div className = {getTimeOfDay(currentHour)}>
                <i className = "outline-clock clock outline icon"/>Year: {RetrieveDate().year} <br/>
                <i className = "clock outline icon"/>Month: {RetrieveDate().month} <br/>
                <i className = "clock outline icon"/>Day: {RetrieveDate().day} <br/>
                <i className = "clock outline icon"/>Date: {RetrieveDate().date} <br/>
                <i className = "clock outline icon"/>Hour: {RetrieveDate().hour} <br/>
                <i className = "clock outline icon"/>Local time: {props.time} <br/>
            </div>
        </div>
            <p className = 'copy-right'>Copyright @Laith Hanania</p>
        </div>
        );
};

//This is the method to find an alternative text if props is not passed
DetermineInfo.defaultProps={
    lat: 'Information not available.',
    lon: 'Information not available.',
    accuracy: 'Information not available.',
    altitude: 'Information not available.',
    altitudeAccuracy: 'Information not available.'
}

export default DetermineInfo;