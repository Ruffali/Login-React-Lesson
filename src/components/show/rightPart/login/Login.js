import React, { Component } from 'react'
import './Login.scss';
import Input from '../../../useful/input/Input';
import Error from '../../../useful/error/Error';
import SVGmail from "../../../../assets/img/mail.svg"
import SVGpassword from "../../../../assets/img/password.svg"
// import Button from '../../../useful/button/Button';

class Login extends Component {
    render() {
        return (
            <form onSubmit={this.props.formHandlerProps}>
                <h1>Login</h1>
                <div className="inpt">
                    <Input
                        title={"admin@gmail.com"}
                        svg={SVGmail}
                        class={this.props.err ? "form_input error" : "form_input"}
                        type={"email"}
                        name={"email"}
                        placeholder={"Email"}
                        emailOnChangeHandlerChange={this.props.emailOnChangeHandlerProps} />
                    {this.props.err ? <Error >Email is not true or can not be blank!</Error> : ""}

                </div>
                <div className="inpt">
                    <Input
                        title={"123456"}
                        svg={SVGpassword}
                        class={this.props.err ? "form_input error" : "form_input"}
                        type={"password"}
                        name={"password"}
                        placeholder={"Password"}
                        passOnChangeHandlerChange={this.props.passOnnChangeHandlerProps} 
                    />
                    {this.props.err ? <Error >Password is not true or can not be blank!</Error> : ""}
                </div>
                <Input class="btn default" type={"submit"} value="Login" />
            </form>
        )
    }
}

export default Login
