/////////////////////////////////////
// PUT THIS IN REACT APP INDEX.JS //
///////////////////////////////////
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class ButtonCycle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { current: 0 };

        this.stepItem.bind(this);
    }

    stepItem() {
        return this.setState(state => {
            return (state.current < this.props.items.length - 1) 
                ? state.current++
                : state.current = 0;
        });
    }

    render() {
        return (
            <button onClick={(e) => this.stepItem(e)}>
                {this.props.items[this.state.current]}
            </button>
        );
    }
}

ReactDOM.render(<ButtonCycle items={['one', 'two', 'three']} />, document.getElementById('root'));
