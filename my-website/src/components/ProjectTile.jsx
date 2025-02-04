import React from "react";
import "../App.css";
import Feather from 'feather-icons-react';

export default function Header(props) {
    return (
        <div className="project-box">
            <div className="project-container">
                <div className="project-overlay">
                    {props.imagePath ? <img className="project-image" src={props.imagePath}></img> : <></>}
                </div>
                <Feather className="project-icon" icon={props.iconName} size="60"/>
                <div className="project-caption">{props.projectName}</div>
            </div>
            
        </div>
    );
}
