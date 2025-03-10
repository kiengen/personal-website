import React from "react";
import "../App.css";
import Feather from 'feather-icons-react';

export default function Header({ clickFunc, projectName, iconName, projData }) {
    return (
        <div className="project-box">
            <div className="project-container bordered bg-b color-a">
                <div className="project-overlay" onClick={() => {console.log(`${projData.images}/1.png`); clickFunc({...projData, name: projectName})}}>
                    {(projData && projData.images) ? <img className="project-image" src={`${projData.images}/1.png`}></img> : <></>}
                </div>
                <Feather className="color-a" icon={iconName} size="60"/>
                <div className="project-caption color-a">{projectName}</div>
            </div>
            
        </div>
    );
}
