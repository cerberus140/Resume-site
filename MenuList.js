import React from 'react';
import {aboutMe} from "./aboutme";
import {skills} from "./skills";
import {previousExperience} from "./previous_experience";
import {hobbies} from "./hobbies";

export class menuList extends React.Component {
    constructor (props){
        super(props);
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(e){
        const choice = e.target.value;
        this.props.onClick(choice);
    }
    render() {
        return (
            <div>
                <select id="sections" onClick={this.handleClick}>
                    <option value={aboutMe}>About Me</option>
                    <option value={previousExperience}>Previous Experience</option>
                    <option value={skills}>Skills</option>
                    <option value={hobbies}>Hobbies</option>
                </select>
            </div>
        )
    }
}