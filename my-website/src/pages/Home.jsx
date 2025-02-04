import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import Header from "../components/Header.jsx";
import ProjectTile from "../components/ProjectTile.jsx";
import Feather from 'feather-icons-react';

export default function HomePage() {
    let navigate = useNavigate();

    const validatePassword = () => {
        navigate('/ksengen');
    };

    return (
        <div className="main-container">
            <Header/>
            <div className="padding-container-top">
                <div className="center-container">
                    <div className="flex-container-v">
                        <div className="flex-container-v">
                            <div className="flex-container-h">
                                <text className="fancy-font">Hi! I'm </text>
                                <b className="fancy-font">Kiersten</b>
                                <text className="fancy-font">.</text>
                            </div>
                            <text className="centered-small-font-padding">I am a Software Engineering student with a passion for programming.</text>
                        </div>
                        
                        <Feather className="centered-small-font" icon="arrow-down" size="40"/>
                        <text className="centered-small-font">scroll to see more</text>
                    </div>
                </div>
            </div>

            <div className="padding-container-b">
                <div className="flex-container-v">
                    <ProjectTile projectName="grades app" iconName="book-open" imagePath="/assets/grades_app1.PNG"/>
                    <ProjectTile projectName="yelp app" iconName="smartphone" imagePath="/assets/yelp_api.png"/>
                    <ProjectTile projectName="calculator app" iconName="divide-square" imagePath="/assets/calculator_app.png"/>
                </div>
                <div className="flex-container-v">
                    <ProjectTile projectName="uome" iconName="dollar-sign" imagePath="/assets/uome_app.png"/>
                    <ProjectTile projectName="glasses" iconName="headphones"/>
                    <ProjectTile projectName="qr scanner" iconName="camera"/>
                </div>
                <div className="flex-container-v">
                    <ProjectTile projectName="clue solver" iconName="search" imagePath="/assets/python_clue.png"/>
                    <div className="project-box"><b className="project-icon">Projects</b></div>
                    <ProjectTile projectName="" iconName=""/>
                </div>
                <div className="flex-container-v">
                    <ProjectTile projectName="3d video game" iconName="monitor" imagePath="/assets/godot_game.png"/>
                    <ProjectTile projectName="2d platformer" iconName="circle" imagePath="/assets/platformer.png"/>
                    <ProjectTile projectName="" iconName=""/>
                </div>
                <div className="flex-container-v">
                    <ProjectTile projectName="mnist neural network" iconName="pen-tool"/>
                    <ProjectTile projectName="titanic predictor" iconName="anchor"/>
                    <ProjectTile projectName="" iconName=""/>
                </div>
            </div>
            <div className="padding-container-a">
                <text>About Me</text>
            </div>
            <div className="padding-container-b">
                <text>Contact</text>
            </div>
            <Header/>
        </div>
    );
}
