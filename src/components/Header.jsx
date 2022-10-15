import React from "react";
import logo from "../images/Troll Face.png"

export default function Header() {
    return (
        <header className="header">
            <img src={logo} className="logo-img" alt="Meme Logo" />
            <h2 className="header-title">Meme Generator</h2>
            <h4 className="header-text">Generate your favorite meme here</h4>
        </header>
    )
}