import React, {Component} from "react";
import PropTypes from 'prop-types'
import './counter.css'

class Counter extends Component {
    
      //Define a state in a constructor
      constructor() {
        super()
        this.state = {
            counter : 0
        }

        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
        this.reset = this.reset.bind(this)
    }
    
    render() {
        return (
            <div className="counter">
                <CounterButton by={1} incrementMethod={this.increment}  decrementMethod={this.decrement} />
                <CounterButton by={5}  incrementMethod={this.increment} decrementMethod={this.decrement}/>
                <CounterButton by={10}  incrementMethod={this.increment} decrementMethod={this.decrement}/>
                <span className="count">{this.state.counter}</span>
                <div><button className="reset" onClick={this.reset}>Reset</button></div>
            </div>
        )
    }

    reset() {
        this.setState(
            (prevState) => {
                return {counter: 0}
            }
        )
    }

    increment(by) { //update state - counter ++
        //console.log('increment from parent - ${by}')
        //this.state.counter++ 
        this.setState( (prevState) => {
            return {counter: prevState.counter + by}
        });
    }

    decrement(by) { //update state - counter ++
        this.setState( (prevState) => {
            return {counter: prevState.counter - by}
        });
    }
}

class CounterButton extends Component{
    render() {
        return (
            <div className="counter">
                <button onClick={() => this.props.incrementMethod(this.props.by)}>+{this.props.by}</button>
                <button onClick={() =>this.props.decrementMethod(this.props.by)}>-{this.props.by}</button>
                {/*<span className="count">{this.state.counter}</span>*/}
            </div>

        );
    }

    // increment() { //update state - counter ++
    //     console.log('increment from parent')
    //     //this.state.counter++ 
    //     this.setState({
    //         counter: this.state.counter + this.props.by
    //     });

    //     this.props.incrementMethod(this.props.by);
    // }  
    
    // decrement() { //update state - counter ++
    //     console.log('increment from parent')
    //     //this.state.counter++ 
    //     this.setState({
    //         counter: this.state.counter - this.props.by
    //     });

    //     this.props.decrementMethod(this.props.by);
    // }

}

CounterButton.defaultProps = {
    by : 1
}

CounterButton.propTypes = {
        by : PropTypes.number
}

export default Counter