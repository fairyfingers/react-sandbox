/////////////////////////////////////
// PUT THIS IN REACT APP INDEX.JS //
///////////////////////////////////
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: this.props.start ? this.props.start : 0
        };
    }

    componentDidMount() {
        this.intervalID = setInterval(() => this.step(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    step() {
        return this.setState(state => state.count += this.props.step);
    }

    render() {
        return (
            <div>
                <p>Counter is at : {this.state.count}</p>
                <p>start = 3, step = 4</p>
            </div>
        );
    }
}

ReactDOM.render(
    <Counter start={3} step={4} />, document.getElementById('root')  
);
