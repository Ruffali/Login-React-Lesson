import React, { Component } from 'react'
import './Nav.scss';
import {NavLink} from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <div className="nav">
                <NavLink  to='/' activeClassName="active" exact>Login</NavLink>
                <NavLink to='register' activeClassName="active">Register</NavLink>
            </div>
        )
    }
}

export default Nav
