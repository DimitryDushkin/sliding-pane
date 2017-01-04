import React, { Component } from 'react';
import { render } from 'react-dom';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { isPaneOpen: false };
    }

    render() {
        return <div>
            <button onClick={() => this.setState({ isPaneOne: true })}>Click me to open pane!</button>
            <SlidingPane
                isOpen={ this.state.isPaneOpen }
                title='Hey, it is pane title'
                onRequestClose={() => {
                    // triggered on "<" on left top click or on outside click
                    this.setState({ isPaneOpen: false });
                }}>
                <div>And I am pane content </div>
            </SlidingPane>
        </div>;
    }
}

render(<App />, document.getElementById('app'));
