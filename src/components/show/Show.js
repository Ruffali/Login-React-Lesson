import React, { Component } from 'react'
import './Show.scss';
import Welcome from './welcome/Welcome';
import RightPart from './rightPart/RightPart';
import Admin from './admin/Admin';

class Show extends Component {
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // STATE
    state = {
        loggedIn: false,
        enter: {
            email: 'admin@gmail.com',
            password: '123456'
        },
        initial: {
            email: '',
            password: ''
        },
        err: false
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // FORM
    formHandler = (e) => {
        e.preventDefault();
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;
        if (email === this.state.enter.email && password === this.state.enter.password) {
            this.setState({ loggedIn: true, err: false })
        } else {
            e.target.elements.email.value = this.state.initial.email;
            e.target.elements.password.value = this.state.initial.password;
            this.setState({ err: true })
        }
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // INPUT ONCHANGE (Email && Password) 
    emailOnChangeHandler = (e) => {
        const emailFromInput = e.target.value;
        this.setState({
            email: emailFromInput
        })
        this.setState({ err: false })
    }
    passOnChangeHandler = (e) => {
        const passFromInput = e.target.value;
        this.setState({
            password: passFromInput
        })
        this.setState({ err: false })
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // LOGUT
    logoutHandler = () => {
        this.setState({ loggedIn: !this.state.loggedIn })
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    render() {
        return (
            <div className="show">
                {this.state.loggedIn
                    ?
                    <Admin logoutFunction={this.logoutHandler} email={this.state.enter.email} />
                    :
                    <div className="insideShow">
                        <Welcome />
                        <RightPart
                            err={this.state.err}
                            initialInfo={this.state.initial}
                            formHandlerChange={this.formHandler}
                            emailOnChangeHandlerChange={this.emailOnChangeHandler} 
                            passOnChangeHandlerChange={this.passOnChangeHandler} />
                    </div>
                }
            </div>
        )
    }
}
export default Show;