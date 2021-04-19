import React, {Component} from "react";
import "../styles/Build.css";
import General from "./General.js";

class Build extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div id="build">
                <form id="buildForm">
                    <General/>
                    <h2>Education</h2>
                    <div>
                        <label htmlFor="schoolName">school name:</label>
                        <input type="text" id="schoolName"/>
                    </div>
                    <div>
                        <label htmlFor="titleOfStudy">title of study:</label>
                        <input type="text" id="titleOfStudy"/>
                    </div>
                    <div>
                        <label htmlFor="startDate">starting date:</label>
                        <input type="date" id="startDate"/>
                    </div>
                    <div>
                        <label htmlFor="endDate">end date:</label>
                        <input type="date" id="endDate"/>
                    </div>
                    <h2>Practical Experience</h2>
                    <div>
                        <label htmlFor="companyName">company name:</label>
                        <input type="text" id="companyName"/>
                    </div>
                    <div>
                        <label htmlFor="positionTitle">position title:</label>
                        <input type="text" id="positionTitle"/>
                    </div>
                    <div>
                        <label htmlFor="mainTasks">main tasks of your job:</label>
                        <textarea rows="5" cols="50" id="multiLineInput"/>
                    </div>
                    <div>
                        <label htmlFor="startDate">start date:</label>
                        <input type="date" id="startDate"/>
                    </div>
                    <div>
                        <label htmlFor="endDate">end date:</label>
                        <input type="date" id="endDate"/>
                    </div>
                </form>
            </div>
        );
    };
}

export default Build;