import React, { Component } from 'react';
import { render } from 'react-dom';
import Modal from 'react-modal';
// import SlidingPane from 'react-sliding-pane';
// import 'react-sliding-pane/dist/react-sliding-pane.css';
import SlidingPane from '../../src/index.js';
import '../../src/index.styl';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPaneOpen: false,
            isPaneOpenLeft: false,
            isPaneOpenBottom: false,
            allowCloseOutsidePane: false,
            applyCustomStyle: false,
        };
    }

    componentDidMount() {
        Modal.setAppElement(this.el);
    }

    render() {

        return <div ref={ref => this.el = ref}>
            <input
                name="AllowCloseOutsidePane"
                type="checkbox"
                checked={this.state.allowCloseOutsidePane}
                onChange={() => this.setState({ allowCloseOutsidePane: !this.state.allowCloseOutsidePane })}
            />
            <label htmlFor="AllowCloseOutsidePane">Allow close outside pane</label>
            <br></br>
            <input
                name="ApplyCustomStyle"
                type="checkbox"
                checked={this.state.applyCustomStyle}
                onChange={() => this.setState({ applyCustomStyle: !this.state.applyCustomStyle })}
            />
            <label htmlFor="ApplyCustomStyle">Apply Custom Styles to Right pane example</label>
            <br></br>
            <br></br>
            <button onClick={() => this.setState({ isPaneOpen: true })}>Click me to open right pane!</button>
            <div style={{ marginTop: '32px' }}>
                <button onClick={ () => this.setState({ isPaneOpenLeft: true }) }>
                    Click me to open left pane with 20% width!
                </button>
                <button onClick={ () => this.setState({ isPaneOpenBottom: true }) }>
                    Click me to open bottom pane
                </button>
            </div>
            <SlidingPane
                className='some-custom-class'
                overlayClassName={this.state.applyCustomStyle ? 'slide-pane__overlay_custom' : ''}
                headerClassName={this.state.applyCustomStyle ? 'slide-pane__header_custom' : ''}
                closePaneClassName={this.state.applyCustomStyle ? 'slide-pane__close_custom' : ''}
                isOpen={ this.state.isPaneOpen }
                title={!this.state.applyCustomStyle ? 'Hey, it is optional pane title.  I can be React component too.' : ''}
                subtitle={!this.state.applyCustomStyle ?'Optional subtitle.' : ''}
                onRequestClose={ () => {
                    // triggered on "<" on left top click or on outside click depending on allowCloseOutsidePane state
                    this.setState({ isPaneOpen: false });
                }}
                closeWhenClickOutsidePane={this.state.allowCloseOutsidePane}
                width={this.state.applyCustomStyle ? '50%' : ''} >
                <Content  applyCustomStyle={this.state.applyCustomStyle}/>
            </SlidingPane>
            <SlidingPane
                isOpen={ this.state.isPaneOpenLeft }
                title='Hey, it is optional pane title.  I can be React component too.'
                from='left'
                width='200px'
                onRequestClose={ () => this.setState({ isPaneOpenLeft: false })}
                closeWhenClickOutsidePane={this.state.allowCloseOutsidePane}>
                <div>And I am pane content on left.</div>
            </SlidingPane>
            <SlidingPane
                isOpen={ this.state.isPaneOpenBottom }
                title='Hey, it is optional pane title.  I can be React component too.'
                from='bottom'
                width='100%'
                onRequestClose={ () => this.setState({ isPaneOpenBottom: false })}
                closeWhenClickOutsidePane={this.state.allowCloseOutsidePane}>
                <div>And I am pane content on the bottom.</div>
            </SlidingPane>
        </div>;
    }
}


class Content extends Component {
    constructor(props) {
        super(props)
        // eslint-disable-next-line
        console.log('contructor');
    }

    componentDidMount() {
        // eslint-disable-next-line
        console.log('mount');
    }

    render() {
        return <div>
            {!this.props.applyCustomStyle ?
                (
                    <div>
                        <div>And I am pane content. BTW, what rocks?</div>
                        <p>Contructor and componentDidMount called every time pane opens.</p>
                        <br />
                        <img src='img.png' />
                    </div>
                ) : <div/>}
        </div>;
    }
}

render(<App />, document.getElementById('app'));
