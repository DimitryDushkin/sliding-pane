import React, { Component } from 'react';
import { render } from 'react-dom';
// import SlidingPane from 'react-sliding-pane';
// import 'react-sliding-pane/dist/react-sliding-pane.css';
import SlidingPane from '../../src/index.js';
import '../../src/index.styl';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPaneOpen: false,
            isPaneOpenLeft: false
        };
    }

    render() {
        return <div>
            <button onClick={() => this.setState({ isPaneOpen: true })}>Click me to open right pane!</button>
            <div style={{ marginTop: '32px' }}>
                <button onClick={ () => this.setState({ isPaneOpenLeft: true }) }>
                    Click me to open left pane with 20% width!
                </button>
            </div>
            <SlidingPane
                className='some-custom-class'
                isOpen={ this.state.isPaneOpen }
                title='Hey, it is optional pane title.  I can be React component too.'
                subtitle='Optional subtitle.'
                onRequestClose={ () => {
                    // triggered on "<" on left top click or on outside click
                    this.setState({ isPaneOpen: false });
                } }>
                <div>And I am pane content. BTW, what rocks?</div>
                <br />
                <img src='img.png' />
            </SlidingPane>
            <SlidingPane
                isOpen={ this.state.isPaneOpenLeft }
                title='Hey, it is optional pane title.  I can be React component too.'
                from='left'
                width='200px'
                onRequestClose={ () => this.setState({ isPaneOpenLeft: false }) }>
                <div>And I am pane content on left.</div>
            </SlidingPane>
        </div>;
    }
}

render(<App />, document.getElementById('app'));
