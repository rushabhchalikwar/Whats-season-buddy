import React from 'react'
import ReactDOM from 'react-dom'
import SeosonDisplay from './SeosonDisplay'
import Spinner from './Spinner'
class App extends React.Component {

    constructor(props) { 
        super(props);

        this.state = {
            lat :null ,
            errorMessage : null
        };       
    }

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat : position.coords.latitude}) ,
            err => this.setState({ errorMessage : err.message })                
        );
    }

    componentDidUpdate(){
        console.log("Component just updated  : rendered");
    }

    render(){
        if(this.state.lat && !this.state.errorMessage){
            return <SeosonDisplay lat = {this.state.lat} />
        }
        else if(!this.state.lat && this.state.errorMessage){
            return <div> Error : {this.state.errorMessage} </div>
        }
        else{
            return <Spinner />
        }
    }
}

ReactDOM.render(
    <App /> ,
    document.querySelector('#root')
);