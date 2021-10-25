import React, {Component} from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AuthenticatedRoute from "./AuthenticatedRoute.jsx";
import WelcomeComponent from "./WelcomeComponent.jsx"
import ListTodosComponent from "./ListTodosComponent.jsx"
import TodosComponent from "./TodosComponent.jsx"
import HeaderComponent from "./HeaderComponent.jsx";
import LoginComponent from "./LoginComponent.jsx"
import LogoutComponent from "./LogoutComponent.jsx"
import FooterComponent from "./FooterComponent.jsx";
import ErrorComponent from "./ErrorComponent.jsx"

class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                <Router>
                    <>
                        <HeaderComponent />
                        <Switch>
                            <Route path="/" exact component={LoginComponent} />
                            <Route path="/login" component={LoginComponent}/>
                            <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent}/>
                            <AuthenticatedRoute path="/todos/:id" component={TodosComponent}/>
                            <AuthenticatedRoute path="/todos" component={ListTodosComponent}/>
                            <AuthenticatedRoute path="/logout" component={LogoutComponent}/>
                            <Route component={ErrorComponent}/>
                        </Switch>
                        <FooterComponent />
                    </>
                </Router>
                {/* <LoginComponent />
                <WelcomeComponent /> */}
            </div>
        )
    }
}

export default TodoApp
