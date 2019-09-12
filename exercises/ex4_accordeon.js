/////////////////////////////////////
// PUT THIS IN REACT APP INDEX.JS //
///////////////////////////////////
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Accordion extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isContentOpen: false }
        this.toggleContent.bind(this);
    }
    
    toggleContent() {
        this.setState(state => state.isContentOpen = !state.isContentOpen);
    }

    render() {
        let content = (this.state.isContentOpen)
            ? this.props.content : null;

        return (
            <div>
                <h1 onClick={(e) => this.toggleContent(e)}>
                    {this.props.header}
                </h1>
                <p>{content}</p>
            </div>
        );
    }
}

ReactDOM.render(
    <Accordion header="Titre" content="Lorem ipsum" />,
    document.getElementById('root')
);
