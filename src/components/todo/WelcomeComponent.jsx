import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import HelloWorldService from '../../api/todo/HelloWorldService.js'


class WelcomeComponent extends Component {

    constructor(props) {
        super(props)
        this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this)
        this.state = {
            welcomeMessage :'',
            errorMessage: ''
        }
        this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this)
        this.handleError = this.handleError.bind(this)

    }
    render() {
        return (
            <>
            <h1>Welcome!</h1>
            <div>Welcome {this.props.match.params.name}. 
            You can manage your todos <Link to="/todos">here</Link>
            </div>

            <div className="container"> 
                Click here to get a customized message.
                <button onClick={this.retrieveWelcomeMessage} className="btn btn-success"> Get Welcome Message</button>
            </div>
            <div className="container">
                {this.state.welcomeMessage}
            </div>
            <div className="container">
                {this.state.errorMessage}
            </div>
            </>
        )
    }

    retrieveWelcomeMessage() {
        // HelloWorldService.executeHelloWorldService()
        // .then( response => this.handleSuccessfulResponse(response))

        // HelloWorldService.executeHelloWorldBeanService()
        // .then( response => this.handleSuccessfulResponse(response))
    
        HelloWorldService.executeHelloWorldPathVariableService(this.props.match.params.name)
        .then( response => this.handleSuccessfulResponse(response))
        .catch(error => this.handleError(error))
    }

    handleSuccessfulResponse(response) {
        this.setState({welcomeMessage: response.data.message})
    }

    handleError(error) {
        this.setState({errorMessage: error.response.data.message})
    }
}

export default WelcomeComponent