import React, { Component } from 'react';
import { authConfig, authPage } from '../firebase';

class SignupLogin extends Component {

    componentDidMount() {
        authPage.start('#firebaseui-auth-container', authConfig);
    }

    render() {
        return (
            <div>
                <h3>Choose Signin Method</h3>
                <div id="firebaseui-auth-container"></div>
            </div>
        )
    }
}

export default SignupLogin;