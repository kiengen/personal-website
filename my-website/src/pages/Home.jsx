import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import Header from "../components/Header.jsx";
import ProjectTile from "../components/ProjectTile.jsx";
import Modal from "../components/Modal.jsx";
import Feather from 'feather-icons-react';

export default function HomePage() {
    let navigate = useNavigate();
    const [projData, setProjData] = useState(null);

    return (
        <div className="main-container bg-a">
            {projData && <Modal setIsOpen={setProjData} data={projData}/>}
            <Header/>
            <div className="padding-container-top">
                <div className="center-container">
                    <div className="flex-container-v">
                        <div className="flex-container-v">
                            <div className="flex-container-h">
                                <text className="big-font color-b">Hi! I'm </text>
                                <b className="big-font color-b">Kiersten</b>
                                <text className="big-font color-b">.</text>
                            </div>
                            <text className="centered-font small-font arrow-padding color-b">I am a Software Engineering student with a passion for programming.</text>
                        </div>
                        
                        <Feather className="centered-font small-font color-b" icon="arrow-down" size="40"/>
                        <text className="centered-font small-font color-b">scroll to see more</text>
                    </div>
                </div>
            </div>

            <div className="padding-container-b">
                <div className="flex-container-v">
                    <ProjectTile clickFunc={setProjData} projectName="grades app" iconName="book-open" projData={{"skills": "Expo Go, React Native, JavaScript, TypeScript", "images": "/assets/grades", "imageTypes": [0, 1]}}/>
                    <ProjectTile clickFunc={setProjData} projectName="yelp app" iconName="smartphone" projData={{"skills": "Expo Go, React Native, JavaScript, TypeScript, Yelp API", "images": "/assets/yelp", "imageTypes": [0, 1]}}/>
                    <ProjectTile clickFunc={setProjData} projectName="calculator app" iconName="divide-square" projData={{"skills": "Expo Go, React Native, JavaScript, TypeScript", "images": "/assets/calculator", "imageTypes": [0, 1]}}/>
                </div>
                <div className="flex-container-v">
                    <ProjectTile clickFunc={setProjData} projectName="uome" iconName="dollar-sign" projData={{"skills": "Expo Go, React Native, JavaScript, TypeScript", "images": "/assets/uome", imageTypes: [0]}}/>
                    <ProjectTile clickFunc={setProjData} projectName="glasses" iconName="headphones" projData={{"skills": "Expo Go, React Native, JavaScript, TypeScript, Raspberry PI, PIOS, Shazamio"}}/>
                    <ProjectTile clickFunc={setProjData} projectName="qr scanner" iconName="camera" projData={{"skills": "Expo Go, React Native, JavaScript, TypeScript, Expo Camera"}}/>
                </div>
                <div className="flex-container-v">
                    <ProjectTile clickFunc={setProjData} projectName="clue solver" iconName="search" projData={{"skills": "Python", "images": "/assets/clue", images: "/assets/clue", imageTypes: [0]}}/>
                    <div className="project-box"><b className="big-font color-a">Projects</b></div>
                    <ProjectTile clickFunc={setProjData} projectName="personal website" iconName="layout" projData={{"skills": "Vite, React, Javascript, CSS, HTML", "images": "/assets/website", imageTypes: [0]}}/>
                </div>
                <div className="flex-container-v">
                    <ProjectTile clickFunc={setProjData} projectName="3d video game" iconName="monitor" projData={{"skills": "Godot, GDScript, Shader Language, Blender", "images": "/assets/godot", imageTypes: [0]}}/>
                    <ProjectTile clickFunc={setProjData} projectName="2d platformer" iconName="circle" projData={{"skills": "JavaScript, JPanel", "images": "/assets/platformer", imageTypes: [0, 1]}}/>
                    <ProjectTile clickFunc={setProjData} projectName="game theory minigame" iconName="users" projData={{skills: "HTML, JavaScript", images: "/assets/darwin", imageTypes: [0, 0, 0]}}/>
                </div>
                <div className="flex-container-v">
                    <ProjectTile clickFunc={setProjData} projectName="mnist neural network" iconName="pen-tool" projData={{"skills": "Python, NumPy, Sci-Kit Learn"}}/>
                    <ProjectTile clickFunc={setProjData} projectName="titanic predictor" iconName="anchor" projData={{"skills": "Python, NumPy, Sci-Kit Learn"}}/>
                    <ProjectTile clickFunc={setProjData} projectName="" iconName=""/>
                </div>
            </div>
            <div className="padding-container-a">
                <>About Me</>
            </div>
            <div className="padding-container-b">
                <>Contact</>
            </div>
            <Header/>
        </div>
    );
}
