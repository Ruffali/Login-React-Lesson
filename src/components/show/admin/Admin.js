import React from 'react';
import './Admin.scss';
import Button from '../../useful/button/Button'

export default function Admin(prop) {

    return (
        <div className="admin">
            <div className="card">
                <div className="image">
                    <img alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT-cf7tBnGIKTI3kcrAZ0lJWfb5J1pRjXeptA&usqp=CAU" />
                </div>
                <div className="inside_card">
                    <div className="name">Ruff Ali <span>({prop.email})</span> </div>
                    <div className="well">Welcome dear Ruff ALi</div>
                    <Button logout={prop.logoutFunction} class={"default"}>Log out</Button>
                </div>
            </div>
        </div>
    )
}
