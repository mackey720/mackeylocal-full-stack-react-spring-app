import React,  {Component} from "react";
import {withRouter} from 'react-router'
import {Link} from 'react-router-dom';
import AuthenticationService from "./AuthenticationService.js"

class HeaderComponent extends Component {
    render() {

        const isUserLoggediIn = AuthenticationService.isUserLoggedIn();

        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="" className="navbar-brand">mackeylocal</a></div>
                    <ul className="navbar-nav">
                        {isUserLoggediIn && <li><Link className="nav-link" to="/welcome">Home</Link></li>}
                        {isUserLoggediIn && <li><Link className="nav-link" to="todos">Todos</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggediIn && <li><Link className="nav-link" to="login">Login</Link></li>}
                        {isUserLoggediIn && <li><Link className="nav-link" to="logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
        )
    }
}

export default withRouter(HeaderComponent);