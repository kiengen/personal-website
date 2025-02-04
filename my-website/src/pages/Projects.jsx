import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
export default function ProjectPage() {
    let navigate = useNavigate();

    const validatePassword = () => {
        navigate('/ksengen');
    };

    return (
        <div className="main-container">
            <Header/>
            <Header/>
        </div>
    );
}
