import React, {Component} from "react";
import "../styles/Sidebar.css";

class Sidebar extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div id="sidebar">
                <h1>CV Builder</h1>
                <p id="insrtuctions">Enter your information in the build screen on the left then, change the screen mode below</p>
                <div id="sideBtns">
                    <button id="buildBtn" className="sideBtn sideBtnClicked">Build</button>
                    <button id="preBtn" className="sideBtn">Preview</button>
                </div>
            </div>
        );
    }
}

export default Sidebar;