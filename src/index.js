//Importing css file
import './PageCSS.css';

//Importing React libraries
import React from 'react';
import ReactDOM from 'react-dom';

//Importing created files in src
//import DrawPage from './DrawPage';
import DetermineInfo from './DetermineInfo';
import Spinner from './Spinner';
import ErrorPopUp from './ErrorPopUp';

//Creating main class 
class App extends React.Component{
    //Constructor function
    constructor(props){
        super(props);

        //Initializing state variables:
        this.state = {lat: null, lon: null, errorMsg: '', accuracy: null, altitude: null, altitudeAccuracy: null, time: ''};
    }

    //Happens only once when initially rendered
    //Best for loading data
    componentDidMount(){
        //Get users current position
        window.navigator.geolocation.getCurrentPosition(
            //Success callback
            (position) =>{
                //Updates states
                this.setState({lat: position.coords.latitude, lon: position.coords.longitude, accuracy: position.coords.accuracy,
                altitude: position.coords.altitude, altitudeAccuracy: position.coords.altitudeAccuracy});
            },

            //Error callback
            (err) =>{
                //Updates states
                console.log(err);
                this.setState({errorMsg: err.message});
            }
        );

        //Function to find local time and update time every one second using the setInterval function
        //toLocaleTimeString finds the local time
        //Updates it every 1000 milliseconds
        setInterval(() => {
            this.setState({time: new Date().toLocaleTimeString()});
        }, 1000)
    }

    //Automatically called everytime updated status or props
    componentDidUpdate(){
        //console.log('Component updated');
    }

    //Used to cleanup when we want to stop displaying a component
    componentWillUnmount(){

    }

    //Helper function to find what to load (error or loading or the content)
    conditionalRender(){
        if(this.state.errorMsg && !this.state.lat){
            return (<ErrorPopUp message = {this.state.errorMsg}/>);
        }

        if(!this.state.errorMsg && this.state.lat){
            return (
                <DetermineInfo 
                lat = {this.state.lat}
                lon = {this.state.lon}
                accuracy = {this.state.accuracy}
                altitude = {this.state.altitude}
                altitudeAccuracy = {this.state.altitudeAccuracy}
                time = {this.state.time}
                />
            );
        }

        else{
            return (<Spinner message = 'Please allow location services' />);
        }
    }

    render(){
        return (this.conditionalRender());
    }
}

//Renderring App to show JSX on user's screen
ReactDOM.render(<App />, document.querySelector('#root'));