## React Sliding Pane
Pane that slides from the window. Like panes from Google Tag Manager.

Features:
 * Animated open-close
 * Outside click or left top arrow click to close
 * Efficient: pane content is not rendered when pane is closed (thx to css transition group)
 * Based on react-modal

### [Open demo](https://dimitrydushkin.github.io/sliding-pane/example.html)
<img src='https://raw.githubusercontent.com/DimitryDushkin/sliding-pane/master/docs/react-sliding-pane-screenshot.png' width='600' />

### When to use (UX)
I found sliding pane very helpful in situations when normal modal window (or just popup) is not enough: long paginated lists, multistep form or nested popups.

### How to use
Install module and peer dependencies:

`npm i --save react react-dom react-modal react-addons-css-transition-group react-sliding-pane`

```js
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
            <button onClick={() => this.setState({ isPaneOpen: true })}>Click me to open pane!</button>
            <SlidingPane
                className='some-custom-class'
                isOpen={ this.state.isPaneOpen }
                title='Hey, it is optional pane title.  I can be React component too.'
                subtitle='Optional subtitle.'
                onRequestClose={() => {
                    // triggered on "<" on left top click or on outside click
                    this.setState({ isPaneOpen: false });
                }}>
                <div>And I am pane content. BTW, what rocks?</div>
                <br />
                <img src='img.png' />
            </SlidingPane>
        </div>;
    }
}

render(<App />, document.getElementById('app'));

```
