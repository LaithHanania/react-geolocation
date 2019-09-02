//Importing react library
import React from 'react'

//Importing faker for fake profiles
import faker from 'faker'

//Importing background for website
import Background from './worldImage.jpg';

//Main function
const DrawPage = () =>{
    //Setting website title
    document.title = "My Geolocation";
    document.body.backgroundImage = '`url(${Background})`';

    return(
        <div style = {{backgroundImage: `url(${Background})`}}> {/* background image */}
            <h1 style = {{display: 'flex', justifyContent: 'center'}}>Geolocation Information</h1>{/* Centering headline */}
        </div>
    );
}

//Exporting DrawPage for use in other files
export default DrawPage;