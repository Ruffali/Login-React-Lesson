import React, { Component } from 'react'
import Nav from './nav/Nav';
import './Welcome.scss';
import { Route } from 'react-router-dom';

class Welcome extends Component {
    render() {
        return (
            <div className="welcome">
                <div className="main_img">
                    <img alt="" src="https://images.hdqwalls.com/download/blue-explosion-space-4x-2560x1700.jpg" />
                </div>
                <Nav />
                <div className="content">
                    <div className="top_sentences">Welcome to </div>
                    <div className="enterance">{window.location.href == "http://localhost:3000/register" ? "Register" : "Login"} Page</div>
                    <div className="info">100% safe online platform by Ruff ALi</div>
                </div>
            </div>
        )
    }
}

export default Welcome
