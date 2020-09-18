import React from 'react'
import './RightPart.scss';
import Login from './login/Login';
import Register from './register/Register';
import { Route } from 'react-router-dom';
// import Button from '../../useful/button/Button';

function RightPart(props) {

    return (
        <div className={props.err ? "errorPart" :"rightPart"} >
            <Login
                err={props.err}
                initial={props.initialInfo}
                formHandlerProps={props.formHandlerChange}
                emailOnChangeHandlerProps={props.emailOnChangeHandlerChange}
                passOnnChangeHandlerProps={props.passOnChangeHandlerChange} />
            {/* <Route render={(props) => <Login {...props} formHandlerProps={props.formHandlerChange} />}
               teste={props.test} path="/" component={Login} exact /> */}
            <Route path="/register" component={Register} />
        </div>
    )
}

export default RightPart
