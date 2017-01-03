## React Sliding Pane

Panel that slides outside of window. Like panels from Google Tag Manager.

### How to use
`npm i --save react-sliding-pane`
```js
import { Component } from 'react';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';

export default class SomeComponent extends Component {
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
```
