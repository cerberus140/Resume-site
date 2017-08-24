import React from 'react';
import ReactDOM from 'react-dom';
import {menuList} from "./MenuList";
import {aboutMe} from "./aboutme";
import {hobbies} from "./hobbies";
import {skills} from "./skills";
import {previousExperience} from "./previous_experience";

class resume extends react.component {
    constructor(props){
        super(props);

        this.state={ choice: aboutMe};
        this.changeChoice=this.changeChoice.bind(this);
    }
    changeChoice(newChoice) {
        this.setState({
            choice: newChoice
        });
    }
    render () {
        return {
            <menuList {this.props.choice}/>

    }
}

ReactDOM.render(<resume />, document.getElementById('app'));