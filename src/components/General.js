import React, {Component} from "react";

class General extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div id="general">
                <h2>General information</h2>
                <div>
                    <label htmlFor="firstName">first Name:</label>
                    <input type="text" id="firstName"/>
                </div>
                <div>
                    <label htmlFor="lastName">last Name:</label>
                    <input type="text" id="lastName"/>
                </div>
                <div>
                    <label htmlFor="email">email:</label>
                    <input type="email" id="email"/>
                </div>
                <div>
                    <label htmlFor="phoneNumber">phone number:</label>
                    <input type="tel" id="phoneNumber"/>
                </div>
            </div>
        );
    }
}

export default General;