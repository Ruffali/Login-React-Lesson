import React, { Component } from 'react'
import './Register.scss';
import Input from '../../../useful/input/Input';
import Button from '../../../useful/button/Button';
// import Error from '../../../useful/error/Error';
import SVGmail from "../../../../assets/img/mail.svg"
import SVGpassword from "../../../../assets/img/password.svg"
import SVGname from "../../../../assets/img/name.svg"

class Register extends Component {
    render() {
        return (
            <form>
                <h1>Register</h1>
                <div className="inpt">
                    <Input
                        svg={SVGname}
                        class={"form_input"}
                        type={"name"}
                        name={"name"}
                        placeholder={"Name"} />
                    {/* <Error >Write your name!</Error> */}
                </div>
                <div className="inpt">
                    <Input
                        svg={SVGmail}
                        class={"form_input"}
                        type={"email"}
                        name={"email"}
                        placeholder={"Email"} />
                    {/* <Error >Write your Email adress!</Error> */}
                </div>
                <div className="inpt">
                    <Input
                        svg={SVGpassword}
                        class={"form_input"}
                        type={"password"}
                        name={"password"}
                        placeholder={"Password"} />
                    {/* <Error >Write your password!</Error> */}
                </div>
                <Button class={"default"}>Register</Button>
            </form>
        )
    }
}

export default Register
