import React from "react";
import "../App.css";
import Feather from 'feather-icons-react';

export default function Header({ clickFunc, projectName, iconName, imagePath, projData }) {
    return (
        <div className="project-box">
            <div className="project-container">
                <div className="project-overlay" onClick={() => {console.log("this is working"); clickFunc({...projData, name: projectName})}}>
                    {imagePath ? <img className="project-image" src={imagePath}></img> : <></>}
                </div>
                <Feather className="project-icon" icon={iconName} size="60"/>
                <div className="project-caption">{projectName}</div>
            </div>
            
        </div>
    );
}
