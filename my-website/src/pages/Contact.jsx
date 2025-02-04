import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
export default function ContactPage() {
    let navigate = useNavigate();

    const validatePassword = () => {
        navigate('/ksengen');
    };

    return (
        <div>
            <text>test</text>
            <b>hmm</b>
        </div>
    );
}
