import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

class PrivateRoute extends Component {

    /**
     * Check if user is loggedin or not.
     * 
     * @return Boolean
     */
    isLoggedIn = () => {
        let userData = localStorage.getItem("userData") ? JSON.parse(localStorage.getItem("userData")) : {}
        if (userData.email && userData.email !== "" && userData.password && userData.password !== "") {
            return true
        } else {
            return false
        }
    }
    render() {
        if (this.isLoggedIn() === true) {
            return <Route {...this.props} />
        } else {
            return <Redirect to="/login" />
        }
    }
}

export default PrivateRoute
