/////////////////////////////////////
// PUT THIS IN REACT APP INDEX.JS //
///////////////////////////////////
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class AccordionList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items:
            props.items.map(item => {
                return { header: item.header, content: null, isContentOpen: false }
            })
        }
        this.toggleContent.bind(this);
    }

    toggleContent(e, index) {
        this.setState(state => {
            state.items[index].isContentOpen = !state.items[index].isContentOpen;
            return state.items[index].content = (state.items[index].isContentOpen)
                ? this.props.items[index].content : '';
        });
    }
    
    render() {
        return (
            <div>
                {this.state.items.map((item, index) => {
                    return (
                        <div key={index}>
                            <h1 onClick={(e) => this.toggleContent(e, index)}>
                                {item.header}
                            </h1>
                            <p>{item.content}</p>
                        </div>
                    );
                })}
            </div>
        );
    }
}

const accordions = [
    { header: 'Titre 1', content: 'Contenu 1' },
    { header: 'Titre 2', content: 'Contenu 2' },
    { header: 'Titre 3', content: 'Contenu 3' }
];

ReactDOM.render(
    <AccordionList items={accordions} />,
    document.getElementById('root')
);
