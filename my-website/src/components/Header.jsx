import { React, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import "../App.css";
import Feather from 'feather-icons-react';

export default function Header() {
    let navigate = useNavigate();
    const [isDarkTheme, setDarkTheme] = useState(true);

    useEffect(() => {
        if (isDarkTheme) {
          document.body.classList.add('dark');
        } else {
          document.body.classList.remove('dark');
        }
    }, [isDarkTheme]);

    return (
        <div className="header-container">
            <div className="header-splitter">
                <text>Kiersten Engen</text>
            </div>
            <div className="header-splitter">
                <Link className="button" to="/">home</Link>
                <Link className="button" to="/projects">projects</Link>
                <Link className="button" to="/about">about</Link>
                <Link className="button" to="/contact">contact</Link>
                <button className="button" onClick={() => {setDarkTheme(!isDarkTheme)}}><Feather icon="sun"/></button>
            </div>
        </div>
    );
}
