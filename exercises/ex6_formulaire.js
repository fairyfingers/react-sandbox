/////////////////////////////////////
// PUT THIS IN REACT APP INDEX.JS //
///////////////////////////////////
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class DemoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { changedValue: '', changedPos: 'default', items: [] }
        this.handleInputChange.bind(this);
        this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        return this.setState({ changedValue: event.target.value });
    }

    handlePosChange(event) {
        return this.setState({ changedPos: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        return this.setState(state => {
            if (state.changedPos === 'default') {
                state.items.push(this.state.changedValue);
            } else {
                state.items.splice(state.changedPos, 0, this.state.changedValue);
            }
            
            this.handleInputChange({
                target: {
                    value: ''
                }
            });
            this.handlePosChange({
                target: {
                    value: 'default'
                }
            });
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    Insérer le nouvel élément
                    <input type="text"
                    value={this.state.changedValue}
                    onChange={(e) => this.handleInputChange(e)}
                    />
                    <select value={this.changedPos} onChange={(e) => this.handlePosChange(e)}>
                        {this.state.items.map((item, index) => {
                            return (
                                <option key={index} value={index}>{item}</option>
                            )
                        })}
                        <option value="default">--en-dernier--</option>
                    </select>
                    <input type="submit" value="OK" />
                </form>
                Liste:
                {this.state.items.map((item, index) => {
                    return (
                        <li key={index}>{item}</li>
                    )
                })}
            </div>
        )
    }
}

ReactDOM.render(<DemoForm />, document.getElementById('root'));
